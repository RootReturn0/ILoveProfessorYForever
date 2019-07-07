<template>
    <div>
        <!-- banner -->
	<div class="banner about-banner">
		<banner></banner>
		<div class="about-heading">	
			<div class="container">
				<h2>Our Blog</h2>
			</div>
		</div>
	</div>
	<!-- //banner -->
	<!-- blog -->
	<div class="blog">
		<!-- container -->
		<div class="container">
			<div class="blog-top-grids">
				<div class="col-md-8 blog-top-left-grid">
					<div class="left-blog">
						<div class="blog-left">
							<div class="blog-left-left">
								<p>发布者 <span v-text="blog1" style="color:red;"></span> &nbsp;&nbsp;<span v-text="blog1Time"></span></p>
								<!-- <p>Posted By <a href="#">Admin</a> &nbsp;&nbsp; on June 2, 2015 &nbsp;&nbsp; <a href="#">Comments (10)</a></p> -->
								<a href="single.html"><img src="http://47.102.116.29:5050/image/head/head001.jpg" alt="" /></a>
							</div>
							<div class="blog-left-right">
								<a href="single.html">Phasellus ultrices tellus eget ipsum ornare molestie </a>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed blandit massa vel mauris sollicitudin 
								dignissim. Phasellus ultrices tellus eget ipsum ornare molestie scelerisque eros dignissim. Phasellus 
								fringilla hendrerit lectus nec vehicula. ultrices tellus eget ipsum ornare consectetur adipiscing elit.Sed blandit .
								estibulum aliquam neque nibh, sed accumsan nulla ornare sit amet. 
							</p>
							</div>
							<div class="clearfix"> </div>
						</div>
						<div class="blog-left">
							<div class="blog-left-left">
								<p>Posted By <a href="#">Admin</a> &nbsp;&nbsp; on June 2, 2015 &nbsp;&nbsp; <a href="#">Comments (10)</a></p>
								<a href="single.html"><img src="http://47.102.116.29:5050/image/head/head001.jpg" alt="" /></a>
							</div>
							<div class="blog-left-right wow fadeInRight animated animated" data-wow-delay=".5s">
								<a href="single.html">Phasellus ultrices tellus eget ipsum ornare molestie</a>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed blandit massa vel mauris sollicitudin 
								dignissim. Phasellus ultrices tellus eget ipsum ornare molestie scelerisque eros dignissim. Phasellus 
								fringilla hendrerit lectus nec vehicula. ultrices tellus eget ipsum ornare consectetur adipiscing elit.Sed blandit .
								estibulum aliquam neque nibh, sed accumsan nulla ornare sit amet.
								</p>
							</div>
							<div class="clearfix"> </div>
						</div>
						<div class="blog-left">
							<div class="blog-left-left">
								<p>Posted By <a href="#">Admin</a> &nbsp;&nbsp; on June 2, 2015 &nbsp;&nbsp; <a href="#">Comments (10)</a></p>
								<a href="single.html"><img src="http://47.102.116.29:5050/image/head/head001.jpg" alt="" /></a>
							</div>
							<div class="blog-left-right">
								<a href="single.html">Phasellus ultrices tellus eget ipsum ornare molestie</a>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed blandit massa vel mauris sollicitudin 
								dignissim. Phasellus ultrices tellus eget ipsum ornare molestie scelerisque eros dignissim. Phasellus 
								fringilla hendrerit lectus nec vehicula. ultrices tellus eget ipsum ornare consectetur adipiscing elit.Sed blandit .
								estibulum aliquam neque nibh, sed accumsan nulla ornare sit amet. 
								</p>
							</div>
							<div class="clearfix"> </div>
						</div>
					</div>
					<nav>
						<ul class="pagination">
							<li>
								<a href="#" aria-label="Previous">
									<span aria-hidden="true">«</span>
								</a>
							</li>
							<li><a href="#">1</a></li>
							<li><a href="#">2</a></li>
							<li><a href="#">3</a></li>
							<li><a href="#">4</a></li>
							<li><a href="#">5</a></li>
							<li>
								<a href="#" aria-label="Next">
									<span aria-hidden="true">»</span>
								</a>
							</li>
						</ul>
					</nav>
				</div>
				<div class="col-md-4 blog-top-right-grid">
					<!-- <div class="Categories">
						<h3>Categories</h3>
						<ul>
							<li><a href="#">Phasellus sem leo, interdum quis risus</a></li>
							<li><a href="#">Nullam egestas nisi id malesuada aliquet </a></li>
							<li><a href="#"> Donec condimentum purus urna venenatis</a></li>
							<li><a href="#">Ut congue, nisl id tincidunt lobor mollis</a></li>
							<li><a href="#">Cum sociis natoque penatibus et magnis</a></li>
							<li><a href="#">Suspendisse nec magna id ex pretium</a></li>
						</ul>
					</div> -->
					<div class="Categories">
						<h3>Archive</h3>
						<ul class="marked-list offs1">
							<li v-for="site in sites" :key="site"> <a href="#">{{site.name}}</a></li>                        
						</ul>
					</div>
					<div class="comments">
						<h3>Recent Comments</h3>
						<div class="comments-text">
							<div class="col-md-3 comments-left">
								<img src="http://47.102.116.29:5050/image/head/head001.jpg" alt="" />
							</div>
							<div class="col-md-9 comments-right">
								<h5>Admin</h5>
								<a href="#">Phasellus sem leointerdum risus</a> 
								<p>March 16,2014 6:09:pm</p>
							</div>
							<div class="clearfix"> </div>
						</div>
						<div class="comments-text">
							<div class="col-md-3 comments-left">
								<img src="http://47.102.116.29:5050/image/head/head001.jpg" alt="" />
							</div>
							<div class="col-md-9 comments-right">
								<h5>Admin</h5>
								<a href="#">Phasellus sem leointerdum risus</a> 
								<p>March 16,2014 6:09:pm</p>
							</div>
							<div class="clearfix"> </div>
						</div>
						<div class="comments-text">
							<div class="col-md-3 comments-left">
								<img src="http://47.102.116.29:5050/image/head/head001.jpg" alt="" />
							</div>
							<div class="col-md-9 comments-right">
								<h5>Admin</h5>
								<a href="#">Phasellus sem leointerdum risus</a> 
								<p>March 16,2014 6:09:pm</p>
							</div>
							<div class="clearfix"> </div>
						</div>
					</div>
				</div>
				<div class="clearfix"> </div>
			</div>
		</div>
		<!-- //container -->
	</div>
	<!-- //blog -->
    <buttom></buttom>
    </div>    
</template>

<script>
import buttom from '@/components/Buttom'
import banner from '@/components/Banner'

export default {
  name: 'Blog',
  data(){
    console.log(this.loll)
    return{
	  lol: this.loll,
	  blog1: 'Posted By ??? on June 2, 2015',
	  blog1Time: '1999-02-29',
	  sites:[{name:'???'},
	  {name:'!!!'}]
    }
  },
  components: {
		buttom,
		banner
		},
  methods:{
	  getArchive(){
		  this.axios.get('http://47.102.116.29/api/Activities/')
          .then((response) => {
			this.sites.push({name: response.data[0].actTime.slice(0,7)})
          })
	  }
  },
  mounted() {
	this.getArchive()
  },
  created() {
    // <img src="http://47.102.116.29:5050/image/head/head001.jpg">
    this.axios.get('http://47.102.116.29/api/Activities/')
          .then((response) => {
			this.blog1=response.data[0].activityName
			this.blog1Time=response.data[0].actTime.slice(0,4)+'年'+response.data[0].actTime.slice(5,7)+'月'+response.data[0].actTime.slice(8,10)+'日'
		  })
  },
};
</script>

// archive --need activityId