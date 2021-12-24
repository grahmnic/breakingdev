import express from 'express';

export default ({
    postsController
}) => {
    const router = express.Router();

    /**
     * Fallbacks
     */
    router.route('/').get((request, response) => {
        response.send("OK");
    });

    router.route('/posts').get(postsController.getAllPosts);

    return router;
}
