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
   this.selectorClass = selector.value.slice(1)
   this.selectorId = selector.value.slice(1)
  }

  DomElement.prototype.createEl = function () {
    console.log(selector.value)
   if (selector.value.charAt(0) === '.') {
     const elementClass = document.createElement('div')
     elementClass.classList.add(this.selectorClass)
     box.append(elementClass)
     elementClass.innerText = text.value
     elementClass.style.cssText = `width:${width.value}px;height:${height.value}px;background-color:${bg.value};font-size:${fontSize.value}px`
   } else if (selector.value.charAt(0) === '#') {
     const elementId = document.createElement('p')
     elementId.id = this.selectorId
     box.append(elementId)
     elementId.innerText = text.value
     elementId.style.cssText = `width:${width.value}px;height:${height.value}px;background-color:${bg.value};font-size:${fontSize.value}px`
   } else if (selector.value.charAt(0) !== '#' && selector.value.charAt(0) !== '.') {
     alert('Класс или ID должны начинатся с соотвествующего символа')
   }
 }


button.addEventListener('click', () => {
  const newEl = new DomElement(selector, height, width, bg, fontSize, text)
  newEl.createEl()
})








