export { Field };

class Field {
  constructor() {
  }
  create() {
    const headerDiv = document.createElement('div');
    const textAreaDiv = document.createElement('div');
    const keyboardDiv = document.createElement('div');
    const footerDiv = document.createElement('div');

    headerDiv.classList.add('header-div');
    textAreaDiv.classList.add('text-area-div');
    keyboardDiv.classList.add('keyboard-div');
    footerDiv.classList.add('footer-div');

    document.body.append(headerDiv);
    document.body.append(textAreaDiv);
    document.body.append(keyboardDiv);
    document.body.append(footerDiv);
  };
};