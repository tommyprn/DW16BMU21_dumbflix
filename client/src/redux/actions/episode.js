import { POST_EPISODE } from "../../constants/action-types";
import { API } from "../../config/api";

export const postEpisode = (id) => {
  return {
    type: POST_EPISODE,
    payload: async () => {
      try {
        const {
          data: { dataEpisode },
        } = await API.post("/episodes", id);

        return dataEpisode;
      } catch (error) {
        if (error.response) {
          const { dataEpisode, status } = error.response;

          if (status > 399) throw dataEpisode.error;
        }
      }
    },
  };
};
