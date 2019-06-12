<template>
  <div id="app">
    <img src="http://47.102.116.29:5050/head/head001.jpg">
    <router-view/>
  </div>
</template>

<script>
import { constants } from 'fs';
export default {
  name: 'App',
  mounted() {
    this.axios.get('http://47.102.116.29/api/Images')
          .then((response) => {
            console.log("2231")
            console.log(response.data[0].imageUrl)
            lol.require('http://47.102.116.29:5050/'+response.data[0].imageUrl)
            console.log(hava)
          })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
