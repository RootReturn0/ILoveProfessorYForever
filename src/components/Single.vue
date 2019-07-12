<template>
<div>
    <!-- banner -->
    <div class="banner about-banner">
        <banner @transfer="showForm"></banner>
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
                        <div class="blog-left-left">
                            <p>发布时间 &nbsp;&nbsp;<span v-if="blog.time!='null'" v-text="blog.time"></span><span v-else>暂无时间</span></p>
                            <!-- <p>Posted By <a href="#">Admin</a> &nbsp;&nbsp; on June 2, 2015 &nbsp;&nbsp; <a href="#">Comments (10)</a></p> -->
                            <a href="javascript:void(0);"><img :src="blog.cover" alt="暂无图片" /></a>
                        </div>
                        <div class="blog-left-right">
                            <a><p v-if="blog.title!='null'" v-text="blog.title"></p><p v-else>暂无标题</p></a>
                            <p v-if="blog.text!='null'" v-text="blog.text"></p>
                            <p v-else>暂无内容</p>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 blog-top-right-grid">
                <div class="Categories">
                    <h3>目录</h3>
                    <ul class="marked-list offs1">
                        <li v-for="site in sites" :key="site"> <a href="javascript:void(0);" v-on:click="changeArchive(site.name)">{{site.name}}&nbsp;&nbsp;({{site.num}})</a></li>
                    </ul>
                </div>
            </div>
            <!-- //container -->
            <div class="clearfix"> </div>
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
    name: 'Single',
    data() {
        return {
            blog: {
                time: sessionStorage.getItem('blogTime'),
                cover: sessionStorage.getItem('blogCover'),
                title: sessionStorage.getItem('blogTitle'),
                text: sessionStorage.getItem('blogText'),
            },
            sites: JSON.parse(sessionStorage.getItem('site')),

            editFormVisible: false,
            imageUrl: "",
            editLoading: false,

            editForm: {
                nickname: '',
                introduction: '',
            },
        }
    },
    components: {
        buttom,
        banner
    },
    methods: {
        async changeArchive(time) {
            console.log('kycbasduybcui')
            await sessionStorage.setItem('archiveTime', time)
            this.$router.push({
                path: '/Blog'
            })
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
        updateUserInfo() {

            this.api.getUserInfo(sessionStorage.getItem('account'))
            this.editForm.nickname = sessionStorage.getItem('nickname')
            this.editForm.introduction = sessionStorage.getItem('introduction')
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
                })

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
        document.documentElement.scrollTop = document.body.scrollTop = 310;
        this.editForm.nickname = await this.api.getUserName(sessionStorage.getItem('account'))
        this.editForm.introduction = await this.api.getUserIntro(sessionStorage.getItem('account'))
        console.log(this.blog, this.sites)

    },
};
</script>
