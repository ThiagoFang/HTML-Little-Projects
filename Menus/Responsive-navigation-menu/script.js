const searchButton = document.querySelector('.search__button');
const closeButton = document.querySelector('.close__button');
const searchBox = document.querySelector('.search__box');
const navigation = document.querySelector('.navigation');
const menuToggle = document.querySelector('.menu__toggle');
const header = document.querySelector('header');

const openSearchMenu = () => {
  searchBox.classList.add('active');
  closeButton.classList.add('active');
  searchButton.classList.add('active');
  menuToggle.classList.add('hide');
  header.classList.remove('open');
};

const closeSearchMenu = () => {
  searchBox.classList.remove('active');
  closeButton.classList.remove('active');
  searchButton.classList.remove('active');
  menuToggle.classList.remove('hide');
};

const toggleMobileMenu = () => {
  searchBox.classList.remove('active');
  closeButton.classList.remove('active');
  searchButton.classList.remove('active');
  header.classList.toggle('open');
}

searchButton.addEventListener('click', openSearchMenu);
closeButton.addEventListener('click', closeSearchMenu);
menuToggle.addEventListener('click', toggleMobileMenu);