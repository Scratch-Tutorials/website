const $ = document.body
const h1 = document.querySelectorAll('h1')
const h2 = document.querySelectorAll('h2')
const h3 = document.querySelectorAll('h3')
const h4 = document.querySelectorAll('h4')
const h5 = document.querySelectorAll('h5')
const h6 = document.querySelectorAll('h6')

$.classList.add('bg-slate-50', 'text-blue-900', 'text-base', 'font-sans', 'md:text-center')
h1.forEach(elem => {
	elem.classList.add('text-5xl', 'text-center', 'font-bold')
})
h2.forEach(elem => {
	elem.classList.add('text-blue-700', 'text-2xl', 'font-semibold')
})
h3.forEach(elem => {
	elem.classList.add('text-blue-700', 'text-xl', 'font-semibold')
})
h4.forEach(elem => {
	elem.classList.add('text-blue-700', 'text-lg', 'font-semibold')
})
h5.forEach(elem => {
	elem.classList.add('text-blue-700', 'font-semibold')
})
h6.forEach(elem => {
	elem.classList.add('text-blue-700', 'text-sm', 'font-semibold', 'capitalize')
})
