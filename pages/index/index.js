//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    address: '定位中...',
    banners: [
      {
        id: 3,
        img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3191302683,980965292&fm=26&gp=0.jpg',
        url: '',
        name: '百亿巨惠任你抢'
      },
      {
        id: 1,
        img: 'https://f11.baidu.com/it/u=2646093511,2820815036&fm=72',
        url: '',
        name: '告别午高峰'
      },
      {
        id: 2,
        img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=265015676,4711633&fm=26&gp=0.jpg',
        url: '',
        name: '金牌好店'
      }
    ],
    icons: [
      [
        {
          id: 1,
          img: '/imgs/index/icon_1.jpg',
          name: '美食',
          url: ''
        },
        {
          id: 2,
          img: '/imgs/index/icon_2.jpg',
          name: '超市',
          url: ''
        },
        {
          id: 3,
          img: '/imgs/index/icon_3.jpg',
          name: '鲜果购',
          url: ''
        },
        {
          id: 4,
          img: '/imgs/index/icon_4.jpg',
          name: '下午茶',
          url: ''
        },
        {
          id: 5,
          img: '/imgs/index/icon_5.jpg',
          name: '正餐优选',
          url: ''
        },
        {
          id: 6,
          img: '/imgs/index/icon_6.jpg',
          name: '外卖专送',
          url: ''
        },
        {
          id: 7,
          img: '/imgs/index/icon_7.jpg',
          name: '饮品站',
          url: ''
        },
        {
          id: 8,
          img: '/imgs/index/icon_8.jpg',
          name: '小吃馆',
          url: ''
        }
      ],
      [
        {
          id: 9,
          img: '/imgs/index/icon_9.jpg',
          name: '新商家',
          url: ''
        },
        {
          id: 10,
          img: '/imgs/index/icon_10.jpg',
          name: '免配送费',
          url: ''
        },
        {
          id: 11,
          img: '/imgs/index/icon_11.jpg',
          name: '鲜花蛋糕',
          url: ''
        },
        {
          id: 12,
          img: '/imgs/index/icon_12.jpg',
          name: '名气餐厅',
          url: ''
        },
        {
          id: 13,
          img: '/imgs/index/icon_13.jpg',
          name: '异国料理',
          url: ''
        },
        {
          id: 14,
          img: '/imgs/index/icon_14.jpg',
          name: '家常菜',
          url: ''
        },
        {
          id: 15,
          img: '/imgs/index/icon_15.jpg',
          name: '能量西餐',
          url: ''
        },
        {
          id: 16,
          img: '/imgs/index/icon_16.jpg',
          name: '无辣不欢',
          url: ''
        }
      ]
    ],
    discounts: [
      {img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1711473572,2015742870&fm=26&gp=0.jpg'},
      {img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=270891416,3583376655&fm=26&gp=0.jpg'}
    ]




  },
  //事件处理函数
  //1.判断搜索框的背景颜色，当往下拉的时候就出现背景色
  onScroll: function (e) {
    if (e.detail.scrollTop > 100 && !this.data.scrollDown) {
      this.setData({
        scrollDown: true
      });
    } else if (e.detail.scrollTop < 100 && this.data.scrollDown) {
      this.setData({
        scrollDown: false
      });
    }
  },
//2.点击轮播图出现提示框
  tapBanner: function (e) {
    var name = this.data.banners[e.target.dataset.id].name;
    wx.showModal({
      title: '提示',
      content: '您点击了“' + name + '”活动链接，活动页面暂未完成！',
      showCancel: false
    });
  }






});
