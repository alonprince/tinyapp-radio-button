
Page({
  data: {
    btns1: [{ name: '1', title: '按钮1' }, { name: '2', title: '按钮2' }, { name: '3', title: '按钮3' }],
    type1: '1',
    btns2: [{ name: '1', title: '按钮1', icon: '/radio-button/demo/img/unlike.png', chosenIcon: '/radio-button/demo/img/like.png' }, { name: '2', title: '按钮2', icon: '/radio-button/demo/img/unlike.png', chosenIcon: '/radio-button/demo/img/like.png' }, { name: '3', title: '按钮3', icon: '/radio-button/demo/img/unlike.png', chosenIcon: '/radio-button/demo/img/like.png' }],
    type2: '1',
  },
  onChange1(type) {
    this.setData({
      type1: type,
    });
  },
  onChange2(type) {
    this.setData({
      type2: type,
    });
  },
});
