import React from 'react';
import config from '../config';
import Layout from '../components/layout';

const CMS = (props: any) => {
  const isBrowser = () => typeof window !== "undefined";

  // SEO
  const title = "Breaking Dev CMS";
  const description = "";

  return (
    <Layout
      title={title}
      description={description}
      width={'full'}
      url={`${config.publicPath}`}
    >
      You reached this page!
    </Layout>
  )
}

export default CMS;