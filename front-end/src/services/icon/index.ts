import { ICON } from "../../constants/api";
import httpClient from "../../httpClient";

export const getAllIcon: () => Promise<any> = async () => {
    try {
      const result: any = await httpClient.get(
        ICON.GET_ALL
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  };
  