export function formatBigNumber(number) {
    if (number >= 1_000_000_000) {
        return (number / 1_000_000_000).toFixed(1).replace('.', ',') + ' mld.';
    } else if (number >= 1_000_000) {
        return (number / 1_000_000).toFixed(1).replace('.', ',') + ' mil.';
    } else if (number >= 1000) {
        return Math.floor(number / 1000) + ' K';
    } else {
        return number;
    }
}

export function timeAgo(dateString, wasLive = false) {
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