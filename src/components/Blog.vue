<template>
<div>
    <!-- banner -->
    <div class="banner about-banner">
        <banner @transfer="showForm"></banner>
        <div class="about-heading">
            <div class="container">
                <h2>活 动 日 志</h2>
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
                                <p>发布时间 &nbsp;&nbsp;<span v-text="blog.time"></span></p>
                                <!-- <p>Posted By <a href="#">Admin</a> &nbsp;&nbsp; on June 2, 2015 &nbsp;&nbsp; <a href="#">Comments (10)</a></p> -->
                                <a><img :src="blog.cover" alt="暂无图片" /></a>
                            </div>
                            <div class="blog-left-right">
                                <a v-if="blog.title" href="javascript:void(0);" v-on:click="detail(blog.time,blog.cover,blog.title,blog.text)" v-text="blog.title"></a>
                                <a v-else href="javascript:void(0);" v-on:click="detail(blog.time,blog.cover,blog.title,blog.text)" v-text="blog.title"></a>
                                <p v-if="blog.text" style="overflow: hidden;
    white-space: nowrap;
    text-overflow:ellipsis;" v-text="blog.text"></p>
                                <p v-else>暂无内容</p>
                            </div>
                            <div class="clearfix"> </div>
                        </div>
                    </div>
                    <nav>
                        <ul class="pagination">
                            <li>
                                <a href="javascript:void(0);" v-on:click="prePage()" aria-label="Previous">

<span aria-hidden="true">«</span>

</a>
                            </li>
                            <li v-for="i in (2,Math.ceil(blogNum/2))" :key="i"><a href="javascript:void(0);" v-on:click="changePage(i)">{{i}}</a></li>
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
                        <h3>目录</h3>
                        <ul class="marked-list offs1">
                            <li v-for="site in sites" :key="site"> <a href="javascript:void(0);" v-on:click="changeArchive(site.name)">{{site.name}}&nbsp;&nbsp;({{site.num}})</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- //container -->
    </div>
    <!-- //blog -->
    <div>
        <el-dialog title="编辑个人信息" :visible.sync="editFormVisible" :close-on-click-modal="false" width="43%">
            <!-- <el-card v-if="editFormVisible" width="auto"> -->
            <!-- <p>编辑个人信息</p> -->
            <el-form :model="editForm" label-width="80px" ref="editForm" shadow="never">

                <el-form-item label="昵称" prop="nickname">
                    <el-input v-model="editForm.nickname" :value="editForm.nickname" auto-complete="off" :maxlength="7"></el-input>
                </el-form-item>
                <el-form-item label="更新头像">
                    <el-upload accept="image/*" class="avatar-uploader" :action="getPostUrl()" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                        <img style="height:100px; width:100px" v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>

                <el-form-item label="简介" prop="introduction">
                    <el-input class="inline-input" v-model="editForm.introduction" :value="editForm.introduction" placeholder="描述你自己">
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
</div>
</template>

<script>
import buttom from '@/components/Buttom'
import banner from '@/components/Banner'
import {
    sendPersonalMessage
} from '../../src/api/Login'

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
            editFormVisible: false,
            imageUrl: "",
            editLoading: false,

            editForm: {
                nickname: '',
                introduction: '',
            }
        }
    },
    components: {
        buttom,
        banner
    },
    methods: {
        async init() {
            var activities = await this.api.getAllActivity()
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
                    time: activities[i].actTime.slice(0, 10),
                    title: activities[i].activityTitle,
                    text: activities[i].activityDescription,
                    cover: await this.api.getImage(activities[i].activityCover)
                })
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
            }
            this.sites.unshift({
                name: '全部',
                num: num
            })

            this.blogsShow = this.blogs
            this.blogNum = this.blogsShow.length
            if (this.blogNum < 2)
                this.blogHighIndex = this.blogNum

            this.editForm.nickname = await this.api.getUserName(sessionStorage.getItem('account'))
            this.editForm.introduction = await this.api.getUserIntro(sessionStorage.getItem('account'))
        },
        detail(time, cover, title, text) {
            console.log('Go Now!', time, cover, title, text, sessionStorage.getItem('goSingle'))
            sessionStorage.setItem('blogTime', time)
            sessionStorage.setItem('blogCover', cover)
            sessionStorage.setItem('blogTitle', title)
            sessionStorage.setItem('blogText', text)
            sessionStorage.setItem('site', JSON.stringify(this.sites))
            this.$router.push({
                path: '/Single'
            })
        },
        prePage() {
            document.documentElement.scrollTop = document.body.scrollTop = 310;
            if (this.blogLowIndex - 2 < 0)
                return
            this.blogLowIndex -= 2
            if (this.blogHighIndex % 2)
                this.blogHighIndex -= this.blogHighIndex % 2
            else
                this.blogHighIndex -= 2
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
            }
            this.blogNum = this.blogsShow.length
            this.changePage(1)
        },
        async backFromDetail() {
            var time = await sessionStorage.getItem('archiveTime')
            if (time != '') {
                this.changeArchive(time)
                sessionStorage.setItem('archiveTime', '')
            }
        },
        async checkSource() {
            var goSingle = sessionStorage.getItem('goSingle')
            if (goSingle == 1) {
                await sessionStorage.setItem('goSingle', 0)
                console.log('go', sessionStorage.getItem('goSingle'))
                this.detail(
                    sessionStorage.getItem('blogTime'),
                    sessionStorage.getItem('blogCover'),
                    sessionStorage.getItem('blogTitle'),
                    sessionStorage.getItem('blogText'))
            }
        },
        showForm() {
            this.editFormVisible = true
        },
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            // const isImage = file.type === 'image/';
            const isLt2M = file.size / 1024 / 1024 < 2;

            // if (!isImage) {
            //     this.$message.error('上传头像图片只能是 JPG 格式!');
            // }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isLt2M;
        },
        getPostUrl() {
            return "http://47.102.116.29/api/Images/uploadUserHead?userID=" + sessionStorage.getItem("account")
        },
        getImageUrl() {
            return "http://47.102.116.29:5050/" + sessionStorage.getItem("UserUrl");

        },
        async addSubmit() {
            this.$refs.editForm.validate((valid) => {
                if (valid) {
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
                }
            })

            this.axios.get('http://47.102.116.29/api/Users/' + sessionStorage.getItem("account"))
                .then((res) => {
                    sessionStorage.setItem("UserUrl", res.data.headImageUrl);
                    sessionStorage.setItem("nickname", res.data.nickname);
                });

            this.editForm.nickname = await this.api.getUserName(sessionStorage.getItem('account'))
            this.editForm.introduction = await this.api.getUserIntro(sessionStorage.getItem('account'))
        },
        Logout() {
            sessionStorage.setItem("account", '');
            sessionStorage.setItem("UserUrl", '');
            sessionStorage.setItem("nickname", '');
            sessionStorage.setItem("token", '');
            this.$router.push({
                path: '/Login'
            });
        },
    },
    async mounted() {
        await this.init()
        this.backFromDetail()
        this.checkSource()
    },
    created() {},
};
</script>
