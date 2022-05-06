export { addKeyboardListener, focusTextArea };
import { buttonsArr } from '../index';

function addKeyboardListener() {
  document.addEventListener('keydown', () => {
    if (event.isTrusted) {
      let thisButton = '';
      buttonsArr.forEach(buttonObj => {
        event.preventDefault();
        if (buttonObj.keycode === event.code) {
          thisButton = buttonObj;
        }
      });
      if (thisButton) {
        thisButton.button.classList.add('key_active');
        thisButton.pressKey();
      }
    }
  });

  document.addEventListener('keyup', () => {
    if (event.isTrusted) {
      let thisButton = '';
      buttonsArr.forEach(buttonObj => {
        if (buttonObj.keycode === event.code) {
          thisButton = buttonObj;
        }
      });
      if (thisButton) {
        thisButton.button.classList.remove('key_active');
      }
    }
  });
}

function focusTextArea() {
  document.addEventListener('click', () => {
    const textArea = document.querySelector('.text-area');
    textArea.focus();
  });
}