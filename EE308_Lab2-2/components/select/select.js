// components/select/select.js
Component({
  /**
   * 组件的属性列表
   */
    properties: {
        propArray:{
            type:Array,
        }
    },
  /**
   * 组件的初始数据
   */
    data: {
        selectShow:false,
        nowText:"请选择游戏人数",
        animationData:{}
    },
  /**
   * 组件的方法列表
   */
    methods: {
　　　//option的显示与否
        selectToggle:function(){
            var nowShow=this.data.selectShow;
            
            var animation = wx.createAnimation({
                timingFunction:"ease"
            })
            this.animation=animation;
            if(nowShow){
                animation.rotate(0).step();
                this.setData({
                    animationData: animation.export()
                })
            }else{
                animation.rotate(180).step();                
                this.setData({
                    animationData: animation.export()
                })
            }
            this.setData({
                selectShow: !nowShow
            })
        },
        //设置内容
        setText:function(e){
            var nowData = this.properties.propArray;
            var nowIdx = e.target.dataset.index;
            var nowText = nowData[nowIdx].text;
            
            this.animation.rotate(0).step();
            this.setData({
                selectShow: false,
                nowText:nowText,
                animationData: this.animation.export()
            })
            var nowDate={
                id:nowIdx,
                text:nowText
            }
            this.triggerEvent('myget', nowDate)
        }
    }
})