let cachedVideos = [];

export async function fetchVideos() {
    if (cachedVideos.length > 0) return cachedVideos;

    try {
        const response = await fetch('data/videos.json');
        cachedVideos = await response.json();
        return cachedVideos;
    } catch (error) {
        console.error('Failed fetch', error);
        return [];
    }
}

export function getCachedVideos() {
    return cachedVideos;
}

