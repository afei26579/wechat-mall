Page({
  data: {
    products: [],
  },

  onLoad: function () {
    this.fetchProducts();
  },

  fetchProducts: function () {
    const that = this;
    wx.request({
      url: 'https://api.example.com/products', // 替换为实际的API地址
      method: 'GET',
      success: function (res) {
        if (res.statusCode === 200) {
          that.setData({
            products: res.data,
          });
        } else {
          wx.showToast({
            title: '加载失败',
            icon: 'none',
          });
        }
      },
      fail: function () {
        wx.showToast({
          title: '网络错误',
          icon: 'none',
        });
      },
    });
  },

  onProductClick: function (event) {
    const productId = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/product/product?id=${productId}`,
    });
  },
});