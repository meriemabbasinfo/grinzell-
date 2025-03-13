// Typewriter effect for knight's message
const knightText = `
    I know there have been moments when you've felt unseen, unheard — like your voice was an echo in an empty hall. But look around you now... This world, this journey — it exists because someone believes in you. Meriem, the very one who crafted this quest, sees not just the warrior you are but the man you aspire to become. She has poured her heart into this world, not just to celebrate your birthday, but to remind you that you are deeply loved, truly valued.

"You do not walk this path alone, Anes. There are those who stand beside you — Meriem most of all. When you doubt yourself, remember her faith in you. When the night feels too dark, let her light guide you.


Now, my friend, we have a castle to enter and a mystery book to retrieve. But let this be more than a quest for treasure. Let it be a journey of the heart — a reminder that the strongest warriors are those who fight with love as their shield."

*The knight smirks*

And perhaps, along the way, we shall share a few more man-to-man secrets. Ready to march onward?
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
