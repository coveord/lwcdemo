import { fetch as fetch$1 } from 'cross-fetch';

function n(n){for(var t=arguments.length,r=Array(t>1?t-1:0),e=1;e<t;e++)r[e-1]=arguments[e];throw Error("[Immer] minified error nr: "+n+(r.length?" "+r.join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function t(n){return !!n&&!!n[L]}function r(n){return !!n&&(function(n){if(!n||"object"!=typeof n)return !1;var t=Object.getPrototypeOf(n);return !t||t===Object.prototype}(n)||Array.isArray(n)||!!n[H]||!!n.constructor[H]||s(n)||v(n))}function i(n,t,r){void 0===r&&(r=!1),0===o(n)?(r?Object.keys:Y)(n).forEach((function(e){r&&"symbol"==typeof e||t(e,n[e],n);})):n.forEach((function(r,e){return t(e,r,n)}));}function o(n){var t=n[L];return t?t.i>3?t.i-4:t.i:Array.isArray(n)?1:s(n)?2:v(n)?3:0}function u(n,t){return 2===o(n)?n.has(t):Object.prototype.hasOwnProperty.call(n,t)}function a(n,t){return 2===o(n)?n.get(t):n[t]}function f(n,t,r){var e=o(n);2===e?n.set(t,r):3===e?(n.delete(t),n.add(r)):n[t]=r;}function c(n,t){return n===t?0!==n||1/n==1/t:n!=n&&t!=t}function s(n){return W&&n instanceof Map}function v(n){return X&&n instanceof Set}function p(n){return n.o||n.t}function l(n){if(Array.isArray(n))return n.slice();var t=Z(n);delete t[L];for(var r=Y(t),e=0;e<r.length;e++){var i=r[e],o=t[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:n[i]});}return Object.create(Object.getPrototypeOf(n),t)}function d(n,e){b(n)||t(n)||!r(n)||(o(n)>1&&(n.set=n.add=n.clear=n.delete=h),Object.freeze(n),e&&i(n,(function(n,t){return d(t,!0)}),!0));}function h(){n(2);}function b(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function y(t){var r=nn[t];return r||n(19,t),r}function m(n,t){nn[n]=t;}function _(){return G}function j(n,t){t&&(y("Patches"),n.u=[],n.s=[],n.v=t);}function g(n){O(n),n.p.forEach(S),n.p=null;}function O(n){n===G&&(G=n.l);}function w(n){return G={p:[],l:G,h:n,m:!0,_:0}}function S(n){var t=n[L];0===t.i||1===t.i?t.j():t.g=!0;}function P(t,e){e._=e.p.length;var i=e.p[0],o=void 0!==t&&t!==i;return e.h.O||y("ES5").S(e,t,o),o?(i[L].P&&(g(e),n(4)),r(t)&&(t=M(e,t),e.l||x(e,t)),e.u&&y("Patches").M(i[L],t,e.u,e.s)):t=M(e,i,[]),g(e),e.u&&e.v(e.u,e.s),t!==B?t:void 0}function M(n,t,r){if(b(t))return t;var e=t[L];if(!e)return i(t,(function(i,o){return A(n,e,t,i,o,r)}),!0),t;if(e.A!==n)return t;if(!e.P)return x(n,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l(e.k):e.o;i(o,(function(t,i){return A(n,e,o,t,i,r)})),x(n,o,!1),r&&n.u&&y("Patches").R(e,r,n.u,n.s);}return e.o}function A(e,i,o,a,c,s){if(t(c)){var v=M(e,c,s&&i&&3!==i.i&&!u(i.D,a)?s.concat(a):void 0);if(f(o,a,v),!t(v))return;e.m=!1;}if(r(c)&&!b(c)){if(!e.h.N&&e._<1)return;M(e,c),i&&i.A.l||x(e,c);}}function x(n,t,r){void 0===r&&(r=!1),n.h.N&&n.m&&d(t,r);}function z(n,t){var r=n[L];return (r?p(r):n)[t]}function I(n){n.P||(n.P=!0,n.l&&I(n.l));}function E(n){n.o||(n.o=l(n.t));}function k(n,t,r){var e=s(t)?y("MapSet").T(t,r):v(t)?y("MapSet").F(t,r):n.O?function(n,t){var r=Array.isArray(n),e={i:r?1:0,A:t?t.A:_(),P:!1,I:!1,D:{},l:t,t:n,k:null,o:null,j:null,C:!1},i=e,o=tn;r&&(i=[e],o=rn);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(t,r):y("ES5").J(t,r);return (r?r.A:_()).p.push(e),e}function R(e){return t(e)||n(22,e),function n(t){if(!r(t))return t;var e,u=t[L],c=o(t);if(u){if(!u.P&&(u.i<4||!y("ES5").K(u)))return u.t;u.I=!0,e=D(t,c),u.I=!1;}else e=D(t,c);return i(e,(function(t,r){u&&a(u.t,t)===r||f(e,t,n(r));})),3===c?new Set(e):e}(e)}function D(n,t){switch(t){case 2:return new Map(n);case 3:return Array.from(n)}return l(n)}function N(){function r(n,t){var r=s[n];return r?r.enumerable=t:s[n]=r={configurable:!0,enumerable:t,get:function(){var t=this[L];return tn.get(t,n)},set:function(t){var r=this[L];tn.set(r,n,t);}},r}function e(n){for(var t=n.length-1;t>=0;t--){var r=n[t][L];if(!r.P)switch(r.i){case 5:a(r)&&I(r);break;case 4:o(r)&&I(r);}}}function o(n){for(var t=n.t,r=n.k,e=Y(r),i=e.length-1;i>=0;i--){var o=e[i];if(o!==L){var a=t[o];if(void 0===a&&!u(t,o))return !0;var f=r[o],s=f&&f[L];if(s?s.t!==a:!c(f,a))return !0}}var v=!!t[L];return e.length!==Y(t).length+(v?0:1)}function a(n){var t=n.k;if(t.length!==n.t.length)return !0;var r=Object.getOwnPropertyDescriptor(t,t.length-1);return !(!r||r.get)}var s={};m("ES5",{J:function(n,t){var e=Array.isArray(n),i=function(n,t){var e=Z(t);n&&delete e.length,delete e[L];for(var i=Y(e),o=0;o<i.length;o++){var u=i[o];e[u]=r(u,n||!!e[u].enumerable);}if(n){var a=Array(t.length);return Object.defineProperties(a,e),a}return Object.create(Object.getPrototypeOf(t),e)}(e,n),o={i:e?5:4,A:t?t.A:_(),P:!1,I:!1,D:{},l:t,t:n,k:i,o:null,g:!1,C:!1};return Object.defineProperty(i,L,{value:o,writable:!0}),i},S:function(n,r,o){o?t(r)&&r[L].A===n&&e(n.p):(n.u&&function n(t){if(t&&"object"==typeof t){var r=t[L];if(r){var e=r.t,o=r.k,f=r.D,c=r.i;if(4===c)i(o,(function(t){t!==L&&(void 0!==e[t]||u(e,t)?f[t]||n(o[t]):(f[t]=!0,I(r)));})),i(e,(function(n){void 0!==o[n]||u(o,n)||(f[n]=!1,I(r));}));else if(5===c){if(a(r)&&(I(r),f.length=!0),o.length<e.length)for(var s=o.length;s<e.length;s++)f[s]=!1;else for(var v=e.length;v<o.length;v++)f[v]=!0;for(var p=Math.min(o.length,e.length),l=0;l<p;l++)void 0===f[l]&&n(o[l]);}}}}(n.p[0]),e(n.p));},K:function(n){return 4===n.i?o(n):a(n)}});}var $,G,U="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),W="undefined"!=typeof Map,X="undefined"!=typeof Set,q="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,B=U?Symbol("immer-nothing"):(($={})["immer-nothing"]=!0,$),H=U?Symbol("immer-draftable"):"__$immer_draftable",L=U?Symbol("immer-state"):"__$immer_state",Y="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,Z=Object.getOwnPropertyDescriptors||function(n){var t={};return Y(n).forEach((function(r){t[r]=Object.getOwnPropertyDescriptor(n,r);})),t},nn={},tn={get:function(n,t){if(t===L)return n;var e=p(n);if(!u(e,t))return function(n,t,r){if(r in t)for(var e=Object.getPrototypeOf(t);e;){var i,o=Object.getOwnPropertyDescriptor(e,r);if(o)return "value"in o?o.value:null===(i=o.get)||void 0===i?void 0:i.call(n.k);e=Object.getPrototypeOf(e);}}(n,e,t);var i=e[t];return n.I||!r(i)?i:i===z(n.t,t)?(E(n),n.o[t]=k(n.A.h,i,n)):i},has:function(n,t){return t in p(n)},ownKeys:function(n){return Reflect.ownKeys(p(n))},set:function(n,t,r){if(n.D[t]=!0,!n.P){if(c(r,z(p(n),t))&&void 0!==r)return !0;E(n),I(n);}return n.o[t]=r,!0},deleteProperty:function(n,t){return void 0!==z(n.t,t)||t in n.t?(n.D[t]=!1,E(n),I(n)):delete n.D[t],n.o&&delete n.o[t],!0},getOwnPropertyDescriptor:function(n,t){var r=p(n),e=Reflect.getOwnPropertyDescriptor(r,t);return e?{writable:!0,configurable:1!==n.i||"length"!==t,enumerable:e.enumerable,value:r[t]}:e},defineProperty:function(){n(11);},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){n(12);}},rn={};i(tn,(function(n,t){rn[n]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)};})),rn.deleteProperty=function(t,r){return tn.deleteProperty.call(this,t[0],r)},rn.set=function(t,r,e){return tn.set.call(this,t[0],r,e,t[0])};var en=function(){function e(n){this.O=q,this.N="production"!=="production","boolean"==typeof(null==n?void 0:n.useProxies)&&this.setUseProxies(n.useProxies),"boolean"==typeof(null==n?void 0:n.autoFreeze)&&this.setAutoFreeze(n.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this);}var i=e.prototype;return i.produce=function(t,e,i){if("function"==typeof t&&"function"!=typeof e){var o=e;e=t;var u=this;return function(n){var t=this;void 0===n&&(n=o);for(var r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];return u.produce(n,(function(n){var r;return (r=e).call.apply(r,[t,n].concat(i))}))}}var a;if("function"!=typeof e&&n(6),void 0!==i&&"function"!=typeof i&&n(7),r(t)){var f=w(this),c=k(this,t,void 0),s=!0;try{a=e(c),s=!1;}finally{s?g(f):O(f);}return "undefined"!=typeof Promise&&a instanceof Promise?a.then((function(n){return j(f,i),P(n,f)}),(function(n){throw g(f),n})):(j(f,i),P(a,f))}if(!t||"object"!=typeof t){if((a=e(t))===B)return;return void 0===a&&(a=t),this.N&&d(a,!0),a}n(21,t);},i.produceWithPatches=function(n,t){var r,e,i=this;return "function"==typeof n?function(t){for(var r=arguments.length,e=Array(r>1?r-1:0),o=1;o<r;o++)e[o-1]=arguments[o];return i.produceWithPatches(t,(function(t){return n.apply(void 0,[t].concat(e))}))}:[this.produce(n,t,(function(n,t){r=n,e=t;})),r,e]},i.createDraft=function(e){r(e)||n(8),t(e)&&(e=R(e));var i=w(this),o=k(this,e,void 0);return o[L].C=!0,O(i),o},i.finishDraft=function(t,r){var e=t&&t[L];var i=e.A;return j(i,r),P(void 0,i)},i.setAutoFreeze=function(n){this.N=n;},i.setUseProxies=function(t){t&&!q&&n(20),this.O=t;},i.applyPatches=function(n,r){var e;for(e=r.length-1;e>=0;e--){var i=r[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}var o=y("Patches").$;return t(n)?o(n,r):this.produce(n,(function(n){return o(n,r.slice(e+1))}))},e}(),on=new en,un=on.produce,an=on.produceWithPatches.bind(on),fn=on.setAutoFreeze.bind(on),cn=on.setUseProxies.bind(on),sn=on.applyPatches.bind(on),vn=on.createDraft.bind(on),pn=on.finishDraft.bind(on);

function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
}

/* global window */

var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (typeof module !== 'undefined') {
  root = module;
} else {
  root = Function('return this')();
}

var result = symbolObservablePonyfill(root);

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[result] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[result] = observable, _ref2;
}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }

  if (enumerableOnly) keys = keys.filter(function (sym) {
    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
  });
  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

function defaultEqualityCheck(a, b) {
  return a === b;
}

function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
  if (prev === null || next === null || prev.length !== next.length) {
    return false;
  }

  // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
  var length = prev.length;
  for (var i = 0; i < length; i++) {
    if (!equalityCheck(prev[i], next[i])) {
      return false;
    }
  }

  return true;
}

function defaultMemoize(func) {
  var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;

  var lastArgs = null;
  var lastResult = null;
  // we reference arguments instead of spreading them for performance reasons
  return function () {
    if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
      // apply arguments instead of spreading for performance.
      lastResult = func.apply(null, arguments);
    }

    lastArgs = arguments;
    return lastResult;
  };
}

function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep;
    }).join(', ');
    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptions[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    var recomputations = 0;
    var resultFunc = funcs.pop();
    var dependencies = getDependencies(funcs);

    var memoizedResultFunc = memoize.apply(undefined, [function () {
      recomputations++;
      // apply arguments instead of spreading for performance.
      return resultFunc.apply(null, arguments);
    }].concat(memoizeOptions));

    // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
    var selector = memoize(function () {
      var params = [];
      var length = dependencies.length;

      for (var i = 0; i < length; i++) {
        // apply arguments instead of spreading and mutate a local list of params for performance.
        params.push(dependencies[i].apply(null, arguments));
      }

      // apply arguments instead of spreading for performance.
      return memoizedResultFunc.apply(null, params);
    });

    selector.resultFunc = resultFunc;
    selector.dependencies = dependencies;
    selector.recomputations = function () {
      return recomputations;
    };
    selector.resetRecomputations = function () {
      return recomputations = 0;
    };
    return selector;
  };
}

var createSelector = createSelectorCreator(defaultMemoize);

function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

/**
 * @public
 */

var composeWithDevTools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function () {
  if (arguments.length === 0) return undefined;
  if (typeof arguments[0] === 'object') return compose;
  return compose.apply(null, arguments);
};

/**
 * Returns true if the passed value is "plain" object, i.e. an object whose
 * protoype is the root `Object.prototype`. This includes objects created
 * using object literals, but not for instance for class instances.
 *
 * @param {any} value The value to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject$1(value) {
  if (typeof value !== 'object' || value === null) return false;
  var proto = value;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(value) === proto;
}
/**
 * @public
 */

var MiddlewareArray =
/*#__PURE__*/
function (_Array) {
  _inheritsLoose(MiddlewareArray, _Array);

  function MiddlewareArray() {
    return _Array.apply(this, arguments) || this;
  }

  var _proto = MiddlewareArray.prototype;

  _proto.concat = function concat() {
    var _Array$prototype$conc;

    for (var _len = arguments.length, arr = new Array(_len), _key = 0; _key < _len; _key++) {
      arr[_key] = arguments[_key];
    }

    return _construct(MiddlewareArray, (_Array$prototype$conc = _Array.prototype.concat).call.apply(_Array$prototype$conc, [this].concat(arr)));
  };

  _proto.prepend = function prepend() {
    for (var _len2 = arguments.length, arr = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      arr[_key2] = arguments[_key2];
    }

    if (arr.length === 1 && Array.isArray(arr[0])) {
      return _construct(MiddlewareArray, arr[0].concat(this));
    }

    return _construct(MiddlewareArray, arr.concat(this));
  };

  return MiddlewareArray;
}(
/*#__PURE__*/
_wrapNativeSuper(Array));

function isBoolean(x) {
  return typeof x === 'boolean';
}

function curryGetDefaultMiddleware() {
  return function curriedGetDefaultMiddleware(options) {
    return getDefaultMiddleware(options);
  };
}
/**
 * Returns any array containing the default middleware installed by
 * `configureStore()`. Useful if you want to configure your store with a custom
 * `middleware` array but still keep the default set.
 *
 * @return The default middleware used by `configureStore()`.
 *
 * @public
 */

function getDefaultMiddleware(options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$thunk = _options.thunk,
      thunk$1 = _options$thunk === void 0 ? true : _options$thunk,
      _options$immutableChe = _options.immutableCheck,
      _options$serializable = _options.serializableCheck;
  var middlewareArray = new MiddlewareArray();

  if (thunk$1) {
    if (isBoolean(thunk$1)) {
      middlewareArray.push(thunk);
    } else {
      middlewareArray.push(thunk.withExtraArgument(thunk$1.extraArgument));
    }
  }

  return middlewareArray;
}

var IS_PRODUCTION = "production" === 'production';
/**
 * A friendly abstraction over the standard Redux `createStore()` function.
 *
 * @param config The store configuration.
 * @returns A configured Redux store.
 *
 * @public
 */

function configureStore(options) {
  var curriedGetDefaultMiddleware = curryGetDefaultMiddleware();

  var _ref = options || {},
      _ref$reducer = _ref.reducer,
      reducer = _ref$reducer === void 0 ? undefined : _ref$reducer,
      _ref$middleware = _ref.middleware,
      middleware = _ref$middleware === void 0 ? curriedGetDefaultMiddleware() : _ref$middleware,
      _ref$devTools = _ref.devTools,
      devTools = _ref$devTools === void 0 ? true : _ref$devTools,
      _ref$preloadedState = _ref.preloadedState,
      preloadedState = _ref$preloadedState === void 0 ? undefined : _ref$preloadedState,
      _ref$enhancers = _ref.enhancers,
      enhancers = _ref$enhancers === void 0 ? undefined : _ref$enhancers;

  var rootReducer;

  if (typeof reducer === 'function') {
    rootReducer = reducer;
  } else if (isPlainObject$1(reducer)) {
    rootReducer = combineReducers(reducer);
  } else {
    throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
  }

  var middlewareEnhancer = applyMiddleware.apply(void 0, typeof middleware === 'function' ? middleware(curriedGetDefaultMiddleware) : middleware);
  var finalCompose = compose;

  if (devTools) {
    finalCompose = composeWithDevTools(_extends({
      // Enable capture of stack traces for dispatched Redux actions
      trace: !IS_PRODUCTION
    }, typeof devTools === 'object' && devTools));
  }

  var storeEnhancers = [middlewareEnhancer];

  if (Array.isArray(enhancers)) {
    storeEnhancers = [middlewareEnhancer].concat(enhancers);
  } else if (typeof enhancers === 'function') {
    storeEnhancers = enhancers(storeEnhancers);
  }

  var composedEnhancer = finalCompose.apply(void 0, storeEnhancers);
  return createStore(rootReducer, preloadedState, composedEnhancer);
}

function createAction(type, prepareAction) {
  function actionCreator() {
    if (prepareAction) {
      var prepared = prepareAction.apply(void 0, arguments);

      if (!prepared) {
        throw new Error('prepareAction did not return an object');
      }

      return _extends({
        type: type,
        payload: prepared.payload
      }, 'meta' in prepared && {
        meta: prepared.meta
      }, {}, 'error' in prepared && {
        error: prepared.error
      });
    }

    return {
      type: type,
      payload: arguments.length <= 0 ? undefined : arguments[0]
    };
  }

  actionCreator.toString = function () {
    return "" + type;
  };

  actionCreator.type = type;

  actionCreator.match = function (action) {
    return action.type === type;
  };

  return actionCreator;
}

function executeReducerBuilderCallback(builderCallback) {
  var actionsMap = {};
  var actionMatchers = [];
  var defaultCaseReducer;
  var builder = {
    addCase: function addCase(typeOrActionCreator, reducer) {

      var type = typeof typeOrActionCreator === 'string' ? typeOrActionCreator : typeOrActionCreator.type;

      if (type in actionsMap) {
        throw new Error('addCase cannot be called with two reducers for the same action type');
      }

      actionsMap[type] = reducer;
      return builder;
    },
    addMatcher: function addMatcher(matcher, reducer) {

      actionMatchers.push({
        matcher: matcher,
        reducer: reducer
      });
      return builder;
    },
    addDefaultCase: function addDefaultCase(reducer) {

      defaultCaseReducer = reducer;
      return builder;
    }
  };
  builderCallback(builder);
  return [actionsMap, actionMatchers, defaultCaseReducer];
}

function createReducer(initialState, mapOrBuilderCallback, actionMatchers, defaultCaseReducer) {
  if (actionMatchers === void 0) {
    actionMatchers = [];
  }

  var _ref = typeof mapOrBuilderCallback === 'function' ? executeReducerBuilderCallback(mapOrBuilderCallback) : [mapOrBuilderCallback, actionMatchers, defaultCaseReducer],
      actionsMap = _ref[0],
      finalActionMatchers = _ref[1],
      finalDefaultCaseReducer = _ref[2];

  return function (state, action) {
    if (state === void 0) {
      state = initialState;
    }

    var caseReducers = [actionsMap[action.type]].concat(finalActionMatchers.filter(function (_ref2) {
      var matcher = _ref2.matcher;
      return matcher(action);
    }).map(function (_ref3) {
      var reducer = _ref3.reducer;
      return reducer;
    }));

    if (caseReducers.filter(function (cr) {
      return !!cr;
    }).length === 0) {
      caseReducers = [finalDefaultCaseReducer];
    }

    return caseReducers.reduce(function (previousState, caseReducer) {
      if (caseReducer) {
        if (t(previousState)) {
          // If it's already a draft, we must already be inside a `createNextState` call,
          // likely because this is being wrapped in `createReducer`, `createSlice`, or nested
          // inside an existing draft. It's safe to just pass the draft to the mutator.
          var draft = previousState; // We can assume this is already a draft

          var result = caseReducer(draft, action);

          if (typeof result === 'undefined') {
            return previousState;
          }

          return result;
        } else if (!r(previousState)) {
          // If state is not draftable (ex: a primitive, such as 0), we want to directly
          // return the caseReducer func and not wrap it with produce.
          var _result = caseReducer(previousState, action);

          if (typeof _result === 'undefined') {
            throw Error('A case reducer on a non-draftable value must not return undefined');
          }

          return _result;
        } else {
          // @ts-ignore createNextState() produces an Immutable<Draft<S>> rather
          // than an Immutable<S>, and TypeScript cannot find out how to reconcile
          // these two types.
          return un(previousState, function (draft) {
            return caseReducer(draft, action);
          });
        }
      }

      return previousState;
    }, state);
  };
}

// A type of promise-like that resolves synchronously and supports only one observer

const _iteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))) : "@@iterator";

const _asyncIteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))) : "@@asyncIterator";

// Asynchronously call a function and send errors to recovery continuation
function _catch(body, recover) {
	try {
		var result = body();
	} catch(e) {
		return recover(e);
	}
	if (result && result.then) {
		return result.then(void 0, recover);
	}
	return result;
}

// Borrowed from https://github.com/ai/nanoid/blob/3.0.2/non-secure/index.js
// This alphabet uses `A-Za-z0-9_-` symbols. A genetic algorithm helped
// optimize the gzip compression for this alphabet.
var urlAlphabet = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW';
/**
 *
 * @public
 */

var nanoid = function nanoid(size) {
  if (size === void 0) {
    size = 21;
  }

  var id = ''; // A compact alternative for `for (var i = 0; i < step; i++)`.

  var i = size;

  while (i--) {
    // `| 0` is more compact and faster than `Math.floor()`.
    id += urlAlphabet[Math.random() * 64 | 0];
  }

  return id;
};

var commonProperties = ['name', 'message', 'stack', 'code'];

var RejectWithValue = function RejectWithValue(value) {
  this.value = value;
}; // Reworked from https://github.com/sindresorhus/serialize-error


var miniSerializeError = function miniSerializeError(value) {
  if (typeof value === 'object' && value !== null) {
    var simpleError = {};

    for (var _iterator = commonProperties, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var property = _ref;

      if (typeof value[property] === 'string') {
        simpleError[property] = value[property];
      }
    }

    return simpleError;
  }

  return {
    message: String(value)
  };
};
/**
 *
 * @param typePrefix
 * @param payloadCreator
 * @param options
 *
 * @public
 */

function createAsyncThunk(typePrefix, payloadCreator, options) {
  var fulfilled = createAction(typePrefix + '/fulfilled', function (result, requestId, arg) {
    return {
      payload: result,
      meta: {
        arg: arg,
        requestId: requestId
      }
    };
  });
  var pending = createAction(typePrefix + '/pending', function (requestId, arg) {
    return {
      payload: undefined,
      meta: {
        arg: arg,
        requestId: requestId
      }
    };
  });
  var rejected = createAction(typePrefix + '/rejected', function (error, requestId, arg, payload) {
    var aborted = !!error && error.name === 'AbortError';
    var condition = !!error && error.name === 'ConditionError';
    return {
      payload: payload,
      error: miniSerializeError(error || 'Rejected'),
      meta: {
        arg: arg,
        requestId: requestId,
        aborted: aborted,
        condition: condition
      }
    };
  });
  var AC = typeof AbortController !== 'undefined' ? AbortController :
  /*#__PURE__*/
  function () {
    function _class() {
      this.signal = {
        aborted: false,
        addEventListener: function addEventListener() {},
        dispatchEvent: function dispatchEvent() {
          return false;
        },
        onabort: function onabort() {},
        removeEventListener: function removeEventListener() {}
      };
    }

    var _proto = _class.prototype;

    _proto.abort = function abort() {
    };

    return _class;
  }();

  function actionCreator(arg) {
    return function (dispatch, getState, extra) {
      var requestId = nanoid();
      var abortController = new AC();
      var abortReason;
      var abortedPromise = new Promise(function (_, reject) {
        return abortController.signal.addEventListener('abort', function () {
          return reject({
            name: 'AbortError',
            message: abortReason || 'Aborted'
          });
        });
      });
      var started = false;

      function abort(reason) {
        if (started) {
          abortReason = reason;
          abortController.abort();
        }
      }

      var promise = function () {
        try {
          var _temp3 = function _temp3(_result) {
            if (_exit2) return _result;
            // We dispatch the result action _after_ the catch, to avoid having any errors
            // here get swallowed by the try/catch block,
            // per https://twitter.com/dan_abramov/status/770914221638942720
            // and https://redux-toolkit.js.org/tutorials/advanced-tutorial#async-error-handling-logic-in-thunks
            var skipDispatch = options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;

            if (!skipDispatch) {
              dispatch(finalAction);
            }

            return finalAction;
          };

          var _exit2 = false;
          var finalAction;

          var _temp4 = _catch(function () {
            if (options && options.condition && options.condition(arg, {
              getState: getState,
              extra: extra
            }) === false) {
              // eslint-disable-next-line no-throw-literal
              throw {
                name: 'ConditionError',
                message: 'Aborted due to condition callback returning false.'
              };
            }

            started = true;
            dispatch(pending(requestId, arg));
            return Promise.resolve(Promise.race([abortedPromise, Promise.resolve(payloadCreator(arg, {
              dispatch: dispatch,
              getState: getState,
              extra: extra,
              requestId: requestId,
              signal: abortController.signal,
              rejectWithValue: function rejectWithValue(value) {
                return new RejectWithValue(value);
              }
            })).then(function (result) {
              if (result instanceof RejectWithValue) {
                return rejected(null, requestId, arg, result.value);
              }

              return fulfilled(result, requestId, arg);
            })])).then(function (_Promise$race) {
              finalAction = _Promise$race;
            });
          }, function (err) {
            finalAction = rejected(err, requestId, arg);
          });

          return Promise.resolve(_temp4 && _temp4.then ? _temp4.then(_temp3) : _temp3(_temp4));
        } catch (e) {
          return Promise.reject(e);
        }
      }();

      return Object.assign(promise, {
        abort: abort
      });
    };
  }

  return Object.assign(actionCreator, {
    pending: pending,
    rejected: rejected,
    fulfilled: fulfilled,
    typePrefix: typePrefix
  });
}

// we assume RTK will be used with React Native and other Proxy-less
// environments.  In addition, that's how Immer 4 behaved, and since
// we want to ship this in an RTK minor, we should keep the same behavior.

N();

class SchemaValidationError extends Error {
    constructor(errors) {
        super(`The following properties are invalid:${errors.map((error) => `\n${error}`)}`);
        this.name = 'SchemaValidationError';
    }
}
class Schema {
    constructor(definition) {
        this.definition = definition;
    }
    validate(values = {}) {
        const mergedValues = {
            ...this.default,
            ...values,
        };
        const errors = [];
        for (const property in this.definition) {
            const error = this.definition[property].validate(mergedValues[property]);
            error && errors.push(`${property}: ${error}`);
        }
        if (errors.length) {
            throw new SchemaValidationError(errors);
        }
        return mergedValues;
    }
    get default() {
        const defaultValues = {};
        for (const property in this.definition) {
            const defaultValue = this.definition[property].default;
            if (defaultValue !== undefined) {
                defaultValues[property] = defaultValue;
            }
        }
        return defaultValues;
    }
}

class Value {
    constructor(baseConfig = {}) {
        this.baseConfig = baseConfig;
    }
    validate(value) {
        if (this.baseConfig.required && isNullOrUndefined(value)) {
            return 'value is required.';
        }
        return null;
    }
    get default() {
        return this.baseConfig.default instanceof Function
            ? this.baseConfig.default()
            : this.baseConfig.default;
    }
    required() {
        return this.baseConfig.required === true;
    }
}
function isUndefined(value) {
    return value === undefined;
}
function isNull(value) {
    return value === null;
}
function isNullOrUndefined(value) {
    return isUndefined(value) || isNull(value);
}

class NumberValue {
    constructor(config = {}) {
        this.config = config;
        this.value = new Value(config);
    }
    validate(value) {
        const valueValidation = this.value.validate(value);
        if (valueValidation) {
            return valueValidation;
        }
        if (!isNumberOrUndefined(value)) {
            return 'value is not a number.';
        }
        if (value < this.config.min) {
            return `minimum value of ${this.config.min} not respected.`;
        }
        if (value > this.config.max) {
            return `maximum value of ${this.config.max} not respected.`;
        }
        return null;
    }
    get default() {
        return this.value.default;
    }
    get required() {
        return this.value.required();
    }
}
function isNumberOrUndefined(value) {
    return isUndefined(value) || isNumber(value);
}
function isNumber(value) {
    return typeof value === 'number';
}

class BooleanValue {
    constructor(config = {}) {
        this.value = new Value(config);
    }
    validate(value) {
        const valueValidation = this.value.validate(value);
        if (valueValidation) {
            return valueValidation;
        }
        if (!isBooleanOrUndefined(value)) {
            return 'value is not a boolean.';
        }
        return null;
    }
    get default() {
        return this.value.default;
    }
    get required() {
        return this.value.required();
    }
}
function isBooleanOrUndefined(value) {
    return isUndefined(value) || isBoolean$1(value);
}
function isBoolean$1(value) {
    return typeof value === 'boolean';
}

const defaultConfig = {
    emptyAllowed: true,
    url: false,
};
// Source: https://github.com/jquery-validation/jquery-validation/blob/c1db10a34c0847c28a5bd30e3ee1117e137ca834/src/core.js#L1349
const urlRegex = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
class StringValue {
    constructor(config = {}) {
        this.config = {
            ...defaultConfig,
            ...config,
        };
        this.value = new Value(this.config);
    }
    validate(value) {
        const valueValidation = this.value.validate(value);
        if (valueValidation) {
            return valueValidation;
        }
        if (isUndefined(value)) {
            return null;
        }
        if (!isString(value)) {
            return 'value is not a string.';
        }
        if (!this.config.emptyAllowed && !value.length) {
            return 'value is an empty string.';
        }
        if (this.config.url && !urlRegex.test(value)) {
            return 'value is not a valid URL.';
        }
        return null;
    }
    get default() {
        return this.value.default;
    }
    get required() {
        return this.value.required();
    }
}
function isString(value) {
    return Object.prototype.toString.call(value) === '[object String]';
}

class ArrayValue {
    constructor(config = {}) {
        this.config = config;
        this.value = new Value(this.config);
    }
    validate(input) {
        if (!isNullOrUndefined(input) && !Array.isArray(input)) {
            return 'value is not an array';
        }
        const invalid = this.value.validate(input);
        if (invalid !== null) {
            return invalid;
        }
        if (isNullOrUndefined(input)) {
            return null;
        }
        if (this.config.max !== undefined && input.length > this.config.max) {
            return `value contains more than ${this.config.max}`;
        }
        if (this.config.min !== undefined && input.length < this.config.min) {
            return `value contains less than ${this.config.min}`;
        }
        if (this.config.each !== undefined) {
            let out = '';
            input.forEach((el) => {
                if (this.config.each.required && isNullOrUndefined(el)) {
                    out = `value is null or undefined: ${input.join(',')}`;
                }
                const isInvalid = this.validatePrimitiveValue(el, this.config.each);
                if (isInvalid !== null) {
                    out += ' ' + isInvalid;
                }
            });
            return out === '' ? null : out;
        }
        return null;
    }
    validatePrimitiveValue(v, validator) {
        if (isBoolean$1(v)) {
            return validator.validate(v);
        }
        else if (isString(v)) {
            return validator.validate(v);
        }
        else if (isNumber(v)) {
            return validator.validate(v);
        }
        return 'value is not a primitive value';
    }
    get default() {
        return undefined;
    }
}

const validatePayloadSchema = (payload, schemaDefinition) => {
    const schema = new Schema(schemaDefinition);
    const validatedPayload = schema.validate(payload);
    return { payload: validatedPayload };
};
const validatePayloadValue = (payload, schemaValue) => {
    const schema = new Schema({ value: schemaValue });
    const validatedPayload = schema.validate({ value: payload }).value;
    return { payload: validatedPayload };
};

/**
 * Update the global headless engine configuration.
 * @param accessToken The access token to use to authenticate requests against the Coveo Cloud endpoints. Typically, this will be an API key or search token that grants the privileges to execute queries and push usage analytics data in the target Coveo Cloud organization.
 * @param organizationId The unique identifier of the target Coveo Cloud organization (e.g., `mycoveocloudorganizationg8tp8wu3`)
 */
const updateBasicConfiguration = createAction('configuration/updateBasicConfiguration', (payload) => validatePayloadSchema(payload, {
    accessToken: new StringValue({ required: true, emptyAllowed: false }),
    organizationId: new StringValue({ required: true, emptyAllowed: false }),
}));
/**
 * Update the search configuration.
 * @param searchApiBaseUrl The Search API base URL to use (e.g., https://globalplatform.cloud.coveo.com/rest/search/v2).
 */
const updateSearchConfiguration = createAction('configuration/updateSearchConfiguration', (payload) => validatePayloadSchema(payload, {
    searchApiBaseUrl: new StringValue({ url: true, emptyAllowed: false }),
}));
/**
 * Renew the accessToken specified in the global headless engine configuration.
 * @param renew A function that fetches a new access token. The function must return a Promise that resolves to a string (the new access token).
 */
const renewAccessToken = createAsyncThunk('configuration/renewAccessToken', async (renew) => {
    return await renew();
});
/**
 * Disable analytics tracking
 */
const disableAnalytics = createAction('configuration/analytics/disable');
/**
 * Enable analytics tracking
 */
const enableAnalytics = createAction('configuration/analytics/enable');

var configurationActions = /*#__PURE__*/Object.freeze({
	__proto__: null,
	updateBasicConfiguration: updateBasicConfiguration,
	updateSearchConfiguration: updateSearchConfiguration,
	renewAccessToken: renewAccessToken,
	disableAnalytics: disableAnalytics,
	enableAnalytics: enableAnalytics
});

class PlatformClient {
    static async call(options) {
        const response = await fetch$1(options.url, {
            method: options.method,
            headers: {
                'Content-Type': options.contentType,
                Authorization: `Bearer ${options.accessToken}`,
            },
            body: JSON.stringify(options.requestParams),
        });
        const body = (await response.json());
        return {
            response,
            body,
        };
    }
}

const getOrganizationIdParam = (state) => ({
    /**
     * The unique identifier of the target Coveo Cloud organization.
     */
    organizationId: state.configuration.organizationId,
});
const getQParam = (state) => ({
    /**
     * The basic query expression filter applied to the state.
     */
    q: state.query.q,
});
const getAccessToken = (state) => state.configuration.accessToken;
const getSearchApiBaseUrl = (state) => state.configuration.search.searchApiBaseUrl;
const baseSearchParams = (state, method, contentType, path) => ({
    accessToken: getAccessToken(state),
    method,
    contentType,
    url: `${getSearchApiBaseUrl(state)}${path}`,
});

/** The search request parameters. For a full description, refer to {@link https://docs.coveo.com/en/13/cloud-v2-api-reference/search-api#operation/searchUsingPost}*/
const searchRequestParams = (state) => {
    return {
        ...getQParam(state),
        numberOfResults: state.pagination.numberOfResults,
        sortCriteria: state.sortCriteria,
        firstResult: state.pagination.firstResult,
        facets: getFacets(state),
        context: state.context.contextValues,
        enableDidYouMean: state.didYouMean.enableDidYouMean,
        pipeline: state.pipeline,
    };
};
function getFacets(state) {
    return [...getFacetRequests(state), ...getRangeFacetRequests(state)];
}
function getFacetRequests(state) {
    const requests = state.facetSet;
    return Object.keys(requests).map((id) => requests[id]);
}
function getRangeFacetRequests(state) {
    const requests = state.rangeFacetSet;
    return Object.keys(requests).map((id) => requests[id]);
}

const facetSearchRequestParams = (id, state) => {
    const { captions, numberOfValues, query } = state.facetSearchSet[id].options;
    const { field, delimitingCharacter, currentValues } = state.facetSet[id];
    const searchContext = searchRequestParams(state);
    const ignoreValues = currentValues
        .filter((v) => v.state !== 'idle')
        .map((facetValue) => facetValue.value);
    return {
        captions,
        numberOfValues,
        query,
        field,
        delimitingCharacter,
        ignoreValues,
        searchContext,
        type: 'specific',
    };
};

const planRequestParams = (state) => ({
    ...getQParam(state),
    ...getOrganizationIdParam(state),
    context: state.context.contextValues,
    pipeline: state.pipeline,
});

const querySuggestRequestParams = (id, state) => ({
    ...getOrganizationIdParam(state),
    /**
     * Specifies the number of suggestions that the Coveo Machine Learning service should return.
     */
    count: state.querySuggest[id].count,
    /**
     * The basic query expression for which to get completion.
     */
    q: state.querySuggest[id].q,
    /**
     * Specifies the context that Coveo Machine Learning should leverage to return suggestions.
     */
    context: state.context.contextValues,
    /**
     * Specifies the name of the query pipeline to use for the query. If not specified, the default query pipeline will be used.
     */
    pipeline: state.pipeline,
});

class SearchAPIClient {
    static async plan(state) {
        const platformResponse = await PlatformClient.call({
            ...baseSearchParams(state, 'POST', 'application/json', '/plan'),
            requestParams: planRequestParams(state),
        });
        if (isSuccessPlanResponse(platformResponse)) {
            return { success: platformResponse.body };
        }
        return {
            error: unwrapError(platformResponse),
        };
    }
    static async querySuggest(id, state) {
        const platformResponse = await PlatformClient.call({
            ...baseSearchParams(state, 'POST', 'application/json', '/querySuggest'),
            requestParams: querySuggestRequestParams(id, state),
        });
        if (isSuccessQuerySuggestionsResponse(platformResponse)) {
            return {
                success: platformResponse.body,
            };
        }
        return {
            error: unwrapError(platformResponse),
        };
    }
    static async search(state) {
        const platformResponse = await PlatformClient.call({
            ...baseSearchParams(state, 'POST', 'application/json', ''),
            requestParams: searchRequestParams(state),
        });
        if (isSuccessSearchResponse(platformResponse)) {
            return {
                success: platformResponse.body,
            };
        }
        return {
            error: unwrapError(platformResponse),
        };
    }
    static async facetSearch(id, state) {
        const res = await PlatformClient.call({
            ...baseSearchParams(state, 'POST', 'application/json', '/facet'),
            requestParams: facetSearchRequestParams(id, state),
        });
        return res.body;
    }
}
const unwrapError = (res) => {
    if (isException(res)) {
        return unwrapByBodyException(res);
    }
    if (isError(res)) {
        return unwrapByStatusCode(res);
    }
    return { message: 'unknown', statusCode: 0, type: 'unknown' };
};
const unwrapByBodyException = (res) => ({
    message: res.body.exception.code,
    statusCode: res.response.status,
    type: res.body.exception.code,
});
const unwrapByStatusCode = (res) => ({
    message: res.body.message,
    statusCode: res.body.statusCode,
    type: res.body.type,
});
const isErrorResponse = (r) => {
    return r.error !== undefined;
};
function isSuccessQuerySuggestionsResponse(r) {
    return (r.body.completions !==
        undefined);
}
function isSuccessPlanResponse(r) {
    return (r.body.preprocessingOutput !==
        undefined);
}
function isSuccessSearchResponse(r) {
    return (r.body.results !== undefined);
}
function isError(r) {
    return (r.body.statusCode !==
        undefined);
}
function isException(r) {
    return (r.body
        .exception !== undefined);
}

const ActionTypes$1 = {
    UNDO: '@@undoable/UNDO',
    REDO: '@@undoable/REDO',
};
const makeHistory = (state) => ({
    past: [],
    present: state,
    future: [],
});
const ActionCreators = {
    undo: () => createAction('@@undoable/UNDO'),
    redo: () => ({
        type: ActionTypes$1.REDO,
    }),
};
const undo = (state) => {
    const { past, present, future } = state;
    if (past.length === 0) {
        return state;
    }
    const previous = past[past.length - 1];
    const newPast = past.slice(0, past.length - 1);
    return {
        past: newPast,
        present: previous,
        future: [present, ...future],
    };
};
const redo = (state) => {
    const { past, present, future } = state;
    if (future.length === 0) {
        return state;
    }
    const next = future[0];
    const newFuture = future.slice(1);
    return {
        past: [...past, present],
        present: next,
        future: newFuture,
    };
};
const updateHistory = (state, emptyState, reducer, action) => {
    const { past, present } = state;
    const newPresent = reducer(present, action);
    if (newPresent === emptyState.present || present === newPresent) {
        return state;
    }
    // Small special twist on the documented/standard redux undo recipe
    // We want to make the "actual first valid initial state" the first one that ends up being different from the "empty state" passed into undoable
    // This allows for slices to register themselves dynamically (Concret example: facet-slice).
    if (present === emptyState.present) {
        return makeHistory(newPresent);
    }
    return {
        past: [...past, present],
        present: newPresent,
        future: [],
    };
};
const undoable = (reducer, emptyState) => {
    const emptyStateWithHistory = makeHistory(emptyState);
    return (state = emptyStateWithHistory, action) => {
        switch (action.type) {
            case ActionTypes$1.UNDO:
                return undo(state);
            case ActionTypes$1.REDO:
                return redo(state);
            default:
                return updateHistory(state, emptyStateWithHistory, reducer, action);
        }
    };
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function e(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);}return r}function t$1(e,t,r,n){return new(r||(r=Promise))((function(o,i){function s(e){try{c(n.next(e));}catch(e){i(e);}}function a(e){try{c(n.throw(e));}catch(e){i(e);}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t);}))).then(s,a);}c((n=n.apply(e,t||[])).next());}))}var r$1;!function(e){e.search="search",e.click="click",e.custom="custom",e.view="view",e.collect="collect";}(r$1||(r$1={}));class n$1{constructor(e){this.opts=e;}sendEvent(e,r){return t$1(this,void 0,void 0,(function*(){const{baseUrl:t,visitorIdProvider:n}=this.opts,o=this.shouldAppendVisitorId(e)?this.visitorIdParam:"",i=yield fetch(`${t}/analytics/${e}${o}`,{method:"POST",headers:this.getHeaders(),mode:"cors",body:JSON.stringify(r),credentials:"include"});if(i.ok){const e=yield i.json();return e.visitorId&&(n.currentVisitorId=e.visitorId),e}try{i.json();}catch(e){}throw console.error(`An error has occured when sending the "${e}" event.`,i,r),new Error(`An error has occurred when sending the "${e}" event. Check the console logs for more details.`)}))}shouldAppendVisitorId(e){return -1!==[r$1.click,r$1.custom,r$1.search,r$1.view].indexOf(e)}get visitorIdParam(){const{visitorIdProvider:e}=this.opts,t=e.currentVisitorId;return t?"?visitor="+t:""}getHeaders(){const{token:e}=this.opts;return Object.assign(Object.assign({},e?{Authorization:"Bearer "+e}:{}),{"Content-Type":"application/json"})}}function o$1(){return "undefined"!=typeof localStorage}function i$1(){return "undefined"!=typeof navigator&&navigator.cookieEnabled}function s$1(){return "undefined"!=typeof crypto&&void 0!==crypto.getRandomValues}const a$1=[r$1.click,r$1.custom,r$1.search,r$1.view],c$1=(e,t)=>-1!==a$1.indexOf(e)?Object.assign({language:document.documentElement.lang,userAgent:navigator.userAgent},t):t;class l$1{static set(e,t,r){var n,o,i,s,a;r?((i=new Date).setTime(i.getTime()+r),s="; expires="+i.toGMTString()):s="",-1===(a=location.hostname).indexOf(".")?document.cookie=e+"="+t+s+"; path=/":((o=a.split(".")).shift(),n="."+o.join("."),document.cookie=e+"="+t+s+"; path=/; domain="+n,null!=l$1.get(e)&&l$1.get(e)==t||(n="."+a,document.cookie=e+"="+t+s+"; path=/; domain="+n));}static get(e){for(var t=e+"=",r=document.cookie.split(";"),n=0;n<r.length;n++){var o=r[n];if(0==(o=o.replace(/^\s+/,"")).indexOf(t))return o.substring(t.length,o.length)}return null}static erase(e){l$1.set(e,"",-1);}}function u$1(){return o$1()?localStorage:i$1()?new d$1:"undefined"!=typeof sessionStorage?sessionStorage:new h$1}class d$1{getItem(e){return l$1.get(`${d$1.prefix}${e}`)}removeItem(e){l$1.erase(`${d$1.prefix}${e}`);}setItem(e,t){l$1.set(`${d$1.prefix}${e}`,t);}}d$1.prefix="coveo_";class g$1{constructor(){this.cookieStorage=new d$1;}getItem(e){return localStorage.getItem(e)||this.cookieStorage.getItem(e)}removeItem(e){this.cookieStorage.removeItem(e),localStorage.removeItem(e);}setItem(e,t){localStorage.setItem(e,t),this.cookieStorage.setItem(e,t);}}class h$1{getItem(e){return null}removeItem(e){}setItem(e,t){}}const v$1="__coveo.analytics.history";class m$1{constructor(e){this.store=e||u$1(),this.store instanceof d$1||!i$1()||(new d$1).removeItem(v$1);}addElement(e){e.internalTime=(new Date).getTime(),this.cropQueryElement(e);let t=this.getHistoryWithInternalTime();null!=t?this.isValidEntry(e)&&this.setHistory([e].concat(t)):this.setHistory([e]);}getHistory(){const e=this.getHistoryWithInternalTime();return this.stripInternalTime(e)}getHistoryWithInternalTime(){try{const e=this.store.getItem(v$1);return e?JSON.parse(e):[]}catch(e){return []}}setHistory(e){try{this.store.setItem(v$1,JSON.stringify(e.slice(0,20)));}catch(e){}}clear(){try{this.store.removeItem(v$1);}catch(e){}}getMostRecentElement(){let e=this.getHistoryWithInternalTime();if(null!=e){return e.sort((e,t)=>(t.internalTime||0)-(e.internalTime||0))[0]}return null}cropQueryElement(e){e.name&&"query"==e.name.toLowerCase()&&null!=e.value&&(e.value=e.value.slice(0,75));}isValidEntry(e){let t=this.getMostRecentElement();return !t||t.value!=e.value||(e.internalTime||0)-(t.internalTime||0)>6e4}stripInternalTime(e){return e.map(e=>{const{name:t,time:r,value:n}=e;return {name:t,time:r,value:n}})}}const p$1=(e,t)=>e===r$1.view?(y$1(t.contentIdValue),Object.assign({location:window.location.toString(),referrer:document.referrer,title:document.title},t)):t,y$1=e=>{const t=new m$1,r={name:"PageView",value:e,time:JSON.stringify(new Date)};t.addElement(r);},f$1=e=>e?(Number(e)^b$1(new Uint8Array(1))[0]%16>>Number(e)/4).toString(16):"10000000-1000-4000-8000-100000000000".replace(/[018]/g,f$1),b$1=e=>{if(s$1())return crypto.getRandomValues(e);for(var t=0,r=0;t<e.length;t++)0==(3&t)&&(r=4294967296*Math.random()),e[t]=r>>>((3&t)<<3)&255;return e},E$1={id:"id",name:"nm",brand:"br",category:"ca",variant:"va",price:"pr",quantity:"qt",coupon:"cc",position:"ps"},S$1={id:"id",name:"nm",brand:"br",category:"ca",variant:"va",position:"ps",price:"pr"},w$1=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},{eventCategory:"ec",eventAction:"ea",eventLabel:"el",eventValue:"ev",page:"dp",visitorId:"cid",clientId:"cid",userId:"uid",currencyCode:"cu"}),{action:"pa",list:"pal",listSource:"pls"}),{id:"ti",revenue:"tr",tax:"tt",shipping:"ts",coupon:"tcc",affiliation:"ta",step:"cos",option:"col"}),{hitType:"t",pageViewId:"pid",encoding:"de",location:"dl",referrer:"dr",screenColor:"sd",screenResolution:"sr",title:"dt",userAgent:"ua",language:"ul",eventId:"z",time:"tm"}),{anonymizeIp:"aip"}),I$1=Object.keys,O$1=I$1(w$1).map(e=>w$1[e]),C=I$1(E$1).map(e=>E$1[e]),x$1=I$1(S$1).map(e=>S$1[e]),k$1=[...C,"custom"].join("|"),j$1=[...x$1,"custom"].join("|"),P$1=new RegExp(`^(pr[0-9]+)(${k$1})$`),T=new RegExp(`^((il[0-9]+pi[0-9]+)(${j$1}))|(il[0-9]+nm)$`),A$1=new RegExp("^(pr[0-9]+)custom$"),R$1=new RegExp("^(il[0-9]+pi[0-9]+)custom$"),q$1=e=>P$1.test(e),F=e=>T.test(e),U$1=e=>-1!==O$1.indexOf(e),V=e=>"custom"===e,$$1=(e,t)=>I$1(t).reduce((r,n)=>Object.assign(Object.assign({},r),{[`${e}${n}`]:t[n]}),{});class B$1{constructor(e){this.opts=e;}sendEvent(e,r){return t$1(this,void 0,void 0,(function*(){if(!navigator.sendBeacon)throw new Error('navigator.sendBeacon is not supported in this browser. Consider adding a polyfill like "sendbeacon-polyfill".');const{baseUrl:t}=this.opts,n=this.encodeForEventType(e,r),o=this.getQueryParamsForEventType(e),i=`${t}/analytics/${e}?${o}`;console.log(`Sending beacon for "${e}" with: `,JSON.stringify(r)),navigator.sendBeacon(i,new Blob([n],{type:"application/x-www-form-urlencoded"}));}))}encodeForEventType(e,t){return this.isEventTypeLegacy(e)?this.encodeForLegacyType(e,t):this.encodeForFormUrlEncoded(Object.assign({access_token:this.opts.token},t))}getQueryParamsForEventType(e){const{token:t,visitorIdProvider:r}=this.opts,n=r.currentVisitorId;return [t&&this.isEventTypeLegacy(e)?"access_token="+t:"",n?"visitorId="+n:""].filter(e=>!!e).join("&")}isEventTypeLegacy(e){return -1!==[r$1.click,r$1.custom,r$1.search,r$1.view].indexOf(e)}encodeForLegacyType(e,t){return `${e}Event=${encodeURIComponent(JSON.stringify(t))}`}encodeForFormUrlEncoded(e){return Object.keys(e).filter(t=>!!e[t]).map(t=>`${encodeURIComponent(t)}=${encodeURIComponent(this.encodeValue(e[t]))}`).join("&")}encodeValue(e){return "number"==typeof e||"string"==typeof e||"boolean"==typeof e?e:JSON.stringify(e)}}class M$1{sendEvent(e,r){return t$1(this,void 0,void 0,(function*(){return Promise.resolve()}))}}class N$1{constructor(e,t){o$1()&&i$1()?this.storage=new g$1:o$1()?this.storage=localStorage:(console.warn("BrowserRuntime detected no valid storage available.",this),this.storage=new h$1),this.beaconClient=new B$1(e),window.addEventListener("beforeunload",()=>t());}}class L$1{constructor(){this.storage=new h$1,this.beaconClient=new M$1;}}class Q{constructor(){this.storage=new h$1,this.beaconClient=new M$1;}}const D$1="https://platform.cloud.coveo.com/rest/ua";class H$1{constructor(e){if(!e)throw new Error("You have to pass options to this constructor");this.options=Object.assign(Object.assign({},this.defaultOptions),e),this.visitorId="",this.bufferedRequests=[],this.beforeSendHooks=[p$1,c$1],this.eventTypeMapping={};const t={baseUrl:this.baseUrl,token:this.options.token,visitorIdProvider:this};this.runtime=this.initRuntime(t),this.analyticsFetchClient=new n$1(t),this.initVisitorId();}get defaultOptions(){return {endpoint:D$1,token:"",version:"v15"}}initRuntime(e){return "undefined"!=typeof window&&"undefined"!=typeof document?new N$1(e,()=>this.flushBufferWithBeacon()):new L$1}get analyticsBeaconClient(){return this.runtime.beaconClient}get storage(){return this.runtime.storage}initVisitorId(){const e=this.visitorId||this.storage.getItem("visitorId")||"";this.currentVisitorId=e||f$1();}get currentVisitorId(){return this.visitorId}set currentVisitorId(e){this.visitorId=e,this.storage.setItem("visitorId",e);}sendEvent(e,...r){return t$1(this,void 0,void 0,(function*(){const{newEventType:t=e,variableLengthArgumentsNames:n=[],addVisitorIdParameter:o=!1,usesMeasurementProtocol:i=!1}=this.eventTypeMapping[e]||{},s=[e=>n.length>0?this.parseVariableArgumentsPayload(n,e):e[0],e=>Object.assign({visitorId:o?this.visitorId:""},e),e=>i?this.ensureAnonymousUserWhenUsingApiKey(e):e,t=>this.beforeSendHooks.reduce((t,r)=>r(e,t),t),t=>this.removeEmptyPayloadValues(t,e),e=>this.validateParams(e),e=>{return i?I$1(t=e).reduce((e,r)=>{const n=w$1[r]||r;return Object.assign(Object.assign({},e),{[n]:t[r]})},{}):e;var t;},e=>i?this.removeUnknownParameters(e):e,e=>i?this.processCustomParameters(e):e].reduce((e,t)=>t(e),r);return this.bufferedRequests.push({eventType:t,payload:s,handled:!1}),yield this.deferExecution(),yield this.sendFromBufferWithFetch()}))}deferExecution(){return new Promise(e=>setTimeout(e,0))}flushBufferWithBeacon(){for(;this.hasPendingRequests();){const{eventType:e,payload:t}=this.bufferedRequests.pop();this.analyticsBeaconClient.sendEvent(e,t);}}sendFromBufferWithFetch(){return t$1(this,void 0,void 0,(function*(){const e=this.bufferedRequests.shift();if(e){const{eventType:t,payload:r}=e;return this.analyticsFetchClient.sendEvent(t,r)}}))}hasPendingRequests(){return this.bufferedRequests.length>0}clear(){this.storage.removeItem("visitorId"),(new m$1).clear();}sendSearchEvent(e){return t$1(this,void 0,void 0,(function*(){return this.sendEvent(r$1.search,e)}))}sendClickEvent(e){return t$1(this,void 0,void 0,(function*(){return this.sendEvent(r$1.click,e)}))}sendCustomEvent(e){return t$1(this,void 0,void 0,(function*(){return this.sendEvent(r$1.custom,e)}))}sendViewEvent(e){return t$1(this,void 0,void 0,(function*(){return this.sendEvent(r$1.view,e)}))}getVisit(){return t$1(this,void 0,void 0,(function*(){const e=yield fetch(this.baseUrl+"/analytics/visit"),t=yield e.json();return this.visitorId=t.visitorId,t}))}getHealth(){return t$1(this,void 0,void 0,(function*(){const e=yield fetch(this.baseUrl+"/analytics/monitoring/health");return yield e.json()}))}registerBeforeSendEventHook(e){this.beforeSendHooks.push(e);}addEventTypeMapping(e,t){this.eventTypeMapping[e]=t;}parseVariableArgumentsPayload(e,t){const r={};for(let n=0,o=t.length;n<o;n++){const o=t[n];if("string"==typeof o)r[e[n]]=o;else if("object"==typeof o)return Object.assign(Object.assign({},r),o)}return r}isKeyAllowedEmpty(e,t){return -1!==({[r$1.search]:["queryText"]}[e]||[]).indexOf(t)}removeEmptyPayloadValues(e,t){return Object.keys(e).filter(r=>{return this.isKeyAllowedEmpty(t,r)||null!=(n=e[r])&&""!==n;var n;}).reduce((t,r)=>Object.assign(Object.assign({},t),{[r]:e[r]}),{})}removeUnknownParameters(e){return Object.keys(e).filter(e=>{if((e=>[q$1,F,U$1,V].some(t=>t(e)))(e))return !0;console.log(e,"is not processed by coveoua");}).reduce((t,r)=>Object.assign(Object.assign({},t),{[r]:e[r]}),{})}processCustomParameters(t){const{custom:r}=t,n=e(t,["custom"]),o=I$1(i=n).reduce((e,t)=>{const r=A$1.exec(t)||R$1.exec(t);if(r){const n=r[1];return Object.assign(Object.assign({},e),$$1(n,i[t]))}return Object.assign(Object.assign({},e),{[t]:i[t]})},{});var i;return Object.assign(Object.assign({},r||{}),o)}validateParams(t){const{anonymizeIp:r}=t,n=e(t,["anonymizeIp"]);return void 0!==r&&-1==["0","false","undefined","null","{}","[]",""].indexOf((""+r).toLowerCase())&&(n.anonymizeIp=1),n}ensureAnonymousUserWhenUsingApiKey(t){const{userId:r}=t,n=e(t,["userId"]);return (null==(o=this.options.token)?void 0:o.startsWith("xx"))&&!r?(n.userId="anonymous",n):t;var o;}get baseUrl(){const{version:e,endpoint:t}=this.options,r=-1!==t.indexOf(".cloud.coveo.com");return `${t}${r?"":"/rest"}/${e}`}}var z$1;!function(e){e.interfaceLoad="interfaceLoad",e.interfaceChange="interfaceChange",e.didyoumeanAutomatic="didyoumeanAutomatic",e.didyoumeanClick="didyoumeanClick",e.resultsSort="resultsSort",e.searchboxSubmit="searchboxSubmit",e.searchboxClear="searchboxClear",e.searchboxAsYouType="searchboxAsYouType",e.breadcrumbFacet="breadcrumbFacet",e.breadcrumbResetAll="breadcrumbResetAll",e.documentQuickview="documentQuickview",e.documentOpen="documentOpen",e.omniboxAnalytics="omniboxAnalytics",e.omniboxFromLink="omniboxFromLink",e.triggerNotify="notify",e.triggerExecute="execute",e.triggerQuery="query",e.triggerRedirect="redirect",e.pagerResize="pagerResize",e.pagerNumber="pagerNumber",e.pagerNext="pagerNext",e.pagerPrevious="pagerPrevious",e.pagerScrolling="pagerScrolling",e.facetClearAll="facetClearAll",e.facetSearch="facetSearch",e.facetSelect="facetSelect",e.facetSelectAll="facetSelectAll",e.facetDeselect="facetDeselect",e.facetExclude="facetExclude",e.facetUnexclude="facetUnexclude",e.facetUpdateSort="facetUpdateSort",e.facetShowMore="showMoreFacetResults",e.facetShowLess="showLessFacetResults",e.queryError="query",e.queryErrorBack="errorBack",e.queryErrorClear="errorClearQuery",e.queryErrorRetry="errorRetry";}(z$1||(z$1={}));const W$1={[z$1.triggerNotify]:"queryPipelineTriggers",[z$1.triggerExecute]:"queryPipelineTriggers",[z$1.triggerQuery]:"queryPipelineTriggers",[z$1.triggerRedirect]:"queryPipelineTriggers",[z$1.queryError]:"errors",[z$1.queryErrorBack]:"errors",[z$1.queryErrorClear]:"errors",[z$1.queryErrorRetry]:"errors",[z$1.pagerNext]:"getMoreResults",[z$1.pagerPrevious]:"getMoreResults",[z$1.pagerNumber]:"getMoreResults",[z$1.pagerResize]:"getMoreResults",[z$1.pagerScrolling]:"getMoreResults",[z$1.facetSearch]:"facet",[z$1.facetShowLess]:"facet",[z$1.facetShowMore]:"facet"};class J{constructor(){this.runtime=new Q;}sendEvent(){return Promise.resolve()}sendSearchEvent(){return Promise.resolve()}sendClickEvent(){return Promise.resolve()}sendCustomEvent(){return Promise.resolve()}sendViewEvent(){return Promise.resolve()}getVisit(){return Promise.resolve({id:"",visitorId:""})}getHealth(){return Promise.resolve({status:""})}registerBeforeSendEventHook(){}addEventTypeMapping(){}}class Y$1{constructor(e,t){this.opts=e,this.provider=t,this.coveoAnalyticsClient=!1===e.enableAnalytics?new J:new H$1(e);}disable(){this.coveoAnalyticsClient instanceof H$1&&this.coveoAnalyticsClient.clear(),this.coveoAnalyticsClient=new J;}enable(){this.coveoAnalyticsClient=new H$1(this.opts);}logInterfaceLoad(){return this.logSearchEvent(z$1.interfaceLoad)}logInterfaceChange(e){return this.logSearchEvent(z$1.interfaceChange,e)}logDidYouMeanAutomatic(){return this.logSearchEvent(z$1.didyoumeanAutomatic)}logDidYouMeanClick(){return this.logSearchEvent(z$1.didyoumeanClick)}logResultsSort(e){return this.logSearchEvent(z$1.resultsSort,e)}logSearchboxSubmit(){return this.logSearchEvent(z$1.searchboxSubmit)}logSearchboxClear(){return this.logSearchEvent(z$1.searchboxClear)}logSearchboxAsYouType(){return this.logSearchEvent(z$1.searchboxAsYouType)}logBreadcrumbFacet(e){return this.logSearchEvent(z$1.breadcrumbFacet,e)}logBreadcrumbResetAll(){return this.logSearchEvent(z$1.breadcrumbResetAll)}logDocumentQuickview(e,t){return this.logClickEvent(z$1.documentQuickview,e,t)}logDocumentOpen(e,t){return this.logClickEvent(z$1.documentOpen,e,t)}logOmniboxAnalytics(e){return this.logSearchEvent(z$1.omniboxAnalytics,e)}logOmniboxFromLink(e){return this.logSearchEvent(z$1.omniboxFromLink,e)}logTriggerNotify(e){return this.logCustomEvent(z$1.triggerNotify,e)}logTriggerExecute(e){return this.logCustomEvent(z$1.triggerExecute,e)}logTriggerQuery(){const e={query:this.provider.getSearchEventRequestPayload().queryText};return this.logCustomEvent(z$1.triggerQuery,e)}logTriggerRedirect(e){const t=Object.assign(Object.assign({},e),{query:this.provider.getSearchEventRequestPayload().queryText});return this.logCustomEvent(z$1.triggerRedirect,t)}logPagerResize(e){return this.logCustomEvent(z$1.pagerResize,e)}logPagerNumber(e){return this.logCustomEvent(z$1.pagerNumber,e)}logPagerNext(e){return this.logCustomEvent(z$1.pagerNext,e)}logPagerPrevious(e){return this.logCustomEvent(z$1.pagerPrevious,e)}logPagerScrolling(){return this.logCustomEvent(z$1.pagerScrolling)}logFacetClearAll(e){return this.logSearchEvent(z$1.facetClearAll,e)}logFacetSearch(e){return this.logSearchEvent(z$1.facetSearch,e)}logFacetSelect(e){return this.logSearchEvent(z$1.facetSelect,e)}logFacetDeselect(e){return this.logSearchEvent(z$1.facetDeselect,e)}logFacetExclude(e){return this.logSearchEvent(z$1.facetExclude,e)}logFacetUnexclude(e){return this.logSearchEvent(z$1.facetUnexclude,e)}logFacetSelectAll(e){return this.logSearchEvent(z$1.facetSelectAll,e)}logFacetUpdateSort(e){return this.logSearchEvent(z$1.facetUpdateSort,e)}logFacetShowMore(e){return this.logCustomEvent(z$1.facetShowMore,e)}logFacetShowLess(e){return this.logCustomEvent(z$1.facetShowLess,e)}logQueryError(e){return this.logCustomEvent(z$1.queryError,e)}logQueryErrorBack(){return t$1(this,void 0,void 0,(function*(){return yield this.logCustomEvent(z$1.queryErrorBack),this.logSearchEvent(z$1.queryErrorBack)}))}logQueryErrorRetry(){return t$1(this,void 0,void 0,(function*(){return yield this.logCustomEvent(z$1.queryErrorRetry),this.logSearchEvent(z$1.queryErrorRetry)}))}logQueryErrorClear(){return t$1(this,void 0,void 0,(function*(){return yield this.logCustomEvent(z$1.queryErrorClear),this.logSearchEvent(z$1.queryErrorClear)}))}logCustomEvent(e,t){const r=Object.assign(Object.assign({},this.provider.getBaseMetadata()),t),n={eventType:W$1[e],eventValue:e,lastSearchQueryUid:this.provider.getSearchUID(),customData:r};return this.coveoAnalyticsClient.sendCustomEvent(n)}logSearchEvent(e,t){const r=Object.assign(Object.assign({},this.provider.getBaseMetadata()),t),n=Object.assign(Object.assign({},this.provider.getSearchEventRequestPayload()),{searchQueryUid:this.provider.getSearchUID(),queryPipeline:this.provider.getPipeline(),customData:r,actionCause:e});return this.coveoAnalyticsClient.sendSearchEvent(n)}logClickEvent(e,t,r,n){const o=Object.assign(Object.assign(Object.assign({},this.provider.getBaseMetadata()),r),n),i=Object.assign(Object.assign({},t),{searchQueryUid:this.provider.getSearchUID(),queryPipeline:this.provider.getPipeline(),actionCause:e,customData:o});return this.coveoAnalyticsClient.sendClickEvent(i)}}

class AnalyticsProvider {
    constructor(state) {
        this.state = state;
    }
    getSearchEventRequestPayload() {
        return {
            queryText: this.queryText,
            responseTime: this.responseTime,
            results: this.mapResultsToAnalyticsDocument(),
            numberOfResults: this.numberOfResults,
        };
    }
    getBaseMetadata() {
        return {};
    }
    getSearchUID() {
        return this.state.search.response.searchUid;
    }
    getPipeline() {
        return this.state.pipeline;
    }
    mapResultsToAnalyticsDocument() {
        return this.state.search.response.results.map((r) => ({
            documentUri: r.uri,
            documentUriHash: r.raw.urihash,
        }));
    }
    get queryText() {
        return this.state.query.q;
    }
    get responseTime() {
        return this.state.search.duration;
    }
    get numberOfResults() {
        return this.state.search.response.results.length;
    }
}
const configureAnalytics = (state) => {
    const provider = new AnalyticsProvider(state);
    const client = new Y$1({ token: state.configuration.accessToken }, provider);
    if (state.configuration.analyticsEnabled === false) {
        client.disable();
    }
    return client;
};

const searchPageState = (getState) => getState();
var AnalyticsType;
(function (AnalyticsType) {
    AnalyticsType[AnalyticsType["Search"] = 0] = "Search";
    AnalyticsType[AnalyticsType["Custom"] = 1] = "Custom";
    AnalyticsType[AnalyticsType["Click"] = 2] = "Click";
})(AnalyticsType || (AnalyticsType = {}));
const makeSearchActionType = () => ({
    analyticsType: AnalyticsType.Search,
});
/**
 * Log generic search event
 */
const logGenericSearchEvent = createAsyncThunk('analytics/generic/search', async (p, { getState }) => {
    //TODO: Validate payload
    const { evt, meta } = p;
    const state = searchPageState(getState);
    await configureAnalytics(state).logSearchEvent(evt, meta);
    return makeSearchActionType();
});

var analyticsActions = /*#__PURE__*/Object.freeze({
	__proto__: null,
	searchPageState: searchPageState,
	get AnalyticsType () { return AnalyticsType; },
	makeSearchActionType: makeSearchActionType,
	logGenericSearchEvent: logGenericSearchEvent
});

const snapshot = createAction('history/snapshot');
const back = createAsyncThunk('history/back', async (_, { dispatch }) => {
    await dispatch(ActionCreators.undo());
    await dispatch(change());
});
const forward = createAsyncThunk('history/forward', async (_, { dispatch }) => {
    await dispatch(ActionCreators.redo());
    await dispatch(change());
});
const change = createAsyncThunk('history/change', async (_, { getState }) => {
    const s = getState();
    return s.history.present;
});
const logNavigateForward = createAsyncThunk('history/analytics/forward', async (_, { getState }) => {
    // TODO: This is not exactly what happens in JSUI as of today. In JSUI, we currently try to map the state change to an "actual" analytics event.
    // But, it is still probably acceptable to log this in this format, and much simpler for headless in the end.
    // TBD if this is a problem. We'll adjust accordingly if it's the case.
    const state = searchPageState(getState);
    await configureAnalytics(state).logSearchEvent('historyForward');
    return makeSearchActionType();
});
const logNavigateBackward = createAsyncThunk('history/analytics/backward', async (_, { getState }) => {
    // TODO: This is not exactly what happens in JSUI as of today. In JSUI, we currently try to map the state change to an "actual" analytics event.
    // But, it is still probably acceptable to log this in this format, and much simpler for headless in the end.
    // TBD if this is a problem. We'll adjust accordingly if it's the case.
    const state = searchPageState(getState);
    await configureAnalytics(state).logSearchEvent('historyBackward');
    return makeSearchActionType();
});

var historyActions = /*#__PURE__*/Object.freeze({
	__proto__: null,
	snapshot: snapshot,
	back: back,
	forward: forward,
	change: change,
	logNavigateForward: logNavigateForward,
	logNavigateBackward: logNavigateBackward
});

/**
 * Log a did you mean click
 */
const logDidYouMeanClick = createAsyncThunk('analytics/didyoumean', async (_, { getState }) => {
    const state = searchPageState(getState);
    await configureAnalytics(state).logDidYouMeanClick();
    return makeSearchActionType();
});
/**
 * Log a did you mean click
 */
const logDidYouMeanAutomatic = createAsyncThunk('analytics/didyoumean', async (_, { getState }) => {
    const state = searchPageState(getState);
    await configureAnalytics(state).logDidYouMeanAutomatic();
    return makeSearchActionType();
});

const enableDidYouMean = createAction('didYouMean/enable');
const disableDidYouMean = createAction('didYouMean/disable');
const didYouMeanCorrection = createAction('didYouMean/correction');

/**
 * Update the basic query expression.
 * @param q The new basic query expression (e.g., `acme tornado seeds`).
 */
const updateQuery = createAction('query/updateQuery', (payload) => validatePayloadSchema(payload, {
    q: new StringValue({ required: true }),
}));

var queryActions = /*#__PURE__*/Object.freeze({
	__proto__: null,
	updateQuery: updateQuery
});

const fetchFromAPI = async (state) => {
    const startedAt = new Date().getTime();
    const response = await SearchAPIClient.search(state);
    const duration = new Date().getTime() - startedAt;
    const queryExecuted = state.query.q;
    return { response, duration, queryExecuted };
};
/**
 * Executes a search query.
 */
const executeSearch = createAsyncThunk('search/executeSearch', async (analyticsAction, { getState, dispatch, rejectWithValue }) => {
    const state = getState();
    const fetched = await fetchFromAPI(state);
    if (isErrorResponse(fetched.response)) {
        return rejectWithValue(fetched.response.error);
    }
    if (!shouldReExecuteTheQueryWithCorrections(state, fetched.response.success)) {
        dispatch(snapshot(extractHistory(state)));
        return {
            ...fetched,
            response: fetched.response.success,
            automaticallyCorrected: false,
            analyticsAction,
        };
    }
    const retried = await automaticallyRetryQueryWithCorrection(fetched.response.success.queryCorrections[0].correctedQuery, getState, dispatch);
    dispatch(snapshot(extractHistory(getState())));
    if (isErrorResponse(retried.response)) {
        return rejectWithValue(retried.response.error);
    }
    return {
        ...retried,
        response: retried.response.success,
        automaticallyCorrected: true,
        analyticsAction,
    };
});
const automaticallyRetryQueryWithCorrection = async (correction, getState, dispatch) => {
    dispatch(updateQuery({ q: correction }));
    const fetched = await fetchFromAPI(getState());
    dispatch(logDidYouMeanAutomatic());
    dispatch(didYouMeanCorrection(correction));
    return fetched;
};
const shouldReExecuteTheQueryWithCorrections = (state, res) => {
    if (state.didYouMean.enableDidYouMean === true &&
        res.results.length === 0 &&
        res.queryCorrections.length !== 0) {
        return true;
    }
    return false;
};
const extractHistory = (state) => ({
    context: state.context,
    facetSet: state.facetSet,
    rangeFacetSet: state.rangeFacetSet,
    pagination: state.pagination,
    query: state.query,
    querySet: state.querySet,
    sortCriteria: state.sortCriteria,
    pipeline: state.pipeline,
});

var searchActions = /*#__PURE__*/Object.freeze({
	__proto__: null,
	executeSearch: executeSearch
});

const analyticsMiddleware = (api) => (next) => (action) => {
    var _a, _b;
    // Why all these shenanigans ?
    // https://redux.js.org/style-guide/style-guide#do-not-put-non-serializable-values-in-state-or-actions
    // analyticsAction is returned as a function in some action payload. A function is non serializable.
    // This is not recommended, with one exception: It has to be handled before any reducer has the chance to do it's job, and should not stored in the state.
    // To meet those conditions, we ensure the analyticsMiddleware is always the first executed (in store.ts/configureStore) and that it is removed from the payload.
    // We only keep a reference to the function in order to dispatch it correctly after the reducer (next) has the chance of processing the action/state change
    const analytics = (_a = action.payload) === null || _a === void 0 ? void 0 : _a.analyticsAction;
    if (analytics !== undefined) {
        (_b = action.payload) === null || _b === void 0 ? true : delete _b.analyticsAction;
    }
    const ret = next(action);
    if (action.type === executeSearch.fulfilled.type && analytics === undefined) {
        console.error('No analytics action associated with search:', action);
    }
    if (analytics !== undefined) {
        api.dispatch(analytics);
    }
    return ret;
};

function configureStore$1({ reducers, preloadedState, middlewares = [], }) {
    const store = configureStore({
        reducer: combineReducers(reducers),
        preloadedState,
        devTools: {
            stateSanitizer: (state) => state.history
                ? { ...state, history: '<<OMIT>>' }
                : state,
        },
        middleware: (getDefaultMiddleware) => [
            analyticsMiddleware,
            ...middlewares,
            ...getDefaultMiddleware(),
        ],
    });
    return store;
}

/**
 * The global headless engine.
 * You should instantiate one `HeadlessEngine` class per application and share it.
 * Every headless controller requires an instance of `Engine` as a parameter.
 */
class HeadlessEngine {
    constructor(options) {
        this.reduxStore = configureStore$1({
            preloadedState: options.preloadedState,
            reducers: options.reducers,
            middlewares: options.middlewares,
        });
        this.reduxStore.dispatch(updateBasicConfiguration(options.configuration));
        if (options.configuration.search) {
            this.reduxStore.dispatch(updateSearchConfiguration(options.configuration.search));
        }
    }
    /**
     * @returns A configuration with sample data for testing purposes.
     */
    static getSampleConfiguration() {
        return {
            organizationId: 'searchuisamples',
            accessToken: 'xx564559b1-0045-48e1-953c-3addd1ee4457',
            search: {
                searchApiBaseUrl: 'https://platform.cloud.coveo.com/rest/search',
            },
        };
    }
    /**
     * Enable analytics tracking
     */
    enableAnalytics() {
        this.dispatch(enableAnalytics());
    }
    /**
     * Disable analytics tracking
     */
    disableAnalytics() {
        this.dispatch(disableAnalytics());
    }
    get dispatch() {
        return this.reduxStore.dispatch;
    }
    get subscribe() {
        return this.reduxStore.subscribe;
    }
    get state() {
        return this.reduxStore.getState();
    }
}

async function getQuerySuggestions(id, state) {
    return await SearchAPIClient.querySuggest(id, state);
}

const idDefinition = {
    id: new StringValue({ required: true, emptyAllowed: false }),
};
/**
 * Register a new query suggest entity to the headless state to enable the Coveo ML query suggestions feature.
 * @param id A unique identifier for the new query suggest entity (e.g., `b953ab2e-022b-4de4-903f-68b2c0682942`).
 * @param q The partial basic query expression for which to request query suggestions (e.g., `cov`).
 * @param count The number of query suggestions to request from Coveo ML (e.g., `3`). Default: `5`.
 */
const registerQuerySuggest = createAction('querySuggest/register', (payload) => validatePayloadSchema(payload, {
    ...idDefinition,
    q: new StringValue(),
    count: new NumberValue({ min: 0 }),
}));
/**
 * Unregister an existing query suggest entity from the headless state.
 * @param id The unique identifier of the query suggest entity to unregister (e.g., `b953ab2e-022b-4de4-903f-68b2c0682942`).
 */
const unregisterQuerySuggest = createAction('querySuggest/unregister', (payload) => validatePayloadSchema(payload, idDefinition));
/**
 * Select a suggestion provided through a specific query suggest entity.
 * @param id The unique identifier of the target query suggest entity (e.g., `b953ab2e-022b-4de4-903f-68b2c0682942`).
 * @param expression The selected query suggestion (e.g., `coveo`).
 */
const selectQuerySuggestion = createAction('querySuggest/selectSuggestion', (payload) => validatePayloadSchema(payload, {
    ...idDefinition,
    expression: new StringValue({ required: true }),
}));
/**
 * Clear the current partial basic query expression and list of query suggestions in a specific query suggest entity.
 * @param id The unique identifier of the target query suggest entity (e.g., `b953ab2e-022b-4de4-903f-68b2c0682942`).
 */
const clearQuerySuggest = createAction('querySuggest/clear', (payload) => validatePayloadSchema(payload, idDefinition));
/**
 * Clear the list of query suggestions in a specific query suggest entity.
 * @param id The unique identifier of the target query suggest entity (e.g., b953ab2e-022b-4de4-903f-68b2c0682942).
 */
const clearQuerySuggestCompletions = createAction('querySuggest/clearSuggestions', (payload) => validatePayloadSchema(payload, idDefinition));
/**
 * Fetch a list of query suggestions for a specific query suggest entity according to the current headless state.
 * @param id The unique identifier of the target query suggest entity (e.g., b953ab2e-022b-4de4-903f-68b2c0682942).
 */
const fetchQuerySuggestions = createAsyncThunk('querySuggest/fetch', async (payload, { getState, rejectWithValue }) => {
    validatePayloadSchema(payload, idDefinition);
    const id = payload.id;
    const response = await getQuerySuggestions(id, getState());
    if (isErrorResponse(response)) {
        return rejectWithValue({ id, ...response.error });
    }
    return {
        id,
        ...response.success,
    };
});

var querySuggestActions = /*#__PURE__*/Object.freeze({
	__proto__: null,
	registerQuerySuggest: registerQuerySuggest,
	unregisterQuerySuggest: unregisterQuerySuggest,
	selectQuerySuggestion: selectQuerySuggestion,
	clearQuerySuggest: clearQuerySuggest,
	clearQuerySuggestCompletions: clearQuerySuggestCompletions,
	fetchQuerySuggestions: fetchQuerySuggestions
});

const getQueryInitialState = () => ({
    q: '',
});
const queryReducer = createReducer(getQueryInitialState(), (builder) => builder
    .addCase(updateQuery, (state, action) => {
    state.q = action.payload.q;
})
    .addCase(didYouMeanCorrection, (state, action) => {
    state.q = action.payload;
})
    .addCase(selectQuerySuggestion, (state, action) => {
    state.q = action.payload.expression;
})
    .addCase(change.fulfilled, (state, action) => {
    state.q = action.payload.query.q;
}));

const getConfigurationInitialState = () => ({
    organizationId: '',
    accessToken: '',
    search: {
        searchApiBaseUrl: 'https://globalplatform.cloud.coveo.com/rest/search',
    },
    analyticsEnabled: true,
});
const configurationReducer = createReducer(getConfigurationInitialState(), (builder) => builder
    .addCase(updateBasicConfiguration, (state, action) => {
    state.accessToken = action.payload.accessToken;
    state.organizationId = action.payload.organizationId;
})
    .addCase(updateSearchConfiguration, (state, action) => {
    if (action.payload.searchApiBaseUrl) {
        state.search.searchApiBaseUrl = action.payload.searchApiBaseUrl;
    }
})
    .addCase(renewAccessToken.fulfilled, (state, action) => {
    state.accessToken = action.payload;
})
    .addCase(disableAnalytics, (state) => {
    state.analyticsEnabled = false;
})
    .addCase(enableAnalytics, (state) => {
    state.analyticsEnabled = true;
}));

function isTriggerRedirect(trigger) {
    return trigger.type === 'redirect';
}

/**
 * The plan of execution of a search request.
 */
class ExecutionPlan {
    constructor(response) {
        this.response = response;
    }
    /**
     * Gets the final value of the basic expression (`q`) after the search request has been processed in the query pipeline, but before it is sent to the index.
     */
    get basicExpression() {
        return this.response.parsedInput.basicExpression;
    }
    /**
     * Gets the final value of the large expression (`lq`) after the search request has been processed in the query pipeline, but before it is sent to the index.
     */
    get largeExpression() {
        return this.response.parsedInput.largeExpression;
    }
    /**
     * Gets the URL to redirect the browser to, if the search request satisfies the condition of a `redirect` trigger rule in the query pipeline.
     *
     * Returns `null` otherwise.
     */
    get redirectionURL() {
        const redirects = this.response.preprocessingOutput.triggers.filter(isTriggerRedirect);
        return redirects.length ? redirects[0].content : null;
    }
}
async function getExecutionPlan(state) {
    const response = await SearchAPIClient.plan(state);
    if (isErrorResponse(response)) {
        throw response.error;
    }
    return new ExecutionPlan(response.success);
}

/**
 * Preprocess the query for the current headless state, and updates the redirection URL if a redirect trigger was fired in the query pipeline.
 */
const checkForRedirection = createAsyncThunk('redirection/check', async (_, { getState, rejectWithValue }) => {
    try {
        const plan = await getExecutionPlan(getState());
        return plan.redirectionURL;
    }
    catch (e) {
        return rejectWithValue(e);
    }
});

var redirectionActions = /*#__PURE__*/Object.freeze({
	__proto__: null,
	checkForRedirection: checkForRedirection
});

const getRedirectionInitialState = () => ({
    redirectTo: null,
});
const redirectionReducer = createReducer(getRedirectionInitialState(), (builder) => builder.addCase(checkForRedirection.fulfilled, (state, action) => {
    state.redirectTo = action.payload;
}));

const querySetDefinition = {
    id: new StringValue({ required: true, emptyAllowed: false }),
    query: new StringValue({ required: true }),
};
/**
 * Register a query in the query set.
 * @param id The unique identifier of the target query.
 * @param query The initial basic query expression.
 */
const registerQuerySetQuery = createAction('querySet/register', (payload) => validatePayloadSchema(payload, querySetDefinition));
/**
 * Update a query in the query set.
 * @param id The unique identifier of the target query.
 * @param query The updated basic query expression.
 */
const updateQuerySetQuery = createAction('querySet/update', (payload) => validatePayloadSchema(payload, querySetDefinition));

var querySetActions = /*#__PURE__*/Object.freeze({
	__proto__: null,
	registerQuerySetQuery: registerQuerySetQuery,
	updateQuerySetQuery: updateQuerySetQuery
});

const getQuerySuggestInitialState = () => ({
    id: '',
    completions: [],
    count: 5,
    q: '',
    currentRequestId: '',
    error: null,
});
const querySuggestReducer = createReducer({}, (builder) => builder
    .addCase(registerQuerySuggest, (state, action) => {
    state[action.payload.id] = {
        ...getQuerySuggestInitialState(),
        ...action.payload,
    };
})
    .addCase(unregisterQuerySuggest, (state, action) => {
    delete state[action.payload.id];
})
    .addCase(fetchQuerySuggestions.pending, (state, action) => {
    state[action.meta.arg.id].currentRequestId = action.meta.requestId;
})
    .addCase(fetchQuerySuggestions.fulfilled, (state, action) => {
    var _a;
    const id = action.meta.arg.id;
    if (action.meta.requestId === ((_a = state[id]) === null || _a === void 0 ? void 0 : _a.currentRequestId)) {
        state[id].completions = action.payload.completions;
    }
})
    .addCase(fetchQuerySuggestions.rejected, (state, action) => {
    state[action.payload.id].error = action.payload;
})
    .addCase(updateQuerySetQuery, (state, action) => {
    const { id, query } = action.payload;
    if (id in state) {
        state[id].q = query;
    }
})
    .addCase(clearQuerySuggest, (state, action) => {
    const { id } = action.payload;
    state[id].q = '';
    state[id].completions = [];
})
    .addCase(clearQuerySuggestCompletions, (state, action) => {
    state[action.payload.id].completions = [];
})
    .addCase(selectQuerySuggestion, (state, action) => {
    const { id, expression } = action.payload;
    state[id].q = expression;
    state[id].completions = [];
}));

function getQuerySetInitialState() {
    return {};
}
const querySetReducer = createReducer(getQuerySetInitialState(), (builder) => {
    builder
        .addCase(registerQuerySetQuery, (state, action) => {
        const { id, query } = action.payload;
        if (id in state) {
            return;
        }
        state[id] = query;
    })
        .addCase(updateQuerySetQuery, (state, action) => {
        const { id, query } = action.payload;
        updateQuery$1(state, id, query);
    })
        .addCase(selectQuerySuggestion, (state, action) => {
        const { id, expression } = action.payload;
        updateQuery$1(state, id, expression);
    })
        .addCase(change.fulfilled, (state, action) => {
        for (const [id, query] of Object.entries(action.payload.querySet)) {
            updateQuery$1(state, id, query);
        }
    });
});
const updateQuery$1 = (state, id, query) => {
    if (id in state) {
        state[id] = query;
    }
};

function getSearchInitialState() {
    return {
        response: {
            results: [],
            searchUid: '',
            totalCountFiltered: 0,
            facets: [],
            queryCorrections: [],
        },
        duration: 0,
        queryExecuted: '',
        error: null,
        automaticallyCorrected: false,
    };
}
const searchReducer = createReducer(getSearchInitialState(), (builder) => {
    builder.addCase(executeSearch.rejected, (state, action) => {
        state.error = action.payload ? action.payload : null;
    });
    builder.addCase(executeSearch.fulfilled, (state, action) => {
        state.error = null;
        state.response = action.payload.response;
        state.queryExecuted = action.payload.queryExecuted;
        state.duration = action.payload.duration;
    });
});

const numberValue = new NumberValue({ required: true, min: 0 });
/**
 * Initializes the number of results. For more information, refer to {@link https://docs.coveo.com/en/1461/cloud-v2-developers/query-parameters#RestQueryParameters-numberOfResults}
 * @param number The initial number of results.
 */
const registerNumberOfResults = createAction('pagination/registerNumberOfResults', (payload) => validatePayloadValue(payload, numberValue));
/**
 * Updates the number of results.
 * @param number The updated number of results.
 */
const updateNumberOfResults = createAction('pagination/updateNumberOfResults', (payload) => validatePayloadValue(payload, numberValue));
/**
 * Sets the initial page by initializing the firstResult property. For more information on firstResult, refer to {@link https://docs.coveo.com/en/1461/cloud-v2-developers/query-parameters#RestQueryParameters-firstResult}
 * @param number The initial page number.
 */
const registerPage = createAction('pagination/registerPage', (payload) => validatePayloadValue(payload, numberValue));
/**
 * Updates the page by setting the firstResult property.
 * @param number The new page number.
 */
const updatePage = createAction('pagination/updatePage', (payload) => validatePayloadValue(payload, numberValue));
/**
 * Updates the page to the next page.
 */
const nextPage = createAction('pagination/nextPage');
/**
 * Updates the page to the previous page.
 */
const previousPage = createAction('pagination/previousPage');

var paginationActions = /*#__PURE__*/Object.freeze({
	__proto__: null,
	registerNumberOfResults: registerNumberOfResults,
	updateNumberOfResults: updateNumberOfResults,
	registerPage: registerPage,
	updatePage: updatePage,
	nextPage: nextPage,
	previousPage: previousPage
});

function getPaginationInitialState() {
    return {
        firstResult: 0,
        numberOfResults: 10,
        totalCountFiltered: 0,
    };
}
const minimumPage = 1;
const maximumNumberOfResultsFromIndex = 1000;
const paginationReducer = createReducer(getPaginationInitialState(), (builder) => {
    builder
        .addCase(registerNumberOfResults, (state, action) => {
        const page = determineCurrentPage(state);
        const newNumberOfResults = action.payload;
        state.numberOfResults = newNumberOfResults;
        state.firstResult = calculateFirstResult(page, newNumberOfResults);
    })
        .addCase(updateNumberOfResults, (state, action) => {
        state.numberOfResults = action.payload;
        state.firstResult = 0;
    })
        .addCase(registerPage, (state, action) => {
        const page = action.payload;
        state.firstResult = calculateFirstResult(page, state.numberOfResults);
    })
        .addCase(updatePage, (state, action) => {
        const page = action.payload;
        state.firstResult = calculateFirstResult(page, state.numberOfResults);
    })
        .addCase(previousPage, (state) => {
        const page = determineCurrentPage(state);
        const previousPage = Math.max(page - 1, minimumPage);
        state.firstResult = calculateFirstResult(previousPage, state.numberOfResults);
    })
        .addCase(nextPage, (state) => {
        const page = determineCurrentPage(state);
        const maxPage = determineMaxPage(state);
        const nextPage = Math.min(page + 1, maxPage);
        state.firstResult = calculateFirstResult(nextPage, state.numberOfResults);
    })
        .addCase(change.fulfilled, (state, action) => {
        state.numberOfResults = action.payload.pagination.numberOfResults;
        state.firstResult = action.payload.pagination.firstResult;
    })
        .addCase(executeSearch.fulfilled, (state, action) => {
        const { response } = action.payload;
        state.totalCountFiltered = response.totalCountFiltered;
    });
});
function determineCurrentPage(state) {
    const { firstResult, numberOfResults } = state;
    return calculatePage(firstResult, numberOfResults);
}
function determineMaxPage(state) {
    const { totalCountFiltered, numberOfResults } = state;
    return calculateMaxPage(totalCountFiltered, numberOfResults);
}
function calculateFirstResult(page, numberOfResults) {
    return (page - 1) * numberOfResults;
}
function calculatePage(firstResult, numberOfResults) {
    return firstResult / numberOfResults + 1;
}
function calculateMaxPage(totalCountFiltered, numberOfResults) {
    const totalCount = Math.min(totalCountFiltered, maximumNumberOfResultsFromIndex);
    return Math.ceil(totalCount / numberOfResults);
}

const criterionDefinition = {
    expression: new StringValue({ required: true, emptyAllowed: false }),
};
/**
 * Initializes the sortCritera. For more information, refer to {@link https://docs.coveo.com/en/1461/cloud-v2-developers/query-parameters#RestQueryParameters-sortCriteria}
 * @param string The initial sort criterion.
 */
const registerSortCriterion = createAction('sortCriteria/register', (payload) => validatePayloadSchema(payload, criterionDefinition));
/**
 * Updates the sortCritera to the passed criterion.
 * @param string The updated sort criterion.
 */
const updateSortCriterion = createAction('sortCriteria/update', (payload) => validatePayloadSchema(payload, criterionDefinition));

var sortCriteriaActions = /*#__PURE__*/Object.freeze({
	__proto__: null,
	registerSortCriterion: registerSortCriterion,
	updateSortCriterion: updateSortCriterion
});

function buildRelevanceSortCriterion() {
    return { expression: 'relevancy' };
}
function buildQueryRankingExpressionSortCriterion() {
    return { expression: 'qre' };
}
function buildNoSortCriterion() {
    return { expression: 'nosort' };
}
function buildDateSortCriterion(order) {
    return { expression: `date ${order}` };
}
function buildFieldSortCriterion(field, order) {
    return { expression: `@${field} ${order}` };
}
function buildCompositeSortCriterion(criteria) {
    const expression = criteria
        .map((criterion) => criterion.expression)
        .join(',');
    return { expression };
}

function getSortCriteriaInitialState() {
    return buildRelevanceSortCriterion().expression;
}
const sortCriteriaReducer = createReducer(getSortCriteriaInitialState(), (builder) => {
    builder
        .addCase(registerSortCriterion, (_, action) => action.payload.expression)
        .addCase(updateSortCriterion, (_, action) => action.payload.expression)
        .addCase(change.fulfilled, (_, action) => action.payload.sortCriteria);
});

/**
 * Register a facet in the facet set.
 * @param {FacetRegistrationOptions} FacetRegistrationOptions The options to register the facet with.
 */
const registerFacet = createAction('facet/register');
/**
 * Select a facet value.
 */
const toggleSelectFacetValue = createAction('facet/selectValue');
/**
 * Deselects all facet values.
 * @param id The unique identifier of the facet.
 */
const deselectAllFacetValues = createAction('facet/deselectAll');
/**
 * Updates the sort criterion of a facet.
 */
const updateFacetSortCriterion = createAction('facet/updateSortCriterion');
/**
 * Update the number of values of a facet.
 */
const updateFacetNumberOfValues = createAction('facet/updateNumberOfValues');

var facetSetActions = /*#__PURE__*/Object.freeze({
	__proto__: null,
	registerFacet: registerFacet,
	toggleSelectFacetValue: toggleSelectFacetValue,
	deselectAllFacetValues: deselectAllFacetValues,
	updateFacetSortCriterion: updateFacetSortCriterion,
	updateFacetNumberOfValues: updateFacetNumberOfValues
});

/**
 * Log a facet show more.
 */
const logFacetShowMore = createAsyncThunk('analytics/facet/showMore', async (facetId, { getState }) => {
    const state = searchPageState(getState);
    const metadata = buildFacetBaseMetadata(facetId, state);
    await configureAnalytics(state).logFacetShowMore(metadata);
    return makeSearchActionType();
});
/**
 * Log a facet show less.
 */
const logFacetShowLess = createAsyncThunk('analytics/facet/showLess', async (facetId, { getState }) => {
    const state = searchPageState(getState);
    const metadata = buildFacetBaseMetadata(facetId, state);
    await configureAnalytics(state).logFacetShowLess(metadata);
    return makeSearchActionType();
});
/**
 * Log a facet search.
 */
const logFacetSearch = createAsyncThunk('analytics/facet/search', async (facetId, { getState }) => {
    const state = searchPageState(getState);
    const metadata = buildFacetBaseMetadata(facetId, state);
    await configureAnalytics(state).logFacetSearch(metadata);
    return makeSearchActionType();
});
/**
 * Log a facet sort change.
 */
const logFacetUpdateSort = createAsyncThunk('analytics/facet/sortChange', async (payload, { getState }) => {
    const { facetId, criterion } = payload;
    const state = searchPageState(getState);
    const base = buildFacetBaseMetadata(facetId, state);
    const metadata = { ...base, criteria: criterion };
    await configureAnalytics(state).logFacetUpdateSort(metadata);
    return makeSearchActionType();
});
/**
 * Log a facet clear all event.
 * @param facetId The unique identifier for the facet.
 */
const logFacetClearAll = createAsyncThunk('analytics/facet/reset', async (facetId, { getState }) => {
    const state = searchPageState(getState);
    const metadata = buildFacetBaseMetadata(facetId, state);
    await configureAnalytics(state).logFacetClearAll(metadata);
    return makeSearchActionType();
});
/**
 * Log the selected facet value.
 */
const logFacetSelect = createAsyncThunk('analytics/facet/select', async (payload, { getState }) => {
    const state = searchPageState(getState);
    const metadata = buildFacetSelectionChangeMetadata(payload, state);
    await configureAnalytics(state).logFacetSelect(metadata);
    return makeSearchActionType();
});
/**
 * Log the deselected facet value.
 */
const logFacetDeselect = createAsyncThunk('analytics/facet/deselect', async (payload, { getState }) => {
    const state = searchPageState(getState);
    const metadata = buildFacetSelectionChangeMetadata(payload, state);
    await configureAnalytics(state).logFacetDeselect(metadata);
    return makeSearchActionType();
});
function buildFacetSelectionChangeMetadata(payload, state) {
    const { facetId, facetValue } = payload;
    const base = buildFacetBaseMetadata(facetId, state);
    return { ...base, facetValue };
}
function buildFacetBaseMetadata(facetId, state) {
    const facetField = state.facetSet[facetId].field;
    const facetTitle = `${facetField}_${facetId}`;
    return { facetId, facetField, facetTitle };
}

/**
 * Register a facet search in the facet search set.
 * @param {FacetSearchOptions} FacetSearchOptions The options to register the facet search with.
 */
const registerFacetSearch = createAction('facetSearch/register');
/**
 * Updates the options of a facet search.
 * @param {FacetSearchOptions} FacetSearchOptions The options to register the facet search with.
 */
const updateFacetSearch = createAction('facetSearch/update');
/**
 * Executes a facet search.
 * @param {string} facetId The facet id on which to execute the search.
 */
const executeFacetSearch = createAsyncThunk('facetSearch/executeSearch', async (facetId, { dispatch, getState }) => {
    const state = getState();
    const response = await SearchAPIClient.facetSearch(facetId, state);
    dispatch(logFacetSearch(facetId));
    return { facetId, response };
});
/**
 * Adds a facet search value to the facet.
 * @param {selectFacetSearchResultPayload}.
 */
const selectFacetSearchResult = createAction('facetSearch/selectValue');

function getFacetSetInitialState() {
    return {};
}
const facetSetReducer = createReducer(getFacetSetInitialState(), (builder) => {
    builder
        .addCase(registerFacet, (state, action) => {
        const { facetId } = action.payload;
        if (facetId in state) {
            return;
        }
        state[facetId] = buildFacetRequest(action.payload);
    })
        .addCase(change.fulfilled, (_, action) => {
        if (Object.keys(action.payload.facetSet).length === 0) {
            return;
        }
        return action.payload.facetSet;
    })
        .addCase(toggleSelectFacetValue, (state, action) => {
        const { facetId, selection } = action.payload;
        const facetRequest = state[facetId];
        if (!facetRequest) {
            return;
        }
        const targetValue = facetRequest.currentValues.find((req) => req.value === selection.value);
        if (!targetValue) {
            return;
        }
        const isSelected = targetValue.state === 'selected';
        targetValue.state = isSelected ? 'idle' : 'selected';
        facetRequest.freezeCurrentValues = true;
        facetRequest.preventAutoSelect = true;
    })
        .addCase(deselectAllFacetValues, (state, action) => {
        const id = action.payload;
        const facetRequest = state[id];
        if (!facetRequest) {
            return;
        }
        facetRequest.currentValues.forEach((request) => (request.state = 'idle'));
        facetRequest.preventAutoSelect = true;
    })
        .addCase(updateFacetSortCriterion, (state, action) => {
        const { facetId, criterion } = action.payload;
        const facetRequest = state[facetId];
        if (!facetRequest) {
            return;
        }
        facetRequest.sortCriteria = criterion;
    })
        .addCase(updateFacetNumberOfValues, (state, action) => {
        const { facetId, numberOfValues } = action.payload;
        const facetRequest = state[facetId];
        if (!facetRequest) {
            return;
        }
        facetRequest.numberOfValues = numberOfValues;
    })
        .addCase(executeSearch.fulfilled, (state, action) => {
        const facets = action.payload.response.facets;
        facets.forEach((facetResponse) => {
            const id = facetResponse.facetId;
            const facetRequest = state[id];
            if (!facetRequest) {
                return;
            }
            facetRequest.currentValues = facetResponse.values.map(convertFacetValueToRequest);
            facetRequest.freezeCurrentValues = false;
            facetRequest.preventAutoSelect = false;
        });
    })
        .addCase(selectFacetSearchResult, (state, action) => {
        const { facetId, value } = action.payload;
        const facetRequest = state[facetId];
        if (!facetRequest) {
            return;
        }
        const { rawValue } = value;
        const matchingValues = facetRequest.currentValues.filter((v) => v.value === rawValue);
        if (matchingValues.length) {
            return;
        }
        const currentValue = {
            value: rawValue,
            state: 'selected',
        };
        facetRequest.currentValues.push(currentValue);
    });
});
function buildFacetRequest(config) {
    return {
        type: 'specific',
        currentValues: [],
        delimitingCharacter: '>',
        filterFacetCount: true,
        freezeCurrentValues: false,
        injectionDepth: 1000,
        isFieldExpanded: false,
        numberOfValues: 8,
        preventAutoSelect: false,
        sortCriteria: 'score',
        ...config,
    };
}
function convertFacetValueToRequest(facetValue) {
    const { value, state } = facetValue;
    return { value, state };
}

const nonEmptyString = new StringValue({ required: true, emptyAllowed: false });
const nonEmptyArray = new ArrayValue({
    each: nonEmptyString,
    required: true,
});
const nonEmptyPayload = (contextKey, contextValue) => {
    validatePayloadValue(contextKey, nonEmptyString);
    if (isString(contextValue)) {
        validatePayloadValue(contextValue, nonEmptyString);
    }
    else {
        validatePayloadValue(contextValue, nonEmptyArray);
    }
    return { payload: { contextKey, contextValue } };
};
/**
 * Set the context of the query.
 * @param Context The new context to use.
 */
const setContext = createAction('context/set', (payload) => {
    for (const [k, v] of Object.entries(payload)) {
        nonEmptyPayload(k, v);
    }
    return { payload };
});
/**
 * Add a new value context value.
 * @param object The key value pair to add to the context.
 */
const addContext = createAction('context/add', (payload) => nonEmptyPayload(payload.contextKey, payload.contextValue));
/**
 * Add a new value context value.
 * @param object The key value pair to remove from the context.
 */
const removeContext = createAction('context/remove', (payload) => validatePayloadValue(payload, nonEmptyString));

function getContextInitialState() {
    return {
        contextValues: {},
    };
}
const contextReducer = createReducer(getContextInitialState(), (builder) => {
    builder
        .addCase(setContext, (state, action) => {
        state.contextValues = action.payload;
    })
        .addCase(addContext, (state, action) => {
        state.contextValues[action.payload.contextKey] =
            action.payload.contextValue;
    })
        .addCase(removeContext, (state, action) => {
        delete state.contextValues[action.payload];
    })
        .addCase(change.fulfilled, (state, action) => {
        state.contextValues = action.payload.context.contextValues;
    });
});

/**
 * Register a range facet in the range facet set.
 * @param {RangeFacetRegistrationOptions} RangeFacetRegistrationOptions The options to register the facet with.
 */
const registerRangeFacet = createAction('rangeFacet/register');

function getRangeFacetSetInitialState() {
    return {};
}
const rangeFacetSetReducer = createReducer(getRangeFacetSetInitialState(), (builder) => {
    builder
        .addCase(registerRangeFacet, (state, action) => {
        const { payload } = action;
        const { facetId } = payload;
        if (facetId in state) {
            return;
        }
        state[facetId] = buildRangeFacetRequest(payload);
    })
        .addCase(change.fulfilled, (_, action) => action.payload.rangeFacetSet);
});
function buildRangeFacetRequest(config) {
    return {
        currentValues: [],
        isFieldExpanded: false,
        preventAutoSelect: false,
        freezeCurrentValues: false,
        filterFacetCount: false,
        injectionDepth: 1000,
        numberOfValues: 8,
        sortCriteria: 'ascending',
        ...config,
    };
}

const setPipeline = createAction('pipeline/set', (payload) => validatePayloadValue(payload, new StringValue({ required: true, emptyAllowed: true })));

var pipelineActions = /*#__PURE__*/Object.freeze({
	__proto__: null,
	setPipeline: setPipeline
});

const getPipelineInitialState = () => '';
const pipelineReducer = createReducer(getPipelineInitialState(), (builder) => {
    builder
        .addCase(setPipeline, (_, action) => action.payload)
        .addCase(change.fulfilled, (_, action) => action.payload.pipeline);
});

const getHistoryEmptyState = () => ({
    context: getContextInitialState(),
    facetSet: getFacetSetInitialState(),
    rangeFacetSet: getRangeFacetSetInitialState(),
    pagination: getPaginationInitialState(),
    query: getQueryInitialState(),
    sortCriteria: getSortCriteriaInitialState(),
    querySet: getQuerySetInitialState(),
    pipeline: getPipelineInitialState(),
});
const historyReducer = createReducer(getHistoryEmptyState(), (builder) => {
    builder.addCase(snapshot, (state, action) => isEqual(state, action.payload) ? undefined : action.payload);
});
const isEqual = (current, next) => {
    return (isContextEqual(current.context, next.context) &&
        isFacetsEqual(current.facetSet, next.facetSet) &&
        isRangeFacetsEqual(current.rangeFacetSet, next.rangeFacetSet) &&
        isPaginationEqual(current.pagination, next.pagination) &&
        isQueryEqual(current.query, next.query) &&
        isSortEqual(current, next) &&
        isPipelineEqual(current.pipeline, next.pipeline));
};
const isContextEqual = (current, next) => JSON.stringify(current.contextValues) === JSON.stringify(next.contextValues);
const isFacetsEqual = (current, next) => JSON.stringify(current) === JSON.stringify(next);
const isRangeFacetsEqual = (current, next) => JSON.stringify(current) === JSON.stringify(next);
const isPaginationEqual = (current, next) => current.firstResult === next.firstResult &&
    current.numberOfResults === next.numberOfResults;
const isQueryEqual = (current, next) => current.q === next.q;
const isSortEqual = (current, next) => current.sortCriteria === next.sortCriteria;
const isPipelineEqual = (current, next) => current === next;

const emptyCorrection = () => ({
    correctedQuery: '',
    wordCorrections: [],
});
function getDidYouMeanInitialState() {
    return {
        enableDidYouMean: false,
        wasCorrectedTo: '',
        wasAutomaticallyCorrected: false,
        queryCorrection: emptyCorrection(),
    };
}
const didYouMeanReducer = createReducer(getDidYouMeanInitialState(), (builder) => {
    builder
        .addCase(enableDidYouMean, (state) => {
        state.enableDidYouMean = true;
    })
        .addCase(disableDidYouMean, (state) => {
        state.enableDidYouMean = false;
    })
        .addCase(executeSearch.pending, (state) => {
        state.queryCorrection = emptyCorrection();
        state.wasAutomaticallyCorrected = false;
        state.wasCorrectedTo = '';
    })
        .addCase(executeSearch.fulfilled, (state, action) => {
        state.queryCorrection =
            action.payload.response.queryCorrections[0] || emptyCorrection();
        state.wasAutomaticallyCorrected = action.payload.automaticallyCorrected;
    })
        .addCase(didYouMeanCorrection, (state, action) => {
        state.wasCorrectedTo = action.payload;
    });
});

function getFacetSearchSetInitialState() {
    return {};
}
const facetSearchSetReducer = createReducer(getFacetSearchSetInitialState(), (builder) => {
    builder
        .addCase(registerFacetSearch, (state, action) => {
        const payload = action.payload;
        const { facetId } = payload;
        if (state[facetId]) {
            return;
        }
        const options = buildFacetSearchOptions(payload);
        state[facetId] = buildFacetSearchState({ options });
    })
        .addCase(updateFacetSearch, (state, action) => {
        const { facetId, ...rest } = action.payload;
        const search = state[facetId];
        if (!search) {
            return;
        }
        search.options = { ...search.options, ...rest };
    })
        .addCase(executeFacetSearch.fulfilled, (state, action) => {
        const { facetId, response } = action.payload;
        const search = state[facetId];
        if (!search) {
            return;
        }
        search.response = response;
    });
});
function buildFacetSearchState(config = {}) {
    return {
        options: buildFacetSearchOptions(),
        response: buildNullFacetSearchResponse(),
        ...config,
    };
}
function buildFacetSearchOptions(config = {}) {
    return {
        captions: {},
        numberOfValues: 10,
        query: '',
        ...config,
    };
}
function buildNullFacetSearchResponse() {
    return {
        moreValuesAvailable: false,
        values: [],
    };
}

/**
 * Map of reducers that make up the SearchPageState.
 */
const searchPageReducers = {
    configuration: configurationReducer,
    facetSet: facetSetReducer,
    rangeFacetSet: rangeFacetSetReducer,
    facetSearchSet: facetSearchSetReducer,
    query: queryReducer,
    querySet: querySetReducer,
    pagination: paginationReducer,
    redirection: redirectionReducer,
    querySuggest: querySuggestReducer,
    search: searchReducer,
    sortCriteria: sortCriteriaReducer,
    context: contextReducer,
    history: undoable(historyReducer, getHistoryEmptyState()),
    didYouMean: didYouMeanReducer,
    pipeline: pipelineReducer,
};

class Controller {
    constructor(engine) {
        this.engine = engine;
    }
    /**
     * Adds a callback that will be called on state change.
     *
     * @param listener A callback to be invoked on state change.
     * @returns An unsubscribe function to remove the listener.
     */
    subscribe(listener) {
        listener();
        return this.engine.subscribe(() => listener());
    }
    get dispatch() {
        return this.engine.dispatch;
    }
}
function buildController(engine) {
    const subscribe = (listener) => {
        listener();
        return engine.subscribe(() => listener());
    };
    return { subscribe };
}

const randomID = (prepend, length = 5) => prepend +
    Math.random()
        .toString(36)
        .substr(2, 2 + length);
function isArray(value) {
    return Array.isArray(value);
}

/**
 * Log trigger redirection
 */
const logTriggerRedirect = createAsyncThunk('analytics/trigger/redirection', async (_, { getState }) => {
    const state = searchPageState(getState);
    if (state.redirection.redirectTo !== null) {
        await configureAnalytics(state).logTriggerRedirect({
            redirectedTo: state.redirection.redirectTo,
        });
    }
    return makeSearchActionType();
});

/**
 * Log searchbox submit
 */
const logSearchboxSubmit = createAsyncThunk('analytics/searchbox/submit', async (_, { getState }) => {
    const state = searchPageState(getState);
    await configureAnalytics(state).logSearchboxSubmit();
    return makeSearchActionType();
});

const optionsSchema = new Schema({
    /**
     * A unique identifier for the controller.
     * By default, a unique random identifier is generated.
     */
    id: new StringValue({
        default: () => randomID('search_box'),
        emptyAllowed: false,
    }),
    /**
     * The number of query suggestions to request from Coveo ML (e.g., `3`).
     *
     * Using the value `0` disables the query suggest feature.
     *
     * @default 5
     */
    numberOfSuggestions: new NumberValue({ default: 5, min: 0 }),
    /**
     * Whether the search box is standalone.
     *
     * Submitting a query from a standalone search box will redirect the user to another page.
     *
     * @default false
     */
    isStandalone: new BooleanValue({ default: false }),
});
/**
 * The `SearchBox` headless controller offers a high-level interface for designing a common search box UI controller.
 */
class SearchBox extends Controller {
    constructor(engine, props = {}) {
        super(engine);
        this.text = '';
        this.options = optionsSchema.validate(props.options);
        this.registerQuery();
        this.registerQuerySuggest();
    }
    /**
     * A unique identifier for the controller.
     */
    get id() {
        return this.options.id;
    }
    /**
     * Updates the search box text value and shows the suggestions for that value.
     * @param value  The string value to update the search box with.
     */
    updateText(value) {
        this.dispatch(updateQuerySetQuery({ id: this.options.id, query: value }));
        if (this.options.numberOfSuggestions) {
            this.showSuggestions();
        }
    }
    /**
     * Clears the search box text and the suggestions.
     */
    clear() {
        this.dispatch(clearQuerySuggest({ id: this.options.id }));
    }
    /**
     * Clears the suggestions.
     */
    hideSuggestions() {
        this.dispatch(clearQuerySuggestCompletions({ id: this.options.id }));
    }
    /**
     * Shows the suggestions for the current search box value.
     */
    showSuggestions() {
        this.dispatch(fetchQuerySuggestions({ id: this.options.id }));
    }
    /**
     * Selects a suggestion and calls `submit`.
     * @param value The string value of the suggestion to select
     */
    selectSuggestion(value) {
        this.dispatch(selectQuerySuggestion({ id: this.options.id, expression: value }));
        this.submit();
    }
    /**
     * If the `standalone` option is `true`, gets the redirection URL.
     * If the `standalone` option is `false`, triggers a search query.
     */
    submit() {
        this.dispatch(updateQuery({ q: this.state.value }));
        this.dispatch(updatePage(1));
        if (this.options.isStandalone) {
            this.dispatch(checkForRedirection()).then(() => this.dispatch(logTriggerRedirect()));
            return;
        }
        this.dispatch(executeSearch(logSearchboxSubmit()));
    }
    /**
     * @returns The state of the `SearchBox` controller.
     */
    get state() {
        const state = this.engine.state;
        const querySuggestState = state.querySuggest[this.options.id];
        return {
            value: state.querySet[this.options.id],
            suggestions: querySuggestState.completions.map((completion) => ({
                value: completion.expression,
            })),
            redirectTo: state.redirection.redirectTo,
        };
    }
    registerQuery() {
        const action = registerQuerySetQuery({ id: this.options.id, query: '' });
        this.dispatch(action);
    }
    registerQuerySuggest() {
        this.dispatch(registerQuerySuggest({
            id: this.options.id,
            q: this.engine.state.query.q,
            count: this.options.numberOfSuggestions,
        }));
    }
}

function firstResultSelector(state) {
    return state.pagination.firstResult;
}
function numberOfResultsSelector(state) {
    return state.pagination.numberOfResults;
}
function totalCountFilteredSelector(state) {
    return state.pagination.totalCountFiltered;
}
/** Calculates the current page number.
 * @param state SearchPageState.
 * @returns the current page number.
 */
const currentPageSelector = createSelector(firstResultSelector, numberOfResultsSelector, calculatePage);
/** Calculates the maximum page number
 * @param state SearchPageState.
 * @returns the maximum page number.
 */
const maxPageSelector = createSelector(totalCountFilteredSelector, numberOfResultsSelector, calculateMaxPage);
/** Calculates the current pages relative to the current page.
 * @param state SearchPageState.
 * @param desiredNumberOfPages the number of pages to return.
 * @returns the current page numbers.
 */
const currentPagesSelector = createSelector(currentPageSelector, maxPageSelector, (_, desiredNumberOfPages) => desiredNumberOfPages, (page, maxPage, desiredNumberOfPages) => {
    let range = buildRange(page, desiredNumberOfPages);
    range = shiftRightIfNeeded(range);
    range = shiftLeftIfNeeded(range, maxPage);
    return buildCurrentPages(range);
});
function buildRange(page, desiredNumberOfPages) {
    const isEven = desiredNumberOfPages % 2 === 0;
    const leftCapacity = Math.floor(desiredNumberOfPages / 2);
    const rightCapacity = isEven ? leftCapacity - 1 : leftCapacity;
    const start = page - leftCapacity;
    const end = page + rightCapacity;
    return { start, end };
}
function shiftRightIfNeeded(range) {
    const leftExcess = Math.max(minimumPage - range.start, 0);
    const start = range.start + leftExcess;
    const end = range.end + leftExcess;
    return { start, end };
}
function shiftLeftIfNeeded(range, maxPage) {
    const rightExcess = Math.max(range.end - maxPage, 0);
    const start = Math.max(range.start - rightExcess, minimumPage);
    const end = range.end - rightExcess;
    return { start, end };
}
function buildCurrentPages(range) {
    const currentPages = [];
    for (let counter = range.start; counter <= range.end; ++counter) {
        currentPages.push(counter);
    }
    return currentPages;
}

/**
 * Log pager resize
 */
const logPagerResize = createAsyncThunk('analytics/pager/resize', async (_, { getState }) => {
    const state = searchPageState(getState);
    await configureAnalytics(state).logPagerResize({
        currentResultsPerPage: state.pagination.numberOfResults,
    });
    return makeSearchActionType();
});
/**
 * Log page number
 */
const logPageNumber = createAsyncThunk('analytics/pager/number', async (_, { getState }) => {
    const state = searchPageState(getState);
    await configureAnalytics(state).logPagerNumber({
        pagerNumber: currentPageSelector(state),
    });
    return makeSearchActionType();
});
/**
 * Log pager next
 */
const logPageNext = createAsyncThunk('analytics/pager/next', async (_, { getState }) => {
    const state = searchPageState(getState);
    await configureAnalytics(state).logPagerNext({
        pagerNumber: currentPageSelector(state),
    });
    return makeSearchActionType();
});
/**
 * Log pager previous
 */
const logPagePrevious = createAsyncThunk('analytics/pager/previous', async (_, { getState }) => {
    const state = searchPageState(getState);
    await configureAnalytics(state).logPagerPrevious({
        pagerNumber: currentPageSelector(state),
    });
    return makeSearchActionType();
});

const optionsSchema$1 = new Schema({
    /** The number of pages to display in the pager. */
    numberOfPages: new NumberValue({ default: 5, min: 0 }),
});
class Pager extends Controller {
    constructor(engine, props = {}) {
        super(engine);
        this.initOptions(props.options);
        this.register(props.initialState);
    }
    initOptions(options) {
        this.options = optionsSchema$1.validate(options);
    }
    register(initialState) {
        const page = initialState === null || initialState === void 0 ? void 0 : initialState.page;
        if (page) {
            this.dispatch(registerPage(page));
        }
    }
    /**
     * Updates the results to those on the passed page.
     * @param page The page number.
     */
    selectPage(page) {
        this.dispatch(updatePage(page));
        this.dispatch(executeSearch(logPageNumber()));
    }
    /**
     * Updates the results to those on the next page.
     */
    nextPage() {
        this.dispatch(nextPage());
        this.dispatch(executeSearch(logPageNext()));
    }
    /**
     * Updates the results to those on the previous page.
     */
    previousPage() {
        this.dispatch(previousPage());
        this.dispatch(executeSearch(logPagePrevious()));
    }
    /**
     * Returns `true` when a next page is available, and `false` otherwise.
     */
    get hasNextPage() {
        const { currentPage, maxPage } = this.state;
        return currentPage < maxPage;
    }
    /**
     * Returns `true` when a previous page is available, and `false` otherwise.
     */
    get hasPreviousPage() {
        const { currentPage, maxPage } = this.state;
        return currentPage > minimumPage && maxPage > 0;
    }
    /** Returns `true` when the current page is equal to the current page, and `false` otherwise.
     * @param page The page number to check.
     * @returns boolean.
     */
    isCurrentPage(page) {
        return page === this.state.currentPage;
    }
    /**
     * @returns The state of the `Pager` controller.
     */
    get state() {
        return {
            currentPage: this.currentPage,
            currentPages: this.currentPages,
            maxPage: this.maxPage,
        };
    }
    get currentPages() {
        const { numberOfPages } = this.options;
        return currentPagesSelector(this.engine.state, numberOfPages);
    }
    get currentPage() {
        return currentPageSelector(this.engine.state);
    }
    get maxPage() {
        return maxPageSelector(this.engine.state);
    }
}

class ResultList extends Controller {
    constructor(engine) {
        super(engine);
    }
    /**
     * @returns The state of the `ResultList` controller.
     */
    get state() {
        const state = this.engine.state;
        return {
            results: state.search.response.results,
        };
    }
}

class ResultsPerPage extends Controller {
    constructor(engine, props = {}) {
        super(engine);
        this.props = props;
        this.register();
    }
    /** Updates the number of results to request
     * @param number The number of results.
     */
    set(num) {
        this.dispatch(updateNumberOfResults(num));
        this.dispatch(executeSearch(logPagerResize()));
    }
    /** Returns `true` if the number of results is equal to the passed value, and `false` otherwise.
     * @returns boolean
     */
    isSetTo(num) {
        return num === this.state.numberOfResults;
    }
    /**
     * @returns The state of the `ResultsPerPage` controller.
     */
    get state() {
        return {
            numberOfResults: this.engine.state.pagination.numberOfResults,
        };
    }
    register() {
        var _a;
        const num = (_a = this.props.initialState) === null || _a === void 0 ? void 0 : _a.numberOfResults;
        if (num !== undefined) {
            this.dispatch(registerNumberOfResults(num));
        }
    }
}

/**
 * Log results sort
 */
const logResultsSort = createAsyncThunk('analytics/sort/results', async (_, { getState }) => {
    const state = searchPageState(getState);
    await configureAnalytics(state).logResultsSort({
        resultsSortBy: state.sortCriteria,
    });
    return makeSearchActionType();
});

class Sort extends Controller {
    constructor(engine, props = {}) {
        super(engine);
        this.props = props;
        this.register();
    }
    /**
     * Updates the sort criterion and executes a new search.
     * @param criterion The new sort criterion.
     */
    sortBy(criterion) {
        this.dispatch(updateSortCriterion(criterion));
        this.dispatch(updatePage(1));
        this.search();
    }
    /**
     * Returns `true` if the passed sort criterion matches the value in state, and `false` otherwise.
     * @param criterion The criterion to compare.
     * @returns {boolean}
     */
    isSortedBy(criterion) {
        return this.engine.state.sortCriteria === criterion.expression;
    }
    /**
     * @returns The state of the `Sort` controller.
     */
    get state() {
        return {
            sortCriteria: this.engine.state.sortCriteria,
        };
    }
    register() {
        var _a;
        const criterion = (_a = this.props.initialState) === null || _a === void 0 ? void 0 : _a.criterion;
        if (criterion) {
            this.dispatch(registerSortCriterion(criterion));
        }
    }
    search() {
        this.dispatch(executeSearch(logResultsSort()));
    }
}

class QuerySummary extends Controller {
    constructor(engine) {
        super(engine);
    }
    /**
     * @returns The state of the `QuerySummary` controller.
     */
    get state() {
        const state = this.engine.state;
        return {
            firstResult: state.pagination.firstResult + 1,
            lastResult: state.pagination.firstResult + state.search.response.results.length,
            total: state.pagination.totalCountFiltered,
            query: state.search.queryExecuted,
            hasQuery: state.search.queryExecuted !== '',
            hasDuration: state.search.duration !== 0,
            hasResults: state.search.response.results.length !== 0,
            durationInMilliseconds: state.search.duration,
            durationInSeconds: this.durationInSeconds,
        };
    }
    get durationInSeconds() {
        const state = this.engine.state;
        const inSeconds = state.search.duration / 1000;
        return Math.round((inSeconds + Number.EPSILON) * 100) / 100;
    }
}

const facetSelector = (state, id) => {
    return state.search.response.facets.find((response) => response.facetId === id);
};
const facetRequestSelector = (state, id) => {
    return state.facetSet[id];
};

function buildFacetSearch(engine, props) {
    const dispatch = engine.dispatch;
    const facetId = props.options.facetId;
    dispatch(registerFacetSearch(props.options));
    return {
        /** Updates the facet search query.
         * @param text The new query.
         */
        updateText(text) {
            const query = `*${text}*`;
            dispatch(updateFacetSearch({ facetId, query }));
        },
        /** Executes a facet search to update the values.*/
        search() {
            dispatch(executeFacetSearch(facetId));
        },
        /** Selects a search result.*/
        select(value) {
            dispatch(selectFacetSearchResult({ facetId, value }));
            dispatch(executeSearch(logFacetSelect({ facetId, facetValue: value.rawValue })));
        },
        get state() {
            const facetSearch = engine.state.facetSearchSet[facetId];
            return { ...facetSearch.response };
        },
    };
}

const schema = new Schema({
    /**
     * A unique identifier for the controller.
     * By default, a unique random identifier is generated.
     */
    facetId: new StringValue({ default: () => randomID('facet') }),
    /** The field whose values you want to display in the facet.*/
    field: new StringValue({ required: true }),
    delimitingCharacter: new StringValue({ default: '>' }),
    filterFacetCount: new BooleanValue({ default: true }),
    injectionDepth: new NumberValue({ default: 1000 }),
    numberOfValues: new NumberValue({ default: 8, min: 1 }),
});
function buildFacet(engine, props) {
    const controller = buildController(engine);
    const options = schema.validate(props.options);
    const dispatch = engine.dispatch;
    const createFacetSearch = () => {
        const { facetId, facetSearch } = options;
        const facetSearchOptions = {
            facetId,
            ...facetSearch,
        };
        return buildFacetSearch(engine, { options: facetSearchOptions });
    };
    const getRequest = () => {
        const id = options.facetId;
        const state = engine.state;
        return facetRequestSelector(state, id);
    };
    const getResponse = () => {
        const id = options.facetId;
        const state = engine.state;
        return facetSelector(state, id);
    };
    const getNumberOfActiveValues = () => {
        const { currentValues } = getRequest();
        return currentValues.filter((v) => v.state !== 'idle').length;
    };
    const isValueSelected = (value) => value.state === 'selected';
    const getAnalyticsActionForToggleSelect = (selection) => {
        const payload = {
            facetId: options.facetId,
            facetValue: selection.value,
        };
        return isValueSelected(selection)
            ? logFacetDeselect(payload)
            : logFacetSelect(payload);
    };
    dispatch(registerFacet(options));
    return {
        ...controller,
        facetSearch: createFacetSearch(),
        /**
         * Selects (deselects) the passed value if unselected (selected).
         * @param selection The facet value to select or deselect.
         */
        toggleSelect(selection) {
            const facetId = options.facetId;
            const analyticsAction = getAnalyticsActionForToggleSelect(selection);
            dispatch(toggleSelectFacetValue({ facetId, selection }));
            dispatch(executeSearch(analyticsAction));
        },
        /**
         * Returns `true` is the passed facet value is selected and `false` otherwise.
         * @param facetValue The facet value to check.
         * @returns {boolean}.
         */
        isValueSelected,
        /** Deselects all facet values.*/
        deselectAll() {
            const id = options.facetId;
            dispatch(deselectAllFacetValues(id));
            dispatch(executeSearch(logFacetClearAll(id)));
        },
        /**
         * Returns `true` if the facet has selected values and `false` otherwise.
         * @returns {boolean}.
         */
        get hasActiveValues() {
            return this.state.values.some((facetValue) => facetValue.state !== 'idle');
        },
        /** Sorts the facet values according to the passed criterion.
         * @param {FacetSortCriterion} criterion The criterion to sort values by.
         */
        sortBy(criterion) {
            const facetId = options.facetId;
            dispatch(updateFacetSortCriterion({ facetId, criterion }));
            dispatch(executeSearch(logFacetUpdateSort({ facetId, criterion })));
        },
        /**
         * Returns `true` if the facet values are sorted according to the passed criterion and `false` otherwise.
         * @param {FacetSortCriterion} criterion The criterion to compare.
         */
        isSortedBy(criterion) {
            return this.state.sortCriterion === criterion;
        },
        /**
         * Increases the number of values displayed in the facet.
         */
        showMoreValues() {
            const facetId = options.facetId;
            const numberInState = getRequest().numberOfValues;
            const configuredNumber = options.numberOfValues;
            const numberToNextMultipleOfConfigured = configuredNumber - (numberInState % configuredNumber);
            const numberOfValues = numberInState + numberToNextMultipleOfConfigured;
            dispatch(updateFacetNumberOfValues({ facetId, numberOfValues }));
            dispatch(updateFacetSortCriterion({ facetId, criterion: 'alphanumeric' }));
            dispatch(executeSearch(logFacetShowMore(facetId)));
        },
        /** Returns `true` if there are more values to display and `false` otherwise.*/
        get canShowMoreValues() {
            const res = getResponse();
            return res ? res.moreValuesAvailable : false;
        },
        /** Sets the displayed number of values to the originally configured value.*/
        showLessValues() {
            const { facetId, numberOfValues } = options;
            const newNumberOfValues = Math.max(numberOfValues, getNumberOfActiveValues());
            dispatch(updateFacetNumberOfValues({ facetId, numberOfValues: newNumberOfValues }));
            dispatch(updateFacetSortCriterion({ facetId, criterion: 'score' }));
            dispatch(executeSearch(logFacetShowLess(facetId)));
        },
        /** Returns `true` if fewer values can be displayed and `false` otherwise.*/
        get canShowLessValues() {
            const { currentValues } = getRequest();
            const configuredNumber = options.numberOfValues;
            const hasIdleValues = !!currentValues.find((v) => v.state === 'idle');
            return configuredNumber < currentValues.length && hasIdleValues;
        },
        /**
         * @returns The state of the `Facet` controller.
         */
        get state() {
            const request = getRequest();
            const response = getResponse();
            const sortCriterion = request.sortCriteria;
            const values = response ? response.values : [];
            return {
                values,
                sortCriterion,
            };
        },
    };
}

class Context extends Controller {
    constructor(engine) {
        super(engine);
    }
    /**
     * @returns The state of the `Context` controller.
     */
    get state() {
        const state = this.engine.state;
        return {
            contextValues: state.context.contextValues,
        };
    }
    /**
     * Set the context for the query. Replace any existing context by the new one.
     * @param ctx The context to set in the query.
     */
    setContext(ctx) {
        this.dispatch(setContext(ctx));
    }
    /**
     * Add, or replace if already present, a new context key and value pair.
     * @param key The context key to add.
     * @param value The context value to add.
     */
    addContext(key, value) {
        this.dispatch(addContext({ contextKey: key, contextValue: value }));
    }
    /**
     * Remove a context key from the query.
     * @param key The context key to remove.
     */
    removeContext(key) {
        this.dispatch(removeContext(key));
    }
}

class QueryError extends Controller {
    constructor(engine) {
        super(engine);
    }
    /**
     * @returns The state of the `QueryError` component.
     */
    get state() {
        const state = this.engine.state;
        return {
            hasError: state.search.error !== null,
            error: state.search.error,
        };
    }
}

class History extends Controller {
    constructor(engine) {
        super(engine);
    }
    /**
     * @returns The state of the `History` controller.
     */
    get state() {
        const state = this.engine.state.history;
        return state;
    }
    async back() {
        await this.dispatch(back());
        this.dispatch(executeSearch(logNavigateBackward()));
    }
    async forward() {
        await this.dispatch(forward());
        this.dispatch(executeSearch(logNavigateForward()));
    }
}

/**
 * The DidYouMean controller is responsible for handling query corrections.
 * When a query returns no result but finds a possible query correction, the controller either suggests the correction or
 * automatically triggers a new query with the suggested term.
 */
class DidYouMean extends Controller {
    constructor(engine) {
        super(engine);
        this.dispatch(enableDidYouMean());
    }
    /**
     * @returns The state of the `DidYouMean` controller.
     */
    get state() {
        const state = this.engine.state;
        return {
            ...state.didYouMean,
            hasQueryCorrection: state.didYouMean.queryCorrection.correctedQuery !== '' ||
                state.didYouMean.wasCorrectedTo !== '',
        };
    }
    applyCorrection() {
        this.dispatch(updateQuery({ q: this.state.queryCorrection.correctedQuery }));
        this.dispatch(didYouMeanCorrection(this.state.queryCorrection.correctedQuery));
        this.dispatch(executeSearch(logDidYouMeanClick()));
    }
}

class Pipeline extends Controller {
    constructor(engine) {
        super(engine);
    }
    /**
     * @returns The state of the `Pipeline` controller.
     */
    get state() {
        const state = this.engine.state;
        return {
            pipeline: state.pipeline,
        };
    }
    setPipeline(pipeline) {
        this.dispatch(setPipeline(pipeline));
    }
}

const prioritySchema = new Schema({
    priority: new NumberValue({ required: false, default: 0, min: 0 }),
});
/**
 * Manager in which result templates can be registered and selected based on a list of conditions and priority.
 */
class ResultTemplatesManager {
    constructor() {
        this.templates = [];
    }
    registerTemplates(...templates) {
        this.validateTemplates(templates);
        this.templates.push(...templates.map((template) => ({
            ...template,
            priority: template.priority || 0,
        })));
        this.templates.sort((a, b) => b.priority - a.priority);
    }
    validateTemplates(templates) {
        templates.forEach((template) => {
            prioritySchema.validate(template);
            const areConditionsValid = template.conditions.every((condition) => condition instanceof Function);
            if (!areConditionsValid) {
                throw new Error('Result template conditions are invalid');
            }
        });
    }
    selectTemplate(result) {
        const template = this.templates.find((template) => template.conditions.every((condition) => condition(result)));
        return template ? template.content : null;
    }
}

/**
 * Condition that verifies if a field value contains any of the specified values.
 * @param fieldName Name of the field to match against.
 * @param valuesToMatch List of possible values to match.
 */
const fieldMustMatch = (fieldName, valuesToMatch) => {
    return (result) => {
        const fieldValues = getFieldValuesFromResult(fieldName, result);
        return valuesToMatch.some((valueToMatch) => fieldValues.some((fieldValue) => `${fieldValue}`.toLowerCase() === valueToMatch.toLowerCase()));
    };
};
/**
 * Condition that verifies that a field value does not contains any of the specified values.
 * @param fieldName Name of the field to verify against.
 * @param blacklistedValues List of all values to blacklist.
 */
const fieldMustNotMatch = (fieldName, blacklistedValues) => {
    return (result) => {
        const fieldValues = getFieldValuesFromResult(fieldName, result);
        return blacklistedValues.every((blacklistedValue) => fieldValues.every((fieldValue) => `${fieldValue}`.toLowerCase() !== blacklistedValue.toLowerCase()));
    };
};
const getFieldValuesFromResult = (fieldName, result) => {
    const rawValue = result.raw[fieldName];
    return isArray(rawValue) ? rawValue : [rawValue];
};

var resultTemplatesHelpers = /*#__PURE__*/Object.freeze({
	__proto__: null,
	fieldMustMatch: fieldMustMatch,
	fieldMustNotMatch: fieldMustNotMatch
});

export { Context, Controller, DidYouMean, HeadlessEngine, History, Pager, Pipeline, QueryError, QuerySummary, ResultList, ResultTemplatesManager, ResultsPerPage, SearchBox, Sort, analyticsActions, buildCompositeSortCriterion, buildController, buildDateSortCriterion, buildFacet, buildFieldSortCriterion, buildNoSortCriterion, buildQueryRankingExpressionSortCriterion, buildRelevanceSortCriterion, configurationActions, createAction, createAsyncThunk, createReducer, currentPageSelector, currentPagesSelector, facetSetActions as facetActions, facetRequestSelector, facetSelector, historyActions, maxPageSelector, paginationActions, pipelineActions, queryActions, querySetActions, querySuggestActions, redirectionActions, resultTemplatesHelpers, searchActions, searchPageReducers, sortCriteriaActions as sortCriterionActions };
