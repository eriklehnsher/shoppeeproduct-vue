<template>
  <div class="productdetail">
    <!-- banner section -->
    <div class="set-bg d-flex justify-content-center">
      <div class="productdetail__banner container">
        <div class="banner-flex">
          <div class="">
            <Carousel :product="product"></Carousel>
          </div>
          <div class="main__productDetail">
            <h1 class="main__productName">
              {{ product.product_name }}
            </h1>
            <button class="main__porductButton d-flex align-items-center">
              <font-awesome-icon class="icon-noti" icon="fa-solid fa-bell" />
              <span>Theo dõi giảm giá</span>
            </button>
            <div class="main__productPricefrom d-flex align-items-center gap-1">
              <span class="">
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
              </span>
              <img src="../assets/images/shopee.png" alt="" />
            </div>
            <div
              class="main__productPrice d-flex align-items-center justify-content-between"
            >
              <span> {{ product.productPrice }} 000 đ </span>
              <a
                href="https://beecost.vn/bo-hub-mo-rong-baseus-metal-gleam-starjoy-series-8-in-1-4k60hz-p.1__5382617241__227642622/r?u=aHR0cHM6Ly9hcGl2My5iZWVjb3N0LnZuL2FmL3I/dXJsPWh0dHBzJTNBJTJGJTJGc2hvcGVlLnZuJTJGYm8taHViLW1vLXJvbmctYmFzZXVzLW1ldGFsLWdsZWFtLXN0YXJqb3ktc2VyaWVzLTgtaW4tMS00azYwaHotaS4yMjc2NDI2MjIuNTM4MjYxNzI0MSZjb3VudHJ5PXZuJnNvdXJjZT1tdWF0aG9uZ21pbmgudm4mdXRtX3NvdXJjZT1NdWElMjBUaCVDMyVCNG5nJTIwTWluaCZ1dG1fY29udGVudD1iZWV2bl8zYmVmZWI2ZS1mNTM0LTRkYTYtODRkYS03MTdjMzI4MjRmMGImdXRtX2NhbXBhaWduPWRlZmF1bHRfZGVza3RvcCUyMDFfXzUzODI2MTcyNDFfXzIyNzY0MjYyMiUyMC0lMjA1NzkwMDAlMjAtJTIwQiVFMSVCQiU5OSUyMEh1YiUyMG0lRTElQkIlOUYlMjByJUUxJUJCJTk5bmclMjBCYXNldXMlMjBNZXRhbCUyMEdsZWFtJTIwU3RhckpveSUyMFNlcmllcyUyMDglMjBpbiUyMDElMjA0SzYwSHolMjAtJTIwbnVsbCZ1dG1fdGVybT0xX181MzgyNjE3MjQxX18yMjc2NDI2MjI=&utm_source=Mua%20Th%C3%B4ng%20Minh&utm_content=beevn_3befeb6e-f534-4da6-84da-717c32824f0b&utm_campaign=default_desktop%201__5382617241__227642622%20-%20579000%20-%20B%E1%BB%99%20Hub%20m%E1%BB%9F%20r%E1%BB%99ng%20Baseus%20Metal%20Gleam%20StarJoy%20Series%208%20in%201%204K60Hz%20-%20null&utm_term=1__5382617241__227642622"
                type="button"
                class="main__porductButtonPrice d-flex align-items-center mt-0"
              >
                <span>Đi đến nơi bán</span>
                <font-awesome-icon
                  class="icon-price"
                  icon="fa-solid fa-arrow-right"
                />
              </a>
            </div>
            <div class="main__productReviews d-flex">
              <div class="rating d-flex align-items-center">
                <span>
                  {{ product.rating_point }}

                </span>
                <div class="stars">
                  <font-awesome-icon class="star" icon="fa-solid fa-star" />
                  <font-awesome-icon class="star" icon="fa-solid fa-star" />
                  <font-awesome-icon class="star" icon="fa-solid fa-star" />
                  <font-awesome-icon class="star" icon="fa-solid fa-star" />
                  <font-awesome-icon class="star" icon="fa-solid fa-star" />
                </div>
              </div>
              <div class="line"></div>
              <span>
                <!-- {{ product.numberofreviews }}  -->
                3 Đánh giá
              </span>
              <div class="line"></div>
              <span>
                <!-- {{ product.numberofsales }} -->
                14 lượt bán
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!------------------------------------ sosanh & danhgia & mota ---------------------------->
    <div class="nav container">
      <nav>
        <ul id="sideMenu" class="nav-link">
          <li>
            <a href="#product-history-price-section_navigation">Lịch sử giá</a>
          </li>
          <li>
            <a href="#product-description-section_navigation">Mô tả Sản phẩm</a>
          </li>
          <li>
            <a href="#product-reviews_navigation">Đánh giá từ người mua</a>
          </li>
        </ul>
      </nav>
    </div>
    <div
      id="product-history-price-section_navigation"
      class="product__historyPrice container"
    >
      <div class="body__productHistoryPrice">
        <div class="line2"></div>
        <div
          class="body__productHistoryPrice__header d-flex align-items-center justify-content-between"
        >
          <p class="body__productHistoryPrice__header__title">Lịch sử giá</p>
          <button
            style="margin-top: 0px"
            class="main__porductButton d-flex align-items-center"
          >
            <font-awesome-icon class="icon-noti" icon="fa-solid fa-bell" />
            <span>Theo dõi giảm giá</span>
          </button>
        </div>
        <div class="d-flex flex-row gap-3">
          <div class="chart"></div>
          <div class="sumary">
            <div class="sumary1 d-flex flex-column align-items-start">
              <p>
                Tổng thời gian biến động giá:
                <span>8 tháng.</span>
              </p>
              <p>
                Số lần thay đổi giá:
                <span>1 lần.</span>
              </p>
            </div>
            <div class="sumary1 d-flex flex-column align-items-end">
              <div>
                <p style="font-size: 16px; font-weight: 700">Gợi ý cho bạn</p>
                <p>
                  Tiện ích Mua Thông Minh giúp bạn xem tất cả các mức giá trong
                  quá khứ của mọi sản phẩm (Shopee, Tiki, Lazada, Sendo). Tiết
                  kiệm gấp đôi.
                </p>
              </div>
              <a
                href="https://beecost.vn/bo-hub-mo-rong-baseus-metal-gleam-starjoy-series-8-in-1-4k60hz-p.1__5382617241__227642622/r?u=aHR0cHM6Ly9hcGl2My5iZWVjb3N0LnZuL2FmL3I/dXJsPWh0dHBzJTNBJTJGJTJGc2hvcGVlLnZuJTJGYm8taHViLW1vLXJvbmctYmFzZXVzLW1ldGFsLWdsZWFtLXN0YXJqb3ktc2VyaWVzLTgtaW4tMS00azYwaHotaS4yMjc2NDI2MjIuNTM4MjYxNzI0MSZjb3VudHJ5PXZuJnNvdXJjZT1tdWF0aG9uZ21pbmgudm4mdXRtX3NvdXJjZT1NdWElMjBUaCVDMyVCNG5nJTIwTWluaCZ1dG1fY29udGVudD1iZWV2bl8zYmVmZWI2ZS1mNTM0LTRkYTYtODRkYS03MTdjMzI4MjRmMGImdXRtX2NhbXBhaWduPWRlZmF1bHRfZGVza3RvcCUyMDFfXzUzODI2MTcyNDFfXzIyNzY0MjYyMiUyMC0lMjA1NzkwMDAlMjAtJTIwQiVFMSVCQiU5OSUyMEh1YiUyMG0lRTElQkIlOUYlMjByJUUxJUJCJTk5bmclMjBCYXNldXMlMjBNZXRhbCUyMEdsZWFtJTIwU3RhckpveSUyMFNlcmllcyUyMDglMjBpbiUyMDElMjA0SzYwSHolMjAtJTIwbnVsbCZ1dG1fdGVybT0xX181MzgyNjE3MjQxX18yMjc2NDI2MjI=&utm_source=Mua%20Th%C3%B4ng%20Minh&utm_content=beevn_3befeb6e-f534-4da6-84da-717c32824f0b&utm_campaign=default_desktop%201__5382617241__227642622%20-%20579000%20-%20B%E1%BB%99%20Hub%20m%E1%BB%9F%20r%E1%BB%99ng%20Baseus%20Metal%20Gleam%20StarJoy%20Series%208%20in%201%204K60Hz%20-%20null&utm_term=1__5382617241__227642622"
                type="button"
                class="main__porductButtonPrice d-flex align-items-center mt-0"
              >
                <span>Đi đến nơi bán</span>
                <font-awesome-icon
                  class="icon-price"
                  icon="fa-solid fa-arrow-right"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="productdetail__about mt-40px">
      <div
        class="productdetail__about--content ntent d-flex flex-column justify-content-start"
      >
        <h1>Mô tả sản phẩm:</h1>
        <span>{{ product.product_description }}</span>
      </div>
    </div>
    <div class="productdetail__about mt-40px">
      <div
        class="productdetail__about--content ntent d-flex flex-column justify-content-start"
      > 
        <h1>Đánh giá từ người dùng:</h1>
        <h1> {{ product.username_reviews }} </h1>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/axios";
import Carousel from "@/products/Carousel";
export default {
  components: {
    Carousel,
  },

  data() {
    return {
      product: {},
      id: this.$route.params.product_id,
    };
  },
  mounted() {
    console.log("rou", this.$route);
    axios
      .get("/product/" + this.id)
      .then((response) => {
        this.product = response.data;
      })
      .catch((error) => {
        console.log("Error", error);
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
