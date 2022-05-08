export { changeLanguageByButton }
import { buttonsArr } from '../index'
import { currentLanguageEn } from '../classes/key'

function changeLanguageByButton() {
  const changeLangButton = document.querySelector('.header__lang-change-button');
  if (currentLanguageEn) {
    changeLangButton.innerText = 'En';
  } else {
    changeLangButton.innerText = 'Ru';
  }
  changeLangButton.addEventListener('click', () => {
    currentLanguageEn = !currentLanguageEn;
    if (currentLanguageEn) {
      changeLangButton.innerText = 'En';
    } else {
      changeLangButton.innerText = 'Ru';
    }
    buttonsArr[0].changeLanguage();
  });
}