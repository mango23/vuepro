<template>
	<div>
		<!--v-link="{name: 'one', params: {userId: 1}" -->
		<p>it is content</p>
		<router-link to="one" class="m-btn">one</router-link>
		<!--<a router-link to="one"  class="m-btn">one</a>-->
		<a href="#/two" class="m-btn">two</a>
		<button @click="greet()" class="m-btn">greet</button>
		<button @click="getData()" class="m-btn">getdata</button>
		<input type="text" name="" id="" value="" v-model="msg" />
		<p v-show='false'>{{msg}}</p>
		<!-- <a v-link="{ path: '/one'}">News 03</a>-->
	</div>

</template>

<script>
	import myContent from 'components/Content'
	import router from 'router'
	window.router = router
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
				router.push('/one')
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