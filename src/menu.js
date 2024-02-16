import getImg from './component/getImg';

export default function menu() {
  const content = document.querySelector('#content');
  const menuContainer = document.createElement('div')
  menuContainer.classList = 'menu-container'
  content.appendChild(menuContainer)

  const menuH2 = document.createElement('h2');
  menuH2.textContent = 'Menu';
  menuH2.classList = 'menu-h2'

  const createSection = header => {
    const section = document.createElement('section');
    const headerElement = document.createElement('h2');
    section.appendChild(headerElement);
    section.classList = 'menu-section'
    headerElement.textContent = header;
    return section;
  };
  const appetizerSection = createSection('Appetizer');
  const mainDishSection = createSection('Main Dish');
  const drinkSection = createSection('Drink');

  menuContainer.appendChild(menuH2);
  menuContainer.appendChild(appetizerSection);
  menuContainer.appendChild(mainDishSection);
  menuContainer.appendChild(drinkSection);

  const createArticle = (header, price, parent, img) => {
    const article = document.createElement('article');
    const headerElement = document.createElement('h3');
    const priceElement = document.createElement('p');
    const container = document.createElement('div')

    article.appendChild(headerElement)
    article.appendChild(priceElement)
    
    if (img) {
      getImg(img).then(img => {article.appendChild(img)});
      container.appendChild(headerElement)
      container.appendChild(priceElement)
      article.appendChild(container);
    }

    headerElement.textContent = header;
    priceElement.textContent = '$' + price
    parent.appendChild(article);
  };

  createArticle('Caesar Salad', 5, appetizerSection, 'caesar-salad');
  createArticle('Borscht', 5, appetizerSection, 'borscht');
  createArticle('New Yorker Steak', 26, mainDishSection, 'steak');
  createArticle('Roast Pork Neck', 13, mainDishSection, 'pork');
  createArticle('Red Wine', 6, drinkSection);
  createArticle('Margaret', 6, drinkSection);
}
