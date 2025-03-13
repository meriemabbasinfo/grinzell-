// Typewriter effect for knight's message
const knightText = `
   holly farasha you anes , it seems like we gonna fight against of period monster and little girl energy beast , shit man i hate my life 
`;

let i = 0;
const knightMessage = document.getElementById('knight-text');

function typeWriter() {
    if (i < knightText.length) {
        knightMessage.innerHTML += knightText.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

window.onload = typeWriter;
const bgMusic = document.getElementById('bg-music');
const soundIcon = document.getElementById('sound-icon');

let isPlaying = true;

soundIcon.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        soundIcon.textContent = '🔇'; // Mute icon
    } else {
        bgMusic.play();
        soundIcon.textContent = '🔊'; // Sound icon
    }
    isPlaying = !isPlaying;
});
