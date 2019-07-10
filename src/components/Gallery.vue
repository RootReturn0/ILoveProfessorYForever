<template>
<!-- gallary -->
  <div>
    <div class="banner about-banner">
		<banner></banner>
		<div class="about-heading">	
			<div class="container">
				<h2>Our Gallery</h2>
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
              <p><span v-if="postcard.producer">{{postcard.producr}}</span><span v-else>未知作者</span>，<span v-if="postcard.produceYear">{{postcard.produceYear}}</span><span v-else>未知年份</span></p>
            </div>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
  <!-- gallary -->
  <buttom></buttom>
	<!-- copyright -->
  </div>
</template>

<script>
import banner from '@/components/Banner'
import buttom from '@/components/Buttom'
import {
    WOW
} from 'wowjs'

export default {
  name: 'Gallary',
  data(){
    return{
      postcards: []
    }
  },
  components: {
		banner,
		buttom
    },
  methods: {
    async init() {
      this.postcards= await this.api.getPostcard()
      console.log(this.postcards)
      for(var i=0;i<this.postcards.length;i++){
        this.postcards[i].imageUrl=this.api.baseAddress+this.postcards[i].imageUrl
      }
      console.log(this.postcards)
    }
  },
    mounted() {
        new WOW().init();
        this.init()
    },
}
</script>