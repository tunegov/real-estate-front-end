import UIStore from './UIStore';
import createUserStore from './UserStore';
import InvoiceDealStore from './InvoiceDealStore';

let emittedStore;

function createStore(cookieJWTData = null) {
  return {
    UIStore,
    InvoiceDealStore,
    // cookies on server are added to access cookies
    // and create UserStore server-side
    UserStore: createUserStore(cookieJWTData),
  };
}

export function initStore(isServer, cookieJWTData = null) {
  if (isServer) {
    emittedStore = createStore(cookieJWTData);
    return emittedStore;
  }
  if (!emittedStore) {
    emittedStore = createStore(cookieJWTData);
  }

  return emittedStore;
}
