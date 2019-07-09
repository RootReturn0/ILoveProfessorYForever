<template>
    <div>

	<!-- Form -->
    <div class="Form">
        <h1 class="header-w3ls">
         猫咪领养申请表
      </h1>

      
      <!-- multistep form -->
      <div class="main-bothside">
         <form action="#" method="post">

             <input type="button" value="×">
             <!-- <input type="button" value="✗"> -->
              <h3>领养条件：</h3>

             <div class="form-mid-w3ls"> 
                 <div class="form-group">
                    <div class="form-mid-w3ls">
                       <p>&nbsp</p>
                       <p>&nbsp • 领养人应有固定住所,不支持学生宿舍养猫</p>
                    </div>
                    <div class="form-mid-w3ls">
                       <p>&nbsp</p>
                       <p>• 须全部家庭成员同意,无过敏等不可抗因素</p>
                    </div>
                    <div class="form-mid-w3ls">
                       <p>&nbsp</p>
                       <p>• 科学喂养不散养,家中有纱窗纱门以防走失</p>
                    </div>
                 </div>
            </div>

            <div class="form-mid-w3ls"> 
                 <div class="form-group">
                    <div class="form-mid-w3ls">
                       <p>&nbsp • 按时免疫驱虫,及时绝育</p>
                    </div>
                    <div class="form-mid-w3ls">
                       <p>• 对猫咪终身负责,出现特殊情况请与猫盟联系</p>
                    </div>
                    <div class="form-mid-w3ls">
                       <p>• 要求见面交接，不接受快递运输</p>
                    </div>
                 </div>
            </div>

            <div class="form-mid-w3ls"> 
                 <div class="form-group">
                    <div class="form-mid-w3ls">
                       <p>&nbsp • 领养后经常发布猫咪视频和照片至qq群</p>
                    </div>
                    <div class="form-mid-w3ls">
                       <p>• 不因生育、搬家等原因抛弃或随意送养猫咪</p>
                    </div>
                    <div class="form-mid-w3ls">
                       <p>• 接受定期回访</p>
                    </div>
                 </div>
            </div>

            <h3>申请信息：</h3>


            <div class="form-group">
               <div class="form-mid-w3ls">
                  <!-- <input type="text" name="name"  placeholder="Name" required=""> -->
                   <input type="text" name="姓名"  placeholder="姓名" required="">
               </div>
               <div class="form-mid-w3ls">
                  <input type="email" name="邮箱" placeholder="邮箱" required="">
               </div>
               <div class="form-mid-w3ls">
                  <input type="text" name="联系电话" placeholder="联系电话" required="">
               </div>
            </div>

            <div class="form-group">
               <div class="form-mid-w3ls">
                  <input type="text" name="省份" placeholder="省份" required="">
               </div>
               <div class="form-mid-w3ls">
                   <input type="text" name="城市" placeholder="城市" required="">
               </div>
               <div class="form-mid-w3ls">
                   <input type="text" name="详细地址" placeholder="详细地址" required="">
                  <!-- <input type="text" name="State" placeholder="State" required=""> -->
               </div>
            </div>
            <div class="parent-clss">
               <div class="personal-info">
                  <p>性别</p>
                  <div class="form-check">
                     <input class="form-check-input" type="radio" name="select4" value="option1" checked="">
                     <label class="form-check-label">
                     男
                     </label>
                  </div>
                  <div class="form-check">
                     <input class="form-check-input" type="radio" name="select4" value="option2" checked="">
                     <label class="form-check-label">
                     女
                     </label>
                  </div>
               </div>
               <div class="personal-info">
                  <p>有无固定住所</p>
                  <div class="form-check">
                     <input class="form-check-input" type="radio" name="select5" value="option3" checked="">
                     <label class="form-check-label">
                     有
                     </label>
                  </div>
                  <div class="form-check">
                     <input class="form-check-input" type="radio" name="select5" value="option4" checked="">
                     <label class="form-check-label">
                     无
                     </label>
                  </div>
                  <!-- <div class="form-check">
                     <input class="form-check-input" type="radio" name="select5" value="option5" checked="">
                     <label class="form-check-label">
                     Other
                     </label>
                  </div> -->
               </div>
               <div class="personal-info">
                  <p>家庭成员有无宠物过敏</p>
                  <div class="form-check">
                     <input class="form-check-input" type="radio" name="select6" value="option6" checked="">
                     <label class="form-check-label">
                     有
                     </label>
                  </div>
                  <div class="form-check">
                     <input class="form-check-input" type="radio" name="select6" value="option7" checked="">
                     <label class="form-check-label">
                     无
                     </label>
                     <div class="clear"></div>
                  </div>
                  <div class="form-check">
                     <input class="form-check-input" type="radio" name="select6" value="option8" checked="">
                     <label class="form-check-label">
                     未知
                     </label>
                  </div>
               </div>
            </div>
            <!-- <div class="form-group">
               <div class="form-mid-w3ls">
                  <input type="text" name="Age" placeholder="Age">
               </div>
               <div class="form-mid-w3ls">
                  <input type="email" name="Breed/type" placeholder="Breed/type">
               </div>
               <div class="form-mid-w3ls">
                  <input type="text" name="Pet Color & Markings" placeholder="Pet Color & Markings">
               </div>
            </div> -->
            <div class="form-control-w3l">
               <textarea name="Message"  placeholder="Any Message..."></textarea>
            </div>

            
            <!-- <div class="custom-file form-left-choose">
               <input type="file"  class="custom-file-input" id="customFile">
            </div> -->
             <p>&nbsp • 咨询猫咪领养相关事宜请加入qq群：631435029</p>




            <input type="submit" value="Submit">
            <!-- <input type="button" value="╳"> -->

            <!-- <a type="button" href="#">×</a> -->
            <!-- <input type="button" value="X"> -->
         </form>
      </div>
      <div class="copy">
         <p>©2018 Pet Found Form. All Rights Reserved | Design by <a href="http://www.W3Layouts.com" target="_blank">W3Layouts</a></p>
      </div>
    </div>
    <!-- //about -->
   
    </div>
</template>


<script>

//  $(document).ready(function () {
//             $('select').formSelect();
//         });


import buttom from '@/components/Buttom'
import banner from '@/components/Banner'

export default {
  name: 'Form',
  data(){
    console.log(this.loll)
    // return{
    //   lol: this.loll
    // }
    return {
        form: {
            name: '',
            email: '',
            phone: '',
            province: '',
            city: '',
            address: '',
            gentle: '',
            fixAdd: '',
            otherPet: '',
            description:''
            }
        }
    },
    methods: {
        
    },

  components: {
		buttom,
		banner
		},
  created() {
    // <img src="http://47.102.116.29:5050/image/head/head001.jpg">
    this.axios.get('http://47.102.116.29/api/Images')
          .then((response) => {
            console.log("2231")
            console.log(response.data[0].imageUrl)
            this.loll='http://47.102.116.29:5050/'+response.data[0].imageUrl
            console.log(this.loll)
          })
  },
};
</script>


