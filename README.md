# 📺 YouTube Clone

A fully responsive **YouTube frontend clone** built for educational and portfolio purposes.  
Created with vanilla **HTML, CSS, JavaScript (ES Modules)** and features a dynamic user experience similar to YouTube.

> ❗ This project does **not include full video playback** due to legal and performance concerns.  
> All rights belong to their original creators and Google LLC.

---

## 🚀 Features

- 🔍 **Search bar** for dynamic filtering
- 🎛️ **Filter bar** for category switching
- 🖼️ **Video thumbnails** with 30s preview on hover
- 🎥 **Dedicated video page** with recommended videos
- 🧠 **Modular JavaScript** structure (ES Modules)
- 📱 **Responsive design** for all screen sizes

---

## 🛠️ Tech Stack

- **HTML5** & **CSS3**
- **JavaScript** (ES6 Modules)
- **Local JSON** as a simple database

---

## 📂 Project Structure

YT-CLONE/
├── assets/
│ ├── icons/ # SVG & image icons
│ ├── images/ # Thumbnails, profile pictures
│ ├── video-previews/ # 30s preview videos
│ └── videos/ # Full videos (1min)
│
├── data/
│ └── videos.json # Video data (JSON format)
│
├── js/
│ ├── filter.js # Filter bar logic
│ ├── main.js # Homepage entry point
│ ├── player.js # Video playback logic
│ ├── recomended.js # Recommended videos rendering
│ ├── render.js # Main video grid rendering
│ ├── search.js # Search feature
│ ├── utils.js # Helper utilities
│ ├── videoData.js # JSON fetch & video data
│ └── videoPage.js # Entry point for video.html
│
├── styles/
│ ├── filter-bar.css # Filter bar styles
│ ├── general.css # Global base styles
│ ├── header.css # Header styles
│ ├── recomended-sidebar.css # Recommended sidebar
│ ├── sidebar.css # Left navigation sidebar
│ ├── video-grid.css # Video grid styling
│ └── video-page.css # Styles for video page
│
├── index.html # Home page
├── video.html # Single video page
└── README.md # Project documentation

---

## 💡 How to Use

1. Clone or download this repository.
2. Open `index.html` using a local server (e.g., Live Server in VS Code).
3. Click on any video to open its preview page.
4. Use the search and filter features to explore the video grid.

---

## ⚠️ Disclaimer

This is a personal project made for educational purposes only.  
No full videos are hosted to avoid copyright and performance issues.  
All content rights belong to their respective creators and Google LLC.

---

## 🙌 Credits

Made by **Cotea Ionuț Roberto**  
UI inspired by the original **YouTube** design.