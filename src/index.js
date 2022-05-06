import { Field } from "./classes/field";
import { keycodes, keyLettersEn, Key } from "./classes/key";
import { addKeyboardListener, focusTextArea } from "./functions/globalEvents";
export { buttonsArr };

const field = new Field();

field.create();

const buttonsArr = [];

keycodes.forEach((keycode, number) => {
  buttonsArr[number] = new Key(keycode, keyLettersEn[number], number);
  buttonsArr[number].addKeyboardActive(); 
  buttonsArr[number].removeKeyboardActive(); 
});

  const textArea = document.querySelector('.text-area');
  textArea.focus();
  addKeyboardListener();
  focusTextArea();