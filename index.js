const btn = document.querySelector('.btnClick')
const nav = document.querySelector('nav')

btn.addEventListener('click', e => {
    nav.classList.toggle('disabled')
    btn.classList.add('color')
})