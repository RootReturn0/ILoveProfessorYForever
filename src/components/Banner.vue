<template>
<div class="banner">
	<div class="header">
			<div class="container">
				<div class="header-left">
					<div class="w3layouts-logo">
						<h1>
							<a href="index.html">Cat <span>Club</span></a>
						</h1>
					</div>
				</div>
				<div class="header-right">
					<div class="top-nav">
						<nav class="navbar navbar-default">
								<div class="navbar-header">
									<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
										<span class="sr-only">Toggle navigation</span>
										<span class="icon-bar"></span>
										<span class="icon-bar"></span>
										<span class="icon-bar"></span>
									</button>
								</div>
							<!-- Collect the nav links, forms, and other content for toggling -->
							<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
								<ul class="nav navbar-nav">
									<li><router-link to="/">Home</router-link></li>
									<li><router-link to="/About">About</router-link></li>
									<!-- <li class=""><a href="#" class="dropdown-toggle hvr-bounce-to-bottom" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Codes<span class="caret"></span></a>
										<ul class="dropdown-menu">
											<li><a class="hvr-bounce-to-bottom" href="icons.html">Icons</a></li>
											<li><a class="hvr-bounce-to-bottom" href="typography.html">Typography</a></li>          
										</ul>
									</li>								 -->
									<li><router-link to="/Adoptation">Adoptation</router-link></li>
									<li><router-link to="/Gallery">Gallery</router-link></li>
									<li><router-link to="/Blog">Blog</router-link></li>
									<li><router-link to="/Contact">Contact</router-link></li>
								</ul>	
								<div class="clearfix"> </div>
							</div>	
						</nav>		
					</div>
					<div class="agileinfo-social-grids">
						<ul>
							<li><a href="#"><i class="fa fa-facebook"></i></a></li>
							<li><a href="#"><i class="fa fa-twitter"></i></a></li>
							<li><a href="#"><i class="fa fa-rss"></i></a></li>
							<li><a href="#"><i class="fa fa-vk"></i></a></li>
						</ul>
					</div>
					<div class="clearfix"> </div>
				</div>
				<div class="clearfix"> </div>
			</div>
		</div>
</div>
</template>

<script>
export default {
  name: 'Banner',
}
</script>