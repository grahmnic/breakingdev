import { Promise } from 'bluebird';
import { MongoClient } from 'mongodb';

export default ({ environment }) => {

    const coreClient = new MongoClient(environment.get('infrastructure.mongouri'), {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    // Create a new MongoClient
    return Promise.props({
        core: coreClient.connect()
    }).then(({ core }) => {
        return {
            client: core,
            core: core.db('bkdev')
        }
    }).catch((error) => {
        console.error(`Error connecting to MongoDB`, error.message)
        process.exit()
    });
}
