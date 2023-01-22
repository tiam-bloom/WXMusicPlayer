// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: new Date().toString(), //获取当前世界时间-初始时间
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //间隔1秒刷新时间
    setInterval(() => {
      var date = new Date().toString();
      this.setData({
        time: date,
      })
    }, 1000)
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