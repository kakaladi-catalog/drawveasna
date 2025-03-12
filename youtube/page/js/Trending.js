// Array of trending video data
const trendingVideos = [
    {
        id: "9bZkp7q19f0",
        title: "Understanding JavaScript Closures",
        channelName: "Channel Name 1",
        views: "250K views",
        uploadTime: "2 days ago",
        avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg"
    },
    {
        id: "3fumBcKC6RE",
        title: "CSS Grid Layout Tutorial",
        channelName: "Channel Name 2",
        views: "500K views",
        uploadTime: "3 days ago",
        avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg"
    },
    {
        id: "4t5Y2VkmII-iTn_U7x3P2n2UG3F3qe-UCjQxdgk8Bt0",
        title: "React vs Vue: Which Framework to Choose?",
        channelName: "Channel Name 3",
        views: "1M views",
        uploadTime: "1 week ago",
        avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg"
    },
    {
        id: "5hGmBcKC6RE",
        title: "Top 10 Tips for Web Development",
        channelName: "Channel Name 4",
        views: "750K views",
        uploadTime: "1 week ago",
        avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg"
    }
];

// Function to render trending videos
function renderTrendingVideos() {
    const videoList = document.getElementById('video-list');
    trendingVideos.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.className = 'video-item';

        // Create an iframe for the embedded YouTube video
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${video.id}`; // Embed URL for YouTube
        iframe.width = "560"; // Set width
        iframe.height = "315"; // Set height
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"; // Allow features
        iframe.allowFullscreen = true; // Allow fullscreen
        iframe.className = 'video-iframe'; // Add class for styling

        const videoInfo = document.createElement('div');
        videoInfo.className = 'video-info';

        const channelAvatar = document.createElement('img');
        channelAvatar.src = video.avatar;
        channelAvatar.alt = `${video.channelName} Avatar`;
        channelAvatar.className = 'channel-avatar';

        const videoTitle = document.createElement('div');
        videoTitle.className = 'video-title';
        videoTitle.textContent = video.title;

        const videoMeta = document.createElement('div');
        videoMeta.className = 'video-meta';
        videoMeta.textContent = `${video.channelName} • ${video.views} • ${video.uploadTime}`;

        videoInfo.appendChild(channelAvatar);
        videoInfo.appendChild(videoTitle);
        videoInfo.appendChild(videoMeta);
        videoItem.appendChild(iframe); // Append the iframe instead of the thumbnail
        videoItem.appendChild(videoInfo);
        videoList.appendChild(videoItem);
    });
}

// Call the function to render trending videos on page load
document.addEventListener('DOMContentLoaded', renderTrendingVideos);