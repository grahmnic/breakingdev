import React from 'react';
import styled from 'styled-components';
import FlexContainer from '../../atoms/flexContainer';
import moment from 'moment';
import Subtitle from '../../atoms/subtitle';
import { COLOR, TYPOGRAPHY } from '../../../theme/constants';
import StyledLink from '../styledlink';
import Title from '../../atoms/title';
import Hr from '../../atoms/hr';

interface IPost {
    isMobile?: boolean;
    title: string;
    subtitle: string;
    slug: string;
    publishedAt: any;
    primaryTopic: string;
    secondaryTopics: string[];
    timeToRead: number;
    thumbnail?: any;
}

const Post = (props: IPost) => {
    const { isMobile = false, title, slug, subtitle, publishedAt, primaryTopic, secondaryTopics, thumbnail, timeToRead } = props;

    const minutesToRead = Math.round(timeToRead / 60) + " min";

    const formattedDate = moment(publishedAt).format('MMM Do YYYY');

    return (
        <PostWrapper isMobile={isMobile}>
            <PostBody
                spaceBetween={0}
            >
                <PostHeader
                    flexDirection="row"
                    alignItems="center"
                    spaceBetween={12}
                >
                    <PostCategory>{primaryTopic}</PostCategory>
                    <Hr backgroundColor={COLOR.GREY}/>
                </PostHeader>
                <PostTitle href={`/post/${slug}`}>{title}</PostTitle>
                <PostSubtitle>{subtitle}</PostSubtitle>
                <PostMeta
                    flexDirection="row"
                    alignItems="center"
                    spaceBetween={16}
                >
                    <PostDate>{formattedDate}</PostDate>
                    <PostReadingTime>{minutesToRead}</PostReadingTime>
                    <PostPrimaryTopic>{secondaryTopics[0]}</PostPrimaryTopic>
                </PostMeta>
            </PostBody>
            {thumbnail && <div></div>}
        </PostWrapper>
    )
}

const PostWrapper = styled(FlexContainer)<{ isMobile: boolean }>`
    width: 100%;
`;

const PostHeader = styled(FlexContainer)`
    width: 100%;
`;

const PostBody = styled(FlexContainer)``;

const PostCategory = styled(Title)`
    ${TYPOGRAPHY.BLACK};
    font-size: 16px;
    color: ${COLOR.GREY};
    letter-spacing: 1px;
`;

const PostTitle = styled(StyledLink)`
    ${TYPOGRAPHY.BLACK};
    font-size: 24px;

    &:hover {
        text-decoration: underline;
    }
`;

const PostSubtitle = styled(Subtitle)`
    font-size: 14px;
    color: ${COLOR.DARKGREY};
`;

const PostMeta = styled(FlexContainer)`
    height: 18px;
    margin-top: 6px;

    > {
        &:not(:last-child) {
            position: relative;

            &:after {
                content: "•";
                color: ${COLOR.DARKGREY};
                position: absolute;
                top: 1px;
                right: -10px;
            }
        }
    }
`;

const PostDate = styled(Subtitle)`
    color: ${COLOR.DARKGREY};
`;

const PostReadingTime = styled(Subtitle)`
    color: ${COLOR.DARKGREY};
`;

const PostPrimaryTopic = styled(Subtitle)`
    color: ${COLOR.DARKGREY};
    background: ${COLOR.LIGHTGREY};
    border-radius: 16px;
    padding: 2px 8px;
`;

export default Post;