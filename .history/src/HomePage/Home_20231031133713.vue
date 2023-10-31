<template>
  <div class="home-container container d-flex flex-column">
    <div class="home d-flex flex-row gap-5">
      <CreateProduct
        :update="listProductUpdate"
        @newCarData="newProdcutData"
        @newCarFeature="newProductFeature"
        class="carousel mb-16px"
      >
      </CreateProduct>

      <div class="product__list">
        <h1>Danh sách sản phẩm:</h1>
        <div v-for="(product, key) in listProduct" :key="key">
          <div v-for="(image, index) in product.images[0]" :key="index">
            <img :src="image" alt="Hình ảnh" />
          </div>

          <p class="text-18-20-700">
            {{ product.product_name }}
          </p>
          <p>{{ product.priceFrom }}K</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/axios";
import CreateProduct from "../HomePage/CreateProduct.vue";
export default {
  components: { CreateProduct },
  name: "ShoppeeproductVueHome",

  data() {
    return {
      listProduct: [],
    };
  },

  mounted() {
    axios
      .get("/product/all")
      .then((response) => {
        this.listProduct = response.data;
        console.log(this.listProduct);
      })
      .catch(() => {
        console.log("error");
      });
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>