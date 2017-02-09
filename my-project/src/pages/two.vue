<template>
<div class="two">
 <p>it is two</p>
 	<a href="#/one">one</a>
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
.two{
	background: #8f81d2;
	width: 100%;
	display: inline-block;
	position: absolute;
	top: 0;
	left: 0;
	height: 512px;
	text-align: center;
}
p{
	font-size: 16px;
}
</style>
