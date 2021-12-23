import React from 'react';
import Mural from '../components/organisms/mural';
import Body from '../components/templates/home/body';
import config from '../config';
import { HOME_PAGE_DESCRIPTION, HOME_PAGE_TITLE } from '../constants/seo-copy';
import Layout from './layout';

const Home = (props: any) => {
  const isBrowser = () => typeof window !== "undefined";

  // SEO
  const title = HOME_PAGE_TITLE;
  const description = HOME_PAGE_DESCRIPTION;

  return (
    <Layout
      title={title}
      description={description}
      width={'full'}
      url={`${config.publicPath}`}
      isTransparent
    >
      <Mural />
      <Body />
    </Layout>
  )
}

export default Home;
