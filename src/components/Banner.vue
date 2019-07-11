<template>
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
								<div float="top-right" style="margin-top:0px; margin-right:0px;Height:50px">		
									<span class="userinfo-inner agileinfo-social-grids" ><img @click="showForm" :src="userUrl"></span>
                				</div>
								</div>	
                <div v-else class="agileinfo-social-grids">
                    <ul >
						<li><a href="#" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
						<li><a href="#" @click="login">&nbsp;登陆</a></li>
						<li><a href="#" @click="register">&nbsp;注册</a></li>
                    </ul>
                </div>
                <div class="clearfix"> 
                    
                </div>
            </div>
            <div class="clearfix"> </div>
        </div>
        
    </div>
    <!-- -->
</div>


    

</template>

<script>
export default {
   name: 'Banner',
  data(){
	  return{
		  userUrl:'',
		  isLogin:false
	  }
	
  },

  methods:{
	  getUrl () {
		  this.userUrl="http://47.102.116.29:5050/" + sessionStorage.getItem("UserUrl");
      },
      addPersonMessage (){

      },
      showForm(){
          this.$emit('transfer')
	  },
	  check () {
        if(sessionStorage.getItem('token'))
            this.isLogin= true
        else
            this.isLogin= false
	  },
	  login(){
		  this.$router.push({path:'/Login'})
	  },
	  register(){
		  this.$router.push({path:'/Register'})
	  }
  },
  mounted(){
	this.check()
	this.getUrl()
	setInterval(this.getUrl,1000)
  },
  created(){
	//   getUrl();
  }
}
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