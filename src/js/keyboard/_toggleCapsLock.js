let capsLockStatus = false;

const toggleCapsLock = () => {
  const keyboard = document.querySelector('.keyboard');
  const keys = keyboard.querySelectorAll('.keyboard__key');
  const specialKeys = ['esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12',
    'backspace', 'tab', 'del', 'caps', 'enter', 'lshift', 'done', 'up', 'rshift', 'ctrl', 'win', 'alt', 'space',
    'altgr', 'left', 'down', 'right'];
  capsLockStatus = !capsLockStatus;
  keys.forEach((key) => {
    if (key.childElementCount === 0 && !specialKeys.includes(key.textContent)) {
      const textC = capsLockStatus ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
      key.textContent = textC;
    }
  });
};

export default toggleCapsLock;
