<template>
  <div class="contain">
    <div class="main">
      <div class="movices">
        <div
          class="list"
          v-for="(item, index) in movicesArr"
          :key="index"
          :item="item"
          :index="index"
          @tap="toMoviesDetail(index)"
        >
          <img :src="item.images.large" alt="" />
          <div class="info">
            <div class="name">{{ item.original_title }}</div>
            <div class="time">年份：{{ item.year }}</div>
            <div class="director">导演：{{ directiors[index] }}</div>
          </div>
          <div class="score">{{ item.rating.average }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      // movicesArr: [],
      directiors: [],
    };
  },
  beforeMount() {
    // 分发actions修改状态
    this.$store.dispatch("getMovies");
    // console.log(this.movicesArr[0].directors[0].name);

    for (let i = 0; i < this.movicesArr.length; i++) {
      // this.directors[i] = this.movicesArr[i].directors[0].name;
      this.directiors.push(this.movicesArr[i].directors[0].name);
    }
  },
  computed: {
    // 映射状态到本组件
    ...mapState(["movicesArr"]),
  },
  methods: {
    toMoviesDetail(index) {
      wx.navigateTo({
        url: "/pages/movicesDetail/main?index=" + index,
      });
    },
  },
};
</script>
<style scoped>
.contain {
}
.main {
  padding: 40rpx;
  width: 100%;
  /* background-color: rgb(78, 77, 77); */
  box-sizing: border-box;
}
.movices {
  display: flex;
  flex-direction: column;
  color: #fff;
}
.list {
  margin-bottom: 20rpx;
  width: 100%;
  height: 350rpx;
  box-sizing: border-box;
  /* border-bottom: 1rpx dashed rgb(184, 184, 184); */
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10rpx;
  position: relative;
  overflow: hidden;
}
.list img {
  width: 180rpx;
  height: 270rpx;
  position: absolute;
  top: 30rpx;
  left: 20rpx;
  border-radius: 10rpx;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
}
.info {
  max-width: 320rpx;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 30rpx;
  left: 220rpx;
  /* background-color: rgb(213, 116, 116); */
  overflow: hidden;
}
.info div {
  margin: 10rpx 0;
}
.name {
  font-size: 23px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.time {
  font-size: 15px;
  color: rgb(255 255 255 / 70%);
}
.director {
  font-size: 15px;
  color: rgb(255 255 255 / 70%);
}
.score {
  position: absolute;
  top: 30rpx;
  right: 20rpx;
  font-size: 34px;
  font-weight: bold;
  color: #ffac2c;
}
</style>