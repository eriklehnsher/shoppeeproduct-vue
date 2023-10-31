<template>
  <div class="productdetail">
    <!-- banner section -->
    <div class="set-bg d-flex justify-content-center">
      <div class="productdetail__banner container">
        <div class="banner-flex">
          <div class="">
            <!-- <img
            src="../assets/images/images-slider1.png"
            class="banner-bg d-block w-100"
            alt="..." /> -->
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
          <div
            class="main__productDetail"
           
          >
            <h1 class="main__productName">
              <!-- {{ product.name }} -->
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
              <span>
                {{ product.product_price }}
               
              </span>
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
        class="productdetail__about--content ntent d-flex justify-content-center"
      >
        <div
          class="productdetail__about__content d-flex flex-column align-items-center justify-content-center"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/axios";

export default {
  components: {},
  data() {
    return {
      product: {},
      id: this.$route.params.id
    };
  },
  mounted() {
    console.log(this.$rou<!doctype html>
    <html lang="en">
    
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
        <meta name="generator" content="Hugo 0.72.0">
        <title>Blog Template · Bootstrap</title>
    
        <link rel="canonical" href="https://v5.getbootstrap.com/docs/5.0/examples/blog/">
    
    
    
        <!-- Bootstrap core CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css"
            integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous">
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js"
            integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/"
            crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
            integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
            crossorigin="anonymous"></script>
    
        <style>
            .bd-placeholder-img {
                font-size: 1.125rem;
                text-anchor: middle;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
    
            @media (min-width: 768px) {
                .bd-placeholder-img-lg {
                    font-size: 3.5rem;
                }
            }
        </style>
    
    
        <!-- Custom styles for this template -->
        <link href="https://fonts.googleapis.com/css?family=Playfair&#43;Display:700,900&amp;display=swap" rel="stylesheet">
        <!-- Custom styles for this template -->
        <style>
            /* stylelint-disable selector-list-comma-newline-after */
    
            .blog-header {
                line-height: 1;
                border-bottom: 1px solid #e5e5e5;
            }
    
            .blog-header-logo {
                font-family: "Playfair Display", Georgia, "Times New Roman", serif;
                font-size: 2.25rem;
            }
    
            .blog-header-logo:hover {
                text-decoration: none;
            }
    
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
                font-family: "Playfair Display", Georgia, "Times New Roman", serif;
            }
    
            .display-4 {
                font-size: 2.5rem;
            }
    
            @media (min-width: 768px) {
                .display-4 {
                    font-size: 3rem;
                }
            }
    
            .nav-scroller {
                position: relative;
                z-index: 2;
                height: 2.75rem;
                overflow-y: hidden;
            }
    
            .nav-scroller .nav {
                display: flex;
                flex-wrap: nowrap;
                padding-bottom: 1rem;
                margin-top: -1px;
                overflow-x: auto;
                text-align: center;
                white-space: nowrap;
                -webkit-overflow-scrolling: touch;
            }
    
            .nav-scroller .nav-link {
                padding-top: .75rem;
                padding-bottom: .75rem;
                font-size: .875rem;
            }
    
            .card-img-right {
                height: 100%;
                border-radius: 0 3px 3px 0;
            }
    
            .flex-auto {
                flex: 0 0 auto;
            }
    
            .h-250 {
                height: 250px;
            }
    
            @media (min-width: 768px) {
                .h-md-250 {
                    height: 250px;
                }
            }
    
            /* Pagination */
            .blog-pagination {
                margin-bottom: 4rem;
            }
    
            .blog-pagination>.btn {
                border-radius: 2rem;
            }
    
            /*
            * Blog posts
            */
            .blog-post {
                margin-bottom: 4rem;
            }
    
            .blog-post-title {
                margin-bottom: .25rem;
                font-size: 2.5rem;
            }
    
            .blog-post-meta {
                margin-bottom: 1.25rem;
                color: #727272;
            }
    
            /*
            * Footer
            */
            .blog-footer {
                padding: 2.5rem 0;
                color: #727272;
                text-align: center;
                background-color: #f9f9f9;
                border-top: .05rem solid #e5e5e5;
            }
    
            .blog-footer p:last-child {
                margin-bottom: 0;
            }
        </style>
    </head>
    
    <body>
    
        <div class="container">
            <header class="blog-header py-3">
                <div class="row flex-nowrap justify-content-between align-items-center">
                    <div class="col-4 pt-1">
                        <a class="link-secondary" href="#">Subscribe</a>
                    </div>
                    <div class="col-4 text-center">
                        <a class="blog-header-logo text-dark" href="#">Large</a>
                    </div>
                    <div class="col-4 d-flex justify-content-end align-items-center">
                        <a class="link-secondary" href="#" aria-label="Search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor"
                                stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="mx-3" role="img"
                                viewBox="0 0 24 24">
                                <title>Search</title>
                                <circle cx="10.5" cy="10.5" r="7.5" />
                                <path d="M21 21l-5.2-5.2" />
                            </svg>
                        </a>
                        <a class="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
                    </div>
                </div>
            </header>
    
            <div class="nav-scroller py-1 mb-2">
                <nav class="nav d-flex justify-content-between">
                    <a class="p-2 link-secondary" href="#">World</a>
                    <a class="p-2 link-secondary" href="#">U.S.</a>
                    <a class="p-2 link-secondary" href="#">Technology</a>
                    <a class="p-2 link-secondary" href="#">Design</a>
                    <a class="p-2 link-secondary" href="#">Culture</a>
                    <a class="p-2 link-secondary" href="#">Business</a>
                    <a class="p-2 link-secondary" href="#">Politics</a>
                    <a class="p-2 link-secondary" href="#">Opinion</a>
                    <a class="p-2 link-secondary" href="#">Science</a>
                    <a class="p-2 link-secondary" href="#">Health</a>
                    <a class="p-2 link-secondary" href="#">Style</a>
                    <a class="p-2 link-secondary" href="#">Travel</a>
                </nav>
            </div>
    
            <div class="p-4 p-md-5 mb-4 text-white rounded bg-dark">
                <div class="col-md-6 px-0">
                    <h1 class="display-4 font-italic">Title of a longer featured blog post</h1>
                    <p class="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and
                        efficiently about what’s most interesting in this post’s contents.</p>
                    <p class="lead mb-0"><a href="#" class="text-white font-weight-bold">Continue reading...</a></p>
                </div>
            </div>
    
            <div class="row mb-2">
                <div class="col-md-6">
                    <div
                        class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div class="col p-4 d-flex flex-column position-static">
                            <strong class="d-inline-block mb-2 text-primary">World</strong>
                            <h3 class="mb-0">Featured post</h3>
                            <div class="mb-1 text-muted">Nov 12</div>
                            <p class="card-text mb-auto">This is a wider card with supporting text below as a natural
                                lead-in to additional content.</p>
                            <a href="#" class="stretched-link">Continue reading</a>
                        </div>
                        <div class="col-auto d-none d-lg-block">
                            <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg"
                                aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" role="img"
                                focusable="false">
                                <title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                                    dy=".3em">Thumbnail</text>
                            </svg>
    
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div
                        class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div class="col p-4 d-flex flex-column position-static">
                            <strong class="d-inline-block mb-2 text-success">Design</strong>
                            <h3 class="mb-0">Post title</h3>
                            <div class="mb-1 text-muted">Nov 11</div>
                            <p class="mb-auto">This is a wider card with supporting text below as a natural lead-in to
                                additional content.</p>
                            <a href="#" class="stretched-link">Continue reading</a>
                        </div>
                        <div class="col-auto d-none d-lg-block">
                            <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg"
                                aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" role="img"
                                focusable="false">
                                <title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                                    dy=".3em">Thumbnail</text>
                            </svg>
    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <main class="container">
            <div class="row">
                <div class="col-md-8">
                    <h3 class="pb-4 mb-4 font-italic border-bottom">
                        From the Firehose
                    </h3>
    
                    <div class="blog-post">
                        <h2 class="blog-post-title">Sample blog post</h2>
                        <p class="blog-post-meta">January 1, 2014 by <a href="#">Mark</a></p>
    
                        <p>This blog post shows a few different types of content that’s supported and styled with Bootstrap.
                            Basic typography, images, and code are all supported.</p>
                        <hr>
                        <p>Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur ridiculus
                            mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere
                            consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
                        <blockquote>
                            <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong>
                                ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                        </blockquote>
                        <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet
                            fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                        <h2>Heading</h2>
                        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non
                            commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus,
                            porta ac consectetur ac, vestibulum at eros.</p>
                        <h3>Sub-heading</h3>
                        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                        <pre><code>Example code block</code></pre>
                        <p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.
                            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>
                        <h3>Sub-heading</h3>
                        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean
                            lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce
                            dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
                            amet risus.</p>
                        <ul>
                            <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
                            <li>Donec id elit non mi porta gravida at eget metus.</li>
                            <li>Nulla vitae elit libero, a pharetra augue.</li>
                        </ul>
                        <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.
                        </p>
                        <ol>
                            <li>Vestibulum id ligula porta felis euismod semper.</li>
                            <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
                            <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
                        </ol>
                        <p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>
                    </div><!-- /.blog-post -->
    
                    <div class="blog-post">
                        <h2 class="blog-post-title">Another blog post</h2>
                        <p class="blog-post-meta">December 23, 2013 by <a href="#">Jacob</a></p>
    
                        <p>Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur ridiculus
                            mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere
                            consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
                        <blockquote>
                            <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong>
                                ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                        </blockquote>
                        <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet
                            fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non
                            commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus,
                            porta ac consectetur ac, vestibulum at eros.</p>
                    </div><!-- /.blog-post -->
    
                    <div class="blog-post">
                        <h2 class="blog-post-title">New feature</h2>
                        <p class="blog-post-meta">December 14, 2013 by <a href="#">Chris</a></p>
    
                        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean
                            lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce
                            dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
                            amet risus.</p>
                        <ul>
                            <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
                            <li>Donec id elit non mi porta gravida at eget metus.</li>
                            <li>Nulla vitae elit libero, a pharetra augue.</li>
                        </ul>
                        <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet
                            fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                        <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.
                        </p>
                    </div><!-- /.blog-post -->
    
                    <nav class="blog-pagination">
                        <a class="btn btn-outline-primary" href="#">Older</a>
                        <a class="btn btn-outline-secondary disabled" href="#" tabindex="-1" aria-disabled="true">Newer</a>
                    </nav>
    
                </div>
    
                <aside class="col-md-4">
                    <div class="p-4 mb-3 bg-light rounded">
                        <h4 class="font-italic">About</h4>
                        <p class="mb-0">Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur
                            purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                    </div>
    
                    <div class="p-4">
                        <h4 class="font-italic">Archives</h4>
                        <ol class="list-unstyled mb-0">
                            <li><a href="#">March 2014</a></li>
                            <li><a href="#">February 2014</a></li>
                            <li><a href="#">January 2014</a></li>
                            <li><a href="#">December 2013</a></li>
                            <li><a href="#">November 2013</a></li>
                            <li><a href="#">October 2013</a></li>
                            <li><a href="#">September 2013</a></li>
                            <li><a href="#">August 2013</a></li>
                            <li><a href="#">July 2013</a></li>
                            <li><a href="#">June 2013</a></li>
                            <li><a href="#">May 2013</a></li>
                            <li><a href="#">April 2013</a></li>
                        </ol>
                    </div>
    
                    <div class="p-4">
                        <h4 class="font-italic">Elsewhere</h4>
                        <ol class="list-unstyled">
                            <li><a href="#">GitHub</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Facebook</a></li>
                        </ol>
                    </div>
                </aside>
    
            </div><!-- /.row -->
    
        </main><!-- /.container -->
    
        <footer class="blog-footer">
            <p>Blog template built for <a href="https://getbootstrap.com/">Bootstrap</a> by <a
                    href="https://twitter.com/mdo">@mdo</a>.</p>
            <p>
                <a href="#">Back to top</a>
            </p>
        </footer>
    
    
    
    </body>
    
    </html>)
    axios
      .get("/product/"+this.id)
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
