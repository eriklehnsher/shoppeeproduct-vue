<template>
  <div>
    <CreateProduct
      :update="listProductUpdate"
      @newCarData="newProdcutData"
      @newCarFeature="newProductFeature"
      class="mb-16px"
    >
    </CreateProduct>
    <div class="product__list">danh sach san pham o day</div>
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
      .get("/car/all")
      .then((response) => {
        this.listCar = response.data;
        console.log(this.listCar);
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