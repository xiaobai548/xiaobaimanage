<template>
  <div ref="echart">echar</div>
</template>

<script>
import * as echarts from "echarts";
export default {
  props: {
    tableData: {
      type: Object,
      default() {
        return {};
      },
    },
    isAxis: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    options() {
      return this.isAxis ? this.axisoptions : this.normoptions;
    },
  },
  data() {
    return {
      echart: null,
      axisoptions: {
        xAxis: {
          type: "category",
          data: [],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [],
            type: "",
          },
        ],
        legend:{
          data:[]
        }
      },
      normoptions: {
        series: [
          {
            data: [],
            type: "",
          },
        ],
      },
    };
  },
  methods: {
    initEchart() {
    this.configEchart()
      if (this.echart) {
        this.echart.setOption(this.options);
      } else {
        this.echart = echarts.init(this.$refs.echart);
        this.echart.setOption(this.options);
      }
    },
    configEchart() {
      if (this.isAxis) {
        this.axisoptions.xAxis.data = this.tableData.xData;
        this.axisoptions.series = this.tableData.series;
        this.axisoptions.legend=this.tableData.legend
      } else {
        console.log("??");
      }
    },
  },
  watch: {
      tableData:{
          handler:function(){
              this.initEchart()
          },
          deep:true
      }
  },
};
</script>

<style lang="scss" scoped>
</style>