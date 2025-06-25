import { renderVideos } from './render.js';
import { fetchVideos } from './videoData.js';
import { initSearch } from './search.js';
import { initFilterBar } from './filter.js';

async function initApp() {
    const videos = await fetchVideos();
    renderVideos(videos);
    initSearch();
    initFilterBar();
}

initApp()

