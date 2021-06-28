<template>
  <div>
    <el-button @click="change('send')">写信</el-button>
    <el-button @click="change('receive')">收件箱</el-button>
    <form action="" v-show="currentshow == 'send'">
      <div class="send">
        <div><span class="mes">收件人 </span> <input type="email" /></div>
        <div><span class="mes">主题 </span> <input type="text" /></div>
        <!-- <div class="file"><input class="fileupload" type="file" name="" id="">  </div> -->
        <div>
          <span class="mes"> 正文</span>
          <textarea name="" id="" cols="70" rows="18"></textarea>
        </div>
        <div class="button">
          <div><el-button @click="send">发送</el-button></div>
          <div><el-button @click="close">清空</el-button></div>
        </div>
      </div>
    </form>

    <div class="receivebox" v-show="currentshow == 'receive'">
      <div
        v-for="(item, index) in message"
        :key="index"
        class="receive"
        
      >
        <i class="el-icon-s-comment"></i>
        <span class="sender">{{ item.sendPeople }}</span>
        <span class="zhuti">{{ item.zhuti }}</span>
        <span class="text">{{ item.text }}</span>
        <span class="time">{{ item.time }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    send() {
      let messagerecord = {};
      let inputs = document.getElementsByTagName("input");
      let textarea = document.getElementsByTagName("textarea");
      messagerecord.sendPeople = inputs[0].value;
      messagerecord.zhuti = inputs[1].value;
      messagerecord.text = textarea[0].value;
      let date = new Date();
      messagerecord.time = date.toLocaleDateString();
      this.$store.commit("pushMessage", messagerecord);
      for (let index = 0; index < inputs.length; index++) {
        inputs[index].value = "";
      }
      textarea[0].value = "";
      alert("发送成功");
    },
    close() {
      let inputs = document.getElementsByTagName("input");
      for (let index = 0; index < inputs.length; index++) {
        inputs[index].value = "";
      }
      let textarea = document.getElementsByTagName("textarea");
      textarea[0].value = "";
    },
    initmes() {
      this.message = this.$store.state.messagerecord;
    },
    change(str) {
      if (str == "send") this.currentshow = "send";
      if (str == "receive") this.currentshow = "receive";
      if (str == "detail") this.currentshow = "detail";
    },
  },
  data() {
    return {
      message: [],
      currentshow: "send",
    };
  },
  mounted() {
    this.initmes();
  },
};
</script>

<style lang="scss" scoped>
.send {
  margin-top: 10px;
  padding-top: 15px;
  width: 800px;
  background-color: #eff5fb;
}
.mes {
  margin-left: 20px;
  display: inline-block;
  width: 100px;
  vertical-align: top;
  margin-bottom: 15px;
}
.button {
  display: flex;
  padding: 0 200px;
  width: 400px;
  justify-content: space-around;
}
.receivebox{
  margin-top: 10px;
  width: 800px;
  border-top: 2px solid #a7c5e2;;
}
.receive {
  width: 800px;
  height: 20px;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #e3e6eb;
}
.sender {
  padding-left: 10px;
  flex: 0.5;
  width: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.zhuti {
  flex: 1;
  width: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.text {
  flex: 1;
  color: rgb(160, 160, 160);
  width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.time {
  width: 100px;
}
</style>