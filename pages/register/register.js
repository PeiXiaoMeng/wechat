// pages/register/register.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    wvalue1: "",
    wvalue2: "",
    wvalue3: "",
    wbtnbg:"",
    wscmpcol:"",
    wanimationData: {},//name
    wtitwidth: "",
    wtitheight: "",
    wtitbg: "",
    waddanima: {},
    inputbox: "",
    winpdown: {},
    wageanimation: {},//age
    wagetitwidth: "",
    wagetitheight: "",
    wagetitbg: "",
    wageaddanima: {},
    wageinputbox: "",
    wageinpdown: {},
    wdiploanimation: {},//学历信息
    wdiplotitwidth: "",
    wdiplotitheight: "",
    wdiplotitbg: "",
    wdiploaddanima: {},
    wdiploinputbox: "",
    wdiploinpdown: {},
    wskillanimation: {},//技能信息
    wskilltitwidth: "",
    wskilltitheight: "",
    wskilltitbg: "",
    wskilladdanima: {},
    wskillinputbox: "",
    wskillinpdown: {},
    wsexanimation: {},//性别信息
    wsextitwidth: "",
    wsextitheight: "",
    wsextitbg: "",
    wsexaddanima: {},
    wsexinputbox: "",
    wsexinpdown: {},
    wsexright: {},
    items: [
      { name: 'man', value: '男', checked: 'true' },
      { name: 'woman', value: '女' }
    ],
    wlinkanimation: {},//联系信息
    wlinktitwidth: "",
    wlinktitheight: "",
    wlinktitbg: "",
    wlinkaddanima: {},
    wlinkinputbox: "",
    wlinkinpdown: {},
    wcompanyanimation: {},//公司信息
    wcompanytitwidth: "",
    wcompanytitheight: "",
    wcompanytitbg: "",
    wcompanyaddanima: {},
    wcompanyinputbox: "",
    wcompanyinpdown: {},
    wimganimation: {},//相册
    wimglistdis:"",
    wimgtitwidth: "",
    wimgtitheight: "",
    wimgtitbg: "",
    wimgaddanima: {},
    wimginputbox: "",
    wimginpdown: {},
    tempFilePaths:[],
    wsdyy: "",
    array: ['学历', '博士', '硕士', '本科', '专科'],//学历选择内容
    objectArray: [
      {
        id: 0,
        name: '学历'
      },
      {
        id: 1,
        name: '博士'
      },
      {
        id: 2,
        name: '硕士'
      },
      {
        id: 3,
        name: '本科'
      },
      {
        id: 4,
        name: '专科'
      }
    ],
    index: 0,
    taplink:"",//跳转页面
    numberArray: [],//相册增加
    wpldis:""//相册增加按钮消失
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  // 姓名动画
  slide: function () {
    // 标题上右方向移动
    var weh = 88;
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease"
    })
    this.animation = animation;
    this.animation.translate(-25, -10).step();
    while (weh < 172) {
      weh = weh + 10.3;
    }
    this.setData({
      wanimationData: animation.export(),
      wtitwidth: "100%",
      wtitheight: weh + "rpx",
      wtitbg: "transparent",
      inputbox: "block"
    })
    // 加号左移
    var janimation = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease"
    })
    this.animation = janimation;
    this.animation.translateX(-50).step()
    this.setData({
      waddanima: janimation.export(),
    })
    // 输入框下拉
    var winputanimation = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease"
    })
    this.animation = winputanimation;
    this.animation.translateY(42).step()
    this.setData({
      winpdown: winputanimation.export(),
    })
  },
  // 年龄动画
  slide2: function () {
    // 标题上右方向移动
    var weh = 88;
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease"
    })
    this.animation = animation;
    this.animation.translate(-25, -10).step();
    while (weh < 172) {
      weh = weh + 10.3;
    }
    this.setData({
      wageanimation: animation.export(),
      wagetitwidth: "100%",
      wagetitheight: weh + "rpx",
      wagetitbg: "transparent",
      wageinputbox: "block"
    })
    // 加号左移
    var janimation = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease"
    })
    this.animation = janimation;
    this.animation.translateX(-100).step()
    this.setData({
      wageaddanima: janimation.export(),
    })
    // 输入框下拉
    var winputanimation = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease"
    })
    this.animation = winputanimation;
    this.animation.translateY(42).step()
    this.setData({
      wageinpdown: winputanimation.export(),
    })
  },
  // 性别动画
  slide3: function () {
    // 标题上右方向移动
    var weh = 88;
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease"
    })
    this.animation = animation;
    this.animation.translate(-25, -10).step();
    while (weh < 264) {
      weh = weh + 10.3;
    }
    this.setData({
      wsexanimation: animation.export(),
      wsextitwidth: "100%",
      wsextitheight: weh + "rpx",
      wsextitbg: "transparent",
      wsexinputbox: "block"
    })
    // 加号左移
    var janimation = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease"
    })
    this.animation = janimation;
    this.animation.translateX(-50).step()
    this.setData({
      wsexaddanima: janimation.export(),
    })
    // 输入框下拉
    var winputanimation = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease"
    })
    this.animation = winputanimation;
    this.animation.translateY(13).step()
    this.setData({
      wsexinpdown: winputanimation.export(),
    })
    // 性别右移
    var wsexsright = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease"
    })
    this.animation = wsexsright;
    this.animation.translateX(50).step()
    this.setData({
      wsexright: wsexsright.export(),
    })
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  // 联系方式动画
  slide4: function () {
    // 标题上右方向移动
    var weh = 88;
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease"
    })
    this.animation = animation;
    this.animation.translate(-25, -10).step();
    while (weh < 352) {
      weh = weh + 10.3;
    }
    this.setData({
      wlinkanimation: animation.export(),
      wlinktitwidth: "100%",
      wlinktitheight: weh + "rpx",
      wlinktitbg: "transparent",
      wlinkinputbox: "block"
    })
    // 加号左移
    var janimation = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease"
    })
    this.animation = janimation;
    this.animation.translateX(-100).step()
    this.setData({
      wlinkaddanima: janimation.export(),
    })
    // 输入框下拉
    var winputanimation = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease"
    })
    this.animation = winputanimation;
    this.animation.translateY(42).step()
    this.setData({
      wlinkinpdown: winputanimation.export(),
    })
  },
  // 学历信息动画
  slide5: function () {
    // 标题上右方向移动
    var weh = 88;
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease"
    })
    this.animation = animation;
    this.animation.translate(-25, -10).step();
    while (weh < 172) {
      weh = weh + 10.3;
    }
    this.setData({
      wdiploanimation: animation.export(),
      wdiplotitwidth: "100%",
      wdiplotitheight: weh + "rpx",
      wdiplotitbg: "transparent",
      wdiploinputbox: "block"
    })
    // 加号左移
    var janimation = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease"
    })
    this.animation = janimation;
    this.animation.translateX(-100).step()
    this.setData({
      wdiploaddanima: janimation.export(),
    })
    // 输入框下拉
    var winputanimation = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease"
    })
    this.animation = winputanimation;
    this.animation.translateY(42).step()
    this.setData({
      wdiploinpdown: winputanimation.export(),
    })
  },
  // 技能信息动画
  slide6: function () {
    // 标题上右方向移动
    var weh = 88;
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease"
    })
    this.animation = animation;
    this.animation.translate(-25, -10).step();
    while (weh < 172) {
      weh = weh + 10.3;
    }
    this.setData({
      wskillanimation: animation.export(),
      wskilltitwidth: "100%",
      wskilltitheight: weh + "rpx",
      wskilltitbg: "transparent",
      wskillinputbox: "block"
    })
    // 加号左移
    var janimation = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease"
    })
    this.animation = janimation;
    this.animation.translateX(-100).step()
    this.setData({
      wskilladdanima: janimation.export(),
    })
    // 输入框下拉
    var winputanimation = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease"
    })
    this.animation = winputanimation;
    this.animation.translateY(42).step()
    this.setData({
      wskillinpdown: winputanimation.export(),
    })
  },
  // 公司信息动画
  slide7: function () {
    // 标题上右方向移动
    var weh = 88;
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease"
    })
    this.animation = animation;
    this.animation.translate(-25, -10).step();
    while (weh < 352) {
      weh = weh + 10.3;
    }
    this.setData({
      wcompanyanimation: animation.export(),
      wcompanytitwidth: "100%",
      wcompanytitheight: weh + "rpx",
      wcompanytitbg: "transparent",
      wcompanyinputbox: "block"
    })
    // 加号左移
    var janimation = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease"
    })
    this.animation = janimation;
    this.animation.translateX(-100).step()
    this.setData({
      wcompanyaddanima: janimation.export(),
    })
    // 输入框下拉
    var winputanimation = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease"
    })
    this.animation = winputanimation;
    this.animation.translateY(42).step()
    this.setData({
      wcompanyinpdown: winputanimation.export(),
    })
  },
  // 相册动画
  slide8: function () {
    // 标题上右方向移动
    var weh = 88;
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease"
    })
    this.animation = animation;
    this.animation.translate(-25, -10).step();
    while (weh < 500) {
      weh = weh + 10.3;
    }
    this.setData({
      wimganimation: animation.export(),
      wimgtitwidth: "100%",
      wimgtitheight: weh + "rpx",
      wimgtitbg: "transparent",
      wimginputbox: "block"
    })
    // 加号左移
    var janimation = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease"
    })
    this.animation = janimation;
    this.animation.translateX(-100).step()
    this.setData({
      wimgaddanima: janimation.export(),
    })
    // 输入框下拉
    var winputanimation = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease"
    })
    this.animation = winputanimation;
    this.animation.translateY(42).step()
    this.setData({
      wimginpdown: winputanimation.export(),
    })
  },
  chooseimage: function () {//调用图片接口
    var that = this;
    wx.chooseImage({
      count:7, // 默认9  
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片 
        that.setData({
          wsdyy: "0 0 0 0 #ffffff",
          wimginputbox: "none",
          wimgtitheight: "500rpx",
          wimglistdis: "block",
          tempFilePaths: res.tempFilePaths
        })
      }
    })
    
  },
  chooseimage1:function(){
    var that = this;
    wx.chooseImage({
      count: 7, // 默认9  
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片 
        const length = that.data.tempFilePaths.length
        that.data.tempFilePaths = [res.tempFilePaths ].concat(that.data.tempFilePaths)
        that.setData({
          tempFilePaths: that.data.tempFilePaths
        })
        if (that.data.tempFilePaths.length==8){
          that.setData({
            wpldis:"none"
          })
        }
      }
    })
  },
  sub:function(){//按钮链接
    this.setData({
      taplink: "../logs/logs"
    })
  },
  winner1:function(e){//必填验证
    this.setData({
      wvalue1 : e.detail.value
    }) 
    if (this.data.wvalue1 != "" && this.data.wvalue2 != "" && this.data.wvalue3 != "") {
      this.setData({
        wbtnbg: "#45ACFF",
        wscmpcol: "#ffffff"
      })
    }
  },
  winner2: function (e) {
    this.setData({
      wvalue2: e.detail.value
    }) 
    if (this.data.wvalue1 != "" && this.data.wvalue2 != "" && this.data.wvalue3 != "") {
      this.setData({
        wbtnbg: "#45ACFF",
        wscmpcol: "#ffffff"
      })
    }
  },
  winner3: function (e) {
    this.setData({
      wvalue3: e.detail.value
    })
    if (this.data.wvalue3 != /^1(3|4|5|7|8)\d{9}$/ && this.data.wvalue3.length==11){ 
      if (this.data.wvalue1 != "" && this.data.wvalue2 != "" && this.data.wvalue3 != "") {
        this.setData({
          wbtnbg: "#45ACFF",
          wscmpcol: "#ffffff"
        })
      }
    }
  }
})