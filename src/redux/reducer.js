import { CHOOSE_EN, CHOOSE_RU, DESELECT } from './action';

const initialState = {
  lang: 'en',
  choose: null,
  en: {
    chooseLang: 'Please choose language',
    button: {
      en: 'English',
      rus: 'Russian'
    },
    search: {
      placeholder: 'Search on YouTube.',
    }
  },
  ru: {
    chooseLang: 'Пожалуйста выбирите язык',
    button: {
      en: 'Английский',
      rus: 'Русский'
    },
    search: {
      placeholder: 'Искать видео на YouTube'
    }
  }
};

export function getNextState(state = initialState, action) {
  switch (action.type) {
    case CHOOSE_EN:
      return {
        ...state,
        choose: false
      };
    case CHOOSE_RU:
      return {
        ...state,
        choose: true
      };
    case DESELECT:
      return {
        ...state,
        choose: null
      }
    default:
      return state;
  }
}
