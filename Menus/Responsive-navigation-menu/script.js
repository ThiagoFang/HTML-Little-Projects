const searchButton = document.querySelector('.search__button');
const closeButton = document.querySelector('.close__button');
const searchBox = document.querySelector('.search__box');

const openSearchMenu = () => {
  searchBox.classList.add('active');
  closeButton.classList.add('active');
  searchButton.classList.add('active');
};

const closeSearchMenu = () => {
  searchBox.classList.remove('active');
  closeButton.classList.remove('active');
  searchButton.classList.remove('active');
};

searchButton.addEventListener('click', openSearchMenu);
closeButton.addEventListener('click', closeSearchMenu);