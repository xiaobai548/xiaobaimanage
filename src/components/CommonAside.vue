<template>
  <div >
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="issmall"
      router
    >
      <el-menu-item class="title" >
          <span > 广财后台管理系统</span> 
        <i class="el-icon-menu" @click="small" ></i>
      </el-menu-item>
      <el-menu-item index="/">
        <i class="el-icon-s-home"></i>
        <span slot="title" >首页</span>
      </el-menu-item>
      <el-menu-item index="/video">
        <i class="el-icon-video-camera"></i>
        <span slot="title" >视频管理</span>
      </el-menu-item>
      <el-menu-item index="/user">
        <i class="el-icon-user"></i>
        <span slot="title" >用户管理</span>
      </el-menu-item>
      <el-submenu index="/other">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span >其它</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/other/one" ><i class="el-icon-setting"></i>我的邮箱</el-menu-item>
          <el-menu-item index="/other/two" ><i class="el-icon-setting"></i>选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item class="title" >
          <span @click="loginout"> 退出登录</span> 
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
    data() {
        return {
            issmall: false
        }
    },
    methods: {
        small() {
            this.issmall=!this.issmall
        },
        loginout(){
          this.$store.commit("clearToken")
          this.$router.push('/login')
        }
    },
};
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo {
  height: 100vh;
 
}
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
.title{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.issmall{
    width: 100%;
    overflow: hidden;
}
</style>