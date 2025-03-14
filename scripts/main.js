document.getElementById('naoButton').addEventListener('mouseover', function() {
    const button = this;
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = 'absolute';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
});

document.getElementById('simButton').addEventListener('click', function() {
    document.querySelector('.main_body').style.display = 'none';
    document.getElementById('heartScreen').style.display = 'flex';
});