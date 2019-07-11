<template>
<div class="homepage-hero-module">
    <div class="LoginBackGround" :style="backgroundDiv">
        <div class="filter">
            <div style="text-align:center;position:relative">
                <el-card class="box-card LoginForm" style="width:400px;">
                    <el-row style="margin-top:20px;">
                        <img src="../assets/images/catLogo.png" alt="logo" height="60">
            </el-row>
                        <el-row type="flex" justify="center">
                            <el-col :span="18">
                                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="form1">
                                    <el-form-item prop="account">
                                        <el-input v-model="ruleForm.account" placeholder="请输入邮箱"></el-input>
                                    </el-form-item>
                                    <el-form-item label="" prop="password">
                                        <el-input type="password" v-model="ruleForm.password" placeholder="密码"></el-input>
                                    </el-form-item>
                                    <el-row type="flex" justify="end">
                                        <el-col :span="4">
                                            <el-button type="text" @click="toForgetPsw">忘记密码?</el-button>
                                        </el-col>
                                    </el-row>
                                    <el-row>
                                        <el-button type="primary" @click="handleLogin('ruleForm')" style="margin-top:20px;width:80%" plain>登陆</el-button>
                                    </el-row>
                                    <el-row type="flex" justify="center" align="middle" style="margin-top:20px">
                                        <el-col :span="6">
                                            <div style="height:30px;line-height:30px">没有账户?</div>
                                        </el-col>
                                        <el-col :span="3" :offset="0">
                                            <el-button type="text" @click="toRegister">注册</el-button>
                                        </el-col>
                                    </el-row>
                                </el-form>
                            </el-col>
                        </el-row>
                </el-card>
            </div>
        </div>

    </div>

</div>
</template>

<script>
import qs from 'qs'
import md5 from 'js-md5';
import img from '@/assets/images/bg1.jpg'
import {
    sendLoginMessage
} from '../api/Login'
export default {
    data() {
        return {
            ruleForm: {
                account: "",
                password: "",

            },
            backgroundDiv: {
                backgroundImage: 'url(' + img + ')'
            },
            rules: {
                account: [{
                        required: true,
                        message: '请输入登陆邮箱',
                        trigger: 'blur'
                    },
                    {
                        pattern: /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/,
                        message: '请输入合法邮箱'
                    }
                ],
                password: [{
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    },
                    {
                        min: 4,
                        max: 20,
                        message: '密码长度为4~20',
                        trigger: 'blur'
                    }
                ],

            }
        }
    },
    methods: {
        handleLogin(formName) {
            {
                this.$refs.ruleForm.validate((valid) => {
                    if (valid) {
                        let data = Object.assign({}, this.ruleForm);
                        sendLoginMessage(data).then((response) => {
                            this.editLoading = false;
                            this.api.getUserInfo(data.account)
                            sessionStorage.setItem("account", data.account);
                            sessionStorage.setItem("token", response);
                            this.$store.dispatch("setAccount", data.account);
                            this.$store.dispatch("setToken", response);
                            this.$router.push({
                                path: '/'
                            });
                            sessionStorage.setItem("welcome", 1);
                        }, (error) => {
                            this.$message({
                                message: '账号不存在或密码错误！',
                                type: 'error'
                            });
                            this.$store.dispatch("setAccount", null);
                            this.$store.dispatch("setToken", null);
                        });

                    }
                })
                return true;
            };

        },
        toRegister: function () {
            this.$router.push('/register');
        },
        toForgetPsw: function () {
            this.$router.push('/Forgetpsw');
        },
        mounted: function () {
            window.onresize = () => {
                const windowWidth = document.body.clientWidth
                const windowHeight = document.body.clientHeight
                const windowAspectRatio = windowHeight / windowWidth
                let videoWidth
                let videoHeight
                if (windowAspectRatio < 0.5625) {
                    videoWidth = windowWidth
                    videoHeight = videoWidth * 0.5625
                    this.fixStyle = {
                        height: windowWidth * 0.5625 + 'px',
                        width: windowWidth + 'px',
                        'margin-bottom': (windowHeight - videoHeight) / 2 + 'px',
                        'margin-left': 'initial'
                    }
                } else {
                    videoHeight = windowHeight
                    videoWidth = videoHeight / 0.5625
                    this.fixStyle = {
                        height: windowHeight + 'px',
                        width: windowHeight / 0.5625 + 'px',
                        'margin-left': (windowWidth - videoWidth) / 2 + 'px',
                        'margin-bottom': 'initial'
                    }
                }
            }
            window.onresize();
        },
    }
}
</script>

<style scoped>
.form1 {
    margin: 50px 0;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}

.box-card {
    width: 500px;
    margin: 20px auto;
    font-size: 14px;
    background: rgba(255, 255, 255, 0.8);
    position: absolute;
    top: 350px;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 0;
}

.homepage-hero-module,
.LoginBackGround {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-width: 1000px;
    z-index: -10;
    zoom: 1;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.video-container .poster img,
.video-container video {
    z-index: 0;
    position: absolute;
}

.homepage-hero-module {
    border-right: none;
    border-left: none;
    position: relative;
}

.no-video .video-container video,
.touch .video-container video {
    display: none;
}

.no-video .video-container .poster,
.touch .video-container .poster {
    display: block !important;
}

.video-container {
    position: relative;
    bottom: 0%;
    left: 0%;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background: #000;
}

.video-container .poster img {
    width: 100%;
    bottom: 0;
    position: absolute;
}

.video-container .filter {
    z-index: 100;
    position: absolute;
    background: rgba(0, 0, 0, 0.1);
    width: 100%;
}

.video-container video {
    position: absolute;
    z-index: 0;
    bottom: 0;
}

.video-container video.fillWidth {
    width: 100%;
}
</style>
