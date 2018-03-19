import { types } from 'mobx-state-tree';
import isBrowser from 'is-browser';
import axios from 'axios';
import getCookie from '../../utils/getCookie';
import { JWTPaylodeDecode } from '../../utils/jwtUtils';
// import debounce from 'debounce';

const UserEffects = types.model({}).actions(self => ({
  signUpUser: async values => {
    let response;
    let error;
    let user;
    try {
      const { fullName, email, password } = values;
      const res = await axios({
        method: 'post',
        url: 'http://localhost:8080/auth-api/users',
        responseType: 'json',
        headers: { Accept: 'application/json' },
        withCredentials: true,
        data: {
          fullName,
          email,
          password,
        },
      });
      if (res.data.error) {
        // eslint-disable-next-line
        error = res.data.error;
      }
    } catch (err) {
      error = 'Error reaching the server';
    }

    if (!error) {
      const jwtData = getCookie('jwtData');

      try {
        user = JWTPaylodeDecode(jwtData);
      } catch (err) {
        console.log(err);
      }

      self.setUser(user);
    }

    return {
      response,
      error,
    };
  },
  logoutUser: async () => {
    let response;
    let error;
    try {
      const res = await axios({
        method: 'delete',
        url: 'http://localhost:8080/auth-api/sessions',
        responseType: 'json',
        headers: { Accept: 'application/json' },
        withCredentials: true,
      });
      if (res.data.error) {
        // eslint-disable-next-line
        error = res.data.error;
      }
    } catch (err) {
      error = 'Error reaching the server';
    }

    if (!error) {
      self.unsetUser();
    }

    return {
      response,
      error,
    };
  },
  loginUser: async loginInfo => {
    let response;
    let error;
    let user;
    try {
      const res = await axios({
        method: 'post',
        url: 'http://localhost:8080/auth-api/sessions',
        responseType: 'json',
        headers: { Accept: 'application/json' },
        withCredentials: true,
        data: {
          email: loginInfo.email,
          password: loginInfo.password,
        },
      });
      if (res.data.error) {
        // eslint-disable-next-line
        error = res.data.error;
      }
    } catch (err) {
      error = 'Error reaching the server';
    }

    if (!error) {
      const jwtData = getCookie('jwtData');

      try {
        user = JWTPaylodeDecode(jwtData);
      } catch (err) {
        console.log(err);
      }

      self.setUser(user);
    }

    return {
      response,
      error,
    };
  },
  afterCreate: async () => {
    let jwtData;
    if (isBrowser && !self.isLoggedIn) {
      const encodedJWTData = getCookie('jwtData');
      if (!encodedJWTData) return;

      try {
        jwtData = JWTPaylodeDecode(encodedJWTData);
      } catch (err) {
        console.log(err);
      }

      self.setUser(jwtData);
    } else if (!isBrowser && !self.isLoggedIn) {
      if (!self.jwtData) return;
      self.setUser(self.jwtData);
    }
  },
}));

export default UserEffects;
