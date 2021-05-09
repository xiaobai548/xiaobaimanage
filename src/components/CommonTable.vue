<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="index" width="50">
        <template slot-scope="scope">
          <span>{{
            (pageconfig.currentpage - 1) * 10 + scope.$index + 1
          }}</span>
        </template>
      </el-table-column>
      <el-table-column
        v-for="(item, index) in tableLabel"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
      >
      </el-table-column>
      <el-table-column label="操作" >
        <div slot-scope="scope">
        <el-button type="danger" plain @click="edituser(scope.$index)">编辑</el-button>
        <el-button type="danger" plain @click="deluser(scope.$index)"
          >删除</el-button
        >
        </div>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    tableData: Array,
    tableLabel: Array,
    pageconfig: Object,
  },
  methods: {
    deluser(index) {
      this.$emit("deluser", index);
    },
    edituser(index){
      this.$emit('edituser',index)
    }
  },
};
</script>

<style lang="scss" scoped>
</style>