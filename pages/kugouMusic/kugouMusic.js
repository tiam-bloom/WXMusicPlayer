// pages/kugouMusic/kugouMusic.js
Component({

  /**
   * 页面的初始数据
   */
  data: {
    kugouSongList:[],
    inputValue:"",
  },
  methods: {
    bindKeywordInput: function (e) {
      this.setData({
        inputValue: e.detail.value
      })

      wx.request({
        url: 'https://mobiles.kugou.com/api/v3/search/song?page=1&pagesize=30&showtype=1&keyword=' + e.detail.value,
        success:(res)=> {
          //console.log(res.data.data.info)
          this.setData({
            kugouSongList: res.data.data.info //将查询到的数据实时渲染到列表中
          });
        }
      });
    },
    //跳转播放页面,带当前歌曲id传入下个页面
    playerView(e) {
      wx.setStorageSync('id', e.currentTarget.id)
      var hash = wx.getStorageSync('id');
      wx.navigateTo({
        url: '../kugouPlayer/kugouPlayer?hash=' + hash
      })
    }
  },
  
})