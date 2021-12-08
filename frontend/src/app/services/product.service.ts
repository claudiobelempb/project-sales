import { httpClient } from "../http";
import { Product } from "../models/product";
import { AxiosResponse } from "axios";

const URL: string = "/api/products";

const useProductService = () => {
  const create = async (product: Product): Promise<Product> => {
    const response: AxiosResponse<Product> = await httpClient.post<Product>(
      URL,
      product
    );
    return response.data;
  };

  return {
    create,
  };
};

export { useProductService };
