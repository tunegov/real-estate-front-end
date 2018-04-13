import { types } from 'mobx-state-tree';
import isBrowser from 'is-browser';
import UserEffects from './userEffects';
import { JWTPaylodeDecode } from '../../utils/jwtUtils';
import getCookie from '../../utils/getCookie';

const defaultState = {
  userRoles: [''],
  isLoggedIn: false,
  uuid: '',
};

const userRoles = [
  types.literal('super-admin'),
  types.literal('admin'),
  types.literal('agent'),
  types.literal('user'),
  types.literal(''),
];

const UserStore = types
  .model('User', {
    userRoles: types.array(types.union(...userRoles)),
    isLoggedIn: types.boolean,
    uuid: types.string,
    serverJWTData: types.optional(types.frozen, null),
  })
  .actions(self => ({
    setUser: userObject => {
      if (!userObject) return;
      self.isLoggedIn = true;
      self.userRoles = userObject.roles;
      self.uuid = userObject.uuid;
    },
    unsetUser: () => {
      self.isLoggedIn = false;
      self.userRoles = [''];
      self.uuid = '';
    },
    afterCreate: async () => {
      let JWTData;
      if (isBrowser && !self.isLoggedIn) {
        const encodedJWTData = getCookie('jwtData');
        if (!encodedJWTData) return;

        try {
          JWTData = JWTPaylodeDecode(encodedJWTData);
        } catch (err) {
          console.log(err);
        }

        self.setUser(JWTData);
      } else if (!isBrowser) {
        if (!self.serverJWTData) return;
        self.setUser(self.serverJWTData);
      }
    },
  }))
  .views(self => ({

  }));

const Store = types.compose('Store', UserStore, UserEffects);

function createStore(cookieJWTData) {
  if (!isBrowser && cookieJWTData) {
    defaultState.serverJWTData = JWTPaylodeDecode(cookieJWTData);
  }

  return Store.create(defaultState);
}

export default createStore;
