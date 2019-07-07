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
        <div class="gallery-grids">
          <div class="col-md-4 gallery-grid">
            <div class="grid">
              <figure class="effect-apollo">
                <a
                  class="example-image-link"
                  href="http://47.102.116.29:5050/image/head/head001.jpg"
                  data-lightbox="example-set"
                  data-title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut sem ac lectus mattis sagittis. Donec pulvinar quam sit amet est vestibulum volutpat. Phasellus sed nibh odio. Phasellus posuere at purus sit amet porttitor. Cras euismod egestas enim eget molestie. Aenean ornare condimentum odio, in lacinia felis finibus non. Nam faucibus libero et lectus finibus, sed porttitor velit pellentesque."
                >
                  <img :src="lol">
                  <figcaption>
                    <p>Proin vitae luctus dui, sit amet ultricies leo</p>
                  </figcaption>
                </a>
              </figure>
            </div>
          </div>
          <div class="col-md-4 gallery-grid">
            <div class="grid">
              <figure class="effect-apollo">
                <a
                  class="example-image-link"
                  href="http://47.102.116.29:5050/image/head/head001.jpg"
                  data-lightbox="example-set"
                  data-title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut sem ac lectus mattis sagittis. Donec pulvinar quam sit amet est vestibulum volutpat. Phasellus sed nibh odio. Phasellus posuere at purus sit amet porttitor. Cras euismod egestas enim eget molestie. Aenean ornare condimentum odio, in lacinia felis finibus non. Nam faucibus libero et lectus finibus, sed porttitor velit pellentesque."
                >
                  <img src="http://47.102.116.29:5050/image/head/head001.jpg" alt>
                  <figcaption>
                    <p>Proin vitae luctus dui, sit amet ultricies leo</p>
                  </figcaption>
                </a>
              </figure>
            </div>
          </div>
          <div class="col-md-4 gallery-grid">
            <div class="grid">
              <figure class="effect-apollo">
                <!-- <a class="example-image-link" href="http://47.102.116.29:5050/image/head/head001.jpg" data-lightbox="example-set" data-title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut sem ac lectus mattis sagittis. Donec pulvinar quam sit amet est vestibulum volutpat. Phasellus sed nibh odio. Phasellus posuere at purus sit amet porttitor. Cras euismod egestas enim eget molestie. Aenean ornare condimentum odio, in lacinia felis finibus non. Nam faucibus libero et lectus finibus, sed porttitor velit pellentesque."> -->
                <img :src="lol">
                <figcaption>
                  <p>Proin vitae luctus dui, sit amet ultricies leo</p>
                </figcaption>
                <!-- </a> -->
              </figure>
            </div>
          </div>
          <div class="col-md-4 gallery-grid">
            <div class="grid">
              <figure class="effect-apollo">
                <a
                  class="example-image-link"
                  href="http://47.102.116.29:5050/image/head/head001.jpg"
                  data-lightbox="example-set"
                  data-title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut sem ac lectus mattis sagittis. Donec pulvinar quam sit amet est vestibulum volutpat. Phasellus sed nibh odio. Phasellus posuere at purus sit amet porttitor. Cras euismod egestas enim eget molestie. Aenean ornare condimentum odio, in lacinia felis finibus non. Nam faucibus libero et lectus finibus, sed porttitor velit pellentesque."
                >
                  <img :src="lol">
                  <figcaption>
                    <p>Proin vitae luctus dui, sit amet ultricies leo</p>
                  </figcaption>
                </a>
              </figure>
            </div>
          </div>
          <div class="col-md-4 gallery-grid">
            <div class="grid">
              <figure class="effect-apollo">
                <a
                  class="example-image-link"
                  href="http://47.102.116.29:5050/image/head/head001.jpg"
                  data-lightbox="example-set"
                  data-title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut sem ac lectus mattis sagittis. Donec pulvinar quam sit amet est vestibulum volutpat. Phasellus sed nibh odio. Phasellus posuere at purus sit amet porttitor. Cras euismod egestas enim eget molestie. Aenean ornare condimentum odio, in lacinia felis finibus non. Nam faucibus libero et lectus finibus, sed porttitor velit pellentesque."
                >
                  <img :src="lol">
                  <figcaption>
                    <p>Proin vitae luctus dui, sit amet ultricies leo</p>
                  </figcaption>
                </a>
              </figure>
            </div>
          </div>
          <div class="col-md-4 gallery-grid">
            <div class="grid">
              <figure class="effect-apollo">
                <a
                  class="example-image-link"
                  href="http://47.102.116.29:5050/image/head/head001.jpg"
                  data-lightbox="example-set"
                  data-title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut sem ac lectus mattis sagittis. Donec pulvinar quam sit amet est vestibulum volutpat. Phasellus sed nibh odio. Phasellus posuere at purus sit amet porttitor. Cras euismod egestas enim eget molestie. Aenean ornare condimentum odio, in lacinia felis finibus non. Nam faucibus libero et lectus finibus, sed porttitor velit pellentesque."
                >
                  <img :src="lol">
                  <figcaption>
                    <p>Proin vitae luctus dui, sit amet ultricies leo</p>
                  </figcaption>
                </a>
              </figure>
            </div>
          </div>
          <div class="col-md-4 gallery-grid">
            <div class="grid">
              <figure class="effect-apollo">
                <a
                  class="example-image-link"
                  href="http://47.102.116.29:5050/image/head/head001.jpg"
                  data-lightbox="example-set"
                  data-title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut sem ac lectus mattis sagittis. Donec pulvinar quam sit amet est vestibulum volutpat. Phasellus sed nibh odio. Phasellus posuere at purus sit amet porttitor. Cras euismod egestas enim eget molestie. Aenean ornare condimentum odio, in lacinia felis finibus non. Nam faucibus libero et lectus finibus, sed porttitor velit pellentesque."
                >
                  <img :src="lol">
                  <figcaption>
                    <p>Proin vitae luctus dui, sit amet ultricies leo</p>
                  </figcaption>
                </a>
              </figure>
            </div>
          </div>
          <div class="col-md-4 gallery-grid">
            <div class="grid">
              <figure class="effect-apollo">
                <a
                  class="example-image-link"
                  href="http://47.102.116.29:5050/image/head/head001.jpg"
                  data-lightbox="example-set"
                  data-title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut sem ac lectus mattis sagittis. Donec pulvinar quam sit amet est vestibulum volutpat. Phasellus sed nibh odio. Phasellus posuere at purus sit amet porttitor. Cras euismod egestas enim eget molestie. Aenean ornare condimentum odio, in lacinia felis finibus non. Nam faucibus libero et lectus finibus, sed porttitor velit pellentesque."
                >
                  <img :src="lol">
                  <figcaption>
                    <p>Proin vitae luctus dui, sit amet ultricies leo</p>
                  </figcaption>
                </a>
              </figure>
            </div>
          </div>
          <div class="col-md-4 gallery-grid">
            <div class="grid">
              <figure class="effect-apollo">
                <a
                  class="example-image-link"
                  href="http://47.102.116.29:5050/image/head/head001.jpg"
                  data-lightbox="example-set"
                  data-title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut sem ac lectus mattis sagittis. Donec pulvinar quam sit amet est vestibulum volutpat. Phasellus sed nibh odio. Phasellus posuere at purus sit amet porttitor. Cras euismod egestas enim eget molestie. Aenean ornare condimentum odio, in lacinia felis finibus non. Nam faucibus libero et lectus finibus, sed porttitor velit pellentesque."
                >
                  <img :src="lol">
                  <figcaption>
                    <p>Proin vitae luctus dui, sit amet ultricies leo</p>
                  </figcaption>
                </a>
              </figure>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
  <!-- gallary -->
  <buttom></buttom>
	<!-- copyright -->
	<div class="copyright">
		<div class="container">
			<p>© 2017 Cat Club. All rights reserved | Design by <a href="http://w3layouts.com">W3layouts</a></p>
		</div>
	</div>
    <a href="#" id="toTop" style="display: block;">
        <span id="toTopHover" style="opacity: 0;"></span>
        <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">到达顶点</font>
        </font>
    </a>
    </div>
</template>

<script>
import banner from '@/components/Banner'
import buttom from '@/components/Buttom'
export default {
  name: 'Gallary',
  data(){
    console.log(this.loll)
    return{
      lol: ''
    }
  },
  components: {
		banner,
		buttom
		},
  created() {
    // <img src="http://47.102.116.29:5050/image/head/head001.jpg">
    this.axios.get('http://47.102.116.29/api/Images')
          .then((response) => {
            console.log("2231")
            console.log(response.data[0].imageUrl)
            this.lol='http://47.102.116.29:5050/'+response.data[0].imageUrl
            console.log(this.loll)
          })
  },
}
</script>