export { addKeyboardListener, focusTextArea };
import { buttonsArr } from '../index';
import { capsLockOn } from '../classes/key'

function addKeyboardListener() {
  document.addEventListener('keydown', () => {
    console.log(event);
    if (event.isTrusted) {
      let thisButton = '';
      buttonsArr.forEach(buttonObj => {
        if (buttonObj.keycode === event.code) {
          event.preventDefault();
          thisButton = buttonObj;
        }
      });
      if (thisButton) {
        if (thisButton.keycode === 'CapsLock') {
          if (capsLockOn) {
            thisButton.button.classList.remove('caps_active');
          } else {
            thisButton.button.classList.add('caps_active');
          }
        } else {
          thisButton.button.classList.add('key_active');
        }
        thisButton.pressKey();
      }
    }
  });
  
  document.addEventListener('keyup', () => {
    console.log(event);
    if (event.isTrusted && event.code !== 'CapsLock') {
      let thisButton = '';
      buttonsArr.forEach(buttonObj => {
        if (buttonObj.keycode === event.code) {
          thisButton = buttonObj;
        }
      });
      if (thisButton) {
        thisButton.button.classList.remove('key_active');
      }
      if (thisButton.keycode === 'ShiftLeft' || thisButton.keycode === 'ShiftRight') {
        thisButton.unpressKey();
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