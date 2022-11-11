// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {

  },
  //页面跳转函数
  goToStartPage: function() {
    wx.navigateTo({
      url:'/pages/start/start',
    })
  },
  goToRulestPage: function() {
    wx.navigateTo({
      url:'/pages/rules/rules',
    })
  },
  goToHelpPage: function(e) {
    wx.navigateTo({
      url:'/pages/help/help',
    })
  },
  //分享到微信好友
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '快来一起玩吧！！！',
      path: '/page/index/index',
      imageUrl:'',
      success: function (res) {
        console.log("分享成功")
      },
      fail: function (res) {
        console.log("分享失败")
      }}
    },
  //分享到朋友圈
  onShareTimeline: function() {
    return {
      title: '博饼小游戏，快来一起玩吧',
      path: '/page/index/index',
      imageUrl:'',
      query: 'kjbfrom=pyq'
    }
  }
})
