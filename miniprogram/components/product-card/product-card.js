Page({
  properties: {
    product: {
      type: Object,
      value: {},
      observer: function(newVal) {
        this.setData({
          productName: newVal.name,
          productPrice: newVal.price,
          productImage: newVal.image,
        });
      }
    }
  },
  data: {
    productName: '',
    productPrice: '',
    productImage: ''
  },
  methods: {
    handleAddToCart() {
      this.triggerEvent('addToCart', { product: this.data.product });
    },
    handleViewDetails() {
      wx.navigateTo({
        url: `/pages/product/product?id=${this.data.product.id}`
      });
    }
  }
});