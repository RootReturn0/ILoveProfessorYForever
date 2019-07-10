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
								<p>
									发布者 <span v-text="blog1" style="color:red;"></span> &nbsp;&nbsp;
									<span v-text="blog1Time"></span>
									<el-button v-on:click="backHistory" style="text-align: left;color:red;">返回</el-button>
								</p>
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
						<ul class="marked-list offs1">
							<li v-for="site in sites" :key="site"> <a href="#">{{site.name}}</a></li>                        
						</ul>
					</div>
					<div class="comments">
						<h3>最近发布</h3>
						<div class="comments-text">
							<div class="col-md-3 comments-left">
								<img src="http://47.102.116.29:5050/image/head/head001.jpg" alt="" />
							</div>
							<div class="col-md-9 comments-right">
								<h5>社长猫</h5>
								<a href="#">2019/04/02猫屋制作实况</a> 
								<p>2019年4月3日 11:08</p>
							</div>
							<div class="clearfix"> </div>
						</div>
						<div class="comments-text">
							<div class="col-md-3 comments-left">
								<img src="http://47.102.116.29:5050/image/head/head001.jpg" alt="" />
							</div>
							<div class="col-md-9 comments-right">
								<h5>成员猫</h5>
								<a href="#">2019/03/13捉猫绝育日常</a> 
								<p>2019年3月14日 10:10</p>
							</div>
							<div class="clearfix"> </div>
						</div>
						<div class="comments-text">
							<div class="col-md-3 comments-left">
								<img src="http://47.102.116.29:5050/image/head/head001.jpg" alt="" />
							</div>
							<div class="col-md-9 comments-right">
								<h5>成员猫</h5>
								<a href="#">2019/03/03猫咖小聚</a> 
								<p>2019年3月5日 09:11</p>
							</div>
							<div class="clearfix"> </div>
						</div>
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
	  },
      backHistory(){
        this.$router.go(-1);//返回上一层
      },
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
