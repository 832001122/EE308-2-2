// pages/staPeo/staPeo.js
Page({
  data: {
    
    selectArray: [{
      "text": "1位玩家"
    }, {
      "text": "2位玩家"
    }, {
      "text": "3位玩家"
    }, {
      "text": "4位玩家"
    }, {
      "text": "5位玩家"
    }, {
      "text": "6位玩家"
    }],
    people:0,
  },
  
  getDate:function(e){
    let obj=this
    obj.data.people=e.detail.id+1
    console.log(obj.data.people)
  },
  
  goToGamePage: function(e) {
    var that = this
    wx.navigateTo({
      url:'/pages/staGame/staGame?people1='+that.data.people,
    })
  },
})