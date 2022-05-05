export {
  keysEn,
  Key
};

const keysEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspase', 'Tab', 'q', 'w', 'e', 'r', 't', 'y',
  'u', 'i', 'o', 'p', '[', ']', '\\', 'Caps-lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', 'Shift',
  'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'up-arrow', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', 'left-arrow',
  'down-arrow', 'right-arrow', 'del'];

class Key {
  constructor(key, number) {
    this.key = key;
    this.number = number;
    this.button = document.createElement('button');
    this.button.classList.add('key');
    if (key === 'Ctrl' || key === 'Alt' || key === 'Win') {
      this.button.classList.add('key-size-2');
    } else if (key === 'Tab' || key === '\\') {
      this.button.classList.add('key-size-3');
    } else if (key === 'Backspase' || key === 'Caps-lock' || key === 'Enter') {
      this.button.classList.add('key-size-4');
    } else if (key === 'Shift') {
      this.button.classList.add('key-size-5');
    } else if (key === 'Space') {
      this.button.classList.add('key-size-6');
    } else {
      this.button.classList.add('key-size-1');
    }
    if (key === 'up-arrow') {
      this.button.innerHTML = '&#129045;';
    } else if (key === 'left-arrow') {
      this.button.innerHTML = '&#129044;';
    } else if (key === 'down-arrow') {
      this.button.innerHTML = '&#129047;';
    } else if (key === 'right-arrow') {
      this.button.innerHTML = '&#129046;';
    } else if (key === 'Shift') {
      this.button.innerHTML = key + ' &#8682;';
    } else if (key === 'Enter') {
      this.button.innerHTML = key + ' &#8626;';
    } else {
      this.button.innerHTML = key;
    }
    const keyboardDiv = document.querySelector('.keyboard-div');
    keyboardDiv.append(this.button);
    console.log(this);
  }
};