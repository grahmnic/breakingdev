import express from 'express';

export default ({ }) => {
    const router = express.Router();

    /**
     * Fallbacks
     */
    router.route('/').get((request, response) => response.send("TEST"));

    return router;
}
