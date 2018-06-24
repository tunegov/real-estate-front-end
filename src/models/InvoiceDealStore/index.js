import { types } from 'mobx-state-tree';
import InvoiceDealEffects from './effects';

const defaultState = {};

const InvoiceDealStore = types.model('InvoiceDeal', {}).actions(self => ({
  toggleFullScreenLoader: (state, text) => {
    if (typeof text === 'string') self.fullScreenLoaderText = text;
    self.fullScreenLoaderOn =
      typeof state === 'boolean' ? state : !self.fullScreenLoaderOn;
  },
  setfullScreenLoaderText: text => {
    if (typeof text !== 'string' && !text) return;
    self.fullScreenLoaderText = text;
  },
}));

const Store = types.compose(
  'Store',
  InvoiceDealStore,
  InvoiceDealEffects
);

export default Store.create(defaultState);
