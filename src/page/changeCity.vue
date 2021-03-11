<template>
  <div class="page-changeCity">
    <el-row> <province /> </el-row>
    <el-row> <hot title="热门城市:" :list="hotlist" /> </el-row>
    <el-row><hot title="热门搜索:" :list="rencentList" /> </el-row>
    <el-row> <cate-gory /> </el-row>
  </div>
</template>
<script>
import api from "@/api/index.js";
import Province from "@/components/changeCity/province.vue";
import hot from "@/components/changeCity/hot.vue";
import CateGory from "@/components/changeCity/category.vue";
export default {
  data() {
    return {
      hotlist: [],
      rencentList: [],
    };
  },
  created() {
    api.getHotCity().then((res) => {
      // console.log(res);
      this.hotlist = res.data.data;
    });
    api.getRecentCity().then((res) => {
      // console.log(res);
      this.rencentList = res.data.data;
    });
  },
  components: {
    Province,
    hot,
    CateGory,
  },
};
</script>
<style  lang="scss">
@import "@/assets/css/changecity/iselect.scss";
@import "@/assets/css/changecity/select.scss";
</style>
