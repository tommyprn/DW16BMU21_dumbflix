import {} from "../constants/action-types";

const forbiddenWords = ["your word", "anything"];

const forbiddenWordsMiddleware = ({ dispatch }) => {
  return (next) => {
    return (action) => {
      if (action.type === ADD_ARTICLE) {
        if (foundWord.length) return dispatch({ type: "anything" });
      }
      return next(action);
    };
  };
};
