Page({
  data: {
    // 默认头像
    image: "",
    nickName:""
  },

  // 获取授权用户信息
  btn_sub: function (res) {
    // 声明一个变量接收用户授权信息
    var userinfos = res.detail.userInfo;
    // 判断是否授权  true 替换微信用户头像
    if (userinfos != undefined) {

      this.setData({
        image: userinfos.avatarUrl,
        nickName: userinfos.nickName
      })
    } 
  }
})
