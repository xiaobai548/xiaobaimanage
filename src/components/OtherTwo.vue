<template>
  <div>
      <table>
          <tr>
              <th>姓名</th>
              <th>班级</th>
              <th>分数</th>
              <th>性别</th>
          </tr>
          <tr v-for="(item,index) in data" :key="index">
              <td>{{item.name}}</td>
              <td>{{item.class}}</td>
              <td>{{item.score}}</td>
              <td>{{item.sex}}</td>
          </tr>

      </table>

      <table>
          <tr>
              <th >班级</th>
              <th>性别</th>
              <th>总分数</th>
          </tr>
          <tr v-for="(item,index) in total" :key="index">
              <td>{{item}}</td>
          </tr>
      </table>
      <div class="box22"></div>
      <div class="box33"></div>
      <p>haha</p>
  </div>
</template>

<script>
export default {
    computed: {
        total() {
            let arr=[]
            let data2=this.data
            for(let item of data2){
                if(item.class==1&&item.sex=='男')
                  if(arr[0]) arr[0]+=item.score;
                  else arr[0]=item.score
                if(item.class==1&&item.sex=='女')
                if(arr[1]) arr[1]+=item.score;
                  else arr[1]=item.score
                if(item.class==2&&item.sex=='男')
                if(arr[2]) arr[2]+=item.score;
                  else arr[2]=item.score
                if(item.class==2&&item.sex=='女')
                if(arr[3]) arr[3]+=item.score;
                  else arr[3]=item.score
            }
            for(let i=0;i<arr.length;i++){
                if(!arr[i])
                arr[i]=0
            }
            return arr 
        }
    },
  data() {
    return {
      data: [{ name: "ww", class: 1, score: 60 ,sex:'男'},
      { name: "ww", class: 2, score: 60 ,sex:'男'},
      { name: "ww", class: 1, score: 60 ,sex:'女'},
      { name: "ww", class: 2, score: 60 ,sex:'女'},
      { name: "ww", class: 1, score: 60 ,sex:'男'},],
    };
  },

 
};
</script>

<style lang="scss" scoped>
.box22{
  width: 0;
  height: 0;
  border-left: 50px solid yellow;
  border-top: 50px solid #fff;
  border-right: 50px solid ;
  border-bottom: 50px solid ;
}

.box33{
  width: 100px;
  height: 100px;
  background-color: yellow;
 
}
.box33:hover{
    background-color: red;
  }
p::after{
  content: '我是css里的字';
}
p::before{
  content: '我是css里的brefore';
}
@media (max-width:500px) {
  .box33{
    background-color: #fff;
  }
}
</style>