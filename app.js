const image_container = document.querySelector('.image-container');
const overlay = document.querySelector('.overlay');
for (let i = 1; i <= 30; i++) {
    const image = document.createElement('img');
    image.src = `https://source.unsplash.com/random/800x50${i}`;
    image_container.appendChild(image);
}
const overlayImage = document.querySelector('.overlay img');
const images = document.querySelectorAll('.image-container img');

images.forEach(image => {
    image.addEventListener('click', (e) => {
        overlayImage.src = e.target.src;
        overlay.style['display'] = 'flex';
        setTimeout(() => {
            overlay.style['opacity'] = '1';
            overlay.style['background-color'] = 'rgba(0, 0, 0, 0.8)';
            overlay.style['z-index'] = 100;
        }, 30);
    });
});

overlay.addEventListener('click', () => {
    overlay.style['opacity'] = 0;
    overlay.style['z-index'] = -1;
    setTimeout(() => {
        overlay.style['display'] = 'none';
    }, 70);
});