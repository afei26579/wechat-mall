const app = getApp();

App({
  onLaunch: function () {
    // 初始化小程序
    console.log('小程序启动');
  },
  globalData: {
    userInfo: null,
    cart: []
  }
});