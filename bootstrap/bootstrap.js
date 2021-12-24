import container from './container.js';
import Promise from 'bluebird';
import { asFunction, asValue } from 'awilix';
import application from './factories/application.js';
import router from './factories/router.js';

import postsController from './controllers/posts.js';

container.register({
    application: asFunction(application).singleton(),
    router: asFunction(router).singleton(),

    postsController: asFunction(postsController).singleton()
});

const start = ({
    mongoConnection,
}) => {
    console.log("Connecting to services...");

    Promise.props({
        mongo: mongoConnection
    }).then(({ mongo }) => {
        container.register({
            mongo: asValue(mongo),
            core: asValue(mongo.core)
        })

        const application = container.resolve('application')

        const port = 5000;

        // Start the application, listening on configured port
        const server = application.listen(port, () => {
            console.log(`Application is listening on port ${port}`);
        }).on('error', (error) => {


            console.error('Error starting application process: ', error)
        })
    })
}

start(container.cradle);