function appendChild(parent, child) {
  child.forEach((child) => {
    parent.appendChild(child)
  })
}

function addTextContent(element, text) {
  element.textContent = text
}

export default function contact() {
  const content = document.querySelector('#content')
  const container = document.createElement('div')

  const header = document.createElement('h2')
  const phone = document.createElement('p')
  const email = document.createElement('p')

  container.classList = 'contact-container'

  addTextContent(header, 'Contact us')
  addTextContent(phone, 'Phone: 0912345678')
  addTextContent(email, 'Email: restaurant@restaurant.com')

  appendChild(content, [container])
  appendChild(container, [header, phone, email])
}