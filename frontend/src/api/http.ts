import axios from 'axios';
import { API_BASE_URL, API_MS_TIMEOUT } from '@env';

const http = axios.create({
  baseURL: API_BASE_URL,
  timeout: Number(API_MS_TIMEOUT)
});

export default http