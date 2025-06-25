import { renderVideos } from "./render.js";
import { fetchVideos } from "./videoData.js";

function performSearch(query, videos) {
    const lowerQuery = query.toLowerCase();

    if (lowerQuery === '') {
        renderVideos(videos);
        return;
    }

    const filtered = videos.filter(video => {
        const titleMatch = video.title.toLowerCase().includes(lowerQuery);
        const tagsMatch = video.tags?.some(tag => tag.toLowerCase().includes(lowerQuery));
        return titleMatch || tagsMatch;
    });

    renderVideos(filtered);
}

export async function initSearch() {
    const input = document.querySelector('.js-search-input');
    const button = document.querySelector('.js-search-button');
    const videos = await fetchVideos();

    button?.addEventListener('click', () => {
        performSearch(input.value.trim(), videos);
    });

    input?.addEventListener('keyup', (ent) => {
        if (ent.key === 'Enter') {
            performSearch(input.value.trim(), videos);
        }
    });
}