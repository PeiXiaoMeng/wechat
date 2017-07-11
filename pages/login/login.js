Page({
  data: {
    name: '李雅洁',
    xue: '本科',
    work: '前端工程师',
    tel: '18435179662',
    sex: '女',
    age: '23',
    display: "none",
    display1:"none",
    imgurl: "../images/xin1.png",
    count: '0',
    flag: true,
    animationDatal:{},
    animationDatar:{},
    lastX: 0,
    lastY: 0,
  },
  handletouchmove: function (event) {
    let currentX = event.touches[0].pageX
    let currentY = event.touches[0].pageY
    // console.log(this.data.lastX)
    if ((currentX - this.data.lastX) < 0){    //向左滑
        this.setData({
          display: "block",
        })
        var an = wx.createAnimation({
          duration: 1000,
          timingFunction: 'ease',
        })
        this.an = an
        an.translateX(-102.5).step()
        var that = this;
        setTimeout(function () {
          // console.log(1)
          that.setData({
            animationDatal: an.export()
          })
        }, 10)
    } else{         //向右滑
          // console.log(this.data) 
       if (this.data.display1 == "none"){    //×没出现
        this.setData({
          display1: "block"
        })
      }else{                   //x出现
         if(this.data.display == "none") {    //分享没出现
           // console.log(1)
           this.setData({
             display1: "block"
           })
         }else{          //分享出现
           this.setData({
             display: "block"
           })
          var an = wx.createAnimation({
              duration: 1000,
              timingFunction: 'ease',
            })
          this.an = an
          an.translateX(0).step()
          var that = this;
            setTimeout(function () {
              // console.log(1)
              that.setData({
                animationDatal: an.export()
              })
            }, 10)

          }
        
      }





        
    } 

    //将当前坐标进行保存以进行下一次计算
    this.data.lastX = currentX
    this.data.lastY = currentY
    // this.setData({
    //   text: text,
    // });
  },

  handletouchtart: function (event) {
    // console.log(event)
    this.data.lastX = event.touches[0].pageX
    this.data.lastY = event.touches[0].pageY
  },
  onShareAppMessage: function () {
    // 用户点击右上角分享
    return {
      title: '分享', // 分享标题
      desc: '分享', // 分享描述
      path: '/pages/index?id=123' // 分享路径
    }
    wx.showShareMenu({
      withShareTicket: false
    })
  },
  del:function(){
    wx.showModal({
      title: '提示',
      content: '您确定要删除此名片？',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定');
          
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})