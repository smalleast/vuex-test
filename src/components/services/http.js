/*import Qs from 'qs'
 export default{

 url: '/findSellerCenterInfo_100',
 baseURL: 'http://testapp.dcpai.cn/app/interface/mobile/pmall',
 method: 'POST',

 transformRequest: [function (data) {
 //为了避免qs格式化时对内层对象的格式化先把内层的对象转为
 data.CustData = JSON.stringify(data.CustData);
 //由于使用的form-data传数据所以要格式化
 data = Qs.stringify(data);
 return data;
 }],


 transformResponse: [function (data) {

 return data;
 }],

 headers: {'Content-Type': 'application/x-www-form-urlencoded','clientType':'H5'},


 params: {},


 paramsSerializer: function (params) {
 return Qs.stringify(params)
 },


 data: {
 postId: "2517"
 },


 timeout: 1000,


 withCredentials: false, // default


 responseType: 'json', // default


 onUploadProgress: function (progressEvent) {
 // Do whatever you want with the native progress event
 },


 onDownloadProgress: function (progressEvent) {
 // Do whatever you want with the native progress event
 },


 maxContentLength: 2000,


 validateStatus: function (status) {
 return status >= 200 && status < 300; // default
 },


 maxRedirects: 5, // default
 }*/
import nx from 'next-js-core2';
import nxAxios from 'next-axios';
import Q from 'q';
import axios from 'axios';

const WeiPaiHttp = nx.declare({
  extends: nxAxios,
  statics: {
    instance: null,
    getInstance: function () {
      if (!WeiPaiHttp.instance) {
        WeiPaiHttp.instance = new WeiPaiHttp();
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
        baseURL: 'http://testapp.dcpai.cn' || './'
      });
      this.setRequestInterceptor();
    },
    initHeaders: function () {
      this.setHeaders({
        'clientType':'H5'
      })
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
      const defer = Q.defer();
      const $hash = nx.hashlize();
      return defer.reject(errorResponse);
    },
    toData: function (inResponse) {
      return inResponse.data;
    },
    authorization: function () {

    }
  }
});

export default WeiPaiHttp.getInstance();



