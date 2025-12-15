const sections = document.querySelectorAll(
	'.section-frequently-questions'
);

sections.forEach(section => {
	const faqItems = section.querySelectorAll('.faq-item');

	faqItems.forEach((item, index) => {
		const question = item.querySelector('.faq-question');
		const answer = item.querySelector('.faq-answer');

		// ✅ Expande el primer elemento al cargar la página
		if (index === 0 && item.classList.contains('active')) {
			answer.style.maxHeight = answer.scrollHeight + 'px';
			answer.style.opacity = '1';
		}

		question.addEventListener('click', () => {
			// Si ya está abierto, lo cierra suavemente
			if (item.classList.contains('active')) {
				answer.style.maxHeight = '0px';
				answer.style.opacity = '0';
				item.classList.remove('active');
			} else {
				// Cierra cualquier otro acordeón abierto
				faqItems.forEach(otherItem => {
					if (otherItem !== item) {
						const otherAnswer =
							otherItem.querySelector('.faq-answer');
						otherAnswer.style.maxHeight = '0px';
						otherAnswer.style.opacity = '0';
						otherItem.classList.remove('active');
					}
				});

				// Expande la respuesta seleccionada
				answer.style.maxHeight = answer.scrollHeight + 'px';
				answer.style.opacity = '1';
				item.classList.add('active');
			}
		});
	});
});
