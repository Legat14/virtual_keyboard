import { Field } from "./classes/field";
import { keycodes, keyLettersEn, Key } from "./classes/key";
import { addKeyboardListener } from "./classes/globalEvents";

const field = new Field();

field.create();

const buttonsArr = [];

keycodes.forEach((keycode, number) => {
  buttonsArr[number] = new Key(keycode, keyLettersEn[number], number);
  buttonsArr[number].addKeyboardListener(); 
  buttonsArr[number].removeKeyboardListener(); 
});

export { buttonsArr };

  addKeyboardListener();