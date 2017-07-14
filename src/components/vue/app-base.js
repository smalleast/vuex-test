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
      result = global[Store.engine];
      return result;
    },
    clear: function (inKey) {
      global[Store.engine].removeItem(inKey);
    },
    clearAll: function (inArray) {
      if(Array.isArray(inArray)){
        inArray.forEach(function(item){
          Store.clear(item);
        })
      }else{
        global[Store.engine].clear();
      }
    }
  };
  module.exports = Store;
}());
