<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="nav.class">
      <dt>{{ nav.title }}</dt>
      <dd
        v-for="(item, index) in nav.list"
        :key="index"
        :class="{ active: kind == item.tab }"
        :data-type="item.tab"
      >
        {{ item.text }}
      </dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item, index) in resultData[kind]" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="image" />
          <div class="cbody">
            <div :title="item.title" class="title">
              {{ item.title }}
            </div>
            <div class="sub-title" title="item.subtitle">
              {{ item.subtitle }}
            </div>
            <div class="price-info">
              <span class="current-price-wrapper"
                ><span class="price-symbol numfont">¥</span
                ><span class="current-price numfont">{{
                  item.price
                }}</span></span
              >
              <span class="sold bottom-right-info">{{ item.address }}</span>
              <!-- <span class="old-price"
                >门市价￥{{ item.price_info.old_price }}</span
              >
              <span class="sold bottom-right-info">{{ item.address }}</span> -->
            </div>
            <!-- <div class="price-info" v-else-if="!item.rentNum">
              <span class="current-price-wrapper"
                ><span class="price-symbol numfont">¥</span
                ><span class="current-price numfont">抢光了</span></span
              >
            </div>
            <div class="price-info" v-else>
              <span class="current-price-wrapper"
                ><span class="price-symbol numfont">¥</span
                ><span class="current-price numfont">{{}}</span></span
              >
            </div> -->
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      kind: "all",
      resultData: {},
      list: [],
    };
  },
  created() {
    api.resultsByKeywords().then((res) => {
      // console.log(res);
      this.resultData = res.data.data;
    });
  },
  props: ["nav"],
  methods: {
    over(e) {
      // console.log(this.nav);
      // console.log(e.target);
      let dom = e.target;
      let tagName = dom.tagName.toLowerCase();
      // console.log(tagName)
      if (tagName != "dd") {
        return false;
      }
      this.kind = dom.getAttribute("data-type");
      //动态获取数据 ajax请求
    },
  },
};
</script>