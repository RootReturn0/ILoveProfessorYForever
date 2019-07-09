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
                                        <span class="ribbon" v-text="cat.catName">Menu Card<b></b></span>
                                        <div class="animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
                                            <div class=" hover-fold">
												<h4><span v-text="cat.age"></span>&nbsp;岁</h4>															
                                                <div class="top">
                                                    <div class="front face" :style="{backgroundImage: 'url(' + cat.headPortrait + ')'}"></div>
                                                    <div class="back face">
														<div><p>性别：<span v-text="cat.catGender"></span></p></div>
                                                        <div><p>毛色：<span v-text="cat.catColor"></span></p></div>
														<div><p>是否绝育：<span v-if="cat.isSterilization">是</span><span v-else>否</span></p></div>
                                                    </div>
                                                </div>
                                                <div class="bottom" :style="{backgroundImage: 'url(' + cat.headPortrait + ')' }"></div>
                                            </div>
                                        </div>
										<div class="clearfix"> </div>
                                        <div><a href="javascript:void(0);" class="button button-1" v-on:click="adopt()">Adopt</a></div>
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
import {
    WOW
} from 'wowjs'

export default {
    name: 'Adopt',
    data() {
        return {
            colors: [],
            cats: [],
            showCats: []
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
                this.cats[i].headPortrait = await this.api.getImage(this.cats[i].headPortrait)
            }
            //   for(var i=0;i<catList.length;i++){
            // 	  this.cats.push({id: catList.catId, name: catList.catName, color: catList.catColor, image: catList.headPortrait, isAdopt: catList.isAdopt})
            //   }
            console.log(this.cats)
        },
        show(color) {
            console.log(color)
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
        adopt() {
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
