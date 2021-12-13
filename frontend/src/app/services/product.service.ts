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

  const update = async (product: Product): Promise<void> => {
    const url: string = `${URL}/${product.id}`;
    await httpClient.put<Product>(url, product);
  };

  return {
    create,
    update,
  };
};

export { useProductService };
