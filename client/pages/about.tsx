import React from 'react';
import config from '../config';
import Layout from './layout';

const About = (props: any) => {
  const isBrowser = () => typeof window !== "undefined";

  if (props.statusCode > 200) {
    return <div>Not Found</div>;
  }

  return (
    <Layout
      width={'full'}
      url={`${config.publicPath}`}
    >
      Here's some stuff about me.
    </Layout>
  )
}

export default About;
