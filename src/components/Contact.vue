<template>
    <div>
        <!-- banner -->
	<div class="banner about-banner">
		<banner></banner>
		<div class="about-heading">	
			<div class="container">
				<h2>Contact Us</h2>
			</div>
		</div>
	</div>
	<!-- //banner -->
	<!-- contact -->
	<div class="contact-top">
		<!-- container -->
		<div class="container">
			<div class="map">
				<iframe src="https://map.baidu.com/search/%E5%90%8C%E6%B5%8E%E5%A4%A7%E5%AD%A6%E5%98%89%E5%AE%9A%E6%A0%A1%E5%8C%BA%E5%90%8C%E5%BE%B7%E6%A5%BC4%E6%A5%BC/@13494180.424999999,3648071.3,19z?querytype=s&da_src=shareurl&wd=%E5%90%8C%E6%B5%8E%E5%A4%A7%E5%AD%A6%E5%98%89%E5%AE%9A%E6%A0%A1%E5%8C%BA%E5%90%8C%E5%BE%B7%E6%A5%BC4%E6%A5%BC&c=289&src=0&pn=0&sug=0&l=12&b=(13470397.47256783,3631200.73791701;13535314.473905109,3666003.46363394)&from=webmap&biz_forward=%7B%22scaler%22:2,%22styles%22:%22pl%22%7D&device_ratio=2" allowfullscreen></iframe>
			</div>
			<div class="mail-grids">
				<div class="col-md-6 mail-grid-left">
					<h3>Address</h3>
					<h5>Cras porttitor imperdiet volutpat nulla malesuada lectus eros <span>ut convallis felis consectetur ut </span></h5>
					<h4>Headquarters</h4>
					<p>123 T. Globel Place.
						<span>CG 09-123</span>
						London, Ba. 4567
					</p>
					<h4>Get In Touch</h4>
					<p>Telephone: +1 234 567 9871
						<span>FAX: +1 234 567 9871</span>
						E-mail: <a href="mailto:info@example.com">mail@example.com</a>
					</p>
				</div>
				<div class="col-md-6 contact-form">
					<form action="#" method="post">
						<input type="text" name="Name" placeholder="Name" required="">
						<input type="email" name="Email" placeholder="Email" required="">
						<input type="text" name="Subject" placeholder="Subject" required="">
						<textarea name="Message" placeholder="Message" required=""></textarea>
						<input type="submit" value="SEND">
					</form>
				</div>
				<div class="clearfix"> </div>
			</div>
		</div>
		<!-- //container -->
	</div>
	<!-- //contact -->
    <buttom></buttom>
    </div>
</template>

<script>
import buttom from '@/components/Buttom'
import banner from '@/components/Banner'

export default {
  name: 'Contact',
  data(){
    console.log(this.loll)
    return{
      lol: this.loll
    }
  },
  components: {
		buttom,
		banner
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
};
</script>