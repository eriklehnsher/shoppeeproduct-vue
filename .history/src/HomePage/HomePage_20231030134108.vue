<template>
  <div class="homepage">
    <!-- banner section -->
    <div class="set-bg">
      <div class="homepage__banner">
        <div class="banner-flex">
          <div class="">
            <!-- <img
            src="../assets/images/images-slider1.png"
            class="banner-bg d-block w-100"
            alt="..."
          /> -->
            <div class="product__carousel">
              <div id="" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="../assets/images/productImages/image1.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="../assets/images/productImages/image2.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="../assets/images/productImages/image3.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="../assets/images/productImages/image4.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="promo">
            <h1 class="main__productName">
              <!-- {{ product.name }} -->
              Hub chuyển đa năng Baseus Metal Gleam Series Multifunctional
              (Type-C to HDMI/ USB3.0/ LAN/ Card Reader/ Type-C PD 100W)
            </h1>
            <button class="main__porductButton d-flex align-items-center">
              <font-awesome-icon class="icon-noti" icon="fa-solid fa-bell" />
              <span>Theo dõi giảm giá</span>
            </button>
            <div class="main__productPricefrom d-flex align-items-center gap-1">
              <span>
                <!-- Giá từ: { Shopee, image_shopee } -->
                Giá từ: Shopee
              </span>
              <img src="../assets/images/shopee.png" alt="" />
            </div>
            <div
              class="main__productPrice d-flex align-items-center justify-content-between"
            >
              <span>
                <!-- {{ product.price }} -->
                550.000 đ
              </span>
              <a
                href="https://beecost.vn/bo-hub-mo-rong-baseus-metal-gleam-starjoy-series-8-in-1-4k60hz-p.1__5382617241__227642622/r?u=aHR0cHM6Ly9hcGl2My5iZWVjb3N0LnZuL2FmL3I/dXJsPWh0dHBzJTNBJTJGJTJGc2hvcGVlLnZuJTJGYm8taHViLW1vLXJvbmctYmFzZXVzLW1ldGFsLWdsZWFtLXN0YXJqb3ktc2VyaWVzLTgtaW4tMS00azYwaHotaS4yMjc2NDI2MjIuNTM4MjYxNzI0MSZjb3VudHJ5PXZuJnNvdXJjZT1tdWF0aG9uZ21pbmgudm4mdXRtX3NvdXJjZT1NdWElMjBUaCVDMyVCNG5nJTIwTWluaCZ1dG1fY29udGVudD1iZWV2bl8zYmVmZWI2ZS1mNTM0LTRkYTYtODRkYS03MTdjMzI4MjRmMGImdXRtX2NhbXBhaWduPWRlZmF1bHRfZGVza3RvcCUyMDFfXzUzODI2MTcyNDFfXzIyNzY0MjYyMiUyMC0lMjA1NzkwMDAlMjAtJTIwQiVFMSVCQiU5OSUyMEh1YiUyMG0lRTElQkIlOUYlMjByJUUxJUJCJTk5bmclMjBCYXNldXMlMjBNZXRhbCUyMEdsZWFtJTIwU3RhckpveSUyMFNlcmllcyUyMDglMjBpbiUyMDElMjA0SzYwSHolMjAtJTIwbnVsbCZ1dG1fdGVybT0xX181MzgyNjE3MjQxX18yMjc2NDI2MjI=&utm_source=Mua%20Th%C3%B4ng%20Minh&utm_content=beevn_3befeb6e-f534-4da6-84da-717c32824f0b&utm_campaign=default_desktop%201__5382617241__227642622%20-%20579000%20-%20B%E1%BB%99%20Hub%20m%E1%BB%9F%20r%E1%BB%99ng%20Baseus%20Metal%20Gleam%20StarJoy%20Series%208%20in%201%204K60Hz%20-%20null&utm_term=1__5382617241__227642622"
                type="button"
                class="main__porductButtonPrice d-flex align-items-center"
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
                  <!-- {{ product.ratingpoint }} -->
                  2.3
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

      <!-- SearchBox Section -->
      <div class="d-flex flex-column align-items-center homepage__searchBox">
        <h2>Đi đâu chill?</h2>
        <SearchBox />
      </div>
    </div>

    <!-- Top Cafe-stores section -->
    <ListStores />

    <!-- Location section -->
    <LocateStores />

    <!-- PROMOS section -->
    <Promos />
    <div class="homepage__about mt-40px">
      <div class="homepage__about--content ntent d-flex justify-content-center">
        <div
          class="homepage__about__content d-flex flex-column align-items-center justify-content-center"
        >
          <img class="logo" src="../assets/logo.png" alt="" />
          <h2 class="header-title">Bạn muốn biết thêm về chúng tớ?</h2>
          <p>
            "Duyệt hàng trăm quán cafe và nhà hàng, tìm điểm đặt bàn trước dễ<br />
            dàng với WeEat - Cộng đồng thực khách yêu ẩm thực của bạn."
          </p>
          <button class="about-btn">Tìm hiểu thêm</button>
        </div>
        <img class="about-bg" src="../assets/images/about-bg.jpeg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import SearchBox from "@/HomePage/SearchBox.vue";
import ListStores from "@/HomePage/ListStores";
import LocateStores from "@/HomePage/LocateStores.vue";
import Promos from "@/HomePage/Promos";
export default {
  components: {
    SearchBox,
    ListStores,
    LocateStores,
    Promos,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
