import {
  GET_ALL_FILM,
  POST_FILM,
  GET_FILM_DETAIL,
} from "../../constants/action-types";
import { API, setAuthToken } from "../../config/api";

export const getAllFilm = () => {
  return {
    type: GET_ALL_FILM,
    payload: async () => {
      try {
        const response = await API.get("/film");

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
        setAuthToken(localStorage.getItem("token"));
        const {
          data: { data },
        } = await API.post("/film", id);

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
        setAuthToken(localStorage.getItem("token"));
        const {
          data: { data },
        } = await API.get(`/film/${filmId}/episode`);

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
