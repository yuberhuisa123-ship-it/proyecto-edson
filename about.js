// * TABS
const containerTabs = document.querySelectorAll('.tab');
const containerInfo = document.querySelectorAll('.content-info');

containerTabs.forEach(tab => {
	tab.addEventListener('click', e => {
		const tabName = e.target.dataset.name;

		containerTabs.forEach(tab => tab.classList.remove('active'));
		e.target.classList.add('active');

		containerInfo.forEach(info => {
			const contentInfo = info.dataset.name;
			if (tabName === contentInfo) {
				info.classList.add('active');
			} else {
				info.classList.remove('active');
			}
		});
	});
});
