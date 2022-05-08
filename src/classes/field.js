export { Field };

class Field {
  constructor() {
  }
  create() {
    const headerDiv = document.createElement('header');
    const headerTitle = document.createElement('h1');
    const headerDivDescription = document.createElement('div');
    const headerDescription = document.createElement('p');
    const headerLangCangeInstruction = document.createElement('p');
    const textAreaDiv = document.createElement('div');
    const textArea = document.createElement('textarea');
    const keyboardDiv = document.createElement('div');
    const footerDiv = document.createElement('footer');
    const footerDevelopment = document.createElement('div');
    const footerDevelopmentPDeveloper = document.createElement('p');
    const footerDevelopmentPYear = document.createElement('p');
    const footerCourseLink = document.createElement('a');

    headerDiv.classList.add('header-div');
    headerDescription.classList.add('header__p');
    headerLangCangeInstruction.classList.add('header__p');
    textAreaDiv.classList.add('text-area-div');
    textArea.classList.add('text-area');
    keyboardDiv.classList.add('keyboard-div');
    footerDiv.classList.add('footer-div');

    footerCourseLink.setAttribute('href', 'https://rs.school/');
    footerCourseLink.setAttribute('target', '_blank');

    headerTitle.innerText = 'Virtual Keyboard (VK)'
    headerDescription.innerText = 'This virtual keyboard is designed for windows'
    headerLangCangeInstruction.innerText = 'To switch language press Left Alt + Left Ctrl'
    footerDevelopmentPDeveloper.innerHTML = '<span>Developer: </span><a class="footer__a" href="https://github.com/Legat14" target="_blank">Ivan Zotov</a>'
    footerDevelopmentPYear.innerText = 'May of 2022'
    footerCourseLink.innerHTML = '<img src="./assets/img/rs_school_js_w.svg" alt="RS School" width="180" height="67">'

    document.body.append(headerDiv);
    headerDiv.append(headerTitle);
    headerDiv.append(headerDivDescription);
    headerDivDescription.append(headerDescription);
    headerDivDescription.append(headerLangCangeInstruction);
    document.body.append(textAreaDiv);
    textAreaDiv.append(textArea);
    document.body.append(keyboardDiv);
    document.body.append(footerDiv);
    footerDiv.append(footerDevelopment);
    footerDevelopment.append(footerDevelopmentPDeveloper);
    footerDevelopment.append(footerDevelopmentPYear);
    footerDiv.append(footerCourseLink);
  };
};