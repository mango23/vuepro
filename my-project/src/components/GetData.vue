<style lang="less" rel="stylesheet/less" scoped>
	@import url("../assets/css/common.less");
	.cont-box {
		font-size: 0;
		width: 100%;
		text-align: left;
		.cont-item {
			display: inline-block;
			border: 1px solid #ccc;
			margin: 5px;
			padding: 5px;
			border-radius: 5px;
			background: #CCDDDD;
			p {
				font-size: 12px;
				text-align: center;
			}
		}
		.item-img {
			width: 100px;
			height: 100px;
			margin: 5px;
		}
	}
</style>
<template>
	<div>
		<div class="cont-box">
			<div class="cont-item" v-for="(testdata, index) in testdatas">
				<div class="item-img"><img :src="testdata.image" /></div>
				<p>{{testdata.name}}</p>
				<p>{{testdata.date}}</p>
			</div>
			<p my-message="hello!"></p>
		</div>
		<!-- <a v-link="{ path: '/one'}">News 03</a>-->
	</div>

</template>

<script>
	import myContent from 'components/Content'
	import router from 'router'
	import $ from 'jquery'
	import axios from 'axios'
	export default {
		name: 'one',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				msg1: 'hello',
				testdatas: {}
			}
		},
		props: {
			propA: Number,
			propB: [String, Number],
			//  		 ['myMessage']
		},
		components: {
			myContent
		},
		//		mounted() {
		//			
		//		},
		created() {
			this.getData()
			//			this.getAxiosData()
		},
		watch: {
			// 如果路由有变化，会再次执行该方法
			'$route': 'getData'
		},
		methods: {
			greet(event) {
				console.log('hello')
				router.push('/one')
			},
			getData() {
				let self = this
				$.ajax({
					url: 'mock/gettwo',
					type: 'get',
					dataType: 'json',
					success: function(data) {
						self.testdatas = data.two
					}
				})
			}
		}
	}
	//	,
	//			getAxiosData() {
	//				axios.get('mock/getmockdata')
	//					.then(function(res) {
	//						console.log(res);
	//					})
	//					.catch(function(err) {
	//						console.log(err);
	//					})
	//			}
</script>