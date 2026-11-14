// PART 1
const mainTitleEl = document.querySelector('#main-title')
mainTitleEl.textContent = 'Welcome to the Cozy Cafe'


// PART 2
const highlightTitleEls = document.querySelectorAll('.highlight-title')

highlightTitleEls.forEach((highlightEl) => {
  console.log(highlightEl.textContent)
  highlightEl.style.fontStyle = 'italic'
})

const quoteEl = document.querySelector('#quote-of-the-day')
quoteEl.textContent = 'The best conversations begins with Coffee'
quoteEl.classList.add('featured')


// PART 3
const mainPhotoEl = document.querySelector('#mainPhotoEl')
mainPhotoEl.setAttribute('src', './assets/berry-cake.jpg')
mainPhotoEl.setAttribute('src', 'A berry cake served at the cafe')


//PART 4
const bgColorBtnEl = querySelector('#bg')
const bodyEL = document.querySelector('body')

const handleBackgroundChange = () => {
    bodyEL.style.backgroundColor = 'lightsteelblue'
}
let count = Math.floor(Math.random(nnnn))
bgColorBtnEl.addEventListener('click', handleBackgroundChange)
bgColorBtnEl.addEventListener('click', () => {
    console.log('stuff')
})

//PART 5
//  const roselatteEl = document.querySelector('#rose-latte')
//  const croissantEl = document.querySelector('#croissant')
//  const cheesecakeEl = document.querySelector('#cheesecake')

// const roselatteEl = document.getElementById('0')
// const croissantEl = document.getElementById('1')
// const cheesecakeEl = document.getElementById('2')

// roselatteEl.textContent = 'Available'
// croissantEl.textContent = 'Sold Out'
// cheesecakeEl.textContent = 'Availabe'

// roseBtnEl.addEventListener('click', () => {
//     console.log('clicked')
// })
// croissantBtnEl.addEventListener('click', () => {
//     console.log('clicked')
// })
// cheesecakeBtnEl.addEventListener('click', () => {
//     console.log('clicked')
// })

const specialtyElement = document.querySelector(.specialtyElement)
const statuses = ['Available', 'Sold Out', 'Available']

statuses.forEach((status, index) => {
    console.log(status.index)
    console.log(specialtyElement[index])
    specialtyElement[index].textContent = status
})
