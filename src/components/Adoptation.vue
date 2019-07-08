<template>
    <div>
        <!-- banner -->
	<div class="banner about-banner">
		<banner></banner>
		<div class="about-heading">	
			<div class="container">
				<h2>Adopt A Cat</h2>
			</div>
		</div>
	</div>
	<!-- //banner -->
    <!--////////////////////////////////////Container-->
<section id="container" class="index-page">
	<div class="wrap-container zerogrid">
        <!-----------------content-box-2-------------------->
		<section class="content-box box-2">
			<div class="zerogrid">
				<div class="row wrap-box"><!--Start Box-->
					<div class="header">
						<h2>Welcome</h2>
						<hr class="line">
						<span>text text text text text</span>
					</div>
					<div class="row">
						<div class="col-1-3">
							<div class="wrap-col">
								<div class="box-item">
									<span class="ribbon">Menu Card<b></b></span>
									<img src="http://47.102.116.29:5050/image/head/head001.jpg" alt="">
									<p>The sliding menucard will surely impress your customers! Set up several pages and display them side by side, just as on a paper menucard!</p>
									<a href="#" class="button button-1">Detail</a>
								</div>
							</div>
						</div>
						<div class="col-1-3">
							<div class="wrap-col">
								<div class="box-item">
									<span class="ribbon">Fast Food<b></b></span>
									<img src="http://47.102.116.29:5050/image/head/head001.jpg" alt="">
									<p>The sliding menucard will surely impress your customers! Set up several pages and display them side by side, just as on a paper menucard!</p>
									<a href="#" class="button button-1">Detail</a>
								</div>
							</div>
						</div>
						<div class="col-1-3">
							<div class="wrap-col">
								<div class="box-item">
									<span class="ribbon">Reservation<b></b></span>
									<img src="http://47.102.116.29:5050/image/head/head001.jpg" alt="">
									<p>The sliding menucard will surely impress your customers! Set up several pages and display them side by side, just as on a paper menucard!</p>
									<a href="#" class="button button-1">Detail</a>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-1-3">
							<div class="wrap-col">
								<div class="box-item">
									<span class="ribbon">Chef<b></b></span>
									<img src="http://47.102.116.29:5050/image/head/head001.jpg" alt="">
									<p>The sliding menucard will surely impress your customers! Set up several pages and display them side by side, just as on a paper menucard!</p>
									<a href="#" class="button button-1">Detail</a>
								</div>
							</div>
						</div>
						<div class="col-1-3">
							<div class="wrap-col">
								<div class="box-item">
									<span class="ribbon">Preview<b></b></span>
									<img src="http://47.102.116.29:5050/image/head/head001.jpg" alt="">
									<p>The sliding menucard will surely impress your customers! Set up several pages and display them side by side, just as on a paper menucard!</p>
									<a href="#" class="button button-1">Detail</a>
								</div>
							</div>
						</div>
						<div class="col-1-3">
							<div class="wrap-col">
								<div class="box-item">
									<span class="ribbon">Text Heading<b></b></span>
									<img src="http://47.102.116.29:5050/image/head/head001.jpg" alt="">
									<p>The sliding menucard will surely impress your customers! Set up several pages and display them side by side, just as on a paper menucard!</p>
									<a href="#" class="button button-1">Detail</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    </div>
		</section>

        <buttom></buttom>
	</div>
</template>

<script>
$(function () {
	  // Slideshow 4
	  $("#slider4").responsiveSlides({
		auto: true,
		pager: false,
		nav: false,
		speed: 500,
		namespace: "callbacks",
		before: function () {
		  $('.events').append("<li>before event fired.</li>");
		},
		after: function () {
		  $('.events').append("<li>after event fired.</li>");
		}
	  });
	});
import buttom from '@/components/Buttom'
import banner from '@/components/Banner'

export default {
  name: 'Adopt',
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
