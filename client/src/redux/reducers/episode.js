import { POST_EPISODE } from "../../constants/action-types";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  dataEpisode: {},
  loading: true,
  error: null,
};

const POST_EPISODE_PENDING = `${POST_EPISODE}_${ActionType.Pending}`;
const POST_EPISODE_FULFILLED = `${POST_EPISODE}_${ActionType.Fulfilled}`;
const POST_EPISODE_REJECTED = `${POST_EPISODE}_${ActionType.Rejected}`;

const episodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_EPISODE_PENDING:
      return {
        ...state,
        loading: true,
      };
    case POST_EPISODE_FULFILLED:
      return {
        ...state,
        loading: false,
        dataEpisode: action.payload,
      };
    case POST_EPISODE_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default episodeReducer;
