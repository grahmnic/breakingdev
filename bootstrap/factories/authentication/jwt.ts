import { Strategy, ExtractJwt } from 'passport-jwt';
import { verify } from 'jsonwebtoken';
import { IConfig } from 'config';
import { Db } from 'mongodb';
import { Request } from 'express';

export default ({
    environment,
    core
}: {
    environment: IConfig,
    core: Db
}) => {
    const strategy = new Strategy({
        secretOrKey: environment.get('api.authentication.secret'),
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
        passReqToCallback: true
    },

    /**
     * Callback that is executed on the incoming request
     * @param  {Object}   request express request object
     * @param  {Object}   payload request payload
     * @param  {Function} callback
     * @return {Function}
     */
    (request: Request, payload: any, done: any) => {
        // Save the JWT from the header
        const token = request.cookies.t;

        // Verify the JWT appears in auth, is a legitimate token, and hasn't been manipulated
        verify(token, environment.get('api.authentication.secret'), async (error: any, decodedToken: any) => {
            if (error) return done(null, false);
            // if (request.ip !== decodedToken.user_ip) return done(null, false)
            if (!decodedToken.verified) return done(null, false);

            const user = await core.collection('users').find({
                where: {
                    id: decodedToken.user_id
                }
            });

            if (!user) done(null, false);

            request.user = user;

            // If all is well, return the payload
            if (done) return done(null, user);
        });
    });

    return strategy;
}
