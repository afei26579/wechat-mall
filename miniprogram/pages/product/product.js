// product.js
Page({
  data: {
    product: {},
    loading: true,
  },

  onLoad: function (options) {
    this.fetchProductDetails(options.id);
  },

  fetchProductDetails: function (id) {
    const that = this;
    wx.request({
      url: `https://api.example.com/products/${id}`, // Replace with your API endpoint
      method: 'GET',
      success: function (res) {
        if (res.statusCode === 200) {
          that.setData({
            product: res.data,
            loading: false,
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

  addToCart: function () {
    // Logic to add product to cart
    wx.showToast({
      title: '已添加到购物车',
      icon: 'success',
    });
  },
});