// Typewriter effect for knight's message
const knightText = `
    Anes, before we enter the castle and face what lies ahead, allow me a moment of honesty — a man-to-man conversation.
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
