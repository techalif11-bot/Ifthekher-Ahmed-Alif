// script.js
// Theme Toggle
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
    document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    toggle.textContent = document.body.dataset.theme === 'dark' ? '☀️' : '🌙';
});

// YouTube API Integration (Simplified)
function onYouTubeIframeAPIReady() {
    // Load videos into #video-grid
    // Example: new YT.Player('featured-video', { videoId: 'VIDEO_ID' });
}

// Newsletter & Form Handling
document.getElementById('newsletter').addEventListener('submit', (e) => {
    e.preventDefault();
    // Integrate with Mailchimp API
    alert('Subscribed!');
});

// Animations with GSAP (Placeholder)
import { gsap } from 'gsap';
gsap.from('.hero h1', { opacity: 0, y: 50, duration: 1 });