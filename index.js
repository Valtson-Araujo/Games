const btnMenu = document.querySelector('#btn-menu')

btnMenu.addEventListener('click', () => {
    document.querySelector('.nav-class').classList.toggle('show-base-menu')
})

document.querySelector('#btn-close').addEventListener('click', () => {
    document.querySelector('.show-base-menu').classList.remove('show-base-menu')
})