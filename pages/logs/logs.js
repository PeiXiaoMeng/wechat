Page({
  data: {
    name: '李雅洁',
    xue: '本科',
    work: '前端工程师',
    tel: '18435179662',
    sex: '女',
    age: '23',
    display: "",
    imgurl: "../images/xin1.png",
    count: '0',
    flag: true
  },
  // onReady:function () {
  //   var flag = true;

  // },
  onShareAppMessage: function () {
    return {
      title: '分享名片',
      path: '/page/user?id=123',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  dian: function () {
    var that = this;
    if (that.flag) {
      that.setData({
        display: "block",
        imgurl: "../images/xin1.png"
      })
      that.flag = !that.flag;
    } else if (!that.flag) {
      that.setData({
        display: "none",
        imgurl: "../images/xin2.png"
      })
      that.flag = !that.flag;
    }
  }

})
