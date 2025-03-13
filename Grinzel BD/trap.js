const fightBtn = document.getElementById('fight-btn');

fightBtn.addEventListener('mouseover', () => {
    const maxX = window.innerWidth - fightBtn.clientWidth;
    const maxY = window.innerHeight - fightBtn.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    fightBtn.style.position = 'absolute';
    fightBtn.style.left = `${randomX}px`;
    fightBtn.style.top = `${randomY}px`;
});
