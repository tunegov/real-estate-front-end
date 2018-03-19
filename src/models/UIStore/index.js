import { types } from 'mobx-state-tree';

const defaultState = {

};

const Store = types
  .model('UI', {

  })
  .actions(self => ({

  }));

export default Store.create(defaultState);
