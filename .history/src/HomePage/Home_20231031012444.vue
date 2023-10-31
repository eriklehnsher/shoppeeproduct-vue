<template>
  <div class="productdetail d-flex flex-row">
    <!-- banner section -->

    <div class="form__createProduct">
      <router-link to="/product-detail">Chi tiết sản phẩm</router-link>
      <h2 class="mb-4">Tạo sản phẩm mới</h2>
      <form
        @submit="createProduct"
        class="form__create needs-validation"
        novalidate
      >
        <div class="container-grid">
          <div class="grid-item mb-3">
            <label for="product_name" class="form-label">Tên sản phẩm:</label>
            <input
              type="text"
              id="product_name"
              v-model="form.product_name"
              class="form-control"
              required
            />
          </div>
          <div class="grid-item mb-3">
            <label for="priceFrom" class="form-label">Nguồn giá:</label>
            <select
              id="priceFrom"
              v-model="form.priceFrom"
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
            <label for="number_of_sales" class="form-label">Số lượt mua:</label>
            <input
              type="number"
              id="number_of_sales"
              v-model="form.number_of_sales"
              class="form-control"
              required
            />
          </div>
          <div class="grid-item mb-3">
            <label for="number_of_sales" class="form-label">Số lượt đánh giá:</label>
            <input
              type="number"
              id="number_of_sales"
              v-model="form.number_of_reviews"
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
              v-model="form.username_reviews"
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
              v-model="form.product_description"
              class="form-control"
              rows="1"
            ></textarea>
          </div>
          <div class="grid-item mb-3">
            <label for="product_description" class="form-label"
              >Mô tả sản phẩm:</label
            >
            <input
              ref="uploadImage"
              type="file"
              id="uploads__productImage"
              accept="image/*"
              multiple
              @change="processFiles($event)"
            />
          </div>
        </div>

        <button type="submit" class="btn btn-primary">Tạo sản phẩm</button>
      </form>
    </div>
    <div class="product__list">danh sach san pham o day</div>
    <!------------------------------------ sosanh & danhgia & mota ---------------------------->
  </div>
</template>

<script>
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      form: {
        product_name: "",
        priceFrom: "priceFrom__shopee",
        rating_point: "",
        number_of_sales: "",
        number_of_reviews:"",
        username_reviews: "",
        product_description: "",
        product_images: "", // Sử dụng để lưu các tệp hình ảnh đã chọn
      },
      list: [],
      url: process.env.VUE_APP_API_URL,
      listProduct: [],
    };
  },
  methods: {
     createProduct() {
      this.form.product_images = this.list;
      axios
        .post("/product/create", this.form)
        .then((response) => {
          // Xử lý kết quả thành công (response.data) ở đây
          console.log("Product created:", response.data);
        })
        .catch((error) => {
          // Xử lý lỗi ở đây
          console.error("Error creating product:", error);
        });
    },
    processFiles(event) {
      let files = event.target.files;
      let formData = new FormData();
      for (var i = 0; i < files.length; i++) {
        formData.append("files", files[i]);
      }
      axios
        .post("/images/product", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          response.data.files_url.forEach((file) => {
            this.list.push({
              src: this.url + file,
            });
          });
          console.log(this.list);
        })
        .catch(() => {
          console.log("something went wrong!!");
        });
    },
  },
};
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
