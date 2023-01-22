// pages/music/music.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    //objectArray: [],
    //url: ''
  },

  /**
   * 组件的方法列表
   */

  methods: {
    bindKeyInput: function (e) {
      this.setData({
        inputValue: e.detail.value
      })
      var that = this;
      wx.request({
        url: 'https://autumnfish.cn/search?keywords=' + e.detail.value,
        success(res) {
          console.log(res.data.result.songs);
          that.setData({
            objectArray: res.data.result.songs //将查询到的数据实时渲染到列表中
          });
        }
      });
    },
    //跳转播放页面,带当前歌曲id传入下个页面
    playerView(e) {
      wx.setStorageSync('id', e.currentTarget.id)
      var id = wx.getStorageSync('id');
      wx.navigateTo({
        url: '../player/player?id=' + id
      })
    }
  }
})