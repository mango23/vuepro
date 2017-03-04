<style lang="less" rel="stylesheet/less" scoped>
	@import url("../assets/css/common.less");
	.onec {
		width: 100%;
		/*height: 400px;*/
		text-align: left;
	}
</style>
<template>
	<div class="onec">
		<p>one-child</p>
		count is {{ $store.state.count }}
		<button @click="increment">+5</button>
		<button @click="decrement">-2</button>
		<button @click="incrementAsync">-2</button>
		<button @click="onecF">onecF</button>
		<!--<button @click="getNames()">-2</button>-->
		{{ count }}
	</div>

</template>

<script>
	import { mapGetters, mapActions, mapMutations } from 'vuex'
	import $ from 'jquery'
	export default {
		name: 'onec',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				msg1: 'hello',
				name: '123451',
				textp: '编辑的话Introduction 第53届慕尼黑安全会议17日至19日在德国南部城市慕尼黑举行。跨大西洋关系、北约作用以及对俄罗斯关系是今年各方关注的主要议题。本届慕安会释放出美欧重新确认“跨大西洋纽带”、西方仍视俄罗斯为安全挑战等信息。此番言论也得到了俄罗斯外长拉夫罗夫的严厉批评。专家表示，北约是西方与俄罗斯关系的最大障碍。美国对欧洲和俄罗斯的态度似乎正向其传统立场“回调”，只要北约存在，俄罗斯与西方关系短期内就很难得到明显改善。'
			}
		},
		//		computed: mapGetters([]),
		computed: {
			count() {
				//				return console.log(this.$store.getters.done)
				return console.log(this.$store.state.count)
			}
		},
		methods: { //要先安装babel插件 babel-plugin-transform-object-rest-spread，不然不能使用对象扩展符报编译错误，安装完后在 .babelrc中添加 
			//"plugins": ["transform-object-rest-spread"]
			...mapActions([
				'increment',
				'decrement',
				'incrementAsync'
			]),
			onecF(){
				this.$store.commit('increment',102)
			}
			//			inincrea: this.$store.dispatch('incrementAsync')
		}
	}
</script>