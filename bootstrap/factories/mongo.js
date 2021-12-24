import mongoose from 'mongoose';
import { Promise } from 'bluebird';

export default ({ environment }) => {

    // Create a new MongoClient
    return Promise.props({
        core: mongoose.connect(environment.get('infrastructure.mongouri'))
    }).then(({ core }) => {
        console.log(core);
    }).catch((error) => {
        console.error(`Error connecting to MongoDB`, error.message)
        process.exit()
    });
}
