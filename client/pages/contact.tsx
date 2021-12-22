import React from 'react';
import config from '../config';
import Layout from './layout';

const Contact = (props: any) => {
  const isBrowser = () => typeof window !== "undefined";

  if (props.statusCode > 200) {
    return <div>Not Found</div>;
  }

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
