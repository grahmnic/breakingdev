import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';

export const initialState: any = {
  authenticated: false,
  user: '',
  isAdmin: false
};

// Thunk API Calls
export const auth_load = createAsyncThunk('get/authTokens', async () => {
  if (typeof window === 'undefined') {
    return initialState;
  }

  const cookie = cookies.get('t');
  const token: any = jwt_decode(cookie);
  let authenticated = false;
  let user = null;

  if (token) {
      authenticated = true;
      user = token.user;
  }

  return {
    user: user,
    authenticated: authenticated
  };
})

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action:any) => {
      return {
          ...state,
          ...action.payload.auth,
      };
    }),
    builder.addCase(auth_load.fulfilled, (state, action) => {
      if (typeof window === 'undefined') {
        state = initialState;
      } else if (action.payload.authenticated) {
          state.authenticated = true;
          state.isAdmin = action.payload.user.isAdmin;
          state.user = action.payload.user.user_id;
      } else {
          state.authenticated = false;
          state.isAdmin = false;
          state.user = '';
      }
    }),
    builder.addCase(auth_load.rejected, (state, action) => {
      state.error = action.error;
    })
  }
})

 // Selectors
export const selectAuthenticated = state => state.auth.authenticated;
export const selectRole = state => state.auth.isAdmin;

export default auth.reducer