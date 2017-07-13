/**
 * Created by dcpai on 2017/7/6.
 */
import Http from './http';
import Config from './config';
import Q from 'q';

export default nx.declare({

  statics: {
    all(apis){
      return Q.all(apis);
    },
    init () {
      this.apiWithoutToken();
      this.apiWithToken();
    },
    apiWithoutToken () {
      let Apis = Config.API_WITHOUT_TOKEN;
      Apis.items.forEach((item) => {
        this[item] = function (inData) {
          return Http.post(`${Apis.baseUrl}${item}`, inData);
        };
      });
    },
    apiWithToken(){
      let Apis = Config.API_WITH_TOKEN;
      Apis.items.forEach((item) => {
        this[item] = (inData) => {
          return Http.post(`${Apis.baseUrl}${item}`, inData);
        };
      });
    }
  }
});
