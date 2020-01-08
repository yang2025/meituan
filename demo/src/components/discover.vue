<template>
  <div class="discover">
      <header class=" mine-top  search-top header-top">
          <span>发现</span>
      </header>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="推荐" name="first">推荐</el-tab-pane>
        <el-tab-pane label="电影" name="second">电影</el-tab-pane>
        <el-tab-pane label="购物" name="third">购物</el-tab-pane>
        <el-tab-pane label="玩乐" name="fourth">玩乐</el-tab-pane>
        <el-tab-pane label="丽人" name="fifth">丽人</el-tab-pane>
        <el-tab-pane label="旅行" name="sixth">旅行</el-tab-pane>
        <el-tab-pane label="美食" name="severth">美食</el-tab-pane>
        <el-tab-pane label="结婚" name="eighth">结婚</el-tab-pane>
      </el-tabs>
  </div>
</template>

<script>
  // import {} from "element-ui"
  export default{
    name:"discover",
    data(){
      return{
        activeName: 'first'
      }
    },
    methods: {
        handleClick(tab, event) {
          // console.log(tab, event);
        }
      }

  }
</script>

<style>
</style>
