const body = document.querySelector('body'),
	navbar = document.querySelector('nav');

// SEARCHBAR
let searchBtn = document.querySelector('.search-btn');
searchBtn.addEventListener('click', () => {
	navbar.classList.toggle('show-search');
	if (navbar.classList.contains('show-search')) {
		searchBtn.classList.replace('fa-search', 'fa-times')
	} else {
		searchBtn.classList.replace('fa-times', 'fa-search')
	}
});

// AUTO CLOSE SEARCHBAR
window.addEventListener('click', (e) => {
	const clicked = searchBtn.contains(e.target) || navbar.contains(e.target);
	if (!clicked) {
		navbar.classList.remove('show-search');
		searchBtn.classList.replace('fa-times', 'fa-search');
	}
});



