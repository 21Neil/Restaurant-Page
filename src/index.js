import './css/normalize.css';
import './css/style.css';
import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';

const homeBtn = document.querySelector('#homeBtn');
const menuBtn = document.querySelector('#menuBtn');
const contactBtn = document.querySelector('#contactBtn');
const homeLi = document.querySelector('li:has(#homeBtn)');
const menuLi = document.querySelector('li:has(#menuBtn)');
const contactLi = document.querySelector('li:has(#contactBtn)');
const content = document.querySelector('#content');

const handleNavBtnOnClick = e => {
  switch (e.target.textContent) {
    case 'Home':
      homeLi.classList = 'active';
      menuLi.classList = '';
      contactLi.classList = '';
      content.replaceChildren();
      home();
      break;
    case 'Menu':
      homeLi.classList = '';
      menuLi.classList = 'active';
      contactLi.classList = '';
      content.replaceChildren();
      menu();
      break;
    case 'Contact':
      homeLi.classList = '';
      menuLi.classList = '';
      contactLi.classList = 'active';
      content.replaceChildren();
      contact();
      break;
  }
};

home();
homeLi.classList = 'active';

homeBtn.addEventListener('click', handleNavBtnOnClick);
menuBtn.addEventListener('click', handleNavBtnOnClick);
contactBtn.addEventListener('click', handleNavBtnOnClick);
