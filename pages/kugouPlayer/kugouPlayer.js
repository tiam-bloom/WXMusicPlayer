// pages/kugouPlayer/kugouPlayer.js
Page({
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createInnerAudioContext('myAudio')
  },
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    audioPlay: function () {
      this.audioCtx.play()
    },
    audioPause: function () {
      this.audioCtx.pause()
    },
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    console.log("歌曲hash:" + option.hash)
    this.setData({
      musicId: option.hash
    })
    
    wx.request({
      url: 'https://m.kugou.com/app/i/getSongInfo.php?cmd=playInfo&hash=' + option.hash, //根据id获取歌曲
      success: (res) => {
        console.log(res.data); //获取当前歌曲信息
        this.setData({
          musicUrl: res.data.url,
          imgSrc: res.data.album_img,
          author: res.data.singerName,
          musicName: res.data.songName
        });
      }
    })
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})