import {
  LANG_CHANGED,
  SEARCH_STORAGE,
  CHANGED_LANG_STATE,
  HANDLE_CHANGE,
  HANDLE_SUBMIT
} from "./action";

const initialState = {
  lang: null,
  videos: null,
  term: "Default text",
  selectVideo: null,
  en: {
    chooseLang: "Change language",
    button: {
      en: "English",
      ru: "Russian"
    },
    placeholderSearch: "Search video"
  },
  ru: {
    chooseLang: "Изменить язык",
    button: {
      en: "Английский",
      ru: "Русский"
    },
    placeholderSearch: "Искать видео"
  }
};

export function getNextState(state = initialState, action) {
  switch (action.type) {
    case LANG_CHANGED:
      let returned_state_string = localStorage.getItem("my_saved_state");
      let returned_state_object = JSON.parse(returned_state_string);
      return {
        ...state,
        lang: returned_state_object.lang
      };
    case SEARCH_STORAGE:
      return {
        ...state,
        lang: action.storage
      };
    case CHANGED_LANG_STATE:
      return {
        ...state,
        lang: null
      };
    case HANDLE_SUBMIT:
      return {
        ...state,
        videos: action.payload.data.items
      };
    case HANDLE_CHANGE:
      return {
        ...state,
        term: action.target
      };
    default:
      return state;
  }
}
