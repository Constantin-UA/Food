window.addEventListener('DOMContentLoaded', () => {
	const calc = require('./modules/calc'),
		cards = require('./modules/cards'),
		forms = require('./modules/forms'),
		modals = require('./modules/modals'),
		slides = require('./modules/slides'),
		tabs = require('./modules/tabs'),
		timer = require('./modules/timer');

	calc();
	cards();
	forms();
	modals();
	slides();
	tabs();
	timer();
});
