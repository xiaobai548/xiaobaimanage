<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card shadow="hover">
          <div class="user">
            <div>
              <img src="~assets/images/user.png" class="image" alt="" />
            </div>
            <div class="detail">
              <p>Nick</p>
              <p>超级管理员</p>
            </div>
          </div>
          <div class="login">
            <div>上次登录时间： 2021-4-11</div>
            <div>上次登录地点： 广东广州</div>
          </div>
        </el-card>
        <el-card shadow="hover">
          <el-table :data="homedata" style="width: 100%" show-overflow-tooltip>
            <el-table-column prop="name" label="课程名称" width="100">
            </el-table-column>
            <el-table-column prop="today" label="今日销量" width="50">
            </el-table-column>
            <el-table-column prop="month" label="本月销量" width="50">
            </el-table-column>
            <el-table-column prop="total" label="总销量"> </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="16">
        <div class="num">
          <div class="numitem" v-for="(item, index) in num" :key="index">
            <div>
              <i
                class="el-icon-info icon"
                :style="{ backgroundColor: item.color }"
              ></i>
            </div>
            <div class="numitem-right">
              <div>
                {{ item.num }}
              </div>
              <div>
                {{ item.text }}
              </div>
            </div>
          </div>
        </div>
        <el-card shadow="hover">
          <e-chart style="height: 280px" :tableData="orderData"></e-chart>
        </el-card>
        <div class="graph">
          <el-card class="graphItem" shadow="hover" style="height: 210px">
            <e-chart style="height: 210px" :tableData="weekData"></e-chart>
          </el-card>
          <el-card class="graphItem" shadow="hover" style="height: 210px">
            <e-chart style="height: 210px" :tableData="weekData"></e-chart>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import requie from "../network";
import eChart from 'components/EChart.vue'
// @ is an alias to /src
export default {
  name: "Home",
  components: {
    eChart
  },
  data() {
    return {
      num: [
        {
          num: 134,
          text: "今日支付订单",
          color: "#2ec7c9",
        },
        {
          num: 1234,
          text: "本月支付订单",
          color: "#5ab1ef",
        },
        {
          num: 12340,
          text: "总支付订单",
          color: "#ffb980",
        },
        {
          num: 34,
          text: "今日收藏订单",
          color: "#2ec7c9",
        },

        {
          num: 234,
          text: "本月收藏订单",
          color: "#5ab1ef",
        },

        {
          num: 1234,
          text: "总收藏订单",
          color: "#ffb980",
        },
      ],
      homedata:[],
      orderData:{
        xData:[],
        series:[],
        legend:{
          data:[]
        },
      },
      weekData:{
        xData:[],
        series:[{
          data:[],
          type:'bar'
        }
        ]
      }
    };
  },
  mounted() {
    requie({ url: "/home/getData" }).then((res) => {

     //处理左下角数据
      let data=res.data.getHomeData.data
      this.homedata=data.videoData
      // console.log(this.homedata);


       //处理第一个表格的数据
      this.orderData.xData=data.orderData.date
      console.log(data.orderData.data);
      let name=Object.keys(data.orderData.data[0])
      name.forEach(key=>{
        this.orderData.legend.data.push(key)
        this.orderData.series.push({
          name:key,
          data: data.orderData.data.map(item=>{
            return item[key]
          }),
          type:'line'
        })
      })
      console.log(this.orderData);


      //处理第二个表格的数据
      let weekdata2=data.weekData
      weekdata2.forEach(item=>{
        this.weekData.xData.push(item.date)
        this.weekData.series[0].data.push(item.value)
      })
      this.weekData.series[0].type='bar'
    });
  },
};
</script>

<style lang="scss" scoped>
.image {
  width: 100px;
  height: auto;
  border-radius: 50%;
}
.user {
  height: 120px;
  display: flex;
  justify-content: space-around;
  border-bottom: 2px solid #333;
}
.login {
  margin-top: 20px;
}
.num {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.numitem {
  border: 1px solid rgb(0,0,0,0.5);
  border-radius: 2%;
  margin-bottom: 2px;
  width: 32%;
  height: 60px;
  display: flex;
  margin-right: 1px;
}
.icon {
  font-size: 30px;
  padding: 15px 10px;
  width: auto;
  background-color: #2ec7c9;
}
.numitem-right {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-left: 10px;
}
.graph{
  display: flex;
  width: 100%;
  .graphItem{
    width: 50%;
  }
}
</style>
