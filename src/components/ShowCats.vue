<template>
  <div id="showcats">
<banner></banner>
<gallary></gallary>
<buttom></buttom>
	<!-- copyright -->
	<div class="copyright">
		<div class="container">
			<p>© 2017 Cat Club. All rights reserved | Design by <a href="http://w3layouts.com">W3layouts</a></p>
		</div>
	</div>
    <a href="#" id="toTop" style="display: block;">
        <span id="toTopHover" style="opacity: 0;"></span>
        <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">到达顶点</font>
        </font>
    </a>
  </div>
</template>


<script>
import banner from '@/components/Banner'
import gallary from '@/components/Gallary'
import buttom from '@/components/Buttom'
export default {
  name: 'ShowCats',
  data(){
    console.log(this.loll)
    return{
      
      lol: this.loll
    }
  },
  components: {
		banner,
		gallary,
		buttom
		},
  created() {
    // <img src="http://47.102.116.29:5050/image/head/head001.jpg">
    this.axios.get('http://47.102.116.29/api/Images')
          .then((response) => {
            console.log("2231")
            console.log(response.data[0].imageUrl)
            this.loll='http://47.102.116.29:5050/'+response.data[0].imageUrl
            console.log(this.loll)
          })
  },
}
</script>