export { keysEn, Key };

const keysEn = ['q', 'w', 'e', 'r', 't', 'y'];

class Key {
  constructor(key, number, size = 1) {
    this.key = key;
    this.number = number;
    this.size = size;
    this.button = document.createElement('button');
    this.button.classList.add('key');
    if (size === 1) {
      this.button.classList.add('key-size-1');
    } else if (size === 2) {
      this.button.classList.add('key-size-2');
    } else {
      this.button.classList.add('key-size-3');
    }
    this.button.innerHTML = key;
    const keyboardDiv = document.querySelector('.keyboard-div');
    keyboardDiv.append(this.button);
    console.log(this);
  }
};