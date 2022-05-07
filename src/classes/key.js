import {
  enterLetter,
  deletePreviousLetter,
  deleteNextLetter,
  nextString,
  moveCursor,
  insertTab,
  insertSpace,
  toggleCapsLock
} from '../functions/textArea';
import {
  buttonsArr
} from '../index';

export {
  keycodes,
  keyLettersEn,
  capsLockOn,
  Key
};

const keycodes = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0',
  'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP',
  'BracketLeft', 'BracketRight', 'Backslash', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK',
  'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period',
  'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft',
  'ArrowDown', 'ArrowRight', 'Delete'
];
const keyLettersEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y',
  'u', 'i', 'o', 'p', '[', ']', '\\', 'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', 'Shift',
  'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', 'ArrowLeft',
  'ArrowLeftDown', 'ArrowRight', 'Del'
];
const keyLettersEnCapsLock = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y',
  'U', 'I', 'O', 'P', '[', ']', '\\', 'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter', 'Shift',
  'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'ArrowUp', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', 'ArrowLeft',
  'ArrowLeftDown', 'ArrowRight', 'Del'
];
const keyLettersEnShift = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y',
  'U', 'I', 'O', 'P', '{', '}', '|', 'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift',
  'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'ArrowUp', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', 'ArrowLeft',
  'ArrowLeftDown', 'ArrowRight', 'Del'
];

let capsLockOn = false;
let currentLanguageEn = true;

class Key {
  constructor(keycode, keyLetter, number) {
    this.keycode = keycode;
    this.number = number;
    this.button = document.createElement('button');
    this.button.classList.add('key');
    if (keycode === 'ControlLeft' || keycode === 'ControlRight' || keycode === 'AltLeft' || keycode === 'AltRight' || keycode === 'MetaLeft') {
      this.button.classList.add('key-size-2');
    } else if (keycode === 'Tab' || keycode === 'Backslash') {
      this.button.classList.add('key-size-3');
    } else if (keycode === 'Backspace' || keycode === 'CapsLock' || keycode === 'Enter') {
      this.button.classList.add('key-size-4');
    } else if (keycode === 'ShiftLeft' || keycode === 'ShiftRight') {
      this.button.classList.add('key-size-5');
    } else if (keycode === 'Space') {
      this.button.classList.add('key-size-6');
    } else {
      this.button.classList.add('key-size-1');
    }

    this.renameKey(keyLetter);

    this.button.addEventListener('click', () => {
      this.pressKey();
    });

    const keyboardDiv = document.querySelector('.keyboard-div');
    keyboardDiv.append(this.button);
  }
  // addKeyboardActive() {
  //   this.button.addEventListener('keydown', () => {
  //     this.button.classList.add('key_active');
  //   });
  // }
  // removeKeyboardActive() {
  //   this.button.addEventListener('keyup', () => {
  //     this.button.classList.remove('key_active');
  //   });
  // }
  pressKey() {
    console.log(event);
    if (this.keycode !== 'MetaLeft' && this.keycode !== 'AltLeft' && this.keycode !== 'AltRight' && this.keycode !== 'ControlLeft' && this.keycode !== 'ControlRight') {
      if (this.keycode === 'Backspace') {
        deletePreviousLetter();
      } else if (this.keycode === 'Delete') {
        deleteNextLetter();
      } else if (this.keycode === 'Enter') {
        nextString();
      } else if (this.keycode === 'ArrowUp' || this.keycode === 'ArrowDown' || this.keycode === 'ArrowLeft' || this.keycode === 'ArrowRight') {
        moveCursor(this.keycode);
      } else if (this.keycode === 'Tab') {
        insertTab();
      } else if (this.keycode === 'Space') {
        insertSpace();
      } else if (this.keycode === 'ShiftLeft' || this.keycode === 'ShiftRight') {
        nameAllKeys(buttonsArr, keyLettersEnShift);
      } else if (this.keycode === 'CapsLock') {
        toggleCapsLock();
        if (currentLanguageEn) {
          if (capsLockOn) {
            nameAllKeys(buttonsArr, keyLettersEnCapsLock);
            this.button.classList.add('caps_active');
          } else {
            nameAllKeys(buttonsArr, keyLettersEn);
            this.button.classList.remove('caps_active');
          }
        }
      } else {
        enterLetter(this);
      }
    }
  }
  unpressKey() {
    console.log(event);
    if (this.keycode === 'ShiftLeft' || this.keycode === 'ShiftRight') {
      if (capsLockOn) {
        nameAllKeys(buttonsArr, keyLettersEnCapsLock);
      } else {
        nameAllKeys(buttonsArr, keyLettersEn);
      }
    }
  }
  renameKey(newKey) {
    this.keyLetter = newKey;
    if (this.keycode === 'ArrowUp') {
      this.button.innerHTML = '&#129045;';
    } else if (this.keycode === 'ArrowLeft') {
      this.button.innerHTML = '&#129044;';
    } else if (this.keycode === 'ArrowDown') {
      this.button.innerHTML = '&#129047;';
    } else if (this.keycode === 'ArrowRight') {
      this.button.innerHTML = '&#129046;';
    } else if (this.keycode === 'ShiftLeft' || this.keycode === 'ShiftRight') {
      this.button.innerHTML = newKey + ' &#8682;';
    } else if (this.keycode === 'Enter') {
      this.button.innerHTML = this.keycode + ' &#8626;';
    } else if (this.keycode === 'Backspace') {
      this.button.innerHTML = this.keycode + ' &#129044;';
    } else {
      this.button.innerHTML = newKey;
    }
  }
};

function nameAllKeys(buttonsArr, newKeysArr) {
  buttonsArr.forEach((button, number) => {
    button.renameKey(newKeysArr[number]);
  });
}

//TODO: Клавиша Win не открывает пуск, если нажать ее мышкой