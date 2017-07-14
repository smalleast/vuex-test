/**
 * Created by dcpai on 2017/7/6.
 */

export default class {

}
(function () {

  const Config = {
    API_WITH_TOKEN: {
      baseUrl: '/app/interface/mobile/pmall/',
      items: [
        'findPostDetailInfo_300'
      ]
    },
    API_WITHOUT_TOKEN: {
      baseUrl: '/app/interface/mobile/',
      items: [
        '',
      ]
    }
  };
  module.exports = Config;
}());
