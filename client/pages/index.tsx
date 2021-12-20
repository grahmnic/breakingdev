import React from 'react';
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
    >
      Hi everyone! This is my blog.
    </Layout>
  )
}

export default Home;
