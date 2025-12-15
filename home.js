document.addEventListener('DOMContentLoaded', function () {
	// * TABS
	const containerTabs = document.querySelectorAll('.tab');
	const containerDishes = document.querySelectorAll(
		'.container-dishes'
	);

	containerTabs.forEach(tab => {
		tab.addEventListener('click', e => {
			const tabName = e.target.dataset.name;

			containerTabs.forEach(tab => tab.classList.remove('active'));
			e.target.classList.add('active');

			containerDishes.forEach(dish => {
				const dishName = dish.dataset.name;
				if (tabName === dishName) {
					dish.classList.add('active');
				} else {
					dish.classList.remove('active');
				}
			});
		});
	});
});
