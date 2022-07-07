<template>
  <div>
    <MyTable :arr="list">
      <template #th>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template #td="row">
        <td>{{ row.row.id }}</td>
        <td>{{ row.row.goods_name }}</td>
        <td>{{ row.row.goods_price }}</td>
        <td>
          <input
            class="tag-input form-control"
            style="width: 100px"
            type="text"
            v-focus
            v-if="row.row.inputVisible"
            @blur="row.row.inputVisible = false"
            @keydown.enter="enterFn(row.row)"
            @keydown.esc="row.row.inputValue = ''"
          />
          <button
            v-else
            style="display: block"
            class="btn btn-primary btn-sm add-tag"
            @click="row.row.inputVisible = true"
          >
            +Tag
          </button>
          <span
            v-for="(str, ind) in row.row.tags"
            :key="ind"
            class="badge badge-warning"
          >
            {{ str }}
          </span>
        </td>
        <td>
          <button class="btn btn-danger btn-sm" @click="removeBtn(row.row.id)">
            删除
          </button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from "../components/MyTable.vue";
export default {
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.$axios({
      url: "/api/goods",
    }).then((res) => {
      this.list = res.data.data;
    });
  },
  components: {
    MyTable,
  },
  methods: {
    removeBtn(id) {
      let index = this.list.findIndex((obj) => obj.id === id);
      this.list.splice(index, 1);
    },
    enterFn(obj) {
      // 回车
      // console.log(obj.inputValue);
      if (obj.inputValue.trim().length === 0) {
        alert("请输入数据");
        return;
      }

      obj.tags.push(obj.inputValue); // 表单里的字符串状态tags数组
      obj.inputValue = "";
    },
  },
};
</script>

<style>
</style>