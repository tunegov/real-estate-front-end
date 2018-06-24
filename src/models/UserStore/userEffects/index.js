import { types } from 'mobx-state-tree';
import signUpCustomer from './signUpCustomer';
import logoutUser from './logoutUser';
import loginUser from './loginUser';
import createAgent from './agent/createAgent';
import setAgentProfilePic from './agent/setAgentProfilePic';
// import debounce from 'debounce';

const UserEffects = types.model({}).actions(self => ({
  signUpCustomer: signUpCustomer.bind(null, self),
  logoutUser: logoutUser.bind(null, self),
  loginUser: loginUser.bind(null, self),
  createAgent,
  setAgentProfilePic,
}));

export default UserEffects;
