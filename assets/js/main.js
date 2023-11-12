document.addEventListener('DOMContentLoaded', () => {
    const naoButton = document.querySelectorAll('.buttons a')[1];

    naoButton.addEventListener('click', (e) => {
        e.preventDefault();

        const container = document.querySelector('.container');
        const x = Math.random() * (container.clientWidth - naoButton.clientWidth);
        const y = Math.random() * (container.clientHeight - naoButton.clientHeight);

        naoButton.style.position = 'absolute';
        naoButton.style.left = x + 'px';
        naoButton.style.top = y + 'px';
    });
});
