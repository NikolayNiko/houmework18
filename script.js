let menuBtn = document.querySelector('.header-menu-btn');
let menu = document.querySelector('.header-menu-right-list');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
})