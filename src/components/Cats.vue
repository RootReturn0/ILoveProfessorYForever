<template>
<div>
    <!-- banner -->
    <div class="banner about-banner">
        <banner @transfer="showForm"></banner>
        <div class="about-heading">
            <div class="container">
                <h2>猫 咪 展 示</h2>
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

                    <div class="row wrap-box">
                        <!--Start Box-->
                        <ul class="main-submenu">
                            <li v-for="color in colors" :key="color"><a href="javascript:void(0);" v-text="color.colorName" v-on:click="show(color.colorId)"></a></li>
                        </ul>
                        <!-- <div class="header">

<h2>Welcome</h2>

<hr class="line">

<span>text text text text text</span>

</div> -->

                        <div class="row">
                            <div class="col-1-3 agileits-left" v-for="cat in showCats" :key="cat">
                                <div class="wrap-col">
                                    <div class="box-item">
                                        <a :href="cat.headImageUrl" :data-lightbox="cat.catName" :title="cat.characteristics+cat.locate"><span class="ribbon" v-text="cat.catName"></span>
                                        <div class="animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
                                            <div class=" hover-fold">

<h4><span v-text="cat.age"></span>&nbsp;岁</h4>		                                                <div class="top">
                                                    <div class="front face" :style="{backgroundImage: 'url(' + cat.headImageUrl + ')'}"></div>
                                                    <div class="back face">

<div><p>性别：<span v-text="cat.catGender"></span></p></div>
                                                        <div><p>毛色：<span v-text="cat.colorName"></span></p></div>

<div><p>是否绝育：<span v-if="cat.isAdopt">是</span><span v-else>否</span></p></div>
                                                    </div>
                                                </div>
                                                <div class="bottom" :style="{backgroundImage: 'url(' + cat.headImageUrl + ')' }"></div>
                                            </div>
                                        </div>

</a>
                                        <a v-for="image in cat.images" :key="image" :href="image.imageUrl" :data-lightbox="cat.catName" :title="cat.characteristics+cat.locate" style="display:none"></a>
                                        <div class="clearfix"> </div>
                                        <div style="display:inline"><a v-if="cat.isAdopt" class="button-disable">已&nbsp;领&nbsp;养</a><a v-else href="javascript:void(0);" class="button" v-on:click="adopt(cat.catId,cat.catName,cat.age,cat.catGender)">领&nbsp;&nbsp;养</a>
                                            <a class="button" v-on:click="loginConfirm('上传图片前')">上传图片<input v-if="isLogin" ref="file" name="file" v-on:change="upload(cat.catId)" type="file" id="file" accept="image/*" capture="camera"></a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section>
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
import form from '@/components/Form'
import {
    sendPersonalMessage
} from '../../src/api/Login'
import {
    WOW
} from 'wowjs'
import {
    constants
} from 'fs';

export default {
    name: 'Adopt',
    data() {
        return {
            colors: [],
            cats: [],
            showCats: [],
            catImages: [],
            editFormVisible: false,
            imageUrl: "",
            editLoading: false,

            editForm: {
                nickname: '',
                introduction: '',
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
            this.colors = await this.api.getColor()
            this.colors.unshift({
                colorId: 'All',
                colorName: '全部毛色'
            })
            this.cats = await this.api.getCat()
            this.showCats = this.cats
            for (var i = 0; i < this.cats.length; i++) {
                this.cats[i].headImageUrl = this.api.baseAddress + this.cats[i].headImageUrl
                this.catImages.push(await this.api.getCatImage(this.cats[i].catId))
                for (var j = 0; j < this.catImages[i].length; j++) {
                    try {
                        this.catImages[i][j].imageUrl = this.api.baseAddress + this.catImages[i][j].imageUrl
                    } catch (err) {
                        console.log(i, j)
                    }
                }
                this.cats[i]['images'] = this.catImages[i]
            }
            console.log(this.cats)
            this.editForm.nickname = await this.api.getUserName(sessionStorage.getItem('account'))
            this.editForm.introduction = await this.api.getUserIntro(sessionStorage.getItem('account'))
        },
        show(color) {
            if (color == 'All') {
                this.showCats = this.cats
                return
            }
            this.showCats = []
            for (var i = 0; i < this.cats.length; i++) {
                if (this.cats[i].catColor == color)
                    this.showCats.push(this.cats[i])
            }
        },
        upload(id) {
            var file = document.getElementById('file').files[0]
            this.api.uploadImage(id, file)
        },
        adopt(id, name, age, gender) {
            if (this.isLogin == false) {
                this.loginConfirm('申请领养前')
                return
            }
            sessionStorage.setItem('adoptCatId', id)
            sessionStorage.setItem('adoptCatName', name)
            sessionStorage.setItem('adoptCatAge', age)
            sessionStorage.setItem('adoptCatGender', gender)
            this.$router.push({
                path: '/Form'
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
        loginConfirm(event) {
            if (this.isLogin == true)
                return
            this.$swal(event + "请先进行登录!").then((res) => {
                if (res.value) {
                    //  this.$store.dispatch('logout')
                    this.$router.push({
                        path: '/Login'
                    })
                }
            })
        },
        check() {
            if (sessionStorage.getItem('token'))
                this.isLogin = true
            else
                this.isLogin = false
        },
    },
    mounted() {
        new WOW().init()
        this.init()
        this.check()
        console.log('1231', sessionStorage.getItem("account"))
    },
};
</script>
