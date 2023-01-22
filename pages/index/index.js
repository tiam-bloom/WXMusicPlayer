// index.js
// 获取应用实例
const app = getApp();

Page({
  data: {
    time: new Date().toString(), //获取当前世界时间-初始时间
    motto: 'Hello 你好!@2021/09/05',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },

  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //测试
  bindTest() {
    wx.navigateTo({
      url: '../test/test'
    })
  },
  //搜索页
  bindViewMusic() {
    wx.navigateTo({
      url: '../music/music'
    })
  },
  //酷狗搜索页
  bindViewkugouMusic() {
    wx.navigateTo({
      url: '../kugouMusic/kugouMusic'
    })
  },
  //酷我
  bindViewkuwoMusic() {
    wx.navigateTo({
      url: '../kuwoMusic/kuwoMusic'
    })
  },
   //QQ音乐
   bindViewqqMusic() {
    wx.navigateTo({
      url: '../qqMusic/qqMusic'
    })
  },
  //热搜榜
  bindViewhotMusic() {
    wx.navigateTo({
      url: '../hotmusic/hotmusic'
    })
  },
  //轮播页
  bindViewSwiper() {
    wx.navigateTo({
      url: '../swiper/swiper'
    })
  },
  onLoad() {
    //间隔1秒刷新时间
    setInterval(() => {
      var date = new Date().toString();
      this.setData({
        time: date,
      })
    }, 1000)
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})