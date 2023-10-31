import axios from 'axios';

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000", // Sử dụng biến môi trường để cấu hình địa chỉ API
  timeout: 50000, // Timeout cho các yêu cầu
});

export default instance;