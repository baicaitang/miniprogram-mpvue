<template>
  <div class="contain">
    <img v-if="isShow" class="index-img" :src="userInfo.avatarUrl" alt="" />
    <button
      v-else
      open-type="getUserInfo"
      @getuserinfo="getUserInfo"
      class="btn"
    >
      点击登录
    </button>
    <div class="wx-name">
      <p>欢迎{{ userInfo.nickName }}来到豆豆瓣电影</p>
    </div>
    <div class="enter" @tap="toDetail">进入小程序</div>
    <img class="bg" src="/static/images/index/splash_bg.jpg" />
  </div>
</template>
    
<script>
export default {
  data() {
    return {
      userInfo: {},
      isShow: false, //用户没有授权
    };
  },
  onLoad() {},
  beforeMount() {
    this.handleGetUserInfo();
  },
  mounted() {},
  methods: {
    handleGetUserInfo() {
      // 必须是在用户已经授权的情况下调用
      // 获取用户登录信息
      if (this.userInfo) {
        this.isShow = true;
        wx.getUserInfo({
          success: (res) => {
            this.userInfo = res.userInfo;
          },
          fail: () => {
            this.isShow = false;
            console.log("获取用户信息失败");
          },
        });
      }
    },
    getUserInfo(data) {
      // console.log(data);
      // 判断用户是否授权
      if (data.mp.detail.rawData) {
        // 用户授权后
        this.handleGetUserInfo();
        this.isShow = true;
      }
    },
    toDetail() {
      wx.switchTab({
        url: "/pages/list/main",
      });
    },
  },
};
</script>

<style>
.contain {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bg {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
}

.index-img {
  width: 150rpx;
  height: 150rpx;
  border-radius: 100rpx;
  margin: 50rpx 0;
}

.btn {
  padding: 40rpx 0;
  width: 150rpx;
  height: 150rpx;
  line-height: 75rpx;
  border-radius: 100rpx;
  margin: 50rpx 0;
  font-size: 24rpx;
  text-align: center;
  border: 1rpx solid #00b51d;
}

.wx-name {
  margin: auto;
  padding: 100rpx 0;
  text-align: center;
  font-size: 40rpx;
  font-weight: bold;
}

.enter {
  width: 200rpx;
  height: 80rpx;
  font-size: 30rpx;
  line-height: 80rpx;
  text-align: center;
  color: #fff;
  background-color: #00b51d;
  border-radius: 10rpx;
}
.enter:active {
  color: #fff;
  background-color: #55ee6f;
}
</style>