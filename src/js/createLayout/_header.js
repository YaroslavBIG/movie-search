function headerCreate() {
  const fragment = document.createDocumentFragment();

  const header = document.createElement('header');

  const title = document.createElement('div');
  title.classList.add('title');
  title.id = 'title';
  title.innerText = 'Movie Search';
  header.append(title);

  fragment.append(header);

  document.body.append(fragment);
}

export default headerCreate;
