import { types } from 'mobx-state-tree';

const defaultState = {
  isAdminMode: false,
};

const Store = types
  .model('UI', {
    isAdminMode: types.boolean,
  })
  .actions(self => ({
    toggleAdminMode: () => {
      self.isAdminMode = !self.isAdminMode;
    },
  }));

export default Store.create(defaultState);
