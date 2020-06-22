import {
  GET_TRANSACTION,
  POST_TRANSACTION,
} from "../../constants/action-types";
import { API } from "../../config/api";

export const getTransaction = () => {
  return {
    type: GET_TRANSACTION,
    payload: async () => {
      try {
        const response = await API.get("/transaction");

        return response.data.data;
      } catch (error) {
        if (error.response) {
          const { data, status } = error.response;

          if (status > 399) throw data.error;
        }
      }
    },
  };
};

export const addTransaction = () => {
  return {
    type: POST_TRANSACTION,
    payload: async () => {
      try {
        const {
          data: { data },
        } = await API.post("/films");

        return data;
      } catch (error) {
        if (error.response) {
          const { data, status } = error.response;

          if (status > 399) throw data.error;
        }
      }
    },
  };
};
