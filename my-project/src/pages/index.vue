<template>
	<div>
		<p>it is content</p>
		<a href="#/one" class="m-btn">one</a>
		<a href="#/two" class="m-btn">two</a>
		<button @click="greet()" class="m-btn">greet</button>
		<button @click="getData()" class="m-btn">getdata</button>
		<input type="text" name="" id="" value="" v-model="msg" />
		<p>{{msg}}</p>
	</div>

</template>

<script>
	import myContent from 'components/Content'
	// var $ = require('jquery')
	import $ from 'jquery'

	export default {
		name: 'index',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				msg1: 'hello'
			}
		},
		components: {
			myContent
		},
		methods: {
			greet: function(event) {
				console.log('hello')
			},
			getData: function() {
				var txt = $('p').text()
				console.log(txt)
				$.ajax({
					url: 'mock/gettwo',
					type: 'get',
					dataType: 'json',
					success: function(data) {
						console.log(data)
					}
				})
			}
		}
	}
</script>

<style>
	@import url("../assets/css/common.less");
</style>