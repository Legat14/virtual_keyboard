export {
  keycodes,
  keyLettersEn,
  Key
};

const keycodes = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0',
  'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP',
  'BracketLeft', 'BracketRight', 'Backslash', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK',
  'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period',
  'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft',
  'ArrowDown', 'ArrowRight', 'Delete'];
const keyLettersEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y',
  'u', 'i', 'o', 'p', '[', ']', '\\', 'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', 'Shift',
  'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', 'ArrowLeft',
  'ArrowLeftDown', 'ArrowRight', 'Del'];

class Key {
  constructor(keycode, keyLetter, number) {
    this.keycode = keycode;
    this.keyLetter = keyLetter;
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
    if (keycode === 'ArrowUp') {
      this.button.innerHTML = '&#129045;';
    } else if (keycode === 'ArrowLeft') {
      this.button.innerHTML = '&#129044;';
    } else if (keycode === 'ArrowDown') {
      this.button.innerHTML = '&#129047;';
    } else if (keycode === 'ArrowRight') {
      this.button.innerHTML = '&#129046;';
    } else if (keycode === 'ShiftLeft' || keycode === 'ShiftRight') {
      this.button.innerHTML = keyLetter + ' &#8682;';
    } else if (keycode === 'Enter') {
      this.button.innerHTML = keycode + ' &#8626;';
    } else if (keycode === 'Backspace') {
      this.button.innerHTML = keycode + ' &#129044;';
    } else {
      this.button.innerHTML = keyLetter;
    }
    const keyboardDiv = document.querySelector('.keyboard-div');
    keyboardDiv.append(this.button);
  }
  addKeyboardListener() {
    this.button.addEventListener('keydown', () => {
      console.log(this.button);
      this.button.classList.add('key_active');
    });
  }
  removeKeyboardListener() {
    this.button.addEventListener('keyup', () => {
      console.log(this.button);
      this.button.classList.remove('key_active');
    });
  }
};