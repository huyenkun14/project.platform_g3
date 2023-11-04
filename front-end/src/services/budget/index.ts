import { BUDGET, CLASSIFY, ICON } from "../../constants/api";
import httpClient from "../../httpClient";

export const updateBudget: (body: {budgetId?: number, categoryId?: number, amount?: number, description?: string, startDate?: string, endDate?: string}) => Promise<any> = async (body) => {
    try {
      const result: any = await httpClient.put(
        BUDGET.UPDATE, body
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const deleteBudget: (id: number) => Promise<any> = async (id) => {
    try {
      const result: any = await httpClient.delete(
        `${BUDGET.DELETE}?budgetId=${id}`
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  };