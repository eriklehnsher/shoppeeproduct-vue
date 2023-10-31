<template>
  <div class="home-container container d-flex flex-column">
        <router-link to="/product/product-detail">Chi tiết sản phẩm</router-link>
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
            <img
              :src="product.images[1].src"
              alt=""
              class="new-list__img p-12px"
              v-if="product.images[1].src"
            />

            <h6 class="header-product">{{ product.product_name }}</h6>

            <p class="price-product">
              Giá từ:
              {{
                product.priceFrom == "priceFrom__shopee"
                  ? "Shopee"
                  : product.priceFrom == "priceFrom__lazada"
                  ? "Lazada"
                  : product.priceFrom == "priceFrom__tiki"
                  ? "Tiki"
                  : ""
              }}
            </p>
            <p>PRODUCT ID: {{ product.id }}</p>
         
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/axios";
import CreateProduct from "../products/CreateProduct.vue";
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
  border-radius: 15px;
  width: 300px;
  height: auto;
  padding: 10px;
  cursor: pointer;
}
.new-list__img {
  width: 80%;
  height: auto;
}
.header-product {
  color: #000;
  font-family: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.price-product {
  color: #dc2626;
  font-family: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
</style>