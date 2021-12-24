import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

export default ({ router }) => {
    const application = express();

    // Post Request Body Parsing
    application.use(bodyParser.json());
    application.use(bodyParser.urlencoded({ extended: true }));

    application.use(cors());

    // Register router to application
    application.use(router);

    return application;
}
