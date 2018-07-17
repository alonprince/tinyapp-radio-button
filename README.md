# Radio-button组件

支付宝小程序可用的radio-button组件


## API

| 属性 | 说明 | 类型 | 默认值 | 必选 |
|----|----|----|----|----|
| btns | 配置按钮信息 | Array<{name: string, title: string}> | [] | true |
| onChange | 切换时触发的事件 | (type) => {} |  | false |
| choice | 默认选中的项，与btns中的name对应 | string | '' | false |

## using

```
// page.json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents":{
    "radio-button":"radio-button/es/radio-button/index"
  }
}
```

## examples

```axml
<view class="container">
  <view>默认选项：</view>
  <view class="full-width">
    <radio-button btns="{{btns1}}" choice="{{type1}}" onChange="onChange1"></radio-button>
  </view>
  <view>自定义选项：</view>
  <view class="full-width">
    <radio-button btns="{{btns2}}" choice="{{type2}}" onChange="onChange2">
      <view slot-scope="props" class="type-radio-grid-item" data-name="{{props.item.name}}">
        <view class="type-item-icon" style="background-image: url('{{props.select ? props.item.chosenIcon : props.item.icon}}')"></view>
        <view class="type-item-title">{{props.item.title}}</view>
      </view>
    </radio-button>
  </view>
</view>
```

```js
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

```
