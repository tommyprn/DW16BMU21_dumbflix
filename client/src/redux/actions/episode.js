import { POST_EPISODE, GET_EPISODE } from "../../constants/action-types";
import { API, setAuthToken } from "../../config/api";

export const postEpisode = (episode, id) => {
  return {
    type: POST_EPISODE,
    payload: async () => {
      try {
        setAuthToken(localStorage.getItem("token"));
        // const formData = new FormData();

        // formData.append("userId", id);
        // formData.append("attachment", transaction);

        // const config = {
        //   headers: {
        //     "content-type": "multipart/form-data",
        //   },
        // };

        const {
          data: { data },
        } = await API.post("/episode", {
          filmId: id,
          ...episode,
        });

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

export const getAllEpisode = (id) => {
  return {
    type: GET_EPISODE,
    payload: async () => {
      try {
        const {
          data: { data },
        } = await API.get("/film/" + id + "/episode");

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
