const backdrop = document.querySelector('.backdrop')
const modal = document.querySelector('.modal')
const modalNoButton = document.querySelector('.modal__action--negative')
const selectPlanButtons = document.querySelectorAll('.plan button')
const toggleButton = document.querySelector('.toggle-button')
const mobileNav = document.querySelector('.mobile-nav')

for (const i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function () {
        backdrop.classList.add('open')
        modal.classList.add('open')
    })
}

backdrop.addEventListener('click', function () {
    mobileNav.classList.remove('open')
    closeModal()
})

modalNoButton.addEventListener('click', closeModal)

function closeModal() {
    backdrop.classList.remove('open')
    modal.classList.remove('open')
}

toggleButton.addEventListener('click', function () {
    backdrop.classList.add('open')
    mobileNav.classList.add('open')
})
