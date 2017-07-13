/**
 * Created by dcpai on 2017/7/6.
 */

export default class {

}
(function () {

  const Config = {
    API_WITH_TOKEN: {
      baseUrl: '/weipai/i/wp/pmall/',
      items: [
        'test1',
        'loginByPublic_100',
        'getWeixinShareSign_100',
        'generateLotShareQRCode_100',
        'generateLotShareLink_100',
        'generateLotCommonShare_100',
        'generateExqCommonShare_100',
        'generateMarketCommonShare_100',
        'generateMemberCommonShare_100',
        'weiXinUnifiedOrderNotify_100'
      ]
    },
    API_WITHOUT_TOKEN: {
      baseUrl: '/weipai/i/wp/',
      items: [
        'findMyFocusPage_100',
        'findMyFansPage_100',
        'findMyFavoriteLotPage_100',
        'findSellerCenterInfo_100'
      ]
    }
  };
  module.exports = Config;
}());
