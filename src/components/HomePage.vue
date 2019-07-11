<template>
<div>
    <!-- banner -->
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
                                    <li>
                                        <router-link to="/">主页</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/About">简介</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/Cats">猫咪</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/Gallery">相册</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/Blog">活动</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/Contact">联系我们</router-link>
                                    </li>
                                </ul>
                                <div class="clearfix"> </div>
                            </div>
                        </nav>
                    </div>
                    <div v-if="isLogin" class="agileinfo-social-grids">
                        <div float="top-right" style="margin-top:0px; margin-right:0px;height:50px">
                            <span class="userinfo-inner agileinfo-social-grids" ><img @click="showForm" :src="userUrl"></span>
                        </div>
                    </div>
                    <div v-else class="agileinfo-social-grids">
                        <ul>
                            <li><a href="#" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
                            <li><a href="#" @click="login">&nbsp;登陆</a></li>
                            <li><a href="#" @click="register">&nbsp;注册</a></li>
                        </ul>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="clearfix"> </div>
            </div>
        </div>
        <div class="w3layouts-banner-slider">
            <div class="container">
                <div class="slider">
                    <div class="callbacks_container">
                        <ul class="rslides callbacks callbacks1" id="slider4">
                            <li>
                                <div class="agileits-banner-info">
                                    <h3>你好，我们是<br>(*´▽｀)ノ同济猫盟 <span>快来加入我们吧</span></h3>
                                    <div class="w3-button">
                                        <a href="javascript:void(0);" @click="goToAbout">更多</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="agileits-banner-info">
                                    <h3>这里是第二页这里是第二页<span>快来加入我们吧</span></h3>
                                    <div class="w3-button">
                                        <a href="javascript:void(0);">更多</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <!--banner Slider starts Here-->
                </div>
            </div>
        </div>
    </div>
    <!-- //banner -->
    <!-- banner-bottom -->
    <div class="welcome">
        <div class="container">
            <div class="w3ls-heading">
                <h2>欢迎━(*｀∀´*)ノ亻!</h2>
            </div>
            <div class="welcome-grids">
                <div class="col-md-6 agile-welcome-grid">
                    <div class="grid">
                        <div class="col-md-6 agileits-left">
                            <figure class="effect-chico">
                                <img src="../assets/images/3.jpg" alt="" />
                                <figcaption>
									<h4>&nbsp;</h4>
                                    <p>牛奶是猫猫最害怕的东西之一！注意不要给猫猫喂食牛奶哦！</p>
                                </figcaption>
                            </figure>
                        </div>
                        <div class="col-md-6 agileits-left">
                            <figure class="effect-chico">
                                <img src="http://47.102.116.29:5050/image/head/head001.jpg" alt="" />
                                <figcaption>
                                    <h4>Nam ornare</h4>
                                    <p>Chico's main fear was missing the morning bus.</p>
                                </figcaption>
                            </figure>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                </div>
                <div class="col-md-6 agileinfo-welcome-right">
                    <h4>同济猫盟——致力于猫咪保护的公益类学生社团。</h4>
                    <p>嗨，我们是同济大学猫咪同盟，一个公益类学生社团，我们的宗旨是让同济的猫生活得更好，让同济的校园更加有爱。
                        <span>猫咪同盟积极协助校方解决校内流浪猫带来的问题、致力于改善同济猫咪的生存环境。我们很乐意提供任何救助方面的建议以及猫咪相关的知识！</span>
                    </p>
                </div>
                <div class="clearfix"> </div>
            </div>
        </div>
    </div>
    <!-- banner-bottom -->
    <!-- services -->
    <div class="services">
        <div class="container">
            <div class="w3ls-heading">
                <h3>社团说明</h3>
            </div>
            <div class="wthree-services-grids">
                <div class="col-md-6 w3ls-about-left">
                    <div class="agileits-icon-grid">
                        <div class="icon-left hvr-radial-out">
                            <i class="fa fa-bell" aria-hidden="true"></i>
                        </div>
                        <div class="icon-right">
                            <h5>社团简介</h5>
                            <p>猫盟是一个【公益实践类】社团，致力于改善同济猫咪的生存环境。我们的宗旨是：让同济的猫咪生活更好，让同济的校园更加有爱。</p>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                    <div class="agileits-icon-grid">
                        <div class="icon-left hvr-radial-out">
                            <i class="fa fa-heart" aria-hidden="true"></i>
                        </div>
                        <div class="icon-right">
                            <h5>成员分工</h5>
                            <p>财务：管理社团的资金和财产。设计：宣传和开发猫咪周边产品。救助：负责猫咪的绝育和医疗。宣传：官方微博和微信公众号运营。组织：社团活动的策划。</p>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                </div>
                <div class="col-md-6 w3ls-about-left">
                    <div class="agileits-icon-grid">
                        <div class="icon-left hvr-radial-out">
                            <i class="fa fa-user" aria-hidden="true"></i>
                        </div>
                        <div class="icon-right">
                            <h5>日常活动</h5>
                            <p>给校内的猫咪喂食、绝育(控制数量以保障生活质量)，科普猫咪相关知识，与热心的同学们一起救助猫咪，为猫咪寻找领养家庭等。</p>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                    <div class="agileits-icon-grid">
                        <div class="icon-left hvr-radial-out">
                            <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                        </div>
                        <div class="icon-right">
                            <h5>相关福利</h5>
                            <p>所有猫盟成员可免费领取猫粮，解锁指定猫咖的优惠，神秘干事有机会低价获得猫盟周边。（多多关注qq群后续通知鸭∠(°▽°)）</p>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                </div>
                <div class="clearfix"> </div>
            </div>
        </div>
    </div>
    <!-- //services -->
    <!-- news -->
    <div class="news">
        <div class="container">
            <div class="w3ls-heading">
                <h3>News & Events</h3>
            </div>
            <div class="w3-agileits-news-grids">
                <div class="col-md-6 news-left">
                    <div class="w3-agile-news-date">
                        <div class="agile-news-icon">
                            <i class="fa fa-calendar" aria-hidden="true"></i>
                            <p v-if="blog1.actTime">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span v-text="blog1.actTime.slice(0,4)"></span>年<span v-text="blog1.actTime.slice(5,7)"></span>月<span v-text="blog1.actTime.slice(8,10)"></span>日</p>
                            <p v-else>暂无日期</p>
                        </div>
                        <div class="agileits-line"> </div>
                        <div class="agile-news-icon">
                            <a href="#"><i class="fa fa-comments-o" aria-hidden="true"></i></a>
                            <p><span v-if="blog1.adminId">2 comments</span><span v-else>匿名</span></p>
                        </div>
                    </div>
                    <div class="w3-agile-news-img">
                        <a href="javascript:void(0);"><img :src="blog1.activityCover" alt="" /></a>
                        <h4><a href="javascript:void(0);"><span v-on:click="detail(blog1.adminId,blog1.actTime.slice(0,10),blog1.activityCover,blog1.activityTitle,blog1.activityDescription)" v-if="blog1.activityTitle">{{blog1.activityTitle}}</span><span v-else>暂无标题</span></a></h4>
                        <p><span v-if="blog1.activityDescription">{{blog1.activityDescription}}</span><span v-else>暂无内容</span></p>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                <div class="col-md-6 news-right">
                    <div class="news-right-grid">
                        <a href="javascript:void(0);"><span v-on:click="detail(blog2.adminId,blog1.actTime.slice(0,10),blog2.activityCover,blog2.activityTitle,blog2.activityDescription)" v-if="blog2.activityTitle">{{blog2.activityTitle}}</span><span v-else>暂无标题</span></a>
                        <h5 v-if="blog2.actTime"><span v-text="blog2.actTime.slice(0,4)"></span>年&nbsp;<span v-text="blog2.actTime.slice(5,7)"></span>月<span v-text="blog2.actTime.slice(8,10)"></span>日</h5>
                        <h5 v-else>暂无时间</h5>
                        <p><span v-if="blog2.activityDescription">{{blog2.activityDescription}}</span><span v-else>暂无内容</span></p>
                    </div>
                    <div class="news-right-grid">
                        <a href="javascript:void(0);"><span v-on:click="detail(blog3.adminId,blog3.actTime.slice(0,10),blog3.activityCover,blog3.activityTitle,blog3.activityDescription)" v-if="blog3.activityTitle">{{blog3.activityTitle}}</span><span v-else>暂无标题</span></a>
                        <h5 v-if="blog3.actTime"><span v-text="blog3.actTime.slice(0,4)"></span>年&nbsp;<span v-text="blog3.actTime.slice(5,7)"></span>月<span v-text="blog3.actTime.slice(8,10)"></span>日</h5>
                        <h5 v-else>暂无时间</h5>
                        <p><span v-if="blog3.activityDescription">{{blog3.activityDescription}}</span><span v-else>暂无内容</span></p>
                    </div>
                    <div class="news-right-grid">
                        <a href="javascript:void(0);"><span v-on:click="detail(blog4.adminId,blog4.actTime.slice(0,10),blog4.activityCover,blog4.activityTitle,blog4.activityDescription)"  v-if="blog4.activityTitle">{{blog4.activityTitle}}</span><span v-else>暂无标题</span></a>
                        <h5 v-if="blog4.actTime"><span v-text="blog4.actTime.slice(0,4)"></span>年&nbsp;<span v-text="blog4.actTime.slice(5,7)"></span>月<span v-text="blog4.actTime.slice(8,10)"></span>日</h5>
                        <h5 v-else>暂无时间</h5>
                        <p><span v-if="blog4.activityDescription">{{blog4.activityDescription}}</span><span v-else>暂无内容</span></p>
                    </div>
                </div>
                <div class="clearfix"> </div>
            </div>
        </div>
    </div>
    <div>
        <el-dialog title="编辑个人信息" :visible.sync="editFormVisible" :close-on-click-modal="false" width="43%">
            <!-- <el-card v-if="editFormVisible" width="auto"> -->
            <!-- <p>编辑个人信息</p> -->
            <el-form :model="editForm" label-width="80px" ref="editForm" shadow="never">

                <el-form-item label="昵称" prop="nickname">
                    <el-input v-model="editForm.nickname" auto-complete="off" :maxlength="7"></el-input>
                </el-form-item>
                <el-form-item label="更新头像">
                    <el-upload class="avatar-uploader" :action="getPostUrl()" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>

                <el-form-item label="简介" prop="introduction">
                    <el-input class="inline-input" v-model="editForm.introduction" placeholder="描述你自己">
                    </el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="danger" @click="Logout">登出</el-button>
                <el-button @click.native="editFormVisible = false">取消</el-button>
                <el-button type="primary" @click="addSubmit" :loading="editLoading">提交</el-button>

            </div>
            <!-- </el-card> -->
        </el-dialog>
    </div>
    <buttom></buttom>
    <!-- //news -->
</div>
</template>

<script>
import buttom from '@/components/Buttom'
import banner from '@/components/Banner'
import {
    sendPersonalMessage
} from '../../src/api/Login'

export default {
    name: 'HomePage',
    data() {
        return {
            blog1: {},
            blog2: {},
            blog3: {},
            blog4: {},
            blog5: {},

            userUrl: "",

            editFormVisible: false,
            imageUrl: "",
            editLoading: false,

            editForm: {
                nickname: "",
                introduction: "",
			},
			
            isLogin: false
        }
    },
    components: {
        buttom,
        banner
    },
    methods: {
        async init() {
            var blogs = await this.api.getAllActivity()
            console.log(blogs)
            try {
                this.blog1 = blogs[0]
                this.blog1.activityCover = await this.api.getImage(this.blog1.activityCover)
                this.blog2 = blogs[1]
                this.blog2.activityCover = await this.api.getImage(this.blog2.activityCover)
                this.blog3 = blogs[2]
                this.blog3.activityCover = await this.api.getImage(this.blog3.activityCover)
                this.blog4 = blogs[3]
                this.blog4.activityCover = await this.api.getImage(this.blog4.activityCover)
                this.blog5 = blogs[4]
                this.blog5.activityCover = await this.api.getImage(this.blog5.activityCover)
            } catch (err) {
                console.log('news', err)
            }
        },
        slides() {
            $(function () {
                // Slideshow 4
                $("#slider4").responsiveSlides({
                    auto: true,
                    pager: true,
                    nav: true,
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
        },
        async detail(name, time, cover, title, text) {
            sessionStorage.setItem('blogName', name)
            sessionStorage.setItem('blogTime', time)
            sessionStorage.setItem('blogCover', cover)
            sessionStorage.setItem('blogTitle', title)
            sessionStorage.setItem('blogText', text)
			sessionStorage.setItem('goSingle', 1)
            this.$router.push({
                path: '/Blog'
            })
		},
		goToAbout(){
			this.$router.push({
                path: '/About'
            })
		},
        getUrl() {
            this.userUrl = "http://47.102.116.29:5050/" + sessionStorage.getItem("UserUrl");
        },
        showForm() {
            this.editFormVisible = true
        },
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },
        getPostUrl() {
            return "http://47.102.116.29/api/Images/uploadUserHead?userID=" + sessionStorage.getItem("account")
        },
        getImageUrl() {
            return "http://47.102.116.29:5050/" + sessionStorage.getItem("UserUrl");

        },
        addSubmit() {
            this.$refs.editForm.validate((valid) => {
                if (valid) {
                    this.$confirm('确认修改吗？', '提示', {}).then(() => {
                        this.editLoading = true;
                        let data = Object.assign({}, this.editForm);
                        sendPersonalMessage(data).then((response) => {
                            this.editLoading = false;
                            this.$message({
                                message: '用户信息修改成功!',
                                type: 'success'
                            });
                            this.$refs['editForm'].resetFields();
                            this.editFormVisible = false;
                        });
                    })
                }
            })

            this.axios.get('http://47.102.116.29/api/Users/' + sessionStorage.getItem("account"))
                .then((res) => {
                    sessionStorage.setItem("UserUrl", res.data.headImageUrl);
                    sessionStorage.setItem("nickname", res.data.nickname);

                });
        },
        check() {
            if (sessionStorage.getItem('token'))
                this.isLogin = true
            else
                this.isLogin = false
            console.log('21312r23423')
		},
		Logout(){
          sessionStorage.setItem("account",'');
          sessionStorage.setItem("UserUrl",'');
          sessionStorage.setItem("nickname",'');
		  sessionStorage.setItem("token",'');
		  console.log(sessionStorage.getItem("token"))
          this.$router.push({path:'/Login'});
	  },
	  login(){
		  this.$router.push({path:'/Login'})
	  },
	  register(){
		  this.$router.push({path:'/Register'})
	  }
    },
    async mounted() {
        this.slides()
		this.init()
		await this.check()
		this.getUrl()
		setInterval(this.getUrl,1000)
    },
};
</script>

<style lang="scss">
.userinfo-inner {
    cursor: pointer;
        color: #fff;
         //font-weight: 400;
		font-family: "Arial";
        img {
        width: 60px;
        height: 60px;
        border-radius: 20px;
        //margin: 10px 0px 10px 10px;
        float: right;
        border-color: rgba(255, 255, 255, 1);
        border-width: 1px;
        border-style: solid;
        }
}
</style>
