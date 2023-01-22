// pages/hotmusic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      hotmusicList:[],
  },
  
    //跳转播放页面,带当前歌曲id传入下个页面
    playerView(e) {
      wx.setStorageSync('id', e.currentTarget.id)
      var hash = wx.getStorageSync('id');
      wx.navigateTo({
        url: '../kugouPlayer/kugouPlayer?hash=' + hash
      })
    },
 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that =this;
    wx.request({ 
      url: 'https://autumnfish.cn/search/hot/detail',
      success(res) {
        console.log(res.data.data); 
        that.setData({
          hotmusicList: res.data.data,  
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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