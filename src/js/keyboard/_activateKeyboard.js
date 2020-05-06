function activateKeyboard() {
  const keyboard = document.querySelector('.keyboard');
  const activeKeyboardKey = document.getElementById('activateKeyboard');

  keyboard.classList.toggle('keyboard--hidden');
  activeKeyboardKey.classList.toggle('keyboard_icon--inactive');
}

export default activateKeyboard;
