<template>
  <div>
    <MyHeader title="tabaBar"></MyHeader>
    <div style="margin-top: 45px;">
      <component :is="com"></component>
    </div>
    <MyTabBar :arr="tabList" @changge="changgeFn"></MyTabBar>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyTabBar from "./components/MyTabBar.vue";

import MyGoodsList from "./views/MyGoodsList.vue";
import MyGoodsSearch from "./views/MyGoodsSearch.vue";
import MyUserInfo from "./views/MyUserInfo.vue";

export default {
  data() {
    return {
      com: "MyGoodsList",
      tabList: [
        {
          iconText: "icon-shangpinliebiao",
          text: "商品列表",
          componentName: "MyGoodsList",
        },
        {
          iconText: "icon-sousuo",
          text: "商品搜索",
          componentName: "MyGoodsSearch",
        },
        {
          iconText: "icon-user",
          text: "我的信息",
          componentName: "MyUserInfo",
        },
      ],
    };
  },
  components: {
    MyHeader,
    MyTabBar,
    MyGoodsList,
    MyGoodsSearch,
    MyUserInfo,
  },
  methods: {
    changgeFn(index) {
      this.com = this.tabList[index].componentName;
    },
  },
};
</script>

<style>
</style>