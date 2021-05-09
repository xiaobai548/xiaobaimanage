<template>
  <div class="loginForm">
    <el-form size="medium" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="password"></el-input>
      </el-form-item>
      <el-form-item class="button">
        <el-button @click="login" type="primary" plain>登录</el-button>
        <el-button @click="clear" type="primary" plain>清空</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "wcq",
      password: "wcq",
    };
  },
  
  methods: {
    login() {
      if (this.username == "wcq" && this.password == "wcq")
        {this.$store.commit("setToken", "123");
        this.$router.push('/')}
      else {
        this.$toast.show("用户名或密码错误", 3000);
      }
    },
    clear() {
      this.username = "";
      this.password = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.loginForm {
  width: 500px;
  margin: 0 auto;
  margin-top: 50px;
  border: 2px solid rgb(90, 50, 201);
  padding: 20px;
}
.button {
  display: flex;
  justify-content: space-around;
  margin-right: 65px;
}
</style>