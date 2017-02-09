<template>
 <div class="content">
 	<router-view>
 	
 	</router-view>
 	
 </div>
</template>

<script>
export default {
  name: 'content'
}
</script>

<style>
.content{
	width: 90%;
	display: inline-block;
	position: absolute;
	top: 88px;
	left: 10%;
	height: 512px;
	background: #fff;
	text-align: center;
}
</style>
