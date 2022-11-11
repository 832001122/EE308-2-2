// pages/start/start.js
Page({
  data: {

  },
  //页面跳转
  goToStandalonePage: function() {
    wx.navigateTo({
      url:'/pages/staPeo/staPeo',
    })
  },
})