export const CHOOSE_EN = 'choose_en';
export const CHOOSE_RU = 'choose_ru';
export const DESELECT = 'deselect';

export function chooseEn() {
  return {
    type: CHOOSE_EN
  }
}

export function chooseRu() {
  return {
    type: CHOOSE_RU
  }
}

export function deselect() {
  return {
    type: DESELECT
  }
}

