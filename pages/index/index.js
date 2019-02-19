//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    name: '吴茂强',
    windowHeight: '',
    position: 'Android开发工程师',
    school: '烟台大学 | 电子信息科学与技术 | 本科',
    xx: '500px',
    isCheckedSkill: false,
    isCheckedWork: true,
    isCheckedProject: false,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    var that = this
    wx.getSystemInfo({
      success(res) {

        that.setData({
          windowHeight: res.windowHeight-320
        })
        console.log("windowHeight=="+that.data.windowHeight)

      }
    })


  },
  skill: function() {
    this.setData({
      isCheckedSkill: true,
      isCheckedWork: false,
      isCheckedProject: false,
    })
  },
  work: function() {
    this.setData({
      isCheckedSkill: false,
      isCheckedWork: true,
      isCheckedProject: false,
    })
  },
  project: function() {
    this.setData({
      isCheckedSkill: false,
      isCheckedWork: false,
      isCheckedProject: true,
    })
  }

})