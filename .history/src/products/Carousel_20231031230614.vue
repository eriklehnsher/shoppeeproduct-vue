<template>
  <carousel clas :items-to-show="1">
    <slide v-for="(image, index) in product.images" :key="index">
      <img :src="product.images[index].src" class="w-100 h-100" />
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  props: {
    product: Object,
  },
  name: "App",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
};
</script>
<style lang="" scoped>
.carousel {
  display: inline-flex;
  padding: 20px;
  border-radius: 23px;
  border: 1px solid rgba(0, 0, 0, 0.24);
}
.carousel img {
  width: 424px;
  height: 424px;
  border-radius: 20px;

}
</style>