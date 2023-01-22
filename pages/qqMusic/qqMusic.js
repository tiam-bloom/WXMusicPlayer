
Component({

  /**
   * 页面的初始数据
   */
  data: {
    kuwoSongList:[],
    inputValue:"",
  },
  methods: {
    bindKeywordInput: function (e) {
      this.setData({
        inputValue: e.detail.value
      })

      wx.request({
        url: 'https://c.y.qq.com/soso/fcgi-bin/client_search_cp?n=30&format=json&w=' + e.detail.value,
        success:(res)=> {
          console.log(res.data.data.song.list)
          this.setData({
            kuwoSongList: res.data.data.song.list //将查询到的数据实时渲染到列表中
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