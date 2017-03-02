<style lang="less" rel="stylesheet/less" scoped>
	@import url("../assets/css/common.less");
	.cont-box{
		font-size: 0;
		width: 100%;
		text-align: left;
		.cont-item{
		display: inline-block;
		border: 1px solid #ccc;
		margin: 5px;
		padding: 5px;
		border-radius: 5px;
		background: #CCDDDD;
		p{
			font-size: 12px;
			text-align: center;
		}
	}
	.item-img{
		width: 100px;
		height: 100px;
		margin: 5px;
	}
	}
	
</style>
<template>
	<div>
		<!--<div class="cont-box">
		<div class="cont-item" v-for="(testdata, index) in testdatas">
			<div class="item-img"><img :src="testdata.image"/></div>
			<p>{{testdata.name}}</p>
			<p>{{testdata.date}}</p>
		</div>
		<p my-message="hello!"></p>
		</div>-->
		<!--<button @click="greet"></button>-->
		<get-data></get-data>
		<!-- <a v-link="{ path: '/one'}">News 03</a>-->
	</div>

</template>

<script>
	import getData from 'components/getData'
	import router from 'router'
	import $ from 'jquery'
	export default {
		name: 'index',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				msg1: 'hello',
			}
		},
		props: {
			 propA: Number,
    		 propB: [String, Number],
//  		 ['myMessage']
		},
		components: {
			getData
		},
		mounted () {
			console.log('one')
		},
		methods: {
			greet: function(event) {
				console.log('hello')
				router.push('/one')
				var arr = [1,2,3,4]
				console.log(...arr)
			}
		}
	}
</script>

