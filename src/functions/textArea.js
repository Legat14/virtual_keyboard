export { enterLetter, deletePrevousLetter, nextString };

function getCursorPositions() {
  const textArea = document.querySelector('.text-area');
  const start = textArea.selectionStart;
  const end = textArea.selectionEnd;
  console.log(start, end);
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

function deletePrevousLetter() {
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

function nextString() {
  const textArea = document.querySelector('.text-area');
  const cursorPositions = getCursorPositions();
  textArea.value = textArea.value.substring(0, cursorPositions.start) + '\n' + textArea.value.substring(cursorPositions.end);
  cursorPositions.start++;
  textArea.focus();
  placeCursor(cursorPositions);
}