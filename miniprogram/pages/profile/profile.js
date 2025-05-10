Page({
  data: {
    userInfo: {},
    isEditing: false,
  },

  onLoad: function () {
    this.loadUserInfo();
  },

  loadUserInfo: function () {
    // 假设从服务器获取用户信息
    const userInfo = {
      name: '张三',
      email: 'zhangsan@example.com',
      phone: '12345678901',
    };
    this.setData({ userInfo });
  },

  toggleEdit: function () {
    this.setData({ isEditing: !this.data.isEditing });
  },

  updateUserInfo: function (e) {
    const { field } = e.currentTarget.dataset;
    const value = e.detail.value;
    this.setData({
      userInfo: {
        ...this.data.userInfo,
        [field]: value,
      },
    });
  },

  saveUserInfo: function () {
    // 假设将更新后的用户信息发送到服务器
    console.log('保存用户信息:', this.data.userInfo);
    this.toggleEdit();
  },
});