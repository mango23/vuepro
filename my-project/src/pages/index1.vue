<template>
<div>
	<!--<p>$.ajax({
	  	 type: 'get',
         async: false,
         url: 'http://flightQuery.com/jsonp/flightResult.aspx?code=CA1998',
         dataType: 'jsonp',
         jsonp: 'callback',//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
         jsonpCallback:'flightHandler',//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
         success: function(json){
            console.log('123')
         },
         error: function(){
            console.log('fail')
         }
    })</p>-->
	<p>it is content</p>
 	<a href="#/one">one</a>
 	<a href="#/two">two</a>
 	<button @click="greet()">greet</button>
 	<button @click="getData()">getdata</button>
 	
 	<input type="text" name="" id="" value="" v-model="msg"/>
 	<p>{{msg}}</p>
</div>

</template>

<script>
import myContent from 'components/Content'
// var $ = require('jquery')
import $ from 'jquery'
import Mock from 'mock'
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      msg1: 'hello'
    }
  },
  components: {
    myContent
  },
  methods: {
    greet: function (event) {
      console.log('hello')
    },
    getData: function () {
      var template = {
        'results|1-10': [{
          'num': '@integer(0,10)',
          'sent': '@sentence',
          'name': '@name',
          'date': '@date'
        }]
      }
      Mock.mock('mock/getmockdata', template)
      $.ajax({
        url: 'mock/getmockdata',
        dataType: 'json'
      }).done(function(data, status, jqXHR) {
        $('<pre>').text(JSON.stringify(data, null, 4)).appendTo('body')
      })
    }
  }
}
</script>

<style>
p{
	font-size: 16px;
}
input{
	width: 300px;
	line-height: 30px;
}
</style>

