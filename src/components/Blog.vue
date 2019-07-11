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
                        <div class="blog-left" v-for="blog in blogsShow.slice(blogLowIndex,blogHighIndex)" :key="blog">
                            <div class="blog-left-left">
                                <p>发布者 <span v-text="blog.name" style="color:red;"></span> &nbsp;&nbsp;<span v-text="blog.time"></span></p>
                                <!-- <p>Posted By <a href="#">Admin</a> &nbsp;&nbsp; on June 2, 2015 &nbsp;&nbsp; <a href="#">Comments (10)</a></p> -->
                                <a href="javascript:void(0);"><img :src="blog.cover" alt="暂无图片" /></a>
                            </div>
                            <div class="blog-left-right">
                                <a><p v-text="blog.title"></p></a>
                                <p v-text="blog.text"></p>
                            </div>
                            <div class="clearfix"> </div>
                        </div>
						<!-- <div class="blog-left-right">
                                <li><router-link to="/Single">Phasellus ultrices tellus eget ipsum ornare molestie</router-link></li>
                                <button v-text="btnText" @click="showToggle"></button>
                                <div v-show="isShow">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed blandit massa vel mauris sollicitudin 
                                dignissim. Phasellus ultrices tellus eget ipsum ornare molestie scelerisque eros dignissim. Phasellus 
                                fringilla hendrerit lectus nec vehicula. ultrices tellus eget ipsum ornare consectetur adipiscing elit.Sed blandit .
                                estibulum aliquam neque nibh, sed accumsan nulla ornare sit amet.</p>
                                </div>
                            </div> -->
                    </div>
                    <nav>
                        <ul class="pagination">
                            <li>
                                <a href="javascript:void(0);" v-on:click="prePage()" aria-label="Previous">

<span aria-hidden="true">«</span>

</a>
                            </li>
                            <li v-for="i in Math.ceil(blogNum/2)" :key="i"><a href="javascript:void(0);" v-on:click="changePage(i)">{{i}}</a></li>
                            <li>
                                <a href="javascript:void(0);" v-on:click="nextPage()" aria-label="Next">

<span aria-hidden="true">»</span>

</a>
                            </li>
                        </ul>
                        <ul class="pagination">
                            <li> <a><p style="display:inline">前往&nbsp;<input type="text" v-model="targetPage" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')" style="height: 20px; width:30px;border-bottom:#666 1px solid; border-left-width:0px; border-right-width:0px; border-top-width:0px">&nbsp;页</p></a>
                            </li>
                            <li><a href="javascript:void(0);" v-on:click="changePage(targetPage)">Go</a></li>

                        </ul>
                    </nav>
                </div>
                <div class="col-md-4 blog-top-right-grid">
                    <div class="Categories">
                        <h3>Archive</h3>
                        <ul class="marked-list offs1">
                            <li v-for="site in sites" :key="site"> <a href="javascript:void(0);" v-on:click="changeArchive(site.name)">{{site.name}}&nbsp;&nbsp;({{site.num}})</a></li>
                        </ul>
                    </div>
                    <div class="comments">
                        <h3>负责人</h3>
                        <div class="comments-text">
                            <div class="col-md-3 comments-left">
                                <img src="http://47.102.116.29:5050/image/head/head001.jpg" alt="" />

</div>
                                <div class="col-md-9 comments-right">
                                    <h5>Admin</h5>
                                    <a href="javascript:void(0);">Phasellus sem leointerdum risus</a>
                                    <p style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">March 16,2014 6:09:pm</p>
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
    data() {
        return {
            blogLowIndex: 0,
            blogHighIndex: 2,
            blogNum: 0,
            blogsShow: [],
            blogs: [],
            sites: [],
			targetPage: '',
			isShow: true,
      btnText: "隐藏"
        }
    },
    components: {
        buttom,
        banner
    },
    methods: {
        async init() {
            var activities = await this.api.getAllActivity()
            console.log(activities)
            //   .then((activities) => {
            this.blogsShow = []
            this.sites = []
            if (activities == []) {
                this.blogsShow.push({
                    title: '暂无内容'
                })
                this.sites.push({
                    name: '暂无内容'
                })
                return
            }

            var num = 0
            for (var i = 0; i < activities.length; i++) {
                this.blogs.push({
                    name: activities[i].adminId,
                    time: activities[i].actTime.slice(0, 10),
                    title: activities[i].activityTitle,
                    text: activities[i].activityDescription,
                    cover: await this.api.getImage(activities[i].activityCover)
                })
                // console.log(imageUrl)
                var flag = true
                for (var j = 0; j < this.sites.length; j++) {
                    if (activities[i].actTime.slice(0, 7) == this.sites[j].name) {
                        this.sites[j].num++
                        num++
                        flag = false
                        break
                    }
                }
                if (flag) {
                    this.sites.push({
                        name: activities[i].actTime.slice(0, 7),
                        num: 1
                    })
                    num++
                }
                console.log('?!', this.sites.length, i)
            }
            this.sites.unshift({
                name: '全部',
                num: num
            })

            this.blogsShow = this.blogs
            this.blogNum = this.blogsShow.length
            if (this.blogNum < 2)
                this.blogHighIndex = this.blogNum
            //   })
		},
		 showToggle(){
          this.isShow = !this.isShow
          if(this.isShow){
            this.btnText = "收起"
            }else{
                this.btnText = "显示"
            }
      },
        prePage() {
            document.documentElement.scrollTop = document.body.scrollTop = 310;
            console.log('pre!')
            console.log(this.blogLowIndex % 2, this.blogHighIndex % 2)
            if (this.blogLowIndex - 2 < 0)
                return
            this.blogLowIndex -= 2
            if (this.blogHighIndex % 2)
                this.blogHighIndex -= this.blogHighIndex % 2
            else
                this.blogHighIndex -= 2
            console.log(this.blogLowIndex, this.blogHighIndex)
        },
        nextPage() {
            document.documentElement.scrollTop = document.body.scrollTop = 310;
            if (this.blogLowIndex + 2 >= this.blogNum)
                return
            if (this.blogHighIndex + 2 > this.blogNum)
                this.blogHighIndex = this.blogNum
            else
                this.blogHighIndex += 2
            this.blogLowIndex += 2
        },
        changePage(curPage) {
            this.targetPage = ''
            if (curPage < 1 || curPage > Math.ceil(this.blogNum / 2))
                return
            document.documentElement.scrollTop = document.body.scrollTop = 310;
            var target = curPage * 2
            if (this.blogNum < target || this.blogNum < 2)
                this.blogHighIndex = this.blogNum
            else
                this.blogHighIndex = target
            this.blogLowIndex = target - 2
        },
        changeArchive(time) {
            document.documentElement.scrollTop = document.body.scrollTop = 310;
            if (time == '全部') {
                this.blogsShow = this.blogs
                this.blogNum = this.blogsShow.length
                this.changePage(1)
                return
            }
            this.blogsShow = []
            for (var i = 0; i < this.blogs.length; i++) {
                if (this.blogs[i].time.slice(0, 7) == time)
                    this.blogsShow.push(this.blogs[i])
                console.log('1234567')
            }
            this.blogNum = this.blogsShow.length
            this.changePage(1)
        }
    },
    mounted() {
        this.init()
    },
    created() {},
};
</script>
