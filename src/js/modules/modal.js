function modal() {
	const modal = document.querySelector('.modal'),
		modalTrigger = document.querySelectorAll('[data-modal]');

	modalTrigger.forEach((btn) => {
		btn.addEventListener('click', () => {
			openCloseModal();
		});
	});

	modal.addEventListener('click', (e) => {
		if (e.target === modal || e.target.getAttribute('data-close') == '') {
			openCloseModal('hide', 'show', '');
		}
	});

	function openCloseModal(add = 'show', remove = 'hide', overflow = 'hidden') {
		modal.classList.add(add);
		modal.classList.remove(remove);
		document.body.style.overflow = overflow;
		clearInterval(modalTimerId);
	}

	document.addEventListener('keydown', (e) => {
		if (e.code === 'Escape' && modal.classList.contains('show')) {
			openCloseModal('hide', 'show', '');
		}
	});
	const modalTimerId = setTimeout(openCloseModal, 50000);

	function showModalByScroll() {
		if (
			window.pageYOffset + document.documentElement.clientHeight >=
			document.documentElement.scrollHeight
		) {
			openCloseModal();
			window.removeEventListener('scroll', showModalByScroll);
		}
	}

	window.addEventListener('scroll', showModalByScroll);
}

module.exports = modal;
