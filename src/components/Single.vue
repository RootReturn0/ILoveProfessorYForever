<template>
    <div>
        <!-- banner -->
	<div class="banner about-banner">
		<banner></banner>
		<div class="about-heading">	
			<div class="container">
				<h2>活动详情</h2>
			</div>
		</div>
	</div>
	<!-- //banner -->
		<!-- blog -->
	<div class="blog">
			<!-- container -->
			<div class="container">
				<div class="col-md-8 blog-top-left-grid">
					<div class="left-blog left-single">
						<div class="blog-left">
							<div class="single-left-left">
								<p>发布者 <span v-text="blog1" style="color:red;"></span> &nbsp;&nbsp;<span v-text="blog1Time"></span></p>
								<!-- <p>Posted By <a href="#">Admin</a> &nbsp;&nbsp; on June 2, 2015 &nbsp;&nbsp; <a href="#">Comments (10)</a></p> -->
								<img src="http://47.102.116.29:5050/image/head/head001.jpg" alt="" />
							</div>
							<div class="blog-left-bottom">
								<p>大家期待的一年一度的摄影&手绘大赛终于来啦！踊跃参与进来吧！
								</p>
							</div>
							<div class="blog-left-bottom left-bottom">
								<p>用你的相机或彩笔记录下此刻的猫猫们，留下它们此时的可爱模样，投稿给我们。最终入选作品将会由猫盟制作成明信片，作者本人
									也会获得奖励哦！
								</p>
							</div>
							<div class="blog-left-bottom left-bottom">
								<p>参与方式：<br>1.作品提交:参赛者将摄影/手给作品(各类五幅以内)发送至邮箱1143320318@qq.com，
									并附带作品描述、参赛者联系方式。<br>2.作品评选:微信平台上公示入选作品及作品描述，全校学生投票选出心仪作品。<br>
									3.颁奖阶段:评选出“最佳创意、最具人气、最佳摄影技术、最有爱心、最具萌感、最佳互动，最佳镜头感、最富有想象”八项奖项。
									(奖品:明信片一套、微章一套)。同时将选出六张优秀作品入选新学年猫盟明信片阵容，被选中的作品将支付稿费给作者。<br>
									★参赛者均可获得猫盟纪念大礼包一份★
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-4 blog-top-right-grid">
					<div class="Categories">
						<h3>按类型分</h3>
						<ul>
							<li><a href="#">Phasellus sem leo, interdum quis risus</a></li>
							<li><a href="#">Nullam egestas nisi id malesuada aliquet </a></li>
							<li><a href="#"> Donec condimentum purus urna venenatis</a></li>
							<li><a href="#">Ut congue, nisl id tincidunt lobor mollis</a></li>
							<li><a href="#">Cum sociis natoque penatibus et magnis</a></li>
							<li><a href="#">Suspendisse nec magna id ex pretium</a></li>
						</ul>
					</div>
				</div>
				<div class="clearfix"> </div>
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
	name: 'Single',
	components: {
		buttom,
		banner
		},
	}
</script>
