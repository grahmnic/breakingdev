import React from 'react';
import config from '../config';
import Layout from './layout';

const Contact = (props: any) => {
  const isBrowser = () => typeof window !== "undefined";

  return (
    <Layout
      width={'full'}
      url={`${config.publicPath}`}
    >
      Here's where you can contact me.
    </Layout>
  )
}

export default Contact;
