<template>
<div class="one">
	<p>it is one</p>
 	<a href="#/two">two</a>
 	<a href="#/">content</a>
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

<style>
p{
	font-size: 16px;
}
.one{
	background: #CCDDDD;
	width: 100%;
	display: inline-block;
	position: absolute;
	top: 0;
	left: 0;
	height: 512px;
	text-align: center;
}
</style>
