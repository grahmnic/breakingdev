import React from 'react';
import styled from 'styled-components';
import List from '../../atoms/list';
import Post from './post';

interface IPosts {
    isMobile?: boolean;
    posts: any[];
}

const Posts = (props: IPosts) => {
    const { isMobile = false, posts } = props;

    const postList = posts.map(post =>
        <Post
            title="In Losing The Village We Abandoned Society’s Parents"
            slug="In-Losing-The-Village-We-Abandoned-Society’s-Parents"
            subtitle="Increasingly independent lifestyles aren't good for all of us, and especially not for families"
            blurb="This is beautiful, calm, and very happy. There’s a story, but no villain. A journey, but no obstacle other than distance. There’s no struggle, only progress. I was constantly on edge, waiting for something to happen to the witches, to the star, but nothing ever did. It was peaceful.
            We need more of this sometimes, I think. A reminder that not everything involves struggle, that some things can be easy and that’s alright. This is beautiful, calm, and very happy. There’s a story, but no villain. A journey, but no obstacle other than distance. There’s no struggle, only progress. I was constantly on edge, waiting for something to happen to the witches, to the star, but nothing ever did. It was peaceful.
            We need more of this sometimes, I think. A reminder that not everything involves struggle, that some things can be easy and that’s alright."
            publishedAt={Date.now()}
            timeToRead={680}
            primaryTopic="Lifestyle"
            secondaryTopics={["Parenting", "Parenting"]}
        />
    );

    return (
        <PostList
            isMobile={isMobile}
            spaceBetween={32}
            scrollable={false}
            >
            {postList}
        </PostList>
    )
}

const PostList = styled(List)<{ isMobile: boolean }>`
    width: 100%;
`;

export default Posts;