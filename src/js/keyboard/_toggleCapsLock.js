let capsLockStatus = false;

const toggleCapsLock = () => {
  capsLockStatus = !capsLockStatus;
  const caps = document.querySelector('#caps_lock');
  caps.classList.toggle('keyboard__key--inactive');
  caps.classList.toggle('keyboard__key--active');
  const keyboard = document.querySelector('.keyboard');
  const keys = keyboard.querySelectorAll('.keyboard__key');
  const specialKeys = [
    'backspace', 'tab', 'del', 'caps', 'enter', 'lshift', 'done', 'up', 'rshift', 'ctrl', 'rctrl', 'lctrl', 'win', 'alt', 'space',
    'altgr', 'left', 'down', 'right', 'shift',
  ];
  keys.forEach((key) => {
    if (key.childElementCount === 0 && !specialKeys.includes(key.textContent)) {
      const keyTxt = capsLockStatus ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
      // eslint-disable-next-line no-param-reassign
      key.textContent = keyTxt;
    }
  });
};

export default toggleCapsLock;
