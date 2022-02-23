const button = document.querySelector('.btn')
const inputs = document.querySelectorAll('.input')
const box = document.querySelector('.box')
const selector = inputs[0]
const height = inputs[1]
const width = inputs[2]
const bg = inputs[3]
const fontSize = inputs[4]
const text = inputs[5]

const DomElement = function (selector, height, width, bg, fontSize, text) {
   this.selectorClass = selector.slice(1)
   this.selectorId = selector.slice(1)

   this.createEl = function () {
    if (selector.charAt(0) === '.') {
      const elementClass = document.createElement('div')
      elementClass.classList.add(this.selectorClass)
      box.append(elementClass)
      elementClass.innerText = text
      elementClass.style.cssText = `width:${width}px;height:${height}px;background-color:${bg};font-size:${fontSize}px`
    } else if (selector.charAt(0) === '#') {
      const elementId = document.createElement('p')
      elementId.id = this.selectorId
      box.append(elementId)
      elementId.innerText = text
      elementId.style.cssText = `width:${width}px;height:${height}px;background-color:${bg};font-size:${fontSize}px`
    } else if (selector.charAt(0) !== '#' && selector.charAt(0) !== '.') {
      alert('Класс или ID должны начинатся с соотвествующего символа')
    }
  }
}

button.addEventListener('click', () => {
  const newEl = new DomElement(selector.value, height.value, width.value, bg.value, fontSize.value, text.value)
  newEl.createEl()
})








