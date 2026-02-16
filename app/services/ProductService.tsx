import axios from "axios";
import type { Product } from "~/types/product";

const api = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1',
})

interface GetAllParams {
  page?: number;
  limit?: number;
}

async function getAll(params: GetAllParams = { page: 0, limit: 20 }) {
  try {
    const { data } = await api.get(`/products?offset=${params.page}&limit=${params.limit}`)
    return data as Product[];

  } catch (error) {
    return [];
  }
}


export const productsService = {
  getAll
}