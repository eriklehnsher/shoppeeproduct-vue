<template>
  <div class="container mt-5">
    <router-link to="/product-detail">Chi tiết sản phẩm</router-link>
    <h2 class="mb-4">Tạo sản phẩm mới</h2>
    <form @submit="createProduct" class="needs-validation" novalidate>
      <div class="mb-3">
        <label for="product_name" class="form-label">Tên sản phẩm:</label>
        <input type="text" id="product_name" v-model="product_name" class="form-control" required>
      </div>
      <div class="mb-3">
        <label for="priceFrom" class="form-label">Nguồn giá:</label>
        <select id="priceFrom" v-model="priceFrom" class="form-select" required>
          <option value="priceFrom__shopee">Shopee</option>
          <option value="priceFrom__tiki">Tiki</option>
          <option value="priceFrom__lazada">Lazada</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="rating_point" class="form-label">Điểm đánh giá:</label>
        <input type="number" id="rating_point" v-model="rating_point" class="form-control" required>
      </div>
      <div class="mb-3">
        <label for="number_of_reviews" class="form-label">Số đánh giá:</label>
        <input type="number" id="number_of_reviews" v-model="number_of_reviews" class="form-control" required>
      </div>
      <div class="mb-3">
        <label for="number_of_sales" class="form-label">Số lượt mua:</label>
        <input type="number" id="number_of_sales" v-model="number_of_sales" class="form-control" required>
      </div>
      <div class="mb-3">
        <label for="username_reviews" class="form-label">Tên người đánh giá:</label>
        <input type="text" id="username_reviews" v-model="username_reviews" class="form-control" required>
      </div>
      <button type="submit" class="btn btn-primary">Tạo sản phẩm</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product_name: "",
      priceFrom: "priceFrom__shopee",
      rating_point: 0,
      number_of_reviews: 0,
      number_of_sales: 0,
      username_reviews: "",
    };
  },
  methods: {
    createProduct() {
      // Gửi yêu cầu API để tạo sản phẩm với dữ liệu từ form
      const productData = {
        product_name: this.product_name,
        priceFrom: this.priceFrom,
        rating_point: this.rating_point,
        number_of_reviews: this.number_of_reviews,
        number_of_sales: this.number_of_sales,
        username_reviews: this.username_reviews,
      };

      // Sử dụng Axios hoặc thư viện HTTP client khác để gửi yêu cầu POST để tạo sản phẩm
      this.$axios.post("https://example.com/api/products", productData)
        .then((response) => {
          console.log("Sản phẩm đã được tạo:", response.data);
          // Xử lý khi sản phẩm được tạo thành công
        })
        .catch((error) => {
          console.error("Lỗi:", error);
          // Xử lý khi gặp lỗi
        });
    },
  },
};
</script>
