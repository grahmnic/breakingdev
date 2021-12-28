import React, { useEffect } from 'react';
import config from '../../config';
import Layout from '../../components/layout';
import { useSelector } from 'react-redux';
import { selectAuth, selectAuthenticated } from '../../redux/reducers/auth';
import { useRouter } from 'next/router';
import PostsTable from '../../components/organisms/cms/posts-table';
import APIClient from '../../helpers/apiClient';
import useAsync from '../../helpers/hooks/useAsync';
import moment from 'moment';

const CMS = (props: any) => {
  const isBrowser = () => typeof window !== "undefined";

  const router = useRouter();
  const authenticated = useSelector(selectAuthenticated);
  const loaded = useSelector(selectAuth).loaded;

  if (loaded && !authenticated && isBrowser()) {
      router.push('/');
  }

  // SEO
  const title = "Breaking Dev CMS";
  const description = "";

  const { execute, status, value, error } = useAsync(async () => {
    const res = await APIClient('get', `${config.apiHost}posts`);

    return res.data;
  }, false);

  useEffect(() => {
    if (!value) {
      execute();
    }
  }, [value]);

  const posts = value ? value.map((val) => {
    return {
      title: val.title,
      slug: val.slug,
      primaryTopic: val.primaryTopic,
      publishedAt: val.publishedAt,
      createdAt: val.createdAt
    }
  }) : [];

  return (
    (authenticated && loaded) ? <Layout
      title={title}
      description={description}
      width={'full'}
      url={`${config.publicPath}`}
      isTransparent
    >
      <PostsTable data={posts}/>
    </Layout> : null
  )
}

export default CMS;
