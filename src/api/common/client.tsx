import { Env } from '@env';
import axios from 'axios';
export const client = axios.create({
  baseURL: Env.API_URL,
});

const token = '';

const api_key = '';

export const authClient = axios.create({
  baseURL: 'https://authn.aws.us.pangea.cloud/v2',
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
});

export const psClient = axios.create({
  baseURL: 'https://api.paystack.co',
  headers: {
    Authorization: `Bearer ${api_key}`,
    'Content-Type': 'application/json',
  },
});
