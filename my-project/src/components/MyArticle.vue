<template>
	<article class="one-article">
		<h3>后西方时代，俄与美欧破冰难！</h3>
		<p>{{textP}}</p>
	</article>
</template>

<script>
	export default {
		name: 'article',
		data() {
			return {
				
			}
		},
		props: ['textP']
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
	.one-article{
		width: 500px;
		height: auto;
		background: #CCDDDD;
		border: 1px solid #ccc;
		p{
			text-align: left;
		}
	}
</style>