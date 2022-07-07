<template>
  <!-- - 需求: 点击底部实现高亮效果

分析：
 绑定点击事件, 获取点击的索引
 循环的标签设置动态class, 遍历的索引, 和点击保存的索引比较, 相同则高亮 -->

  <div class="my-tab-bar">
    <div
      class="tab-item"
      v-for="(item, index) in arr"
      :key="index"
      :class="{ current: curindex === index }"
      @click="cuttonFn(index, item)"
    >
      <!-- 图标 -->
      <span class="iconfont" :class="item.iconText"></span>
      <!-- 文字 -->
      <span>{{ item.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      curindex: 0,
    };
  },
  props: {
    arr: {
      type: Array,
    },
  },
  methods: {
    cuttonFn(index,) {
      this.curindex = index;
      this.$emit("changge", index);
    },
  },
};
</script>

<style lang="less" scoped>
.my-tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }
}

.current {
  color: #1d7bff;
}
</style>