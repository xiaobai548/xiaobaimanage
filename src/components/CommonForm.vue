<template>
  <div>
    <el-form :inline="true" :model="form">
      <el-form-item v-for="item in formlabel" :key="item.model">
        <el-input  v-model="form[item.model]" :placeholder="'请输入'+item.label" v-if="!item.type"></el-input>
      </el-form-item>
      <!-- <el-form-item label="活动区域">
        <el-select v-model="formInline.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item> -->
      <slot></slot>
    </el-form>
  </div>
</template>

<script>
export default {
    props: {
        form: Object,
        formlabel:Array
    },
};
</script>

<style lang="scss" scoped>
</style>