import { types } from 'mobx-state-tree';
import signUpUser from './signUpUser';
import logoutUser from './logoutUser';
import loginUser from './loginUser';
// import debounce from 'debounce';

const UserEffects = types.model({}).actions(self => ({
  signUpUser: signUpUser.bind(null, self),
  logoutUser: logoutUser.bind(null, self),
  loginUser: loginUser.bind(null, self),
}));

export default UserEffects;
