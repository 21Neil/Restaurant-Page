export default function menu() {
  const content = document.querySelector('#content');

  const menuH2 = document.createElement('h2');

  const createSection = (header) => {
    const section = document.createElement('section')
    const headerElement = document.createElement('h2')
    section.appendChild(headerElement)
    headerElement.textContent = header
    return section
  };
  const appetizerSection = createSection('Appetizer');
  const mainDishSection = createSection('Main Dish');
  const drinkSection = createSection('Drink');

  content.appendChild(appetizerSection);
  content.appendChild(mainDishSection);
  content.appendChild(drinkSection);

  const createArticle = (header, parent, img) => {
    const article = document.createElement('article');
    const headerElement = document.createElement('h3');

    article.appendChild(headerElement);

    if (img) {
      const imgElement = document.createElement('img');
      article.appendChild(imgElement);
    }

    headerElement.textContent = header;
    parent.appendChild(article);
  };

  createArticle('Caesar Salad', appetizerSection);
  createArticle('Borscht', appetizerSection);
  createArticle('New Yorker Steak', mainDishSection);
  createArticle('Roast Pork Neck', mainDishSection);
  createArticle('Red Wine', drinkSection);
  createArticle('Margaret', drinkSection);
}
