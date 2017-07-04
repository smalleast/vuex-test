/**
 * Created by dcpai on 2017/7/4.
 */
(function () {
  let global = window || this;
  let ENGIE_LOCAL = 'localStorage';
  let ENGIE_SESSION = 'sessionStorage';
  const Store = {
    engine: ENGIE_LOCAL,
    set local(str) {
      this.engine = ENGIE_LOCAL;
      this.sets(str);
    },
    get local() {
      this.engine = ENGIE_LOCAL;
      return this.gets();
    },
    set session(str) {
      this.engine = ENGIE_SESSION;
      this.sets(str);
    },
    get session() {
      this.engine = ENGIE_SESSION;
      return this.gets();
    },
    set: function (inKey, inValue) {
      global[Store.engine].setItem(inKey, JSON.stringify(inValue));
    },
    get: function (inKey) {
      let value = global[Store.engine].getItem(inKey);
      return value;
    },
    sets: function (inObject) {
      for (let inKey in inObject) {
        Store.set(inKey, inObject[inKey]);
      }
    },
    gets: function (inKeys) {
      let result = {};
      let keys = inKeys || [];
      let i = 0, key;
      let storeEngine = global[Store.engine];
      if (keys.length === 0) {
        for (i = 0; i < storeEngine.length; i++) {
          key = storeEngine.key(i);
          keys.push(key);
        }
      }
      for (let k in keys) {
        result[key] = Store.get(keys[k]);
      }
      return result;
    }
  };
  module.exports = Store;
}());
