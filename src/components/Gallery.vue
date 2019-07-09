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
                  href="http://47.102.116.29:5050/image/head/head001.jpg"
                  data-lightbox="example-set"
                  data-title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut sem ac lectus mattis sagittis. Donec pulvinar quam sit amet est vestibulum volutpat. Phasellus sed nibh odio. Phasellus posuere at purus sit amet porttitor. Cras euismod egestas enim eget molestie. Aenean ornare condimentum odio, in lacinia felis finibus non. Nam faucibus libero et lectus finibus, sed porttitor velit pellentesque."
                >
                  <img :src="postcard.headImageUrl" alt>
                  <figcaption>
                    <p v-text="postcard.remark">Proin vitae luctus dui, sit amet ultricies leo</p>
                  </figcaption>
                </a>
              </figure>
              <p v-text="postcard.remark">Proin vitae luctus dui, sit amet ultricies leo</p>
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
      // console.log(this.postcards)
      for(var i=0;i<this.postcards.length;i++){
        this.postcards[i].headImageUrl=this.api.baseAddress+this.postcards[i].headImageUrl
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