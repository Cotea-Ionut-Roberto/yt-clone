import { formatBigNumber, timeAgo } from "./utils.js";

export function renderVideos(videos) {
    const grid = document.querySelector('.js-video-grid');
    if (!grid) return;

    grid.innerHTML = ``;

    videos.forEach((video) => {
        const html = `
            <div class="video-card">
                <a href="video.html?id=${video.id}">
                <div class="thumbnail-container">
                    <div class="thumbnail-image-container">
                    <video class="video-preview" muted loop preload="metadata" poster="${video.thumbnail}" src="${video.preview}"></video>
                    </div>
                    <div class="video-timestamp">${video.duration}</div>
                </div>
                </a>
                <div class="video-details">
                <div class="profile-picture-container">
                    <img class="profile-picture" src="${video.author.profilePic}">
                </div>
                <div class="video-info">
                    <a href="video.html?id=${video.id}">
                    <p class="video-title">${video.title}</p>
                    </a>
                    <p class="video-author">${video.author.name}</p>
                    <p class="video-stats">${formatBigNumber(video.views)} de vizionări &#183; ${timeAgo(video.publishedDate, video.wasLive)}</p>
                </div>
                <div class="video-options">
                    <img class="video-options-icon" src="assets/icons/vert-3dots.svg">
                </div>
                </div>
            </div>
        `;
        grid.innerHTML += html;
    });

    document.querySelectorAll('.video-card').forEach(card => {
        const video = card.querySelector('.video-preview');
        const timestamp = card.querySelector('.video-timestamp');

        card.addEventListener('mouseenter', () => {
            video.play().catch((err) => {
                if (err.name !== 'AbortError') {
                    console.error('Play error:', err);
                }
            });
            if (timestamp) timestamp.style.opacity = '0';
        });

        card.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
            video.load();

            if (timestamp) timestamp.style.opacity = '1';
        });
    });
}