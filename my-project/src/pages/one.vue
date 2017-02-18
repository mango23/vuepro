<template>
<div class="one">
	<p>it is one</p>
 	<a href="#/two" class="m-btn">two</a>
 	<a href="#/" class="m-btn">content</a>
</div> 
</template>

<script>
import myContent from 'components/Content'
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App 蚂蚁',
      msg1: 'hello'
    }
  },
  components: {
    myContent
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
 @import url("../assets/css/common.less");
.one{
	background: #CCDDDD;
	width: 99%;
	display: inline-block;
	position: absolute;
	top: 0;
	left: 1%;
	height: 512px;
	text-align: center;
	p{
		font-size: 16px;
		color: #8F81D2;
	}
}
</style>