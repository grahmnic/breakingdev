import React from 'react';
import Mural from '../components/organisms/mural';
import config from '../config';
import { HOME_PAGE_DESCRIPTION, HOME_PAGE_TITLE } from '../constants/seo-copy';
import Layout from './layout';

const Home = (props: any) => {
  const isBrowser = () => typeof window !== "undefined";

  // SEO
  const title = HOME_PAGE_TITLE;
  const description = HOME_PAGE_DESCRIPTION;

  if (props.statusCode > 200) {
    return <div>Not Found</div>;
  }

  return (
    <Layout
      title={title}
      description={description}
      width={'full'}
      url={`${config.publicPath}`}
      isTransparent
    >
      <Mural />
    </Layout>
  )
}

export default Home;
