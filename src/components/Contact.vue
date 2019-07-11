<template>
<div>
    <!-- banner -->
    <div class="banner about-banner">
        <banner @transfer="showForm"></banner>
        <div class="about-heading">
            <div class="container">
                <h2>联 系 我 们</h2>
            </div>
        </div>
    </div>
    <!-- //banner -->
    <!-- contact -->
    <div class="contact-top">
        <!-- container -->
        <div class="container">
            <div class="map">
                <iframe src="https://map.baidu.com/search/%E5%90%8C%E6%B5%8E%E5%A4%A7%E5%AD%A6%E5%98%89%E5%AE%9A%E6%A0%A1%E5%8C%BA%E5%90%8C%E5%BE%B7%E6%A5%BC4%E6%A5%BC/@13494180.424999999,3648071.3,19z?querytype=s&da_src=shareurl&wd=%E5%90%8C%E6%B5%8E%E5%A4%A7%E5%AD%A6%E5%98%89%E5%AE%9A%E6%A0%A1%E5%8C%BA%E5%90%8C%E5%BE%B7%E6%A5%BC4%E6%A5%BC&c=289&src=0&pn=0&sug=0&l=12&b=(13470397.47256783,3631200.73791701;13535314.473905109,3666003.46363394)&from=webmap&biz_forward=%7B%22scaler%22:2,%22styles%22:%22pl%22%7D&device_ratio=2" allowfullscreen></iframe>
            </div>
            <div class="mail-grids">
                <div class="col-md-6 mail-grid-left">
                    <h3>嘉定分部</h3>
                    <h5>同济大学嘉定校区</h5>
                    <p>上海市嘉定区安亭镇曹安公路4800号
                    </p>
                    <h4>联系方式</h4>
                    <p>
                        <span>微博: <a href="https://weibo.com/u/5906341217">@同济大学猫咪同盟</a>  &nbsp;&nbsp;&nbsp;&nbsp;微信公众号: 同济猫盟</span>
                        E-mail: <a href="mailto:contact_TJUCC@163.com">contact_TJUCC@163.com</a> &nbsp;&nbsp;&nbsp;&nbsp;QQ群: 271584610
                    </p>
                </div>
                <div class="col-md-6 mail-grid-left">
                    <h3>四平分部</h3>
                    <h5>同济大学四平校区</h5>
                    <p>上海市杨浦区四平路1239号
                    </p>
                    <h4>联系方式</h4>
                    <p>
                        <span>微博: <a href="https://weibo.com/u/5906341217">@同济大学猫咪同盟</a>  &nbsp;&nbsp;&nbsp;&nbsp;微信公众号: 同济猫盟</span>
                        E-mail: <a href="mailto:contact_TJUCC@163.com">contact_TJUCC@163.com</a> &nbsp;&nbsp;&nbsp;&nbsp;QQ群: 631435029
                    </p>
                </div>
                <div class="clearfix"> </div>
            </div>
        </div>
        <!-- //container -->
    </div>
    <!-- //contact -->
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
    name: 'Contact',
    data() {
        return {
            lol: this.loll,
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
        this.editForm.nickname = await this.api.getUserName(sessionStorage.getItem('account'))
        this.editForm.introduction = await this.api.getUserIntro(sessionStorage.getItem('account'))
    },
};
</script>
