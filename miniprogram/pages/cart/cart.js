Page({
  data: {
    cartItems: [],
    totalPrice: 0
  },

  onLoad: function() {
    this.loadCartItems();
  },

  loadCartItems: function() {
    const cartItems = wx.getStorageSync('cartItems') || [];
    this.setData({
      cartItems: cartItems
    });
    this.calculateTotalPrice();
  },

  calculateTotalPrice: function() {
    const totalPrice = this.data.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    this.setData({
      totalPrice: totalPrice
    });
  },

  updateQuantity: function(e) {
    const { index, action } = e.currentTarget.dataset;
    const cartItems = this.data.cartItems;

    if (action === 'increase') {
      cartItems[index].quantity++;
    } else if (action === 'decrease' && cartItems[index].quantity > 1) {
      cartItems[index].quantity--;
    }

    this.setData({
      cartItems: cartItems
    });
    this.calculateTotalPrice();
    wx.setStorageSync('cartItems', cartItems);
  },

  removeItem: function(e) {
    const index = e.currentTarget.dataset.index;
    const cartItems = this.data.cartItems;

    cartItems.splice(index, 1);
    this.setData({
      cartItems: cartItems
    });
    this.calculateTotalPrice();
    wx.setStorageSync('cartItems', cartItems);
  },

  checkout: function() {
    if (this.data.cartItems.length === 0) {
      wx.showToast({
        title: '购物车为空',
        icon: 'none'
      });
      return;
    }
    // 这里可以添加结算逻辑
    wx.showToast({
      title: '结算成功',
      icon: 'success'
    });
  }
});