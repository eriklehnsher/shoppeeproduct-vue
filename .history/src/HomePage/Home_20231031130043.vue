<template>
  <div class="home-container  container d-flex flex-column ">
    <div class="home  d-flex flex-column">
      <CreateProduct
        :update="listProductUpdate"
        @newCarData="newProdcutData"
        @newCarFeature="newProductFeature"
        class="mb-16px"
      >
      </CreateProduct>

      <div class="product__list">danh sach san pham o day</div>
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