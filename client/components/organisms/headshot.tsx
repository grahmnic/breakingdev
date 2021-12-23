import React from 'react';
import styled from 'styled-components';
import P from '../atoms/p';
import Title from '../atoms/title';
import Image from 'next/image';
import Subtitle from '../atoms/subtitle';
import A from '../atoms/a';
import List from '../atoms/list';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { COLOR } from '../../theme/constants';

const Headshot = (props: any) => {

  return (
    <HeadshotWrapper>
        <Image width={200} height={200} src="/images/headshot.jpg" alt="headshot" />
        <Name>Nick Chen</Name>
        <Tag>@grahmnic</Tag>
        <Blurb>Making magic happen.</Blurb>
        <Links
            spaceBetween={0}
        >
            <LinkAnchor href="https://github.com/grahmnic" target="_blank">
                <FontAwesomeIcon
                    width={16}
                    height={16}
                    fontSize={16}
                    icon={faGithubAlt}
                />
                github.com/grahmnic
            </LinkAnchor>
            <LinkAnchor href="https://www.linkedin.com/in/nickschen/" target="_blank">
                <FontAwesomeIcon
                    width={16}
                    height={16}
                    fontSize={16}
                    icon={faLinkedinIn}
                />
                linkedin.com/nickschen
            </LinkAnchor>
        </Links>
    </HeadshotWrapper>
  )
}

const HeadshotWrapper = styled.div`

`;

const Name = styled(Title)`
    font-size: 20px;
`;

const Tag = styled(Subtitle)`
    display: block;
`;

const Blurb = styled(P)`
    padding: 12px 0;
    display: block;
`;

const Links = styled(List)``;

const LinkAnchor = styled(A)`
    font-size: 12px;
    display: flex;
    align-items: center;
    padding: 2px 0;

    &:hover {
        text-decoration: underline;
    }

    svg {
        margin-right: 12px;
        color: ${COLOR.GREY};
    }
`;

export default Headshot;
