/*const videos = [
    {
        thumbnail: 'assets/images/thumbnails/thumbnail1.avif',
        preview: 'assets/video-previews/compressed-preview.mp4',
        title: 'Lofi Hip Hop Beats 📮 1980s & 90s Retro Vibes & Nostalgic Japanese Town Ambience 🌆 Lofi Rain Playlist',
        duration: '11:13:25',
        views: 47161,
        publishedDate: '2025-05-29',
        wasLive: true,
        author: {
            name: 'The Japanese Town',
            profilePic: 'assets/images/channel-profile-pictures/channel1.jpg'
        }
    },
    {
        thumbnail: "assets/images/thumbnails/thumbnail2.jpg",
        preview: 'assets/video-previews/compressed-preview1.mp4',
        title: "2024 Lamborghini Revuelto Review - The Fastest Lamborghini Ever Made",
        duration: "21:42",
        views: 182000,
        publishedDate: "2025-01-20",
        wasLive: false,
        author: {
            name: "Vehicle Virgins",
            profilePic: "assets/images/channel-profile-pictures/channel2.jpg"
        }
    },
    {
        thumbnail: "assets/images/thumbnails/thumbnail3.avif",
        preview: 'assets/video-previews/compressed-preview2.mp4',
        title: "Healing Place - Spiritual Tibetan Ambient Music - Meditative Relaxing Ambience",
        duration: "1:00:01",
        views: 7700,
        publishedDate: "2025-06-18",
        wasLive: false,
        author: {
            name: "Eternal Depth",
            profilePic: "assets/images/channel-profile-pictures/channel3.jpg"
        }
    },
    {
        thumbnail: "assets/images/thumbnails/thumbnail4.jpg",
        preview: 'assets/video-previews/compressed-preview3.mp4',
        title: "quitting your youtube addiction is easy, actually",
        duration: "5:10",
        views: 1200000,
        publishedDate: "2024-12-20",
        wasLive: false,
        author: {
            name: "easy, actually",
            profilePic: "assets/images/channel-profile-pictures/channel4.jpg"
        }
    },
    {
        thumbnail: "assets/images/thumbnails/thumbnail5.avif",
        preview: 'assets/video-previews/compressed-preview4.mp4',
        title: "Maximize Productivity, Physical & Mental Health With Daily Tools | Huberman Lab Essentials",
        duration: "31:53",
        views: 221000,
        publishedDate: "2025-06-06",
        wasLive: false,
        author: {
            name: "Andrew Huberman",
            profilePic: "assets/images/channel-profile-pictures/channel5.jpg"
        }
    },
    {
        thumbnail: "assets/images/thumbnails/thumbnail6.avif",
        preview: 'assets/video-previews/compressed-preview5.mp4',
        title: "Lexus LFA Review // A Living Legend",
        duration: "20:18",
        views: 3400000,
        publishedDate: "2022-06-20",
        wasLive: false,
        author: {
            name: "Throttle House",
            profilePic: "assets/images/channel-profile-pictures/channel6.jpg"
        }

    },
    {
        thumbnail: "assets/images/thumbnails/thumbnail7.avif",
        preview: 'assets/video-previews/compressed-preview6.mp4',
        title: "FULL CHEST WORKOUT W. COACH HANY RAMBOD",
        duration: "26:43",
        views: 1300000,
        publishedDate: "2024-06-20",
        wasLive: false,
        author: {
            name: "Chris Bumstead",
            profilePic: "assets/images/channel-profile-pictures/channel7.jpg"
        }
    },
    {
        thumbnail: "assets/images/thumbnails/thumbnail8.avif",
        preview: 'assets/video-previews/compressed-preview7.mp4',
        title: "RTX 5090 in GTA 5 Enhanced Edition LOOKS INCREDIBLE - INSANE Ray Tracing Realistic Graphics 4K120FPS",
        duration: "3:23:54",
        views: 195000,
        publishedDate: "2025-04-20",
        wasLive: false,
        author: {
            name: "RTXGameplays",
            profilePic: "assets/images/channel-profile-pictures/channel8.jpg"
        }
    },
    {
        thumbnail: "assets/images/thumbnails/thumbnail9.avif",
        preview: 'assets/video-previews/compressed-preview8.mp4',
        title: "Inside a Single-Engine Aircraft | How a Cessna 172 Works",
        duration: "23:28",
        views: 1200000,
        publishedDate: "2024-06-20",
        wasLive: false,
        author: {
            name: "Joyplanes",
            profilePic: "assets/images/channel-profile-pictures/channel9.jpg"
        }
    }
];*/


let videoCardsHTML = '';

function formatViews(views) {
    if (views >= 1000000000) {
        return (views / 1000000000).toFixed(1).replace(".", ",") + " mld.";
    } else if (views >= 1000000) {
        return (views / 1000000).toFixed(1).replace(".", ",") + " mil.";
    } else if (views >= 1000) {
        return Math.floor(views / 1000) + " K";
    } else {
        return views;
    }
}

function timeAgo(dateString, wasLive = false) {
    const now = new Date();
    const then = new Date(dateString);
    const diff = now - then;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    let timeString = "";

    if (years > 0) {
        timeString = `Acum ${years} ${years === 1 ? "an" : "ani"}`;
    } else if (months > 0) {
        timeString = `Acum ${months} ${months === 1 ? "lună" : "luni"}`;
    } else if (days > 0) {
        timeString = `Acum ${days} ${days === 1 ? "zi" : "zile"}`;
    } else if (hours > 0) {
        timeString = `Acum ${hours} ${hours === 1 ? "oră" : "ore"}`;
    } else if (minutes > 0) {
        timeString = `Acum ${minutes} ${minutes === 1 ? "minut" : "minute"}`;
    } else {
        timeString = `Chiar acum`;
    }

    return wasLive ? `Transmis live ${timeString.toLowerCase()}` : timeString;

}

async function loadVideos() {
    try {
        const response = await fetch('data/videos.json');
        if (!response.ok) throw new Error(`${response.status}`);

        const videos = await response.json();
        videos.forEach((video) => {
            videoCardsHTML += `
            <div class="video-card">
                <a href="video.html?id=${video.id}">
                <div class="thumbnail-container">
                    <div class="thumbnail-image-container">
                        <video class="video-preview" muted loop preload="metadata" poster="${video.thumbnail}" src="${video.preview}"></video>
                    </div>
                    <div class="video-timestamp">${video.duration}</div>
                </div></a>
                <div class="video-details">
                    <div class="profile-picture-container">
                        <img class="profile-picture" src="${video.author.profilePic}">
                    </div>
                    <div class="video-info">
                        <a href="video.html?id=${video.id}">
                        <p class="video-title">${video.title}</p>
                        </a>
                        <p class="video-author">${video.author.name}</p>
                        <p class="video-stats">${formatViews(video.views)} de vizionări &#183; ${timeAgo(video.publishedDate, video.wasLive)} </p>
                    </div>
                    <div class="video-options">
                        <img class="video-options-icon" src="assets/icons/vert-3dots.svg">
                    </div>
                </div>
            </div>
    `;
        });

        document.querySelector('.js-video-grid').innerHTML = videoCardsHTML;

        document.querySelectorAll(".video-card").forEach(card => {
            const video = card.querySelector(".video-preview");
            const timestamp = card.querySelector(".video-timestamp");

            card.addEventListener("mouseenter", () => {
                video.play();
                if (timestamp) timestamp.style.opacity = "0";
            });

            card.addEventListener("mouseleave", () => {
                video.pause();
                video.currentTime = 0;
                video.load();
                if (timestamp) timestamp.style.opacity = "1";
            });
        });
    } catch (error) {
        console.error('Error loading json data', error);
    }
}

function renderVideos(videosToRender) {
    const grid = document.querySelector('.js-video-grid');
    grid.innerHTML = ``;

    videosToRender.forEach((video) => {
        const html = `
        <div class="video-card">
                <a href="video.html?id=${video.id}">
                <div class="thumbnail-container">
                    <div class="thumbnail-image-container">
                        <video class="video-preview" muted loop preload="metadata" poster="${video.thumbnail}" src="${video.preview}"></video>
                    </div>
                    <div class="video-timestamp">${video.duration}</div>
                </div></a>
                <div class="video-details">
                    <div class="profile-picture-container">
                        <img class="profile-picture" src="${video.author.profilePic}">
                    </div>
                    <div class="video-info">
                        <a href="video.html?id=${video.id}">
                        <p class="video-title">${video.title}</p>
                        </a>
                        <p class="video-author">${video.author.name}</p>
                        <p class="video-stats">${formatViews(video.views)} de vizionări &#183; ${timeAgo(video.publishedDate, video.wasLive)} </p>
                    </div>
                    <div class="video-options">
                        <img class="video-options-icon" src="assets/icons/vert-3dots.svg">
                    </div>
                </div>
            </div>
        `;

        grid.innerHTML += html;
    });
}

async function searchVideos(query) {
    try {
        const response = await fetch('data/videos.json');
        const videos = await response.json();
        const lowerQuerry = query.toLowerCase();

        if (lowerQuerry === '') {
            renderVideos(videos);
            return;
        }

        const filtered = videos.filter(video => {
            const titleMatch = video.title.toLowerCase().includes(lowerQuerry);
            const tagsMatch = video.tags?.some(tag => tag.toLowerCase().includes(lowerQuerry));
            return titleMatch || tagsMatch;
        });

        renderVideos(filtered);
    } catch (err) {
        console.error('Failed srch', err);
    }

}

document.querySelector('.js-search-button')?.addEventListener('click', () => {
    const input = document.querySelector('.js-search-input');
    if (input) searchVideos(input.value.trim());
});

document.querySelector('.js-search-input')?.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        searchVideos(e.target.value.trim());
    }
});


loadVideos();





