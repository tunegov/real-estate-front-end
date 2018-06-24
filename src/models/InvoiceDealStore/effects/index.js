import { types } from 'mobx-state-tree';
import submitDeal from './submitDeal';
// import debounce from 'debounce';

const UserEffects = types.model({}).actions(self => ({
  submitDeal,
}));

export default UserEffects;
