/**
 * Created by dcpai on 2017/7/6.
 */
import nx from 'next-js-core2';
import nxAxios from 'next-axios';
import nxStore from 'next-store';
import Config from './config';
import Q from 'q';
import Wxsdk from 'next-wxsdk';
import axios from 'axios';

const WeiPaiHttp = nx.declare({
  extends: nxAxios,
  statics: {
    instance: null,
    getInstance: function () {
      if (!WeiPaiHttp.instance) {
        WeiPaiHttp.instance = new WeiPaiHttp();
        console.log('weipaihttp.instance');
      }
      return WeiPaiHttp.instance;
    }
  },
  methods: {
    init: function () {
      const env = nx.hashlize().env;
      this.$base.init.call(this);
      this.authorization();
      this.initHeaders();
      this.setDefaults({
        timeout: 600000,
        baseURL: Config.SERVER_URL || './'
      });
      this.setRequestInterceptor();
    },
    initHeaders: function () {
      //mock:
      // let hash = nx.hashlize();
      // let token = hash.token;
      // if (token) {
      //   this.setHeaders({
      //     common: {
      //       'Authorization': `Bearer ${token}`
      //     }
      //   })
      // }
    },
    setRequestInterceptor: function () {
      axios.interceptors.request.use(function (config) {
        if (config.url.indexOf('/loginByPublic_100') > -1) {
          config.headers.common = nx.delete(config.headers.common, ['Authorization']);
        }
        return config;
      }, function (error) {
        nx.error(error);
      });
    },
    error: function (errorResponse) {
      console.log('error:', errorResponse);

      const defer = Q.defer();
      const $hash = nx.hashlize();
      switch (errorResponse.response.status) {
        case 500:
          console.log('500');
          break;
        case 401:
          const msgData = errorResponse.response.data;
          nxStore.engine = 'localStorage';
          nxStore.clear('shanggu_userinfo');
          console.log('未登录');
          break;
        default:
          console.log('status:', errorResponse.response.status);
          break;
      }
      return defer.reject(errorResponse);
    },
    toData: function (inResponse) {
      return inResponse.data;
    },
    authorization: function () {
      nxStore.engine = "localStorage";
      const shanggu_userinfo = nxStore.get('shanggu_userinfo');
      if (shanggu_userinfo && shanggu_userinfo.accessToken) {
        this.setHeaders({
          common: {
            'Authorization': `Bearer ${shanggu_userinfo.accessToken}`
          }
        });
      }
    }
  }
});

export default WeiPaiHttp.getInstance();



