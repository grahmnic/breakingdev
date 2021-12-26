import { useEffect } from 'react'
import '../styles/globals.css';
import APIClient from '../helpers/apiClient';
import { wrapper } from '../redux/store';
import config from '../config';
import axios from 'axios';
import { auth_load } from '../redux/reducers/auth';
import { useDispatch } from 'react-redux';

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCsrfToken = async () => {
      const { data } = await APIClient('get', `${config.apiHost}csrf`)
      axios.defaults.headers.post['X-CSRF-Token'] = data.csrfToken;
    };

    getCsrfToken();
    dispatch(auth_load());
  }, []);

  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp);
