<template>
  <div class="contain">
    <div class="main">
      <div class="info">
        <img :src="movicesDetail.images.large" alt="" />
        <div class="del">
          <div class="name">{{ movicesDetail.original_title }}</div>
          <div class="time">{{ movicesDetail.year }}</div>
          <div class="directors">
            导演：<span v-for="(item, i) in movicesDetail.directors" :key="i">{{
              item.name
            }}</span>
          </div>
          <div class="avatar">
            主演：<span v-for="(item, i) in movicesDetail.casts" :key="i">{{
              item.name
            }}</span>
          </div>
        </div>
        <div class="rating-root">
          <div class="tit">豆豆瓣评分</div>
          <div class="rating">{{ movicesDetail.rating.average }}</div>
        </div>
      </div>

      <div class="subject-mark mark-movie">
        <div class="mark-item" data="">
          <a href="javascript:;" class="wish">
            <image
              class="icon w_icon"
              src="/static/images/icon/ic_mark_todo_s.png"
              alt=""
            ></image>
            <span>想看</span>
          </a>
          <a href="javascript:;" class="done">
            <image
              class="icon d_cion"
              src="/static/images/icon/ic_mark_done_s.png"
              alt=""
            ></image>
            <span>看过</span>
          </a>
        </div>
      </div>
    </div>
    <div class="detail">
      <div class="d_main">
        <h2>剧情简介</h2>
        <p>
          究竟是什么塑造了真正的你？电影将聚焦乔伊·高纳（杰米·福克斯配音）。这位中学音乐老师获得了梦寐以求的机会——在纽约最好的爵士俱乐部演奏。但一个小失误把他从纽约的街道带到了一个奇幻的地方“生之来处”（the
          Great
          Before）。在那里，灵魂们获得培训，在前往地球之前将获得他们的个性特点和兴趣。决心要回到地球生活的乔伊认识了一个早熟的灵魂“二十二”（蒂娜·菲
          配音），二十二一直找不到自己对于人类生活的兴趣。随着乔伊不断试图向二十二展示生命的精彩之处，他也将领悟一些人生终极问题的答案。
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return { index: 0, movicesDetail: [] };
  },
  computed: {
    // 映射状态到本组件
    ...mapState(["movicesArr"]),
  },
  beforeMount() {
    // 获取电影index
    // console.log(this.$mp.query.index);

    this.index = this.$mp.query.index;

    this.movicesDetail = this.movicesArr[this.index];
    console.log(this.movicesDetail);

    // 分发actions修改状态
    this.$store.dispatch("getMovies");
    // console.log(this.movicesArr);
  },
  methods: {},
};
</script>
<style scoped>
.contain {
  box-sizing: border-box;
  width: 100%;
}
.main {
  background-color: rgb(57, 90, 127);
  padding: 20px 15px 15px;
  height: 600rpx;
  display: flex;
  flex-direction: column;
  color: #fff;
  position: relative;
  width: 1005;
}
.info {
  position: relative;
  box-sizing: border-box;
  /* border: 1rpx solid #eee; */
}
.info img {
  width: 204rpx;
  height: 284rpx;
  position: absolute;
  top: 30rpx;
  left: 20rpx;
  border-radius: 10rpx;
  background-color: rgb(12, 113, 228);
}
.info .del {
  position: absolute;
  top: 30rpx;
  left: 240rpx;
  /* border: 1rpx solid #eee; */
}
.info .del .name {
  font-size: 23px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.info .del .time {
  font-size: 15px;
  padding-top: 5rpx;
}
.info .del .directors {
  color: rgba(255, 255, 255, 0.7);
  font-size: 28rpx;
  padding: 10rpx 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.info .del .directors span {
  margin: 0 6rpx;
}
.info .del .avatar {
  color: rgba(255, 255, 255, 0.7);
  font-size: 28rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.info .del .avatar span {
  margin: 0 6rpx;
}
.rating-root {
  padding: 30rpx;
  position: absolute;
  top: 360rpx;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10rpx;
  box-sizing: border-box;
  display: flex;
  /* border: 1rpx solid #eee; */
  justify-content: space-between;
}
.rating-root .tit {
  font-size: 24rpx;
}
.rating-root .rating {
  display: inline-block;
  font-size: 36px;
  line-height: 40rpx;
}

.subject-mark,
.mark-movie {
  margin-top: 500rpx;
  width: 100%;
}
.mark-item {
  padding: 0 70rpx;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-radius: 10rpx;
  box-sizing: border-box;
  color: #000;
  font-size: 30rpx;
  text-align: center;
  line-height: 80rpx;
  /* border: 1rpx solid #eee; */
}
.wish {
  width: 220rpx;
  height: 80rpx;
  box-sizing: border-box;
  border-radius: 10rpx;
  background-color: #fff;
}
.done {
  width: 220rpx;
  height: 80rpx;
  box-sizing: border-box;
  border-radius: 10rpx;
  background-color: #fff;
}
.icon {
  width: 30rpx;
  height: 28rpx;
  /* border: 1rpx solid rgb(208, 59, 59); */
  margin-right: 10rpx;
  vertical-align: middle;
}

.w_icon {
}
.d_done {
}
.detail {
  padding: 15rpx;
}
.d_main h2 {
  color: #818181;
  margin: 10rpx 0 15px;
  padding: 10rpx;
  font-size: 15px;
  border-bottom: 1rpx solid #eee;
}
.d_main p {
  font-size: 15px;
  color: #191919;
  line-height: 44rpx;
}
</style>