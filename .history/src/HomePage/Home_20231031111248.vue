<template>
  <div>
    <CreateProduct
      :update="listCarUpdate"
      @newCarData="newCarData"
      @newCarFeature="newCarFeature"
      class="mb-16px"
    >
    </CreateProduct>
  </div>
</template>

<script>

import CreateProduct "../HomePage/CreateProduct.vue";
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