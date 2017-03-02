<template>
 <div class="content div-beauty">
 	<keep-alive>
	 	<router-view>
	 	</router-view>
 	</keep-alive>
 </div>
</template>

<script>
export default {
  name: 'content',
  data () {
  	return{
  		mymessage:'123'
  	}	
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import url("../assets/css/common.less");
.content{
	width: 90%;
	display: inline-block;
	position: absolute;
	top: 60px;
	left: 145px;
	height: 595px;
	background: #fff;
	text-align: center;
	border: 1px solid #ccc;
	border-radius: 5px;
	padding: 20px;
}
</style>
