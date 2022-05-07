export { addKeyboardListener, focusTextArea };
import { buttonsArr } from '../index';
import { capsLockOn, currentLanguageEn, altLeftPressed, ctrlLeftPressed, } from '../classes/key'

function addKeyboardListener() {
  document.addEventListener('keydown', () => {
    if (event.isTrusted) {
      let thisButton = '';
      buttonsArr.forEach(buttonObj => {
        if (buttonObj.keycode === event.code) {
          event.preventDefault();
          thisButton = buttonObj;
        }
        return;
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
          if (thisButton.keycode === 'AltLeft') {
            altLeftPressed = true;
          }
          if (thisButton.keycode === 'ControlLeft') {
            ctrlLeftPressed = true;
          }
          if (altLeftPressed && ctrlLeftPressed) {
            if (currentLanguageEn) {
              currentLanguageEn = false;
            } else {
              currentLanguageEn = true;
            }
            thisButton.changeLanguage();
            console.log (currentLanguageEn);
          }
        }
        thisButton.pressKey();
      }
    }
  });
  
  document.addEventListener('keyup', () => {
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
      if (thisButton.keycode === 'AltLeft') {
        altLeftPressed = false;
      }
      if (thisButton.keycode === 'ControlLeft') {
        ctrlLeftPressed = false;
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