import { types } from 'mobx-state-tree';

const defaultState = {
  adminMenuOn: false,
  fullScreenLoaderOn: false,
  fullScreenLoaderText: '',
};

const Store = types
  .model('UI', {
    adminMenuOn: types.boolean,
    fullScreenLoaderOn: types.boolean,
    fullScreenLoaderText: types.string,
  })
  .actions(self => ({
    toggleAdminMenu: () => {
      self.adminMenuOn = !self.adminMenuOn;
    },
    toggleFullScreenLoader: (state, text) => {
      if (typeof text === 'string') self.fullScreenLoaderText = text;
      self.fullScreenLoaderOn = typeof state === 'boolean' ? state : !self.fullScreenLoaderOn;
    },
    setfullScreenLoaderText: text => {
      if (typeof text !== 'string' && !text) return;
      self.fullScreenLoaderText = text;
    },
  }));

export default Store.create(defaultState);
