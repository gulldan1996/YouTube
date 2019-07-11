import axios from 'axios';
export const LANG_CHANGED = 'lang_changed';
export const SEARCH_STORAGE = 'search_storage';
export const CHANGED_LANG_STATE = 'changed_lang_state';
export const HANDLE_CHANGE = 'handle_change';
export const HANDLE_SUBMIT = 'handle_submit';

export function langChanged(langChanged) {
  let item = { lang: langChanged };
  let state_string = JSON.stringify(item);
  localStorage.setItem("my_saved_state", state_string);
  return {
    type: LANG_CHANGED
  }
}

export function searchStorage() {
  let returned_state_string = localStorage.getItem("my_saved_state");
  let returned_state_object = JSON.parse(returned_state_string);
  let lang;
  if (returned_state_object === null) {
    returned_state_object = true;
  } else {
    lang = returned_state_object.lang
  }
  return {
    type: SEARCH_STORAGE,
    storage: lang
  }
}

export function changedLangState() {
  return {
    type: CHANGED_LANG_STATE
  }
}

export function handleChange(target) {
  return {
    type: HANDLE_CHANGE,
    target
  }
}

const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = "AIzaSyDXQ1H2iW0GC1wlN5X_U55Lhv2VX3QSjc4";
export function handleSubmit() {
  const params = {
    part: 'snippet',
    key: API_KEY,
    q: 'hello',
    type: 'video'
  };

  const request = axios.get(YOUTUBE_URL, { params: params })
    .then(data => {
      console.log(data)
    })
    return {
      type: HANDLE_SUBMIT,
      payload: request
    };
}
