<template>
 <div class="content div-beauty">
 	<router-view>
 	</router-view>
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
	top: 88px;
	left: 10%;
	height: 512px;
	background: #fff;
	text-align: center;
	border: 1px solid #ccc;
	border-radius: 5px;
}
</style>
