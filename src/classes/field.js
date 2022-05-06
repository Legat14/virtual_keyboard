export { Field };

class Field {
  constructor() {
  }
  create() {
    const headerDiv = document.createElement('div');
    const textAreaDiv = document.createElement('div');
    const textArea = document.createElement('textarea');
    const keyboardDiv = document.createElement('div');
    const footerDiv = document.createElement('div');

    headerDiv.classList.add('header-div');
    textAreaDiv.classList.add('text-area-div');
    textArea.classList.add('text-area');
    keyboardDiv.classList.add('keyboard-div');
    footerDiv.classList.add('footer-div');

    //textArea.setAttribute('maxlength', '10');
    //textArea.setAttribute('autofocus', '');

    document.body.append(headerDiv);
    document.body.append(textAreaDiv);
    textAreaDiv.append(textArea);
    document.body.append(keyboardDiv);
    document.body.append(footerDiv);
  };
};