export default async function getImg(url) {
  const element = document.createElement('img');
  const { default: img } = await import(`../asset/${url}.jpg`);
  element.src = img;
  return element;
}
