import { formatBigNumber, timeAgo } from './utils.js';

export function renderRecommendedVideos(videos) {
    const container = document.querySelector('.video-collumn');
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const currentId = Number(params.get("id"));

    container.innerHTML = '';

    const others = videos.filter(video => video.id !== currentId);

    for (let i = others.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [others[i], others[j]] = [others[j], others[i]];
    }

    others.forEach(video => {
        const card = document.createElement('div');
        card.className = 'recom-video-card';

        card.innerHTML = `
            <a href="video.html?id=${video.id}">
                <div class="recom-video-container">
                    <img src="${video.thumbnail}" class="video-preview">
                </div>
            </a>
            <div class="recom-video-details-container">
                <div class="video-title-container">
                    <a href="video.html?id=${video.id}">
                        <p class="rec-vid-title">${video.title}</p>
                    </a>
                </div>
                <div class="rec-vid-info">
                    <p class="rec-vid-author">${video.author.name}</p>
                    <p class="rec-vid-stats">${formatBigNumber(video.views)} de vizionări · ${timeAgo(video.publishedDate, video.wasLive)}</p>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}
