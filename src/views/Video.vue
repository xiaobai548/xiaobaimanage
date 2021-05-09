<template>
  <div>
    <div class="nav">
      <el-menu
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        mode="horizontal"
      >
        <el-menu-item @click.native="change('htmltype')">html</el-menu-item>
        <el-menu-item @click.native="change('csstype')">css</el-menu-item>
        <el-menu-item @click.native="change('jstype')">js</el-menu-item>
        <el-menu-item @click.native="change('vuetype')">vue</el-menu-item>
      </el-menu>
    </div>
    <div v-for="(item,index) in currenttype" :key="index" >
      <a :href="item.src" target="_blank">
      
        <img class="itemImg" :src="item.img" alt="">
          {{item.name}}
        </a>
      </div>  
  </div>
</template>

<script>
export default {
  data() {
    return {
      type:'htmltype',
      htmltype: [
        {
          src:'https://www.bilibili.com/video/BV14J4114768?from=search&seid=15247604620827066545',
          name:"pink的html",
          img:require('../assets/images/pink.png')
        }
      ],
      csstype: [
        {
          src:"https://www.w3school.com.cn/css/index.asp",
          name:'w3c的css文档',
          img:require('../assets/images/w3c.png')
        }
      ],
      jstype: [
        {
          src:'https://www.bilibili.com/video/BV1YW411T7GX?from=search&seid=13547156319503386817',
          name:"超哥的js",
          img:require('../assets/images/chao.png')

        }
      ],
      vuetype: [
        {
          src:'https://www.bilibili.com/video/BV15741177Eh?p=74',
          name:"codewhy的vue教程",
          img:require('../assets/images/codewhy.png')
        },
        {
          src:'https://github.com/xiaobai548/xiaobaimarket',
          name:'小白的商城',
          img:require('../assets/images/xiaobai.png')

          
        }
      ]
    }
  },
  methods: {
    change(val) {
      this.type=val
    }
  },
  computed: {
    currenttype() {
      switch (this.type) {
        case "htmltype":
          return this.htmltype
        case "csstype":
          return this.csstype
        case "jstype":
          return this.jstype
        case "vuetype":
          return this.vuetype
        default:
          return '';
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.nav{
    transform: -20px;
}
.itemImg{
  width: auto;
  height: 300px;
}
</style>