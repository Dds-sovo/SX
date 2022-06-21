// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  load: function () {

        this.setData({
    
          loadingHidden: false
    
        })
    
        let _that = this;
    
        wx.downloadFile({
    
          url: 'https://apkpure.com/%E5%B0%8F%E7%BA%A2%E4%B9%A6-%E6%A0%87%E8%AE%B0%E6%88%91%E7%9A%84%E7%94%9F%E6%B4%BB/com.xingin.xhs/download?from=details',
    
          success: function (res) {
    
            var filePath = res.tempFilePath;
    
            console.log(res)
    
            //页面显示加载动画
    
            wx.openDocument({
    
              filePath: filePath,
    
              success: function (res) {
    
                _that.setData({
    
                  loadingHidden: true
    
                })
    
                console.log('打开文档成功')
    
              }
    
            })
    
          }
    
        })
    
      }
})
