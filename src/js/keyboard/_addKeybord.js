function addKeybord() {
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  document.body.append(keyboard);
  const keyboardKeys = document.createElement('div');
  keyboardKeys.classList.add('keyboard__keys');
  document.body.querySelector('.keyboard').append(keyboardKeys);
}

export default addKeybord;
