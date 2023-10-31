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
import CreateProduct from "../HomePage/CreateProduct.vue";
export default {
  components: { CreateProduct },
  name: "ShoppeeproductVueHome",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>