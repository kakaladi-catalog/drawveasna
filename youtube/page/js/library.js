// Array of image data for the gallery with links
const imageGallery = [
    {
        title: "Understanding JavaScript Closures",
        channelName: "Channel Name 1",
        views: "250K views",
        uploadTime: "2 days ago",
        avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg",
        imageUrl: "https://storage.googleapis.com/a1aa/image/NF2UBnR7BNIm6emG-1TpebZAZTzzTgMgR8sM4tJk2uw.jpg", // Image URL
        link: "https://www.youtube.com/watch?v=9bZkp7q19f0" // Link to the video
    },
    {
        title: "CSS Grid Layout Tutorial",
        channelName: "Channel Name 2",
        views: "500K views",
        uploadTime: "3 days ago",
        avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg",
        imageUrl: "https://storage.googleapis.com/a1aa/image/NF2UBnR7BNIm6emG-1TpebZAZTzzTgMgR8sM4tJk2uw.jpg", // Image URL
        link: "https://www.youtube.com/watch?v=3fumBcKC6RE" // Link to the video
    },
    {
        title: "React Hooks Explained",
        channelName: "Channel Name 3",
        views: "300K views",
        uploadTime: "1 week ago",
        avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg",
        imageUrl: "https://storage.googleapis.com/a1aa/image/NF2UBnR7BNIm6emG-1TpebZAZTzzTgMgR8sM4tJk2uw.jpg", // Image URL
        link: "https://www.youtube.com/watch?v=4fGmBcKC6RE" // Link to the video
    },
    {
        title: "Node.js Crash Course",
        channelName: "Channel Name 4",
        views: "150K views",
        uploadTime: "5 days ago",
        avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg",
        imageUrl: "https://storage.googleapis.com/a1aa/image/NF2UBnR7BNIm6emG-1TpebZAZTzzTgMgR8sM4tJk2uw.jpg", // Image URL
        link: "https://www.youtube.com/watch?v=5hGmBcKC6RE" // Link to the video
    },
    {
        title: "Web Development Trends 2023",
        channelName: "Channel Name 5",
        views: "400K views",
        uploadTime: "2 weeks ago",
        avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg",
        imageUrl: "https://storage.googleapis.com/a1aa/image/NF2UBnR7BNIm6emG-1TpebZAZTzzTgMgR8sM4tJk2uw.jpg", // Image URL
        link: "https://www.youtube.com/watch?v=6iGmBcKC6RE" // Link to the video
    }
];

// Function to render image gallery
function renderImageGallery() {
    const galleryList = document.getElementById('gallery-list');
    imageGallery.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';

        // Create an anchor element for the link
        const link = document.createElement('a');
        link.href = item.link; // Set the link URL
        link.target = "_blank"; // Open in a new tab

        // Create an image element for the gallery
        const image = document.createElement('img');
        image.src = item.imageUrl; // Set the image source
        image.alt = item.title; // Set alt text
        image.className = 'gallery-image'; // Add class for styling

        const imageInfo = document.createElement('div');
        imageInfo.className = 'image-info';

        const imageTitle = document.createElement('div');
        imageTitle.className = 'image-title';
        imageTitle.textContent = item.title;

        const imageMeta = document.createElement('div');
        imageMeta.className = 'image-meta';
        imageMeta.textContent = `${item.channelName} • ${item.views} • ${item.uploadTime}`;

        // Append elements to the link
        link.appendChild(image); // Append the image to the link
        imageInfo.appendChild(imageTitle);
        imageInfo.appendChild(imageMeta);
        galleryItem.appendChild(link); // Append the link to the gallery item
        galleryItem.appendChild(imageInfo); // Append the info
        galleryList.appendChild(galleryItem); // Append the gallery item to the list
    });
}

// Call the function to render the image gallery on page load
document.addEventListener('DOMContentLoaded', renderImageGallery);