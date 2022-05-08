export { enterLetter, deletePreviousLetter, deleteNextLetter, nextString, moveCursor, insertTab, insertSpace, toggleCapsLock };
import { capsLockOn } from '../classes/key'

function getCursorPositions() {
  const textArea = document.querySelector('.text-area');
  const start = textArea.selectionStart;
  const end = textArea.selectionEnd;
  return {
    start: start,
    end: end
  }
}

function placeCursor(cursorPositions) {
  const textArea = document.querySelector('.text-area');
  textArea.selectionStart = cursorPositions.start;
  textArea.selectionEnd = cursorPositions.start;
}

function enterLetter(buttonObj) {
  const textArea = document.querySelector('.text-area');
  const cursorPositions = getCursorPositions();
  textArea.value = textArea.value.substring(0, cursorPositions.start) + buttonObj.keyLetter + textArea.value.substring(cursorPositions.end);
  cursorPositions.start++;
  textArea.focus();
  placeCursor(cursorPositions);
}

function deletePreviousLetter() {
  const textArea = document.querySelector('.text-area');
  const cursorPositions = getCursorPositions();
  if (cursorPositions.start === cursorPositions.end) {
    textArea.value = textArea.value.substring(0, cursorPositions.start - 1) + textArea.value.substring(cursorPositions.end);
    if (cursorPositions.start !== 0) {
      cursorPositions.start--;
    }
  } else {
    textArea.value = textArea.value.substring(0, cursorPositions.start) + textArea.value.substring(cursorPositions.end);
  }
  textArea.focus();
  placeCursor(cursorPositions);
}

function deleteNextLetter() {
  const textArea = document.querySelector('.text-area');
  const cursorPositions = getCursorPositions();
  if (cursorPositions.start === cursorPositions.end) {
    textArea.value = textArea.value.substring(0, cursorPositions.start) + textArea.value.substring(cursorPositions.end + 1);
  } else {
    textArea.value = textArea.value.substring(0, cursorPositions.start) + textArea.value.substring(cursorPositions.end);
  }
  textArea.focus();
  placeCursor(cursorPositions);
}

function nextString() {
  const textArea = document.querySelector('.text-area');
  const cursorPositions = getCursorPositions();
  textArea.value = textArea.value.substring(0, cursorPositions.start) + '\n' + textArea.value.substring(cursorPositions.end);
  cursorPositions.start++;
  textArea.focus();
  placeCursor(cursorPositions);
}

function moveCursor(arrow) {
  const textArea = document.querySelector('.text-area');
  const cursorPositions = getCursorPositions();
  if (arrow === 'ArrowLeft') {
    if (cursorPositions.end !== 0) {
      cursorPositions.end--;
    }
    cursorPositions.start = cursorPositions.end;
  } else if (arrow === 'ArrowRight') {
    cursorPositions.end++;
    cursorPositions.start = cursorPositions.end;
  } else if (arrow === 'ArrowUp') {
    const text = textArea.value;
    let currentStringPosition;
    let currentStringStartPosition = 0;
    let previousStringStartPosition = 0;
    for (let i = cursorPositions.end - 1; i >= 0; i--) {
      if (text[i] === '\n') {
        currentStringStartPosition = i + 1;
        break;
      }
    }
    currentStringPosition = cursorPositions.end - currentStringStartPosition;
    for (let i = currentStringStartPosition - 2; i >= 0; i--) {
      if (text[i] === '\n') {
        previousStringStartPosition = i + 1;
        break;
      }
    }
    if (previousStringStartPosition + currentStringPosition >= currentStringStartPosition) {
      if (previousStringStartPosition === 0 && currentStringStartPosition === 0) {
        cursorPositions.end = 0;
      } else {
        cursorPositions.end = currentStringStartPosition - 1;
      }
    } else {
      cursorPositions.end = previousStringStartPosition + currentStringPosition;
    }
    cursorPositions.start = cursorPositions.end;
  } else if (arrow === 'ArrowDown') {
    const text = textArea.value;
    let currentStringPosition;
    let currentStringStartPosition = 0;
    let currentStringEndPosition = text.length;
    let nextStringEndPosition = text.length;
    for (let i = cursorPositions.end - 1; i >= 0; i--) {
      if (text[i] === '\n') {
        currentStringStartPosition = i + 1;
        break;
      }
    }
    currentStringPosition = cursorPositions.end - currentStringStartPosition;
    for (let i = cursorPositions.end; i < text.length; i++) {
      if (text[i] === '\n') {
        currentStringEndPosition = i;
        break;
      }
    }
    for (let i = currentStringEndPosition + 2; i < text.length; i++) {
      if (text[i] === '\n') {
        nextStringEndPosition = i;
        break;
      }
    }
    if (currentStringEndPosition + 1 + currentStringPosition > nextStringEndPosition) {
      cursorPositions.end = nextStringEndPosition;
    } else {
      cursorPositions.end = currentStringEndPosition + 1 + currentStringPosition;
    }
    cursorPositions.start = cursorPositions.end;
  }
  textArea.focus();
  placeCursor(cursorPositions);
}

function insertTab() {
  const textArea = document.querySelector('.text-area');
  const cursorPositions = getCursorPositions();
  textArea.value = textArea.value.substring(0, cursorPositions.start) + '    ' + textArea.value.substring(cursorPositions.end);
  cursorPositions.start += 4;
  textArea.focus();
  placeCursor(cursorPositions);
}

function insertSpace() {
  const textArea = document.querySelector('.text-area');
  const cursorPositions = getCursorPositions();
  textArea.value = textArea.value.substring(0, cursorPositions.start) + ' ' + textArea.value.substring(cursorPositions.end);
  cursorPositions.start += 1;
  textArea.focus();
  placeCursor(cursorPositions);
}

function toggleCapsLock() {
  if (capsLockOn) {
    capsLockOn = false;
  } else {
    capsLockOn = true;
  }
}