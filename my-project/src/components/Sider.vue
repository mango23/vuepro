<template>
 <div class="sider div-beauty">
 	<router-link :to="{ name: 'one', params: { userId: 123 }}" class="m-btn">one</router-link>
 	<router-link to="/two" class="m-btn">two</router-link>
 	<router-link to="/index" class="m-btn">content</router-link>
 	<router-link to="/elementui" class="m-btn">elementui</router-link>
 	<router-link to="/form" class="m-btn">form</router-link>
 </div>
</template>

<script>
export default {
  name: 'sider'
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import url("../assets/css/common.less");
.sider{
	width: 9%;
	height:-moz-calc(100% - 90px); 
	height:-webkit-calc(100% - 90px); 
	height: calc(100% - 90px);
	height: 512px;
	/*background: #324157;*/
	text-align: center;
}
</style>
