const backdrop = document.querySelector('.backdrop')
const modal = document.querySelector('.modal')
const modalNoButton = document.querySelector('.modal__action--negative')
const selectPlanButtons = document.querySelectorAll('.plan button')
const toggleButton = document.querySelector('.toggle-button')
const mobileNav = document.querySelector('.mobile-nav')

// console.dir(backdrop.style['background-image'])
// console.dir(backdrop.style.backgroungImage)

for (let i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function () {
        if (modal) {
            backdrop.classList.add('open')
        }
        modal.classList.add('open')
    })
}

backdrop.addEventListener('click', function () {
    mobileNav.classList.remove('open')
    closeModal()
})

if (modalNoButton) {
    modalNoButton.addEventListener('click', closeModal)
}

function closeModal() {
    if (modal) {
        modal.classList.remove('open')
    }
    backdrop.classList.remove('open')
}

toggleButton.addEventListener('click', function () {
    backdrop.classList.add('open')
    mobileNav.classList.add('open')
})
