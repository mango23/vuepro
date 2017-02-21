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
		<el-select></el-select>
		<el-button></el-button>

		<el-time-select :picker-options="{
			    start: '08:30',
			    step: '00:15',
			    end: '18:30'
			  }" placeholder="选择时间">
		</el-time-select>
		<el-input-number v-model="num1" @change="handleChange" :min="1" :max="10"></el-input-number>
	</div>

</template>

<script>
	import getData from 'components/getData'
	import router from 'router'
	export default {
    data() {
      return {
        num1: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>