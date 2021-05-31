import calc from './modules/calc';
import cards from './modules/cards';
import forms from './modules/forms';
import modals from './modules/modals';
import slides from './modules/slides';
import tabs from './modules/tabs';
import timer from './modules/timer';
import { openModal } from './modules/modals';
window.addEventListener('DOMContentLoaded', () => {
	const modalTimerId = setTimeout(
		() => openModal('.modal', modalTimerId),
		50000
	);

	calc();
	cards();
	forms('form', modalTimerId);
	modals('[data-modal]', '.modal', modalTimerId);
	slides({
		container: '.offer__slider',
		slide: '.offer__slide',
		nextArrow: '.offer__slider-next',
		prevArrow: '.offer__slider-prev',
		totacCaunter: '#total',
		currentCounter: '#current',
		wrapper: '.offer__slider-wrapper',
		field: '.offer__slider-inner',
	});
	tabs(
		'.tabheader__item',
		'.tabcontent',
		'.tabheader__items',
		'tabheader__item_active'
	);
	timer('.timer', '2021-06-30');
});
