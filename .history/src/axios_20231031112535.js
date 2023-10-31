import axios from 'axios';

const Axios = axios.create({
  baseURL: process.env.VUE_APP_API_URL, // Sử dụng biến môi trường để cấu hình địa chỉ API
  timeout: 50000, // Timeout cho các yêu cầu
});

export default Axios;