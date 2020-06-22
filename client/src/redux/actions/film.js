import {
  GET_ALL_FILM,
  POST_FILM,
  GET_FILM_DETAIL,
} from "../../constants/action-types";
import { API } from "../../config/api";

export const getAllFilm = () => {
  return {
    type: GET_ALL_FILM,
    payload: async () => {
      try {
        const response = await API.get("/films");

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

export const addFilm = (id) => {
  return {
    type: POST_FILM,
    payload: async () => {
      try {
        const {
          data: { data },
        } = await API.post("/films", id);

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

export const getFilmDetail = (filmId) => {
  return {
    type: GET_FILM_DETAIL,
    payload: async () => {
      try {
        const {
          data: { data },
        } = await API.get("/film/" + filmId + "/episodes");

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
