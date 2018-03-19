import { types } from 'mobx-state-tree';
import isBrowser from 'is-browser';
import UserEffects from './UserEffects';
import { JWTPaylodeDecode } from '../../utils/jwtUtils';

const defaultState = {
  userRoles: [''],
  isLoggedIn: false,
  uuid: '',
};

const userRoles = [
  types.literal('admin'),
  types.literal('user'),
  types.literal(''),
];

const UserStore = types
  .model('User', {
    userRoles: types.array(types.union(...userRoles)),
    isLoggedIn: types.boolean,
    uuid: types.string,
    jwtData: types.optional(types.frozen, null),
  })
  .actions(self => ({
    setUser: userObject => {
      if (!userObject) return;
      self.isLoggedIn = true;
      self.userRoles = userObject.roles;
      self.uuid = userObject.userUUID;
    },
    unsetUser: () => {
      self.isLoggedIn = false;
      self.userRoles = [''];
      self.uuid = '';
    },
  }))
  .views(self => ({

  }));

const Store = types.compose('Store', UserStore, UserEffects);

function createStore(cookies) {
  if (!isBrowser && cookies && cookies.jwtData) {
    const { jwtData } = cookies;

    defaultState.jwtData = JWTPaylodeDecode(jwtData);
  }

  return Store.create(defaultState);
}

export default createStore;
