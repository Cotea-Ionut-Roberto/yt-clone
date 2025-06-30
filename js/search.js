export function performSearch(query, videos) {
    const lowerQuery = query.toLowerCase();

    if (lowerQuery === "") {
        return videos;
    }

    return videos.filter(video => {
        const titleMatch = video.title.toLowerCase().includes(lowerQuery);
        const tagsMatch = video.tags?.some(tag => tag.toLowerCase().includes(lowerQuery));
        return titleMatch || tagsMatch;
    });
}

export async function initSearch() {
    const input = document.querySelector(".js-search-input");
    const button = document.querySelector(".js-search-button");

    button?.addEventListener("click", () => {
        const query = input.value.trim();
        if (query) {
            window.location.href = `search.html?q=${encodeURIComponent(query)}`;
        }
    });

    input?.addEventListener("keyup", (ent) => {
        if (ent.key === "Enter") {
            const query = input.value.trim();
            if (query) {
                window.location.href = `search.html?q=${encodeURIComponent(query)}`;
            }
        }
    });
}

