// 80s terminal typing effect
document.addEventListener('DOMContentLoaded', function() {
    // Add some random glitch effects
    setInterval(() => {
        if (Math.random() > 0.7) {
            document.body.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
            setTimeout(() => {
                document.body.style.filter = 'none';
            }, 100);
        }
    }, 3000);

    // Add more floating pixels dynamically
    for (let i = 0; i < 10; i++) {
        createFloatingPixel();
    }
});

function createFloatingPixel() {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.left = Math.random() * 100 + '%';
    pixel.style.animationDelay = Math.random() * 6 + 's';
    pixel.style.background = ['#00ff00', '#ff00ff', '#ffff00'][Math.floor(Math.random() * 3)];
    document.querySelector('.floating-pixels').appendChild(pixel);
    
    // Remove pixel after animation
    setTimeout(() => {
        pixel.remove();
    }, 6000);
}
