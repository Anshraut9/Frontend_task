document.addEventListener('DOMContentLoaded', function() {
    // Countdown Timer
    const countdownElement = document.querySelector('.countdown');
    const targetDate = new Date('2024-12-31').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `
            <div class="countdown-item">
                <span class="text-2xl md:text-4xl font-bold text-white">${days}</span>
                <span class="text-sm md:text-base mt-2 block capitalize text-white">days</span>
            </div>
            <div class="countdown-item">
                <span class="text-2xl md:text-4xl font-bold text-white">${hours}</span>
                <span class="text-sm md:text-base mt-2 block capitalize text-white">hours</span>
            </div>
            <div class="countdown-item">
                <span class="text-2xl md:text-4xl font-bold text-white">${minutes}</span>
                <span class="text-sm md:text-base mt-2 block capitalize text-white">minutes</span>
            </div>
            <div class="countdown-item">
                <span class="text-2xl md:text-4xl font-bold text-white">${seconds}</span>
                <span class="text-sm md:text-base mt-2 block capitalize text-white">seconds</span>
            </div>
        `;
    }

    setInterval(updateCountdown, 1000);

    // Past Events
    const pastEventsSection = document.querySelector('.past-events');

    pastEvents.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'bg-white rounded shadow-md overflow-hidden';
        eventCard.innerHTML = `
            <img src="${event.image}" alt="${event.title}" class="past-event-image">
            <div class="p-4">
                <h3 class="text-xl font-semibold">${event.title}</h3>
                <p class="text-gray-600">${event.date}</p>
                <p class="text-gray-500 mt-2">${event.description}</p>
            </div>
        `;
        pastEventsSection.appendChild(eventCard);
    });

    // Mobile Menu
    const menuButton = document.getElementById('menu-button');
    const navigationMenu = document.querySelector('.navigation-menu');

    menuButton.addEventListener('click', () => {
        navigationMenu.classList.toggle('hidden');
    });
});
