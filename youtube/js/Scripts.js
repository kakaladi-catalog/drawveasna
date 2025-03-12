// Array of video data
const videos = [
    { id: "9bZkp7q19f0", title: "Video Title 3", channelName: "Channel Name 3", views: "250K views", uploadTime: "3 days ago", avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg"},
    { id: "9bZkp7q19f0", title: "Video Title 3", channelName: "Channel Name 3", views: "250K views", uploadTime: "3 days ago", avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg"},
    { id: "9bZkp7q19f0", title: "Video Title 3", channelName: "Channel Name 3", views: "250K views", uploadTime: "3 days ago", avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg"},
    { id: "9bZkp7q19f0", title: "Video Title 3", channelName: "Channel Name 3", views: "250K views", uploadTime: "3 days ago", avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg"},
    { id: "9bZkp7q19f0", title: "Video Title 3", channelName: "Channel Name 3", views: "250K views", uploadTime: "3 days ago", avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg"},
    { id: "9bZkp7q19f0", title: "Video Title 3", channelName: "Channel Name 3", views: "250K views", uploadTime: "3 days ago", avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg"},
    { id: "9bZkp7q19f0", title: "Video Title 3", channelName: "Channel Name 3", views: "250K views", uploadTime: "3 days ago", avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg"},
    { id: "9bZkp7q19f0", title: "Video Title 3", channelName: "Channel Name 3", views: "250K views", uploadTime: "3 days ago", avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg"}
];

// Function to create video items
function createVideoItems() {
    const videoSection = document.getElementById('video-section');

    videos.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.className = 'video-item';

        videoItem.innerHTML = `
            <iframe 
                class="video-iframe" 
                src="https://www.youtube.com/embed/${video.id}" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
            <div class="video-info">
                <img alt="Channel Avatar" class="channel-avatar" height="40" src="${video.avatar}" width="40"/>
                <div class="info-text">
                    <h3 class="video-title">${video.title}</h3>
                    <p class="video-meta">${video.channelName} • ${video.views} • ${video.uploadTime}</p>
                </div>
            </div>
        `;

        videoSection.appendChild(videoItem);
    });
}

// Call the function to create video items
createVideoItems();