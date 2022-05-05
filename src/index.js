import { Field } from "./classes/field";
import { keysEn, Key } from "./classes/key";

const field = new Field();

field.create();

const buttonsArr = [];

keysEn.forEach((key, number) => {
  buttonsArr[number] = new Key(key, number);
});