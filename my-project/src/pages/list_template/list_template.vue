<template>
  <div class="contain" @tap="toListDetail">
    <img class="bg_img" :src="item.detail_img" />
    <div class="detail_img">
      <img :src="item.detail_img" alt="" />
    </div>

    <div class="main">
      <div class="avatar_data">
        <img :src="item.avatar" alt="" />
        <div class="title">{{ item.title }}</div>
        <span>{{ item.date }}</span>

        <div class="content">
          {{ item.detail_content }}
        </div>
      </div>

      <div class="view_star_cont">
        <div class="star">
          <img class="star_img" src="/static/images/icon/star.png" alt="" />
          <span class="star_count">{{ item.love_count }}</span>
        </div>
        <!-- <img class="view" src="/static/images/icon/view.png" alt="" /> -->

        <div class="view">
          <img class="view_img" src="/static/images/icon/view.png" alt="" />
          <div class="view_count">{{ item.attention_count }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["item", "index"],
  methods: {
    toListDetail() {
      wx.navigateTo({
        url: "/pages/list_detail/main?index=" + this.index,
      });
    },
  },
};
</script>
<style scoped>
.contain {
  margin: 30rpx 14rpx;
  color: #fff;
  height: 440rpx;
  background-color: #000;
  border-radius: 15rpx;
  box-shadow: 2px 2px 5px rgb(45, 45, 45);
  position: relative;
  overflow: hidden;
}
.bg_img {
  width: 100%;
  max-height: 380rpx;
  background: no-repeat 50% / cover;
  position: absolute;
  left: 0;
  top: 0;
  float: left;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  border-radius: 15rpx;
}
.bg_img::after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(180deg, #000, transparent 50%, #000);
}
.detail_img {
  float: left;
}
.detail_img img {
  vertical-align: middle;
  width: 160rpx;
  height: 220rpx;
  position: absolute;
  bottom: 20rpx;
  left: 20rpx;
  /* border: 3px solid rgba(226, 170, 85, 0.6); */
  border-radius: 9px;
}
.main {
  position: absolute;
  right: 20rpx;
  top: 220rpx;
  width: 70%;
  display: flex;
}
.avatar_data {
  flex: 1 1 auto;
  padding: 6rpx;
  position: relative;
}
.avatar_data img {
  width: 60rpx;
  height: 60rpx;
  position: absolute;
  top: 10rpx;
  left: 0rpx;
}
.avatar_data span {
  font-size: 20rpx;
  position: absolute;
  top: 50rpx;
  left: 88rpx;
}
.title {
  font-size: 32rpx;
  font-weight: bold;
  padding: 10rpx;
  position: absolute;
  top: 0rpx;
  left: 80rpx;
  max-width: 290rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 130px;
}
.content {
  font-size: 32rpx;
  text-indent: 32rpx;
  line-height: 32rpx;
  letter-spacing: 3rpx;
  margin-top: 100rpx;
  width: 400rpx;
  color: hsla(0, 0%, 100%, 0.5);
  font-size: 12px;
  line-height: 17px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.view_star_cont {
  padding: 0 10rpx;
  flex: 1 1 auto;
  font-size: 26rpx;
  color: hsla(0, 0%, 100%, 0.5);
  height: 90rpx;
  border-left: 1px solid hsla(0, 0%, 100%, 0.5);
  display: flex;
  flex-direction: column;
  font-size: 12px;
}
.star {
  margin-bottom: 20rpx;
}
.star_img {
  width: 32rpx;
  height: 32rpx;
  vertical-align: middle;
}
.star_count {
  margin-left: 10rpx;
  max-width: 60rpx;

  display: inline-block;
}
.view {
  width: 250rpx;
}
.view_img {
  width: 32rpx;
  height: 32rpx;
  vertical-align: middle;
}
.view_count {
  margin-left: 10rpx;
  max-width: 60rpx;
  display: inline-block;
}
</style>