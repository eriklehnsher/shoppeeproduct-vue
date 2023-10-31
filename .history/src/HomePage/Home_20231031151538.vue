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
        <div class="d-flex flex-column gap-3">
          <div
            @click="goToDetail(product._id)"
            class="border"
            v-for="(product, key) in listProduct"
            :key="key"
          >
            <!-- <img
              :src="product.images[0].src"
              alt=""
              class="new-list__img p-12px"
              v-if="product.images[0].src"
            /> -->
            <img src="../assets/images/product1.jpg" alt="">
            <h6>{{ product.product_name }}</h6>

         <p> Giá từ:
         {{ product.priceFrom == "priceFrom__shopee"
										? "Shopee" 
										: product.priceFrom == "priceFrom__lazada"
										? "Lazada"
										:product.priceFrom == "priceFrom__tiki"
                    ? "Tiki"
                    : "" }}
         </p>

          </div>
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

  methods: {
    goToDetail(id) {
      this.$router.push(`/product/${id}`);
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.border {
  border: 2px solid #7d7777;
  border-radius: 5px;
}
.new-list__img {
  width: 100%;
  height: 50px;
}
</style>