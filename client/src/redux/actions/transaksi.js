import {
  GET_TRANSACTION,
  POST_TRANSACTION,
  PATCH_TRANSACTION,
} from "../../constants/action-types";
import { API, setAuthToken } from "../../config/api";
import moment from "moment";

export const getTransaction = () => {
  return {
    type: GET_TRANSACTION,
    payload: async () => {
      try {
        setAuthToken(localStorage.getItem("token"));

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

export const addTransaction = (transaction, id) => {
  return {
    type: POST_TRANSACTION,
    payload: async () => {
      try {
        setAuthToken(localStorage.getItem("token"));

        const formData = new FormData();

        formData.append("userId", id);
        formData.append("attachment", transaction);

        const config = {
          headers: {
            "content-type": "multipart/form-data",
          },
        };

        const {
          data: { data },
        } = await API.post("/transaction", formData, config);

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

export const patchTransaction = (status, id) => {
  return {
    type: PATCH_TRANSACTION,
    payload: async () => {
      try {
        setAuthToken(localStorage.getItem("token"));

        await API.patch(`/transaction/${id}`, {
          status: status,
          dueDate: moment().add(31, "days"),
        });

        const {
          data: { data: dataNew },
        } = await API.get("/transaction");

        console.log(dataNew);
        return dataNew;
      } catch (error) {
        if (error.response) {
          const { data, status } = error.response;
          console.log(error.response);
          if (status > 399) throw data.error;
        }
      }
    },
  };
};
