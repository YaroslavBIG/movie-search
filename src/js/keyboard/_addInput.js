function addInput() {
  const caption = document.createElement('h1');
  caption.classList.add('caption');
  const captionText = 'Virtual Keybord';
  const inputBoard = document.createElement('textarea');
  inputBoard.classList.add('input_board');
  inputBoard.setAttribute('autofocus', 'autofocus');
  document.body.append(caption);
  document.body.querySelector('.caption').append(captionText);
  document.body.append(inputBoard);
}

export default addInput;
