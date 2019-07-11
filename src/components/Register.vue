<template>
    <el-container id="background" type="flex" class="LoginBackGround" :style="backgroundDiv">
        <el-row :gutter="40" type="flex" :align="'middle'" style="height:100%;width:100%;">
            <el-col :span="7" :offset="10">
                <!-- <img src="../image/1 2.jpg" alt="example pic" height="600"> -->
            </el-col>
            <el-col :span="6" id="boxCon" style="width:375px">
                <el-row class="box-color-grey transparent" style="height:500px;padding: 20px;">
                    <el-row style="width:100%;">
                        <img src="../assets/images/catLogo.png" alt="example pic" height="60">
                    </el-row>
                    <el-row type="flex" :justify="'center'" style="margin-bottom:20px;">
                        <p>注册 ICAT，一睹同济萌猫风采！</p>
                    </el-row>
                    <el-row type="flex" :justify="'center'">
                        <el-input placeholder="邮箱" v-model="email" clearable>
                        </el-input>
                    </el-row>
                    <el-row type="flex" :justify="'center'" v-if="(!emailValid)&&(!emailCodeSent)" style="margin-top:20px">
                        <el-button type="primary" plain size="medium" style="width:60%" @click="sendCodeButtonClick">发送验证码</el-button>
                    </el-row>
                    <el-row type="flex" :justify="'center'" v-if="emailCodeSent">
                        <el-input placeholder="验证码" v-model="userValidCode" clearable>
                        </el-input>
                    </el-row>
                    <el-row type="flex" :justify="'center'" v-if="emailCodeSent" style="margin-top:20px">
                        <el-button type="primary" plain size="medium" style="width:60%" @click="CodeValideButtonClick">验证</el-button>
                    </el-row>
                    <el-row type="flex" :justify="'center'" v-if="emailValid">
                        <el-input placeholder="用户名" v-model="nickName" clearable>
                        </el-input>
                    </el-row>
                    <el-row type="flex" :justify="'center'" v-if="emailValid">
                        <el-form :model="ruleForm" ref="ruleForm" class="form">
                            <el-form-item label="" prop="password">
                                <el-input type="password" v-model="ruleForm.password" placeholder="密码"></el-input>
                            </el-form-item>
                        </el-form>
                    </el-row>
                    <el-row type="flex" :justify="'center'" v-if="emailValid" style="margin-top:40px">

                        <el-button type="primary" plain size="medium" style="width:60%" @click="registerButtonClick">注册</el-button>
                    </el-row>
                    <el-row type="flex" :justify="'center'" :class="{manuallyDown:(!emailValid)&&(!emailCodeSent),manuallyUp:emailValid&&(!emailCodeSent),manuallyMiddle:emailCodeSent}">
                        <p style="font-size:14px; margin:18px 20px 20px 20px;">
                            注册即表示你同意接受我们的条款、数据使用政策和 Cookie 政策 。
                        </p>
                    </el-row>


                </el-row>
                <el-row type="flex" :align="'middle'" :justify="'center'" class="box-color-grey transparent" style="height:80px;font-size:14px;">
                    有帐户了？
                    <el-button type="text" @click="jumpLogIn">点我登陆</el-button>

                </el-row>
            </el-col>
        </el-row>
    </el-container>
</template>

<style scoped>

    .transparent {
        background: hsla(0, 0%, 100%, 0.75);
    }

    .imageCon {
        background-repeat: no-repeat;
        background-size: cover;
    }

    .manuallyDown {
        margin-top: 20px;
        /* color: #9b9b9b; */
        font-size: 12px;
        margin-top: 136px
    }
    .LoginBackGround {
    position:fixed;
    top: 0;
    left: 0;
    width:100%;
    height:100%;
    min-width: 1000px;
    z-index:-10;
    zoom: 1;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-position: center;
    background-repeat:no-repeat;
  }
    .manuallyUp {
        margin-top: 20px;
        /* color: #9b9b9b; */
        font-size: 12px;
        margin-top: 40px;
    }

    .manuallyMiddle {
        /* margin-top: 20px; */
        /* color: #9b9b9b; */
        font-size: 12px;
        margin-top: 89px;
    }

    .el-input {
        width: 250px;
        margin-top: 5px;
    }

    .box-color-grey {
        /* border-color: #e6e6e6;
        border-style: solid;
        border-width: thin; */
        margin-bottom: 10px;
        /* background-color: white; */
        /* padding: 20px; */
    }

    #background {
        /* background-color: #fafafa; */
        height: 800px;
        width: 100%;

    }

    .text {
        font-size: 14px;
        color: #fafafa;
    }

    .item {
        margin-bottom: 18px;
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
        width: 100%;
        margin-top: 20px;
    }

    .user-img {
        width: 100px;
        height: 100px;
        border-radius: 100px
    }

    div {
        margin-bottom: 1px;
    }

    .box-img {
        width: 500px;
        height: 300px;
    }
</style>

<script>
    import md5 from 'js-md5';
    import img from '@/assets/images/bg1.jpg'
    export default {
        
        data() {
            return {
                validCode: '',
                userValidCode: '',
                emailValid: false,
                emailCodeSent: false,
                tableData: [],
                email: '',
                nickName: '',
                keyword: '',
                ruleForm: {
                    email: '',
                    password: ''
                },
                backgroundDiv: {
                backgroundImage:'url(' + img +')'
                },

            }
        },

        methods: {
            CodeValideButtonClick() {
                if (this.userValidCode == this.validCode) {
                    this.emailValid = true;
                    this.emailCodeSent = false;
                    this.$message({
                        message: '验证成功，感谢您使用本站！！',
                        type: 'success'
                    });
                } else {
                    this.$message({
                        message: '不对喔，看看有没有手滑。',
                        type: 'warning'
                    });
                }

            },
            isEmail(str) {
                var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
                return reg.test(str);
            },
            jumpLogIn() {
                this.$router.push('/login');
            },
            sendCodeButtonClick() {
                this.axios.get('http://47.102.116.29/api/Users/VerifyCode?id=' + this.email)
                    .then((response) => {
                        if (response.data.status=="409") {
                            this.$message({
                                message: '该邮箱已经被注册过了！想想密码吧旁友！',
                                type: 'warning'
                            });
                        } else {
                            this.$message('验证码已发送，请检查邮箱。');
                            this.emailCodeSent = true;
                            this.validCode = response.data;
                        }
                    }).catch(err=>{
                        this.$message({
                                message: '该邮箱已经被注册过了！想想密码吧旁友！',
                                type: 'warning'
                            })
                    });
            },
            registerButtonClick(){
                    if (this.isEmail(this.email)) {
                    // this.axios.get('http://10.0.1.61:50192/api/values/5')
                    var md5Pass = ((this.ruleForm.password)).substr(0, 20);
                    this.axios.post('http://47.102.116.29/api/Users', {
                            userAccount: this.email,
                            nickname: this.nickName,
                            password: md5Pass,
                            introduction:"",
                        })
                        .then((response) => {
                            this.$router.push('/login');
                        })
                        .catch();
                } else {
                    this.$message.error('邮箱格式有误！请重新输入！');
                }
            },
            getSrc(src) {
                return src;
            },
            handleCancelClick(index) {
                this.$confirm('您觉得这条消息很无聊嘛？qwq？', '提示', {
                    confirmButtonText: '是的，别再给我看相关的谢谢!',
                    cancelButtonText: '点错了',
                    type: 'info'
                }).then(() => {
                    // for 循环
                    var length = this.cards.length;
                    for (var i = 0; i < length; i++) {
                        if (this.cards[i].index == index) {
                            this.cards.splice(i, 1);
                        }
                    }
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            }
        },


        beforeRouteLeave(to, from, next) {
            this.cards = [];
            this.tableData = [];
            next();
        }
    }
</script>