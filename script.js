function menushow() {
    let ul = document.querySelector('.nav-sections ul')
    let icon = document.querySelector('.menu span')

    if (ul.classList.contains('open')) {
        ul.classList.remove('open')
    } else {
        ul.classList.add('open')
    }

    if (icon.textContent === 'menu') {
        icon.textContent = 'close'
    } else {
        icon.textContent = 'menu'
    }
}