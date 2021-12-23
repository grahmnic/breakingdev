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
            >
            {postList}
        </PostList>
    )
}

const PostList = styled(List)<{ isMobile: boolean }>`
    width: 100%;
    padding: 48px;
`;

export default Posts;