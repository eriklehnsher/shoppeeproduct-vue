<template>
  <div class="productdetail">
    <!-- banner section -->

    <div class="form__createProduct">
      <router-link to="/product-detail">Chi tiết sản phẩm</router-link>
      <h2 class="mb-4">Tạo sản phẩm mới</h2>
      <form @submit="createProduct" class="form__create needs-validation" novalidate>
        <div class="grid-item mb-3">
          <label for="product_name" class="form-label">Tên sản phẩm:</label>
          <input
            type="text"
            id="product_name"
            v-model="product_name"
            class="form-control"
            required
          />
        </div>
        <div class=" grid-item mb-3">
          <label for="priceFrom" class="form-label">Nguồn giá:</label>
          <select
            id="priceFrom"
            v-model="priceFrom"
            class="form-select"
            required
          >
            <option value="priceFrom__shopee">Shopee</option>
            <option value="priceFrom__tiki">Tiki</option>
            <option value="priceFrom__lazada">Lazada</option>
          </select>
        </div>
        <div class="grid-item mb-3">
          <label for="rating_point" class="form-label">Điểm đánh giá:</label>
          <input
            type="number"
            id="rating_point"
            v-model="rating_point"
            class="form-control"
            required
          />
        </div>
        <div class="grid-item mb-3">
          <label for="number_of_reviews" class="form-label">Số đánh giá:</label>
          <input
            type="number"
            id="number_of_reviews"
            v-model="number_of_reviews"
            class="form-control"
            required
          />
        </div>
        <div class="grid-item mb-3">
          <label for="number_of_sales" class="form-label">Số lượt mua:</label>
          <input
            type="number"
            id="number_of_sales"
            v-model="number_of_sales"
            class="form-control"
            required
          />
        </div>
        <div class="grid-item mb-3">
          <label for="username_reviews" class="form-label"
            >Tên người đánh giá:</label
          >
          <input
            type="text"
            id="username_reviews"
            v-model="username_reviews"
            class="form-control"
            required
          />
        </div>
        <div class="grid-item mb-3">
          <label for="product_description" class="form-label"
            >Mô tả sản phẩm:</label
          >
          <textarea
            id="product_description"
            v-model="product_description"
            class="form-control"
            rows="4"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Tạo sản phẩm</button>
      </form>
    </div>
    <!------------------------------------ sosanh & danhgia & mota ---------------------------->
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
