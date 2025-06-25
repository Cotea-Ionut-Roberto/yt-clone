import { renderVideos } from "./render.js";
import { fetchVideos } from "./videoData.js";

export async function filterByTag(tag) {
    const videos = await fetchVideos();
    const lowerTag = tag.toLowerCase();

    const filtered = videos.filter(video => {
        return video.tags?.some(tg => tg.toLowerCase() === lowerTag);
    });

    renderVideos(filtered);
}

export async function initFilterBar() {
    const videos = await fetchVideos();
    const container = document.querySelector('.js-filter-bar');
    if (!container) return;

    container.innerHTML = ``;

    const allButton = document.createElement('button');
    allButton.classList.add('filter-button', 'filter-button-active');
    allButton.textContent = 'Toate';
    allButton.addEventListener('click', async () => {
        const allVideos = await fetchVideos();
        renderVideos(allVideos);
        setActiveButton(allButton);
    });
    container.appendChild(allButton);

    const tagSet = new Set();
    videos.forEach(video => {
        video.tags?.forEach(tag => tagSet.add(tag));
    });

    const tagArray = Array.from(tagSet);
    for (let i = tagArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tagArray[i], tagArray[j]] = [tagArray[j], tagArray[i]];
    }
    const randomTags = tagArray.slice(0, 16);

    randomTags.forEach(tag => {
        const button = document.createElement('button');
        button.classList.add('filter-button');
        button.textContent = tag;
        button.addEventListener('click', () => {
            filterByTag(tag);
            setActiveButton(button);
        });

        container.appendChild(button);
    });

    function setActiveButton(activeButton) {
        document.querySelectorAll('.filter-button').forEach(btn => {
            btn.classList.remove('filter-button-active');
        });
        activeButton.classList.add('filter-button-active');
    }
}