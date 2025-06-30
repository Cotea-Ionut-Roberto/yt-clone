import { initVideoPlayer } from "./player.js";
import { initSearch } from "./search.js";
import { initFilterBar } from "./filter.js";

function initVideoPage() {
    initVideoPlayer();
    initSearch();
    initFilterBar('.js-recomended-filter-bar', true);
}

initVideoPage();