function addKeybord() {
  const circle = document.querySelector('.circle');
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard', 'keyboard--hidden');
  circle.append(keyboard);
  const keyboardKeys = document.createElement('div');
  keyboardKeys.classList.add('keyboard__keys');
  document.querySelector('.keyboard').append(keyboardKeys);
}

export default addKeybord;
