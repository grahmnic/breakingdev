import React from 'react';
import styled from 'styled-components';
import FlexContainer from '../../atoms/flexContainer';
import Posts from '../../molecules/posts/posts';
import Headshot from '../../organisms/headshot';

const Body = (props: any) => {
  const posts = [null, null, null, null, null];

  return (
    <HomeWrapper
      flexDirection="row"
    >
        <LeftPanel
          alignItems="center"
        >
          <Headshot />
        </LeftPanel>
        <Posts posts={posts}/>
        <RightPanel></RightPanel>
    </HomeWrapper>
  )
}

const LeftPanel = styled(FlexContainer)`
  width: 600px;
  position: sticky;
  top: 48px;
`;

const HomeWrapper = styled(FlexContainer)`
  padding: 48px 0;
`;

const RightPanel = styled.div`
    width: 600px;
`;

export default Body;
