<template>
 <div class="header div-beauty">
 	<el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" >
  <el-menu-item index="1">处理中心</el-menu-item>
  <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
  </el-submenu>
  <el-menu-item index="3">订单管理</a></el-menu-item>
</el-menu>

 </div>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import url("../assets/css/common.less");
.header{
	width: 100%;
	height: 60px;
	line-height: 60px;
	background: @bgcolor;
	text-align: center;
	.el-menu--horizontal{
		margin-left: 120px;
	}
}
</style>
