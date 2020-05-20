import toggleCapsLock from './_toggleCapsLock';
import enableSearch from "../input/enableSearch";
import addKeybord from './_addKeybord';

addKeybord();

let keyLang = localStorage.getItem('lang') || 'en';
let keyLayout;
let capsLockStatus = false;

// Add text on input area
const textArea = document.querySelector('.input_board');

function addText(text) {
  textArea.focus();
  const caretPosition = textArea.selectionEnd;
  const textLength = textArea.value.length;
  if (caretPosition === textLength) {
    textArea.value += capsLockStatus ? `${text.toUpperCase()}` : `${text}`;
  } else {
    const textAfterCaret = textArea.value.slice(caretPosition, textArea.value.length);
    const textBeforeCaret = textArea.value.slice(0, caretPosition);
    textArea.value = capsLockStatus ? `${textBeforeCaret}${text.toUpperCase()}${textAfterCaret.toUpperCase()}` : `${textBeforeCaret}${text}${textAfterCaret}`;
    const carretPositionAfter = caretPosition + text.length;
    textArea.setSelectionRange(carretPositionAfter, carretPositionAfter);
  }
  textArea.focus();
}
// Backspace
const backspace = () => {
  const caretPosition = textArea.selectionEnd;
  const selectStart = textArea.selectionStart;
  const textLength = textArea.value.length;

  if (textArea.value.length !== selectStart && caretPosition === selectStart) {
    const textBeforeCaret = textArea.value.slice(0, selectStart - 1);
    const textAfterCaret = textArea.value.slice(caretPosition, textLength);
    textArea.value = `${textBeforeCaret}${textAfterCaret}`;
    textArea.setSelectionRange(selectStart - 1, selectStart - 1);
  }
  if (caretPosition !== selectStart) {
    const textBeforeCaret = textArea.value.slice(0, selectStart);
    const textAfterCaret = textArea.value.slice(caretPosition, textLength);
    textArea.value = `${textBeforeCaret}${textAfterCaret}`;
    textArea.setSelectionRange(selectStart, selectStart);
  }
  if (caretPosition === textLength) {
    textArea.value = textArea.value.substring(0, textArea.value.length - 1);
    textArea.setSelectionRange(selectStart - 1, selectStart - 1);
  }

  textArea.focus();
};

const del = () => {
  const caretPosition = textArea.selectionEnd;
  const selectStart = textArea.selectionStart;
  const textLength = textArea.value.length;

  if (textArea.value.length !== selectStart && caretPosition === selectStart) {
    const textBeforeCaret = textArea.value.slice(0, selectStart);
    const symbSliceAfter = caretPosition + 1;
    const textAfterCaret = textArea.value.slice(symbSliceAfter, textLength);
    textArea.value = `${textBeforeCaret}${textAfterCaret}`;
  }
  if (caretPosition !== selectStart) {
    const textBeforeCaret = textArea.value.slice(0, selectStart);
    const textAfterCaret = textArea.value.slice(caretPosition, textLength);
    textArea.value = `${textBeforeCaret}${textAfterCaret}`;
    textArea.setSelectionRange(selectStart, selectStart);
  }
  textArea.setSelectionRange(selectStart, selectStart);
  textArea.focus();
};

function createKeyIcons(iconName) {
  return `<i class="material-icons">${iconName}</i>`;
}

function getLang() {
  return `<span>${localStorage.getItem('lang') || 'en'}</span>`;
}

function keyLanguage() {
  keyLang = keyLang === 'en' ? 'ru' : 'en';
  localStorage.setItem('lang', keyLang);
  createKeys();
  capsLockStatus = false;
  textArea.focus();
}

const keyLayoutEn = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
  'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'del',
  'caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'enter',
  'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', 'lang',
  'space', 'left', 'right', 'done',
];

const keyLayoutRu = [
  'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
  'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'del',
  'caps', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter',
  'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', 'lang',
  'space', 'left', 'right', 'done',
];

const keyLayoutSymRu = [
  'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'backspace',
  'tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '|', 'del',
  'caps', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'enter',
  'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', 'lang',
  'space', 'left', 'right', 'done',
];

const keyLayoutSymEn = [
  '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'backspace',
  'tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'del',
  'caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'enter',
  'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', 'lang',
  'space', 'left', 'right', 'done',
];

const specialKeys = [
  'backspace', 'tab', 'del', 'caps', 'enter', 'done', 'lang', 'ctrl', 'lang', 'space',
  'left', 'down', 'right', 'shift',
];

const editCaretPos = (direction) => {
  const currentPosCarret = textArea.selectionEnd;
  const posMinus = () => {
    textArea.focus();
    textArea.setSelectionRange(currentPosCarret - 1, currentPosCarret - 1);
    textArea.focus();
  };
  const posPlus = () => {
    textArea.focus();
    textArea.setSelectionRange(currentPosCarret + 1, currentPosCarret + 1);
    textArea.focus();
  };
  switch (direction) {
    case 'left':
      posMinus();
      break;
    case 'right':
      posPlus();
      break;
    default:
      break;
  }
};

function createKeys() {
  const fragment = document.createDocumentFragment();
  const activeKeyboardKey = document.getElementById('activateKeyboard');

  if (keyLang === 'en' && !capsLockStatus) {
    keyLayout = keyLayoutEn;
  }

  if (keyLang === 'ru' && !capsLockStatus) {
    keyLayout = keyLayoutRu;
  }

  if (keyLang === 'en' && capsLockStatus) {
    keyLayout = keyLayoutSymEn;
  }

  if (keyLang === 'ru' && capsLockStatus) {
    keyLayout = keyLayoutSymRu;
  }
  keyLayout.forEach((key) => {
    const keyEl = document.createElement('button');
    const insertLineBreak = ['backspace', 'del', 'enter', 'lang'].indexOf(key) !== -1;
    const keyboard = document.querySelector('.keyboard');
    keyEl.setAttribute('type', 'button');
    keyEl.classList.add('keyboard__key');

    switch (key) {
      case 'backspace':
        keyEl.classList.add('keyboard__key--wide');
        keyEl.innerHTML = createKeyIcons('backspace');
        keyEl.addEventListener('click', () => {
          backspace();
        });
        break;

      case 'tab':
        keyEl.innerHTML = createKeyIcons('keyboard_tab');
        keyEl.addEventListener('click', () => {
          addText(' ');
        });
        break;

      case 'caps':
        keyEl.classList.add('keyboard__key--wide', 'keyboard__key--inactive');
        keyEl.id = 'caps_lock';
        keyEl.innerHTML = createKeyIcons('keyboard_capslock');
        keyEl.addEventListener('click', () => {
          toggleCapsLock();
        });
        break;

      case 'enter':
        keyEl.classList.add('keyboard__key--wide');
        keyEl.innerHTML = createKeyIcons('keyboard_return');
        keyEl.addEventListener('click', () => {
          enableSearch();
        });
        break;

      case 'space':
        keyEl.classList.add('keyboard__key--extra-wide');
        keyEl.innerHTML = createKeyIcons('space_bar');
        keyEl.addEventListener('click', () => {
          addText(' ');
        });
        break;

      case 'up':
        keyEl.innerHTML = createKeyIcons('keyboard_arrow_up');
        keyEl.addEventListener('click', () => {
          addText('\u2191');
        });
        break;

      case 'down':
        keyEl.innerHTML = createKeyIcons('keyboard_arrow_down');
        keyEl.addEventListener('click', () => {
          addText('\u2193');
        });
        break;

      case 'left':
        keyEl.innerHTML = createKeyIcons('keyboard_arrow_left');
        keyEl.addEventListener('click', () => {
          textArea.focus();
          editCaretPos('left');
        });
        break;

      case 'right':
        keyEl.innerHTML = createKeyIcons('keyboard_arrow_right');
        keyEl.addEventListener('click', () => {
          textArea.focus();
          editCaretPos('right');
        });
        break;

      case 'lang':
        keyEl.innerHTML = getLang();
        keyEl.addEventListener('click', () => {
          keyLanguage();
        });
        break;

      case 'lshift':
        keyEl.classList.add('keyboard__key');
        keyEl.classList.add('keyboard__key--wide');
        keyEl.id = 'lshift';
        keyEl.textContent = 'shift';
        keyEl.addEventListener('click', () => {
          keyLanguage();
        });
        break;

      case 'rshift':
        keyEl.classList.add('keyboard__key');
        keyEl.classList.add('keyboard__key--wide');
        keyEl.id = 'rshift';
        keyEl.textContent = 'shift';
        break;

      case 'del':
        keyEl.classList.add('keyboard__key');
        keyEl.textContent = key.toLowerCase();
        keyEl.addEventListener('click', () => {
          del();
        });
        break;

      case 'lctrl':
        keyEl.classList.add('keyboard__key');
        keyEl.id = 'lctrl';
        keyEl.textContent = 'ctrl';
        break;

      case 'done':
        keyEl.innerHTML = createKeyIcons('check_circle');
        keyEl.addEventListener('click', () => {
          keyboard.classList.add('keyboard--hidden');
          activeKeyboardKey.classList.add('keyboard_icon--inactive');
        });
        break;

      default:
        keyEl.classList.add('keyboard__key');
        keyEl.textContent = key;
        if (!specialKeys.includes(key)) {
          keyEl.addEventListener('click', () => {
            addText(key);
          });
        }

        break;
    }


    fragment.appendChild(keyEl);
    if (insertLineBreak) {
      fragment.appendChild(document.createElement('br'));
    }
  });

  const keyboard = document.querySelector('.keyboard__keys');
  keyboard.innerHTML = '';
  keyboard.appendChild(fragment);
}
createKeys();

export default createKeys;
