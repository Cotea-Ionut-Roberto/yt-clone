import { fetchVideos } from './videoData.js';
import { formatBigNumber, timeAgo } from './utils.js';
import { renderRecommendedVideos } from './recomended.js';

function renderMainVideo(video) {
    const videoContainer = document.querySelector('.video-container');
    videoContainer.innerHTML = `<video class="video" autoplay preload="metadata" controls src="${video.fullVideo}" type="video/mp4"></video>`;
};

function renderChannelDetails(video) {
    const container = document.querySelector('.channel-container');
    container.innerHTML = `
        <div class="channel-profile">
            <img class="channel-profile-img" src="${video.author.profilePic}">
        </div>
        <div class="channel-details">
            <p class="channel-name">${video.author.name}</p>
            <p class="channel-subscribers">${formatBigNumber(video.author.subscribers)} de abonați</p>
        </div>
    `;
}

function renderVideoDescription(video) {
    const container = document.querySelector('.video-description');
    container.innerHTML = `
        <p>${formatBigNumber(video.views)} de vizionări · ${timeAgo(video.publishedDate)}</p>
        <p>Acesta este un preview de 1 minut. Proiect realizat in scop educational. Nu există redare completă din motive legale și de performanță. Toate drepturile revin creatorilor de continut si Google LLC.</p>
        <strong>...mai multe</strong>
    `;
}

export async function initVideoPlayer() {
    const params = new URLSearchParams(window.location.search);
    const videoId = params.get('id');
    if (!videoId) return;
    const videos = await fetchVideos();
    const video = videos.find(vid => vid.id == videoId);
    if (!video) return;

    renderMainVideo(video);
    renderChannelDetails(video);
    renderVideoDescription(video);
    renderRecommendedVideos(videos, videoId);
}