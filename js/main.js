
const headerInputContainer = document.querySelector('.header__input')
const headerInput = headerInputContainer.querySelector('input')


headerInput.addEventListener('focus', function() {
	headerInputContainer.classList.add('is-focused')
})

headerInput.addEventListener('blur', function() {

	// console.log(headerInput.value.match(/^[\w]+@[\w]+\.[\w]+/))

	if (headerInput.value === '') {
		headerInputContainer.classList.remove('is-focused')
	}
})

new Swiper('.offer__slider',{
    loop:true,
    slidesPerView:1.2,
    spaceBetween:12,
    freeMode:true,   
})

