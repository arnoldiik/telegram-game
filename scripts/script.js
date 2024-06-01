document.addEventListener('DOMContentLoaded', () => {
    let totalCoins = 2517;
    let trainingCoins = 1000;
    let tapCoins = 1;
    let energy = 1000;
    const progressBar = document.getElementById('progress');
    const totalCoinsDisplay = document.getElementById('total-coins');

    document.getElementById('start-training').addEventListener('click', () => {
        if (energy >= 10) {
            energy -= 10;
            totalCoins += trainingCoins;
            totalCoinsDisplay.textContent = totalCoins;
            progressBar.style.width = `${(energy / 1000) * 100}%`;
        }
    });

    document.querySelector('.character img').addEventListener('click', () => {
        if (energy > 0) {
            totalCoins += tapCoins;
            energy -= 1;
            totalCoinsDisplay.textContent = totalCoins;
            progressBar.style.width = `${(energy / 1000) * 100}%`;
        }
    });

    setInterval(() => {
        if (energy < 1000) {
            energy += 10;
            progressBar.style.width = `${(energy / 1000) * 100}%`;
        }
    }, 1800000); // Increase energy every 30 minutes

    document.querySelectorAll('.item').forEach(item => {
        item.addEventListener('click', () => {
            const cost = parseInt(item.getAttribute('data-cost'), 10);
            const bonus = parseInt(item.getAttribute('data-bonus'), 10);
            if (totalCoins >= cost) {
                totalCoins -= cost;
                trainingCoins += bonus;
                totalCoinsDisplay.textContent = totalCoins;
                item.classList.add('purchased');
            }
        });
    });
});
