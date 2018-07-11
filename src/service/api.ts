import axios from 'axios';

const axiosInstance = axios.create({
  timeout: 10000,
  headers: {
    authorization: 'itach'
  }
});

const api = {
  getJson(): Promise<any> {
    return axiosInstance.get('./src/store/index.ts');
  }
};

export default api;