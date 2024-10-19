import {
  GET_ALL_FILM,
  POST_FILM,
  GET_FILM_DETAIL,
} from "../../constants/action-types";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  data: {},
  loading: true,
  error: null,
};

const GET_FILM_DETAIL_PENDING = `${GET_FILM_DETAIL}_${ActionType.Pending}`;
const GET_FILM_DETAIL_FULFILLED = `${GET_FILM_DETAIL}_${ActionType.Fulfilled}`;
const GET_FILM_DETAIL_REJECTED = `${GET_FILM_DETAIL}_${ActionType.Rejected}`;

const GET_ALL_FILM_PENDING = `${GET_ALL_FILM}_${ActionType.Pending}`;
const GET_ALL_FILM_FULFILLED = `${GET_ALL_FILM}_${ActionType.Fulfilled}`;
const GET_ALL_FILM_REJECTED = `${GET_ALL_FILM}_${ActionType.Rejected}`;

const POST_FILM_PENDING = `${POST_FILM}_${ActionType.Pending}`;
const POST_FILM_FULFILLED = `${POST_FILM}_${ActionType.Fulfilled}`;
const POST_FILM_REJECTED = `${POST_FILM}_${ActionType.Rejected}`;

const filmReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILM_DETAIL_PENDING:
    case POST_FILM_PENDING:
    case GET_ALL_FILM_PENDING:
      return {
        ...state,
        loading: true,
      };
    case POST_FILM_FULFILLED:
    case GET_ALL_FILM_FULFILLED:
    case GET_FILM_DETAIL_FULFILLED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case POST_FILM_REJECTED:
    case GET_ALL_FILM_REJECTED:
    case GET_FILM_DETAIL_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default filmReducer;
