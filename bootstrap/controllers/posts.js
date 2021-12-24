export default ({
    core
}) => {
    return {

        getAllPosts: async (req, res) => {
            const posts = await core.collection('posts-meta').find({}).toArray();

            return res.json(posts);
        }
    }
}
