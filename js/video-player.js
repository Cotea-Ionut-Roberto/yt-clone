const params = new URLSearchParams(window.location.search);
const videoId = params.get("id");

fetch('data/videos.json').then(res => res.json()).then(videos => {
    const video = videos.find(v => v.id == videoId);

    const videoContainer = document.querySelector('.video-container');

    videoContainer.innerHTML = `<video class="video" autoplay preload="metadata" controls src="${video.fullVideo}" type="video/mp4"></video>`;
});