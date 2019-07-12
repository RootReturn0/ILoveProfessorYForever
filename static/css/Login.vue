<template>
    <el-form :model="loginForm" ref="loginForm" class="demo-ruleForm login-container">
        <h2 align="center">管理员登录</h2>
        <el-form-item prop="adminId">
            <el-input type="text" v-model="loginForm.account" auto-complete="off" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
        <el-form-item style="width:100%;">
            <el-button type="primary" style="width:100%;" @click="loginSubmit" :loading="logining">登录</el-button>
            <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
        </el-form-item>
    </el-form>
</template>
<script>
import { sendLoginMessage } from '../api/Login';

export default {
    data() {
        return {
            logining: false,
            loginForm: {
                account: "",
                password: "",
            },
            
    
        };
    },
    methods: {
        handleReset2() {
            this.$refs.loginForm.resetFields();
        },
        loginSubmit:function() {
            this.$refs.loginForm.validate((valid) => {
              if (valid) {
                let data = Object.assign({},this.loginForm);
                sendLoginMessage(data).then((response) => {
                            this.addLoading = false;
                            this.$message({
                                message: '成功登陆!',
                                type: 'success'
                            });
                            console.log(response);

                            sessionStorage.setItem("account",this.loginForm.account);
                            sessionStorage.setItem("token",response);
                            sessionStorage.setItem("a","aaaaaa");
                            // this.$store.dispatch("setAccount",this.loginForm.account);
                            // this.$store.dispatch("setToken",response);

                            this.$router.push({path:'/'});
                        }, (error) => {
                            // this.$store.dispatch("setAccount",null)
                        });

              }
            })
            return true;
        },
    }
}
</script>
<style lang="scss" scoped>
.login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;

    .title {
        margin: 0px auto 40px auto;
        text-align: center;
        color: #505458;
    }

    .remember {
        margin: 0px 0px 35px 0px;
    }
}
</style>