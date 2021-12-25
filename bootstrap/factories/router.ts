import express, { response } from 'express';
import { PassportStatic } from 'passport';
import jwt from 'jsonwebtoken';
import { IPostsController } from '../controllers/posts';
import { IConfig } from 'config';
import { IUsersController } from '../controllers/users';

export default ({
    authentication,
    environment,
    postsController,
    usersController
}: {
    authentication: PassportStatic,
    environment: IConfig,
    postsController: IPostsController,
    usersController: IUsersController
}) => {
    const router = express.Router();

    const isAuth = authentication.authenticate('jwt', { session: false });

    // FALLBACK
    router.route('/').get((request, response) => {
        response.send("OK");
    });

    // AUTHENTICATION
    router.route('/signup').post(usersController.addUser);
    router.route('/csrf').get((req, res) => {
        res.json({
            csrfToken: req.csrfToken()
        });
    });
    router.route('/login').post(
        async (req, res, next) => {
            authentication.authenticate('login',
                async (err, user, info) => {
                    try {
                        if (err || !user) {
                            return res.json({
                                error: 'No such username/password combination exists'
                            });
                        }

                        req.login(
                            user,
                            { session: false},
                            async (error) => {
                                if (error) return next(error);

                                const userAccessToken = {
                                    _id: user._id,
                                    user_id: user.user_id
                                };

                                const jwtToken = jwt.sign({
                                    user: userAccessToken
                                }, environment.get('api.authentication.secret'), {
                                    expiresIn: 60 * 60 * 24 * 14
                                });

                                res.cookie('t', jwtToken, {
                                    httpOnly: true,
                                    maxAge: 60 * 60 * 24 * 14,
                                });

                                res.status(301).redirect(`${environment.get('modules.client')}`)
                            }
                        );
                    } catch (error) {
                        return next(error);
                    }
                }
            )(req, res, next);
        }
    );

    // CORE API
    router.route('/posts').get(postsController.getAllPosts);

    return router;
}
