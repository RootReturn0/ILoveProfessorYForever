<template>
<div>
    <!-- banner -->
    <div class="banner about-banner">
        <banner></banner>
        <div class="about-heading">
            <div class="container">
                <h2>Adopt A Cat</h2>
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
                            <div class="col-md-4 agileits-left" v-for="cat in showCats" :key="cat">
                                <div class="wrap-col">
                                    <div class="box-item">
                                        <a :href="cat.headImageUrl" :data-lightbox="cat.catName" :title="cat.characteristics+cat.locate"><span class="ribbon" v-text="cat.catName"></span>
                                        <div class="animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
                                            <div class=" hover-fold">
												<h4><span v-text="cat.age"></span>&nbsp;岁</h4>															
                                                <div class="top">
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
										<a v-for="image in cat.images" :key="image" :href="cat.headImageUrl" :data-lightbox="cat.catName" :title="cat.characteristics+cat.locate" style="display:none"></a>
										<div class="clearfix"> </div>
                                        <div style="display:inline"><a v-if="cat.isAdopt" class="button-disable">领&nbsp;&nbsp;养</a><a v-else href="javascript:void(0);" class="button" v-on:click="adopt(cat.catId)">领&nbsp;&nbsp;养</a>
										<a class="button">上传图片<input ref="file" name="file" v-on:change="upload(cat.catId)" type="file" id="file" accept="image/*" capture="camera"></a>
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
    WOW
} from 'wowjs'

export default {
    name: 'Adopt',
    data() {
        return {
            colors: [],
            cats: [],
			showCats: [],
			catImages: []
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
				this.cats[i].headImageUrl = this.api.baseAddress+this.cats[i].headImageUrl
				this.catImages.push(await this.api.getCatImage(this.cats[i].catId))
				for (var j = 0; j < this.catImages[i].length; j++) {
					try {
					this.catImages[i][j].imageUrl= this.api.baseAddress+this.catImages[i][j].imageUrl
					} catch (err) {
						console.log(i, j)
					}
				}
				this.cats[i]['images']=this.catImages[i]
			}
			console.log('asdasda',this.catImages)
            //   for(var i=0;i<catList.length;i++){
            // 	  this.cats.push({id: catList.catId, name: catList.catName, color: catList.catColor, image: catList.headPortrait, isAdopt: catList.isAdopt})
            //   }
            // console.log(this.cats)
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
			var file=document.getElementById('file').files[0]
			console.log(file)
			this.api.uploadImage(id,file)
		},
        adopt(id) {
			sessionStorage.setItem('adoptCat',id)
			// this.$store.commit('newCat',id)
            this.$router.push({
                path: '/Form'
            })
        }
    },
    mounted() {
        new WOW().init();
        this.init()
    },
};
</script>
