import React from 'react';
import config from '../config';
import Layout from './layout';

const About = (props: any) => {
  const isBrowser = () => typeof window !== "undefined";

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
