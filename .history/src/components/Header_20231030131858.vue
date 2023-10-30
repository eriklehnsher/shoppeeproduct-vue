<template>
  <div class="header">
    <div class="header__container container d-flex align-items-center justify-content-between">
      <router-link to="/">
        <img src="../assets/images/LOGO.png" alt="" class="logo"
      /></router-link>

      <div class="p-2">
        <div class="search-container">
          <input
            type="text"
            class="search-input"
            placeholder="Dán link hoặc tìm sản phẩm"
            v-model="searchText"
          />
          <button class="search-button">
            <font-awesome-icon class="search-icon" :icon="['fas', 'search']" />
          </button>
        </div>
      </div>

      <div class="header__containerLink d-flex gap-2">
        <div>
          <font-awesome-icon
            style="margin-right: 5px"
            icon="fa-solid fa-bars"
          />
          <span>DANH MỤC</span>
        </div>
        <a href="">BLOG</a>
      </div>
    </div>
  </div>
</template>

<script>
import { AUTH_LOGOUT } from "../stores/auth";
export default {
  data() {
    return {
      isLogin: false,
      user: {},
    };
  },
  methods: {
    loggedIn() {
      this.isLogin = true;
    },
    logout() {
      this.isLogin = false;
      this.$store
        .dispatch(AUTH_LOGOUT)
        .then(() => {
          this.$router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    let token = localStorage.getItem("token");
    if (token != null) {
      this.isLogin = true;
    }
  },
  mounted() {
    let token = localStorage.getItem("token");
    if (token != null) {
      this.isLogin = true;
    }
  },
  watch: {
    isLogin() {
      let token = localStorage.getItem("token");
      if (token != null) {
        this.isLogin = true;
      }
    },
  },
  computed: {
    userName() {
      return localStorage.getItem("username");
    },
    role() {
      return localStorage.getItem("role");
    },
  },
};
</script>

<style scoped></style>
