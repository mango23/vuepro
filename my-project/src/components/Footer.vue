<template>
 <div class="footer div-beauty"></div>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import url("../assets/css/common.less");
.footer{
	width: 100%;
	height: 88px;
	line-height: 88px;
	background: @bgcolor;
	text-align: center;
	position: absolute;
	bottom: -100px;
}
</style>
1