<template>
<div>
	<p>it is content</p>
 	<a href="#/one">one</a>
 	<a href="#/two">two</a>
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
</style>
