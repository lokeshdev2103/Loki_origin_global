(function(){
	const menuWrapper = document.querySelector('.menu-wrapper');
	const menuToggle = document.querySelector('.menu-toggle');
	const menuDropdown = document.querySelector('.menu-dropdown');

	if (!menuWrapper || !menuToggle || !menuDropdown) return;

	const closeMenu = () => {
		menuWrapper.classList.remove('open');
		menuToggle.setAttribute('aria-expanded', 'false');
	};

	menuToggle.addEventListener('click', (event) => {
		event.stopPropagation();
		const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
		menuWrapper.classList.toggle('open', !expanded);
		menuToggle.setAttribute('aria-expanded', String(!expanded));
	});

	document.addEventListener('click', (event) => {
		if (!menuWrapper.contains(event.target)) {
			closeMenu();
		}
	});

	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') {
			closeMenu();
			menuToggle.focus();
		}
	});

	menuToggle.addEventListener('keydown', (event) => {
		if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			menuWrapper.classList.add('open');
			menuToggle.setAttribute('aria-expanded', 'true');
			const firstItem = menuDropdown.querySelector('.menu-link');
			if (firstItem) firstItem.focus();
		}
	});
})();