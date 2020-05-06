import toggleCapsLock from './_toggleCapsLock';
import addKeybord from './_addKeybord';


addKeybord();
let capsLock;

// Key is active?
const isActive = (el) => Boolean(el.classList.contains('keyboard__key--active'));

// Add text on input area
const textArea = document.querySelector('.input_board');

function addText(text) {
  textArea.value += isActive(capsLock) ? `${text.toUpperCase()}` : `${text}`;
}
// Backspace
const backspace = () => textArea.value = textArea.value.substring(0, textArea.value.length - 1);

// Clear text Area
// const clearTextArea = () => textArea.value = '';


function createKeyIcons(iconName) {
  return `<i class="material-icons">${iconName}</i>`;
}

function createKeys() { // ---------------------- ADD CAPS STATUS????
  const fragment = document.createDocumentFragment();
  const keyLayout = [
    'esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12',
    '~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+', 'backspace',
    'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '\\', 'del',
    'caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'enter',
    'lshift', 'done', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', 'up', 'rshift',
    'ctrl', 'win', 'alt', 'space', 'altgr', 'left', 'down', 'right', 'ctrl',
  ];

  const editCarretPos = (direction) => {
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

  keyLayout.forEach((key) => {
    const keyEl = document.createElement('button');
    const insertLineBreak = ['F12', 'backspace', 'del', 'enter', 'rshift'].indexOf(key) !== -1;
    const addSlimClass = ['esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'];
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
          addText('    ');
        });
        break;

      case 'caps':
        keyEl.classList.add('keyboard__key--wide', 'keyboard__key--inactive');
        keyEl.id = 'caps_lock';
        keyEl.innerHTML = createKeyIcons('keyboard_capslock');
        keyEl.addEventListener('click', () => {
          keyEl.classList.toggle('keyboard__key--inactive');
          keyEl.classList.toggle('keyboard__key--active');
          toggleCapsLock();
        });
        break;

      case 'enter':
        keyEl.classList.add('keyboard__key--wide');
        keyEl.innerHTML = createKeyIcons('keyboard_return');
        keyEl.addEventListener('click', () => {
          addText('\n');
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
        // keyEl.addEventListener("click", () => {
        //     addText(" ")
        // });
        break;

      case 'down':
        keyEl.innerHTML = createKeyIcons('keyboard_arrow_down');
        // keyEl.addEventListener("click", () => {
        //     addText(" ")
        // });
        break;

      case 'left':
        keyEl.innerHTML = createKeyIcons('keyboard_arrow_left');
        keyEl.addEventListener('click', () => {
          textArea.focus();
          editCarretPos('left');
        });
        break;

      case 'right':
        keyEl.innerHTML = createKeyIcons('keyboard_arrow_right');
        keyEl.addEventListener('click', () => {
          textArea.focus();
          editCarretPos('right');
        });
        break;


      case 'done':
        // keyEl.classList.add("keyboard__key--wide");
        keyEl.innerHTML = createKeyIcons('check_circle');
        keyEl.addEventListener('click', () => {
          // ----------NEED TO ADD FOO!!!!
        });
        break;

      default:
        keyEl.classList.add('keyboard__key');
        keyEl.textContent = key.toLowerCase();
        keyEl.addEventListener('click', () => {
          addText(key);
        });

        if (addSlimClass.includes(key)) {
          keyEl.classList.add('keyboard__key--slim');
        }
        break;
    }


    fragment.appendChild(keyEl);
    if (insertLineBreak) {
      fragment.appendChild(document.createElement('br'));
    }
  });
  document.querySelector('.keyboard__keys').appendChild(fragment); // add object

  return capsLock = document.querySelector('#caps_lock'); // -------------------- Fix IT!
}
createKeys();

const keyboard = document.querySelector('.keyboard');
const keys = keyboard.querySelectorAll('.keyboard__key');

window.addEventListener('keydown', (event) => {
  const currentKeyDown = event.key.toLocaleLowerCase();
  const currentKeyDownCode = event.code.toLocaleLowerCase();
  // console.log(currentKeyDownCode)
  keys.forEach((el) => {
    const key = el.innerText;
    if (key === 'esc' && currentKeyDown === 'escape') {
      el.classList.add('keyboard__key--pressed');
    }
    if (key === 'lshift' && currentKeyDownCode === 'shiftleft') {
      el.classList.add('keyboard__key--pressed');
    }
    if (key === 'rshift' && currentKeyDownCode === 'shiftright') {
      el.classList.add('keyboard__key--pressed');
    }
    if (key === currentKeyDown) {
      el.classList.add('keyboard__key--pressed');
    }
  });
});

document.addEventListener('keyup', (event) => {
  const currentKeyUp = event.key.toLocaleLowerCase();
  const currentKeyUpCode = event.code.toLocaleLowerCase();
  keys.forEach((el) => {
    const key = el.innerText;
    if (key === 'esc' && currentKeyUp === 'escape') {
      el.classList.remove('keyboard__key--pressed');
    }
    if (key === 'lshift' && currentKeyUpCode === 'shiftleft') {
      el.classList.remove('keyboard__key--pressed');
    }
    if (key === 'rshift' && currentKeyUpCode === 'shiftright') {
      el.classList.remove('keyboard__key--pressed');
    }
    if (el.innerText === currentKeyUp) {
      el.classList.remove('keyboard__key--pressed');
    }
  });
});
