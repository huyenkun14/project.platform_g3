import { CLASSIFY, ICON } from "../../constants/api";
import httpClient from "../../httpClient";

export const updateCategory: (body: {categoryId?: number, iconId?: number, title?: string, value?: boolean}) => Promise<any> = async (body) => {
    try {
      const result: any = await httpClient.put(
        CLASSIFY.UPDATE, body
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const deleteCategory: (id: number) => Promise<any> = async (id) => {
    try {
      const result: any = await httpClient.delete(
        `${CLASSIFY.DELETE}?categoryId=${id}`
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  };
  export const createCategory: (body: {iconId?: number, title?: string, value: boolean}) => Promise<any> = async (body) => {
    try {
      const result: any = await httpClient.post(
        CLASSIFY.CREATE, body
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  };