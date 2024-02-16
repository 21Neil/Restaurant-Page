import getImg from "./component/getImg";

export default function home() {
  const main = document.querySelector('#content');

  const purpose = document.createElement('section');
  const info = document.createElement('div');
  main.appendChild(purpose);
  main.appendChild(info);
  purpose.classList = 'purpose';
  info.classList = 'info';

  const purposeH2 = document.createElement('h2');
  const purposeP = document.createElement('p');

  purpose.appendChild(purposeH2);
  purpose.appendChild(purposeP);
  purposeH2.textContent = 'Restaurant,';
  purposeP.textContent =
    'Our priority is to serve food that is both pure and delicious without being too flashy.';

  const infoAside = document.createElement('aside');
  const infoContainer = document.createElement('div');
  const infoOpen = document.createElement('section');
  const infoLocation = document.createElement('section');
  const openH2 = document.createElement('h2');
  const openP = document.createElement('p');
  const locationH2 = document.createElement('h2');
  const locationP = document.createElement('p');

  info.appendChild(infoAside);
  info.appendChild(infoContainer);
  getImg('aside-img').then(img => infoAside.appendChild(img));
  infoContainer.appendChild(infoOpen);
  infoContainer.appendChild(infoLocation);

  infoOpen.appendChild(openH2);
  infoOpen.appendChild(openP);
  infoLocation.appendChild(locationH2);
  infoLocation.appendChild(locationP);

  openH2.textContent = 'open';
  openP.textContent = 'Thu ~ Sun: 10a.m.~10p.m.';
  locationH2.textContent = 'location';
  locationP.textContent = '111 Eat Street, Food City, Restaurant';
}
