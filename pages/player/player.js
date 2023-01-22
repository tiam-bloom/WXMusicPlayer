// pages/player/player.js
Page({
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createInnerAudioContext('myAudio')
  },
  data: {
    //不需要-定义相当于给定默认值
    // musicUrl: "",
    // musicName: "",
    // author: "",
    // imgSrc: "",
    Lyrics: "你看到我了吗-待解析歌词",
    lrc: []
  },


  //接收数据并渲染
  onLoad: function (option) {

    //console.log(option.id)
    this.setData({
      musicId: option.id
    })
    //接口更新,导致url路径不对,无法获取到url
    wx.request({
      url: 'https://autumnfish.cn/song/url?id=' + option.id, //根据id获取歌曲
      success: (res) => {
        //console.log(option.id) //得到当前点击歌曲id
        //console.log(res.data.data); //获取当前歌曲信息
        this.setData({
          musicUrl: res.data.data[0].url
        });
      }
    })

    //播放器
    // const innerAudioContext = wx.createInnerAudioContext()
    // innerAudioContext.autoplay = true
    // innerAudioContext.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
    // innerAudioContext.onPlay(() => {
    //   console.log('开始播放')
    // })
    // innerAudioContext.onError((res) => {
    //   console.log(res.errMsg)
    //   console.log(res.errCode)
    // })

    wx.request({
      url: 'https://autumnfish.cn/lyric?id=' + option.id, //根据id获取歌词
      success: (res) => {
        this.setData({
          Lyrics: res.data.lrc.lyric
        });
      }
    })
    console.log(this.data.Lyrics); //获取data中定义的数据
    //console.log(this.parseLyric(this.Lyrics))



    //解析歌词
    parseLyric: (text) => {
        var lyric = text.split('\n');
        var lrc = new Array();
        var _l = lyric.length;
        for (var i = 0; i < _l; i++) {
          //正则匹配播放时间返回一个数组
          var sj = lyric[i].match(/\[\d{2}:\d{2}((\.|\:)\d{2})\]/g);
          //获得该行歌词正文 
          var _lrc = lyric[i].replace(/\[\d{2}:\d{2}((\.|\:)\d{2})\]/g, "");
          //过滤掉空行等非歌词正文部分
          if (sj != null) {
            //可能有多个时间标签对应一句歌词的情况，用一个循环解决
            var _ll = sj.length;
            for (j = 0; j < _ll; j++) {
              var _s = sj[j];
              var min = Number(String(_s.match(/\[\d{2}/i)).slice(1));
              var sec = parseFloat(String(_s.match(/\d{2}\.\d{2}/i)));
              //换算时间，保留两位小数
              var _t = Math.round((min * 60 + sec) * 100) / 100;
              //把时间和对应的歌词保存到数组
              lrc.push([_t, _lrc]);
            }
          }
        }
        //重新按时间排序
        lrc.sort(function (a, b) {
          return a[0] - b[0];
        });
        console.log(lrc);
        return lrc;
      },

      wx.request({
        url: 'https://autumnfish.cn/search?keywords=' + option.id, //根据id获取歌曲
        success: (res) => {
          //console.log(res.data.result.songs[0].artists[0].img1v1Url) //图片
          this.setData({
            imgSrc: res.data.result.songs[0].artists[0].img1v1Url,
            author: res.data.result.songs[0].artists[0].name,
            musicName: res.data.result.songs[0].name
          });
        }
      })


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
  }
})