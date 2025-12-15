const containerTestimonials = document.querySelector(
	'.container-testimonials'
);
const cardTestimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');
let currentIndex = 0;
const totalCardTestimonials = cardTestimonials.length;
let autoPlayInterval;

// Función para actualizar la posición del carrusel
function updateCarousel() {
	const offset = currentIndex * containerTestimonials.clientWidth;
	containerTestimonials.scrollTo({
		left: offset,
		behavior: 'smooth',
	});
}

// Botón "Siguiente"
nextBtn.addEventListener('click', function () {
	// Si llega al final, vuelve al primero
	currentIndex = (currentIndex + 1) % totalCardTestimonials;
	updateCarousel();
	resetAutoPlay();
});

// Botón "Anterior"
prevBtn.addEventListener('click', function () {
	// Si está en el primero, va al último
	currentIndex =
		(currentIndex - 1 + totalCardTestimonials) %
		totalCardTestimonials;
	updateCarousel();
	resetAutoPlay();
});

// Función para autoplay cada 5 segundos
function startAutoPlay() {
	autoPlayInterval = setInterval(() => {
		currentIndex = (currentIndex + 1) % totalCardTestimonials;
		updateCarousel();
	}, 5000);
}

// Reiniciar autoplay cuando se navega manualmente
function resetAutoPlay() {
	clearInterval(autoPlayInterval);
	startAutoPlay();
}

// Iniciar autoplay
startAutoPlay();
