export { Field };

class Field {
  constructor() {
  }
  create() {
    const headerDiv = document.createElement('div');
    const headerDescription = document.createElement('p');
    const textAreaDiv = document.createElement('div');
    const textArea = document.createElement('textarea');
    const keyboardDiv = document.createElement('div');
    const footerDiv = document.createElement('div');

    headerDiv.classList.add('header-div');
    headerDescription.classList.add('header__description');
    textAreaDiv.classList.add('text-area-div');
    textArea.classList.add('text-area');
    keyboardDiv.classList.add('keyboard-div');
    footerDiv.classList.add('footer-div');

    headerDescription.innerText = 'This virtual keyboard is designed for windows'

    document.body.append(headerDiv);
    headerDiv.append(headerDescription);
    document.body.append(textAreaDiv);
    textAreaDiv.append(textArea);
    document.body.append(keyboardDiv);
    document.body.append(footerDiv);
  };
};