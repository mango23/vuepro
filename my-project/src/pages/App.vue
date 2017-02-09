<template>
  <div id="app">
    <!--<img src="../assets/logo.png">-->
    <my-header />
		<sider />
		<my-footer />
		<my-content>
    
    <my-content />
  </div>
</template>

<script>
import myHeader from 'components/Header'
import myFooter from 'components/Footer'
import sider from 'components/Sider'
import myContent from 'components/Content'
export default {
  name: 'app',
  components: {
    myHeader,
    myFooter,
    sider,
    myContent
  }
}
</script>

<style>
header,footer{
	width: 100%;
	height: 60px;
	background: #cdd;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  /*margin-top: 60px;*/
}
</style>
