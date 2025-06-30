import { formatBigNumber, timeAgo } from "./utils.js";
import { fetchVideos } from "./videoData.js";
import { performSearch, initSearch } from "./search.js";

async function initSearchPage() {
    const params = new URLSearchParams(window.location.search);
    const query = params.get("q") || "";
    const videos = await fetchVideos();
    const filtered = performSearch(query, videos);

    const container = document.querySelector(".js-search-grid");
    if (!container) {
        console.error("Nu există containerul .js-search-grid pe pagină!");
        return;
    }

    container.innerHTML = "";

    filtered.forEach(video => {
        const card = createSearchCard(video);
        container.appendChild(card);
    });
}

function createSearchCard(video) {
    const div = document.createElement("div");
    div.classList.add("video-card");
    div.innerHTML = `
    <a href="video.html?id=${video.id}">
       <div class="thumbnail-image-container">
           <video class="video-preview" muted loop preload="metadata" poster="${video.thumbnail}">
               <source src="${video.preview}" type="video/mp4">
           </video>
       </div>
    </a>
       <div class="video-details">
       <a href="video.html?id=${video.id}">
           <h2 class="video-title">${video.title}</h2>
        </a>
           <p class="video-stats">${formatBigNumber(video.views)} de vizionari &#183; ${timeAgo(video.publishedDate)}</p>
           <div class="author-details">
               <img class="profile-picture" src="${video.author.profilePic}">
               <p class="author-name">${video.author.name}</p>
           </div>
           <p class="description-preview">Acesta este un preview de 1 minut. Proiect realizat in scop educational. Nu există redare completă din motive legale și de performanță. Toate drepturile revin creatorilor de continut si Google LLC.
       </div>
   `;
    const videoEl = div.querySelector(".video-preview");
    div.addEventListener("mouseenter", () => videoEl.play());
    div.addEventListener("mouseleave", () => {
        videoEl.pause();
        videoEl.load();

    });
    return div;
}

initSearchPage();
initSearch();
