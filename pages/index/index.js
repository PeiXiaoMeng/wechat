var app=getApp()
Page({ 
  data:{
     display:"block"
  },
  onShow:function(){
    var that=this;
    that.setData({
      display: "block"
    })
  },
  add:function(){
  //  console.log(e);
    var that=this;
    that.setData({
      display:"none"
    })
    setTimeout(function () {
      wx.navigateTo({
        url:'../register/register'
      })
    }, 100);
  }
})
