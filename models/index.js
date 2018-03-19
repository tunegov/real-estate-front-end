import UIStore from './UIStore';
import createUserStore from './UserStore';

let emittedStore;

export function initStore(isServer, cookies) {
  const Store = {
    UIStore,
    // cookies on server are added to access cookies
    // and create UserStore server-side
    UserStore: createUserStore(cookies),
  };

  if (isServer) {
    emittedStore = Store;
    return emittedStore;
  }
  if (!emittedStore) {
    emittedStore = Store;
  }
  return emittedStore;
}
