window.addEventListener('DOMContentLoaded', () => {
	//Tabs
	const tabs = document.querySelectorAll('.tabheader__item'),
		tabsContent = document.querySelectorAll('.tabcontent'),
		tabsParent = document.querySelector('.tabheader__items');

	function hideTabContent() {
		tabsContent.forEach((element) => {
			element.classList.add('hide');
			element.classList.remove('show', 'fade');
		});
		tabs.forEach((tab) => {
			tab.classList.remove('tabheader__item_active');
		});
	}

	function showTabContent(i = 0) {
		tabsContent[i].classList.add('show', 'fade');
		tabsContent[i].classList.remove('hide');
		tabs[i].classList.add('tabheader__item_active');
	}
	hideTabContent();
	showTabContent();

	tabsParent.addEventListener('click', (event) => {
		const target = event.target;

		if (target && target.classList.contains('tabheader__item')) {
			tabs.forEach((element, idx) => {
				if (target == element) {
					hideTabContent();
					showTabContent(idx);
				}
			});
		}
	});

	//	Timer

	const deadline = '2021-05-31';

	function getTimeRemaining(endtime) {
		const t = Date.parse(endtime) - Date.parse(new Date()),
			days = Math.floor(t / (1000 * 60 * 60 * 24)),
			hours = Math.floor((t / (1000 * 60 * 60)) % 24),
			minutes = Math.floor((t / 1000 / 60) % 60),
			seconds = Math.floor((t / 1000) % 60);

		return {
			total: t,
			days: days,
			hours: hours,
			minutes: minutes,
			seconds: seconds,
		};
	}

	function getZero(num) {
		if (num >= 0 && num < 10) {
			return `0${num}`;
		} else {
			return num;
		}
	}

	function setClock(selector, endtime) {
		const timer = document.querySelector(selector),
			days = timer.querySelector('#days'),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds'),
			timeInterval = setInterval(updateClock, 1000);

		updateClock();

		function updateClock() {
			const t = getTimeRemaining(endtime);

			days.innerHTML = getZero(t.days);
			hours.innerHTML = getZero(t.hours);
			minutes.innerHTML = getZero(t.minutes);
			seconds.innerHTML = getZero(t.seconds);

			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		}
	}

	setClock('.timer', deadline);

	// Modal

	const modal = document.querySelector('.modal'),
		modalTrigger = document.querySelectorAll('[data-modal]'),
		modalCloseBtn = document.querySelector('[data-close]');

	modalTrigger.forEach((btn) => {
		btn.addEventListener('click', () => {
			openCloseModal();
		});
	});

	modalCloseBtn.addEventListener('click', () => {
		openCloseModal('hide', 'show', '');
	});
	modal.addEventListener('click', (e) => {
		if (e.target === modal) {
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
	//const modalTimerId = setTimeout(openCloseModal, 10000);

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

	// Class
	/* 	const menu = document.querySelector('.menu');
	const containerMenu = menu.querySelector('.container');
	containerMenu.style = 'flex-wrap: wrap';

	class FoodMenuElement {
		constructor(img = '', name = '', descr = '', total = '') {
			this.item = document.createElement('div');
			this.item.classList.add('menu__item');

			this.img = document.createElement('img');
			this.img.src = img;

			this.name = document.createElement('h3');
			this.name.classList.add('menu__item-subtitle');
			this.name.innerHTML = name;

			this.descr = document.createElement('div');
			this.descr.classList.add('menu__item-descr');
			this.descr.innerHTML = descr;

			this.divider = document.createElement('div');
			this.divider.classList.add('menu__item-divider');

			this.price = document.createElement('div');
			this.price.classList.add('menu__item-price');

			this.cost = document.createElement('div');
			this.cost.classList.add('menu__item-cost');
			this.cost.innerHTML = 'Цена:';

			this.total = document.createElement('div');
			this.total.classList.add('menu__item-total');
			this.total.innerHTML = total;
		}

		addElemenToHtml() {
			this.price.append(this.cost, this.total);
			this.item.append(
				this.img,
				this.name,
				this.descr,
				this.divider,
				this.price
			);
			containerMenu.append(this.item);
		}
	}
	function createElem(img, sub, descr, price) {
		const item = new FoodMenuElement(img, sub, descr, price);
		item.addElemenToHtml();
	}
	createElem(
		'img/tabs/vegy.jpg',
		'Меню "Фитнес"',
		'Меню "Фитнес" - это новый подход к приготовлению блюд: больше	свежих овощей и фруктов. Продукт активных и здоровых людей. Это	абсолютно новый продукт с оптимальной ценой и высоким качеством!',
		'<span>229</span> грн/день'
	);
	createElem(
		'img/tabs/elite.jpg',
		'Меню “Премиум”',
		'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
		'<span>550</span> грн/день'
	);
	createElem(
		'img/tabs/post.jpg',
		'Меню "Постное"',
		'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
		'<span>430</span> грн/день'
	); */

	//Class second

	class MenuCard {
		constructor(src, alt, title, descr, price, parentSelector) {
			this.src = src;
			this.alt = alt;
			this.title = title;
			this.descr = descr;
			this.price = +price;
			this.parent = document.querySelector(parentSelector);
			this.transfer = 27;
			this.changeToUAH();
		}

		changeToUAH() {
			this.price *= this.transfer;
		}

		render() {
			const element = document.createElement('div');
			element.innerHTML = `
			<div class="menu__item">
				<img src="${this.src}" alt="${this.alt}" />
				<h3 class="menu__item-subtitle">${this.title}</h3>
				<div class="menu__item-descr">${this.descr}</div>
				<div class="menu__item-divider"></div>
				<div class="menu__item-price">
					<div class="menu__item-cost">Цена:</div>
					<div class="menu__item-total"><span>${this.price}</span> грн/день</div>
				</div>
			</div>
			`;
			this.parent.append(element);
		}
	}

	new MenuCard(
		'img/tabs/vegy.jpg',
		'vegy',
		'Меню "Фитнес"',
		'Меню "Фитнес" - это новый подход к приготовлению блюд: больше	свежих овощей и фруктов. Продукт активных и здоровых людей. Это	абсолютно новый продукт с оптимальной ценой и высоким качеством!',
		9,
		'.menu .container'
	).render();

	new MenuCard(
		'img/tabs/elite.jpg',
		'elite',
		'Меню “Премиум”',
		'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
		'15',
		'.menu .container'
	).render();

	new MenuCard(
		'img/tabs/post.jpg',
		'post',
		'Меню "Постное"',
		'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
		'11',
		'.menu .container'
	).render();
});
