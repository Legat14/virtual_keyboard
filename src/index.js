import { Field } from "./classes/field";
import { keycodes, keyLettersEn, keyLettersRu, currentLanguageEn, Key } from "./classes/key";
import { addKeyboardListener, focusTextArea } from "./functions/globalEvents";
import { changeLanguageByButton } from "./functions/langSwitchButton";
export { buttonsArr };

const field = new Field();

field.create();

const buttonsArr = [];

keycodes.forEach((keycode, number) => {
  if (currentLanguageEn) {
    buttonsArr[number] = new Key(keycode, keyLettersEn[number]);
  } else {
    buttonsArr[number] = new Key(keycode, keyLettersRu[number]);
  }
});

  const textArea = document.querySelector('.text-area');
  textArea.focus();
  addKeyboardListener();
  focusTextArea();
  changeLanguageByButton();