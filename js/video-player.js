const params = new URLSearchParams(window.location.search);
const videoId = params.get("id");

function formatSubs(subscribers) {
    if (subscribers >= 1000000) {
        return (subscribers / 1000000).toFixed(1).replace(".", ",") + " mil";
    } else if (subscribers >= 1000) {
        return (subscribers / 1000).toFixed().replace(".", ",") + " K";
    } else {
        return subscribers;
    }
}
fetch('data/videos.json').then(res => res.json()).then(videos => {
    const video = videos.find(v => v.id == videoId);

    const videoContainer = document.querySelector('.video-container');
    videoContainer.innerHTML = `<video class="video" autoplay preload="metadata" controls src="${video.fullVideo}" type="video/mp4"></video>`;

    const videoTitle = document.querySelector('.video-title');
    videoTitle.innerHTML = `${video.title}`;

    const channelDetails = document.querySelector('.channel-container');
    channelDetails.innerHTML = `
                        <div class="channel-profile">
                            <img class="channel-profile-img" src="${video.author.profilePic}">
                        </div>
                        <div class="channel-details">
                            <p class="channel-name">${video.author.name}</p>
                            <p class="channel-subscribers">${formatSubs(video.author.subscribers)} de abonati</p>
                        </div>
                        `;

    const videoDescription = document.querySelector('.video-description');
    videoDescription.innerHTML = `
                <p>421 K de vizionări acum 5 luni</p>
                <p>Acest videoclip reprezintă un preview de 1 minut. Pt. a vizualiza videolipurile intregi urmati instructiunile din README.md.</p>
                <strong>...mai multe</strong>
                `;


    const recommendedVideos = document.querySelector('.video-collumn');
    videos.forEach(vid => {
        if (vid.id != videoId) {
            recommendedVideos.innerHTML += `
            <div class="recom-video-card">
            <a href="video.html?id=${vid.id}">
                    <div class="recom-video-container">
                        <img src="${vid.thumbnail}" class="video-preview">
                    </div>
                    </a>
                    <div class="recom-video-details-container">
                        <div class="video-title-container">
                            <p class="rec-vid-title">Lexus LFA Review // A Living Legend</p>
                        </div>

                        <div class="rec-vid-info">
                            <p class="rec-vid-author">Throttle House</p>
                            <p class="rec-vid-stats">3,4 mil. de vizionări &#183; Acum 3 ani</p>
                        </div>

                    </div>
                </div>
            `;
        }
    });

});