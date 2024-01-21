import axios from 'axios';

import { baseURL } from 'constants/urls';

export const axiosInstance = axios.create({ baseURL });
