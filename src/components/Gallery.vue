<template>
<!-- gallary -->
  <div>
    <div class="banner about-banner">
		<banner @transfer="showForm"></banner>
		<div class="about-heading">	
			<div class="container">
				<h2>猫 盟 画 廊</h2>
			</div>
		</div>
	</div>
    <div class="gallery">
      <div class="container">
          <div class="animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
        <div class="gallery-grids">
          <div class="col-md-4 gallery-grid" v-for="postcard in postcards" :key="postcard">
            <div class="grid">
              <figure class="effect-apollo">
                <a
                  class="example-image-link"
                  :href="postcard.imageUrl"
                  data-lightbox="example-set"
                  data-title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut sem ac lectus mattis sagittis. Donec pulvinar quam sit amet est vestibulum volutpat. Phasellus sed nibh odio. Phasellus posuere at purus sit amet porttitor. Cras euismod egestas enim eget molestie. Aenean ornare condimentum odio, in lacinia felis finibus non. Nam faucibus libero et lectus finibus, sed porttitor velit pellentesque."
                >
                  <img :src="postcard.imageUrl" alt=“”>
                  <figcaption>
                    <p v-text="postcard.remark">Proin vitae luctus dui, sit amet ultricies leo</p>
                  </figcaption>
                </a>
              </figure>
              <p><span v-if="postcard.producer">{{postcard.producer}}</span><span v-else>未知作者</span>，<span v-if="postcard.produceYear">{{postcard.produceYear}}</span><span v-else>未知年份</span></p>
            </div>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
  <!-- gallary -->
  <div>
    <el-dialog title="编辑个人信息" :visible.sync="editFormVisible" :close-on-click-modal="false" width="43%">
      <!-- <el-card v-if="editFormVisible" width="auto"> -->
            <!-- <p>编辑个人信息</p> -->
            <el-form :model="editForm" label-width="80px" ref="editForm" shadow="never">

                <el-form-item label="昵称" prop="nickname">
                    <el-input v-model="editForm.nickname" auto-complete="off" :maxlength="7"></el-input>
                </el-form-item>
                  <el-form-item label="更新头像">
                      <el-upload
                        class="avatar-uploader"
                        :action="getPostUrl()"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                      </el-upload>
                  </el-form-item>
                
                <el-form-item label="简介" prop="introduction">
                    <el-input class="inline-input" v-model="editForm.introduction" placeholder="描述你自己" >
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
	<!-- copyright -->
  </div>
</template>

<script>
import banner from '@/components/Banner'
import buttom from '@/components/Buttom'
import {sendPersonalMessage} from '../../src/api/Login'
import {
    WOW
} from 'wowjs'

export default {
  name: 'Gallary',
  inject: ['reload'],
  data(){
    return{
      postcards: [],
      editFormVisible:false,
      imageUrl:"",
      editLoading: false,
      editForm: {
          nickname: "",
          headPortrait: "",
          introduction: "",
      },
    }
  },
  components: {
		banner,
		buttom
    },
  methods: {
    async init() {
      this.postcards= await this.api.getPostcard()
      for(var i=0;i<this.postcards.length;i++){
        this.postcards[i].imageUrl=this.api.baseAddress+this.postcards[i].imageUrl
      }
    },showForm(){
      this.editFormVisible=true
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
      getPostUrl(){
        return "http://47.102.116.29/api/Images/uploadUserHead?userID=" + sessionStorage.getItem("account")
      },
      getImageUrl(){
        return "http://47.102.116.29:5050/" + sessionStorage.getItem("UserUrl");
		    
      },
      addSubmit(){
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
                 sessionStorage.setItem("UserUrl",res.data.headImageUrl);
                 sessionStorage.setItem("nickname",res.data.nickname);
                
                });
            this.reload()   
            this.$router.go(0);
        },
        Logout(){
          sessionStorage.setItem("account",'');
          sessionStorage.setItem("UserUrl",'');
          sessionStorage.setItem("nickname",'');
		  sessionStorage.setItem("token",'');
          this.$router.push({path:'/Login'});
	  },
  },
    mounted() {
        new WOW().init();
        this.init()
    },
}
</script>

<style>
  /* .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  } */
  .el-table .warning-row {
    background: oldlace;
}

/* .upload-demo{
  display: block
} */


.demo-table-expand {
    font-size: 0;
}

.demo-table-expand label {
    width: 80px;
    color: #99a9bf;
}


</style>