// Typewriter effect for knight's message
const knightText = `
    Life is not a battle easily won. There will be days when the weight of the world feels heavier than this very armor I wear. You’ll face storms within your heart — doubts, fears, and shadows of the past. But hear me well… strength is not measured by how stoically you stand, but by how you rise after each fall.

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
