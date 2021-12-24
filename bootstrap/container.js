// Dependencies
import { createContainer, asFunction } from 'awilix';

import environment from './factories/environment.js';
import mongoConnection from './factories/mongo.js';

const container = createContainer();

// Register dependencies with container
container.register({
    environment: asFunction(environment).singleton(),
    mongoConnection: asFunction(mongoConnection).singleton(),
})

// Export the dependency injection container
export default container
