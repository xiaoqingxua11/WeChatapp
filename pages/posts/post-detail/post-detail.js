var postsData = require('../../../data/posts-data');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    collected: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var postId = options.id;
    this.data.currentPostId=postId;
    var postData = postsData.postList[postId];
    this.setData({
      ...postData
    });
    var postsCollected = wx.getStorageSync('postsCollected');
    if (postsCollected) {
      let postCollected = postsCollected[postId];
      if (postCollected) {
        this.setData({
          collected: postsCollected[postId]
        })
      }
    } else {
      postsCollected = {}
      postsCollected[postId] = false;
      wx.setStorageSync('postsCollected', postsCollected)
    }

  },
  // 收藏
  onCollectionTap: function () {
    var postsCollected=wx.getStorageSync('postsCollected');
    var collected=postsCollected[this.data.currentPostId];
    var _this=this;
    
    //收藏提醒
    // wx.showToast({
    //   title:!collected?'收藏成功':"取消成功",
    //   duration:1000
    // })

    wx.showModal({
      content:collected?"取消收藏":"是否收藏",
      success:function(res){
        if(res.confirm){
          collected=!collected;
          postsCollected[_this.data.currentPostId]=collected;
          wx.setStorageSync('postsCollected', postsCollected);
          _this.setData({collected});
        }
      }
    })
  },
  // 分享
  onShareTap: function () {
    console.log(2222)
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