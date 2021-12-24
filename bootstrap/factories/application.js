import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import responseTime from 'response-time';
import session from 'express-session';
import MongoStore from 'connect-mongo';

export default ({ environment, router, mongo }) => {
    const application = express();

    // Post Request Body Parsing
    application.use(bodyParser.json());
    application.use(bodyParser.urlencoded({ extended: true }));

    application.use(cors());

    application.use(responseTime((req, res, time) => {
        console.log(req.method, req.url, time + 'ms');
    }));

    // application.use(
    //     session({
    //         store: MongoStore.create({
    //             client: mongo.client
    //         }),
    //         secret: 'breaking-dev-secret',
    //         resave: true,
    //         saveUninitialized: true,
    //         cookie: {
    //             secure: 'auto',
    //             sameSite: 'lax'
    //         }
    //     })
    // );

    // Register router to application
    application.use(router);

    return application;
}
