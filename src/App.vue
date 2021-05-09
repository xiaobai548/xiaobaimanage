<template>
  <div id="app" >    
    <el-container >
      <el-aside width="auto" v-if="token!=''">
        <common-aside></common-aside>
      </el-aside>
      <el-container>
        <el-main>
          <keep-alive>
          <router-view></router-view>
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>
// import navBar from 'components/NavBar.vue'
import commonAside from 'components/CommonAside.vue'

export default {
  name: 'Home',
  components: {
    commonAside,
  },
  computed: {
    token() {
      return this.$store.state.token 
    }
  },
}
</script>


<style lang="scss">
#app {
  // color: var(--theme-color);
  height: 100vh;
}
</style>
