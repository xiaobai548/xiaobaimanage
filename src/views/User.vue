<template>
  <div class="user">
    <div class="user-header">
      <el-button type="primary" @click="newuser" class="newbut">+新增</el-button>
      <common-form :form="form" :formlabel="formlabel">
        <el-button type="primary">搜索</el-button>
      </common-form>
    </div>
    <div class="user-contain">
      <common-table :tableData="tableData" :tableLabel="tableLabel" :pageconfig="pageconfig" @deluser="deluser" @edituser="edituser" >
        
      </common-table>
    </div>
    <el-pagination background layout="prev, pager, next" :total="pageconfig.total" @current-change="changepage">
    </el-pagination>
     <el-form class="userinfo" ref="form" :model="form" label-width="80px" v-if="isshow">
        <el-form-item label="名字">
          <el-input v-model="newuserinfo.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="newuserinfo.age"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="newuserinfo.sex"></el-input>
        </el-form-item>
        <el-form-item label="生日">
          <el-input v-model="newuserinfo.birth"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="newuserinfo.addr"></el-input>
        </el-form-item>
        <div class="button">
          <el-button class="submit" type="danger" plain @click="submitUser(operatetype)">确认提交</el-button>
          <el-button class="close" type="danger" plain @click="close">关闭</el-button>
          </div>
      </el-form>
  </div>
</template>

<script>
import commonTable from "components/CommonTable.vue";
import commonForm from "components/CommonForm.vue";

export default {
  components: {
    commonTable,
    commonForm,
  },
  methods: {
    getUser() {
      this.$store.dispatch("getuser");
    },
    newuser() {
      this.newuserinfo={
        name:'',
        age:'',
        sex:'',
        birth:'',
        addr:'',
      },
      this.operatetype='add'
      this.isshow=!this.isshow
    },
    submitUser(type){
      if(type==='add'){
      this.totaltableData.push(this.newuserinfo)
      this.newuserinfo={
        name:'',
        age:'',
        sex:'',
        birth:'',
        addr:'',
      },
      this.pageconfig.total++
      this.operatetype=''
      }
     if(type==='edit'){
      console.log(this.editindex);
      this.totaltableData.splice(this.editindex,1,this.newuserinfo)
      this.newuserinfo={
        name:'',
        age:'',
        sex:'',
        birth:'',
        addr:'',
      },
      this.tableData=this.totaltableData.slice((this.pageconfig.currentpage-1)*10,(this.pageconfig.currentpage-1)*10+10)
      this.operatetype=''
      this.isshow=!this.isshow
     }
    },
    close(){
      this.isshow=false
    },
    changepage(page){
      this.pageconfig.currentpage=page;
      this.tableData=this.totaltableData.slice((this.pageconfig.currentpage-1)*10,(this.pageconfig.currentpage-1)*10+10)
    },
    deluser(index){
      index=(this.pageconfig.currentpage-1)*10+index
      console.log(index);
      this.totaltableData.splice(index,1)
      this.tableData=this.totaltableData.slice((this.pageconfig.currentpage-1)*10,(this.pageconfig.currentpage-1)*10+10)
      this.pageconfig.total--
    },
    edituser(index){
      this.operatetype='edit'
      index=(this.pageconfig.currentpage-1)*10+index
      this.editindex=index


      // console.log(this.totaltableData.slice(index,index+1));
      let currentuser = this.totaltableData.slice(index,index+1)
      this.newuserinfo.name=currentuser[0].name
      this.newuserinfo.age=currentuser[0].age
      this.newuserinfo.sex=currentuser[0].sex
      this.newuserinfo.birth=currentuser[0].birth
      this.newuserinfo.addr=currentuser[0].addr
      // console.log(this.newuserinfo);
      this.isshow=!this.isshow
    }

  },

  created() {
    if (this.$store.state.user.length === 0) {
      this.getUser();
    }
    setTimeout(() => {
      this.totaltableData = this.$store.state.user;
      this.tableData=this.totaltableData.slice((this.pageconfig.currentpage-1)*10,(this.pageconfig.currentpage-1)*10+10)
      this.pageconfig.total=this.totaltableData.length
    }, 2000);
  },

  mounted() {},
  data() {
    return {
      form: {
        keyword: "",
      },
      formlabel: [
        {
          model: "keyword",
          label: "",
        },
      ],
      tableLabel: [
        {
          prop: "name",
          label: "姓名",
          width: "85px",
        },
        {
          prop: "age",
          label: "年龄",
          width: "85px",
        },
        {
          prop: "sex",
          label: "性别",
          width: "85px",
        },
        {
          prop: "birth",
          label: "出生日期",
          width: "150px",
        },
        {
          prop: "addr",
          label: "地址",
          width: "200px",
        },
      ],
      totaltableData: [],
      tableData: [],
      isshow:false,
      newuserinfo:{
        name:'',
        age:'',
        sex:'',
        birth:'',
        addr:'',
      },
      pageconfig:{
         currentpage:1,
         total:0
      },
      operatetype:'',
      editindex:-1
    };
  },
};
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
/*隐藏滚轮*/
display: none;
}
body{
  background-color: #5f5f5f;
}
.user-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.user-contain {
  height: 80vh;
  width: 80vw;
  overflow: scroll;
  
}
.newbut {
  margin-bottom: 22px;
}
.userinfo{
  position: fixed;
  padding: 20px 0;
  top: 20%;
  left: 35%;
  padding-right: 50px;
  background-color: #fff;
  border: 2px solid black;
}
.button{
  display: flex;
  justify-content: space-around;
  margin-left: 30px;
}

</style>