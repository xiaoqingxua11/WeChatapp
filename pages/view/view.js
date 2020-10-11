var postsData = require('../../data/posts-data.js')//必须相对路径
// pages/view/view.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    
  },
  onReady: function () {
    
  },
  audioPlay:function(e){
    var id=e.target.id;
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext(id)
    this.setData(id);
     this.audioCtx.play();
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  },
  onLoad: function () {
    this.setData({
       postList:postsData.postList
      });
      // console.log(postList[item].music.coverImg);
     
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