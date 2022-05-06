export { addKeyboardListener };
import { buttonsArr } from '../index';

function addKeyboardListener() {
  document.addEventListener('keydown', () => {
    if (event.isTrusted) {
      let thisButton;
      buttonsArr.forEach(buttonObj => {
        event.preventDefault();
        if (buttonObj.keycode === event.code) {
          thisButton = buttonObj;
        }
      });
      thisButton.button.classList.add('key_active');
    }
  });

  document.addEventListener('keyup', () => {
    if (event.isTrusted) {
      let thisButton;
      buttonsArr.forEach(buttonObj => {
        if (buttonObj.keycode === event.code) {
          thisButton = buttonObj;
        }
      });
      thisButton.button.classList.remove('key_active');
    }
  });
}