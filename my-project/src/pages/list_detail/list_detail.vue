<template>
  <div class="contain">
    <div class="detail_img">
      <img :src="detailObj.detail_img" alt="" />
    </div>
    <div class="bg_music" @tap="handleAudio">
      <div class="con">
        <div class="gif">
          <img src="/static/images/music/muc.gif" alt="" />
        </div>
        <div class="music_detail">
          <span class="music_name">title</span>
          <!-- <audio
            src="/static/audio/la_donna_romantica.mp3"
            autoplay="true"
            loop
          ></audio> -->
        </div>
      </div>
    </div>
    <div class="main">
      <div class="avatar_data">
        <img :src="detailObj.avatar" alt="" />
        <div class="author">{{ detailObj.author }}</div>
        <span>发布于:</span><span>{{ detailObj.date }}</span>
      </div>
      <div class="tit">{{ detailObj.title }}</div>
      <div class="division">
        <div>
          <img
            @tap="handleCollection"
            class="collection"
            v-if="isCollection == false"
            src="/static/images/icon/collection-anti.png"
            alt=""
          />
          <img
            @tap="handleCollection"
            class="collection"
            v-if="isCollection == true"
            src="/static/images/icon/collection.png"
            alt=""
          />
          <!-- <img
            @tap="handleShare"
            class="share"
            src="/static/images/icon/share.png"
            alt=""
          /> -->
          <img
            @tap="handleShare"
            class="share"
            src="/static/images/icon/share-anti.png"
            alt=""
          />
        </div>
        <div class="line"></div>
      </div>

      <div class="left_border">
        <div class="cont">
          {{ detailObj.detail_content }}
        </div>
      </div>

      <button open-type="share" class="forward">转发此文章</button>
    </div>
  </div>
</template>
<script>
import isPlay from "../../datas/isPlay";
import { mapState } from "vuex";
export default {
  data() {
    return {
      detailObj: {},
      isCollection: false, //是否被收藏
      //   isShare: false,
      isMusicPlay: true,
      on: true,
    };
  },
  beforeMount() {
    let index = this.$mp.query.index;
    // console.log(index);//0
    // 预处理：本地是否收藏的缓存
    let oldStorage = wx.getStorageSync("isCollection");
    if (!oldStorage) {
      wx.setStorage({
        key: "isCollsction",
        data: {},
      });
    } else {
      // true false undefined
      // 用户缓存过
      this.isCollection = oldStorage[this.index] ? true : false;
    }
  },
  mounted() {
    // console.log(this.listTmp);
    this.detailObj = this.listTmp[this.$mp.query.index];
    // console.log(this.detailObj);

    // 判断是否当前页面音乐播放
    isPlay.pageIndex === this.index && isPlay.isPlay
      ? (this.isMusicPlay = true)
      : (this.isMusicPlay = false);

    // 获取BackgroundAudioManager 实例
    this.back = wx.getBackgroundAudioManager();

    // 对实例进行设置
    this.back.src =
      "http://win.web.nf01.sycdn.kuwo.cn/a8338c2eded0d9a5f0d41d6ce83f5ae3/5ff94ffa/resource/n1/80/97/3901966446.mp3";

    this.back.title = this.detailObj.music.title; // 标题为必选项
    this.back.play(); // 开始播放

    isPlay.pageIndex = this.index;
    isPlay.isPlay = true;
  },
  onUnload() {
    this.back.pause();
    isPlay.pageIndex = null;
    isPlay.isPlay = false;
  },
  computed: {
    ...mapState(["listTmp"]),
  },
  methods: {
    handleCollection() {
      if (this.isCollection) {
        this.isCollection = false;
      } else {
        this.isCollection = true;
      }
      let title = this.isCollection ? "收藏成功" : "取消收藏";
      wx.showToast({
        title,
        icon: "success",
      });
      // 读取之前本地缓存
      let oldStorage = wx.getStorageSync("isCollection");
      //   console.log(oldStorage);

      //   oldStorage = {};
      oldStorage[this.index] = this.isCollection;
      // 将本次设置结果保存到本地
      wx.setStorage({
        key: "isCollection",
        data: oldStorage,
      });
    },
    handleShare() {
      wx.showActionSheet({
        itemList: ["分享到朋友圈", "分享到微博", "分享给微信朋友"],
      });
    },
    handleAudio() {
      this.back.pause(); // 点击音乐图标后出发的操作
      this.on = !this.on;
      if (this.on) {
        this.back.play();

        isPlay.isPlay = true;
      } else {
        this.back.pause();

        isPlay.isPlay = false;
      }
    },
  },
};
</script>
<style scoped>
.contain {
  display: flex;
  flex-direction: column;
  position: relative;
}
.detail_img {
}
.detail_img img {
  width: 100%;
  height: 440rpx;
}
.bg_music {
  position: absolute;
  top: 10rpx;
  right: 0;
  max-width: 360rpx;
  height: 36rpx;
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;
  color: #fff;
}

.gif {
  width: 28rpx;
  float: left;
}
.gif img {
  width: 28rpx;
  height: 36rpx;
  line-height: 36rpx;
  margin-right: 10px;
  display: inline-block;
  vertical-align: middle;
}
.music_detail {
  /* background-color: rgb(12, 157, 29); */
  padding-left: 46rpx;
  padding-right: 20rpx;
  line-height: 36rpx;
  padding-top: 8rpx;
}
.music_detail .music_name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  vertical-align: middle;
}
.main {
  padding: 50rpx;
}
.avatar_data {
  display: flex;
}
.avatar_data img {
  width: 68rpx;
  height: 68rpx;
  vertical-align: middle;
}
.avatar_data .author {
  margin: 0 30rpx;
  font-weight: 400;
  line-height: 68rpx;
}
.avatar_data span {
  display: block;
  padding-left: 10rpx;
  margin-top: 4rpx;
  color: #828a92;
  font-size: 28rpx;
  line-height: 68rpx;
}
.tit {
  font-weight: bold;
  margin: 40rpx 0;
}
.division {
  margin-bottom: 90rpx;
  background-color: rgb(247, 206, 206);
  position: relative;
  width: 100%;
  height: 0;
}
.division img {
  width: 90rpx;
  height: 90rpx;
  position: absolute;
  bottom: -45rpx;
}

.collection {
  right: 145rpx;
}
.share {
  right: 30rpx;
}
.line {
  border-top: 4rpx solid #e4e5e6;
  margin: 0;
  color: #afb4b8;
}
.forward {
  margin: 50rpx auto;
  width: 190rpx;
  height: 50rpx;
  border-radius: 10px;
  color: #fff;
  font-size: 24rpx;
  line-height: 50rpx;
  text-align: center;
  background-color: #00b51d;
}
.forward:active {
  background-color: #6de481;
}
.left_border {
  margin: 0;
  padding-right: 14px;
  padding-left: 14px;
  color: #828a92;
  background-color: rgba(240, 234, 234, 0.2);
  border-left: 4px solid #e9eef5;
  border-radius: 10rpx;
}
.cont {
  line-height: 1.875;
  font-size: 16px;
  min-height: 30px;
  white-space: pre-wrap;
}
</style>