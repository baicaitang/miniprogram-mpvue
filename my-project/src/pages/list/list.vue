<template>
  <div class="contain">
    <swiper
      indicator-dots
      indicator-color=" #00b51d"
      indicator-active-color="#fff"
      interval="2000"
      autoplay
    >
      <swiper-item>
        <img src="/static/images/detail/carousel/01.jpg" alt="" />
      </swiper-item>
      <swiper-item>
        <img src="/static/images/detail/carousel/02.jpg" alt="" />
      </swiper-item>
    </swiper>

    <div class="main">
      <list-temp
        v-for="(item, index) in listTmp"
        :key="index"
        :item="item"
        :index="index"
      ></list-temp>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import ListTemp from "../list_template/list_template.vue";

export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    ListTemp,
  },
  beforeMount() {
    // 分发actions修改状态
    this.$store.dispatch("getList");
  },
  computed: {
    // 映射状态到本组件
    ...mapState(["listTmp"]),
  },
};
</script>
<style scoped>
.contain {
  position: relative;
}

.contain swiper {
  width: 100%;
  height: 400rpx;
}
</style>