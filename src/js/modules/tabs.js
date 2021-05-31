function tabs(
	tabsSelector,
	tabsContentSelector,
	tabsParentSelector,
	activeClass
) {
	const tabs = document.querySelectorAll(tabsSelector),
		tabsContent = document.querySelectorAll(tabsContentSelector),
		tabsParent = document.querySelector(tabsParentSelector);

	function hideTabContent() {
		tabsContent.forEach((element) => {
			element.classList.add('hide');
			element.classList.remove('show', 'fade');
		});
		tabs.forEach((tab) => {
			tab.classList.remove(activeClass);
		});
	}

	function showTabContent(i = 0) {
		tabsContent[i].classList.add('show', 'fade');
		tabsContent[i].classList.remove('hide');
		tabs[i].classList.add(activeClass);
	}
	hideTabContent();
	showTabContent();

	tabsParent.addEventListener('click', (event) => {
		const target = event.target;

		if (target && target.classList.contains(tabsSelector.slice(1))) {
			tabs.forEach((element, idx) => {
				if (target == element) {
					hideTabContent();
					showTabContent(idx);
				}
			});
		}
	});
}

export default tabs;
