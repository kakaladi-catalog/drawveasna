// Array of sender data
const senders = [
    {
        name: "Samantha Day",
        avatar: "https://storage.googleapis.com/a1aa/image/hbFyf6bR2qEl-SN_jX7sDePs8nfgZaDjnXemSfacj8w.jpg"
    },
    {
        name: "John Doe",
        avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg"
    },
    {
        name: "Alice Smith",
        avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg"
    },
    {
        name: "Bob Johnson",
        avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg"
    },
    {
        name: "Emily Davis",
        avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg"
    },
    {
        name: "Michael Brown",
        avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg"
    },
    {
        name: "Jessica Wilson",
        avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg"
    },
    {
        name: "David Lee",
        avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg"
    },
    {
        name: "Sarah Taylor",
        avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg"
    },
    {
        name: "Chris Martin",
        avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg"
    }
];

// Array of message data
const messages = [
    {
        text: "New video uploaded: How to Code in JavaScript!",
        time: "2 hours ago",
        message: "Check out our latest tutorial!"
    },
    {
        text: "Don't miss our latest tutorial on CSS Flexbox!",
        time: "5 hours ago",
        message: "Learn how to create responsive layouts."
    },
    {
        text: "Check out our new video on React Hooks!",
        time: "1 day ago",
        message: "Master React Hooks with our guide."
    },
    {
        text: "Your subscription is confirmed! Welcome to our channel.",
        time: "1 day ago",
        message: "Thank you for joining us!"
    },
    {
        text: "New live stream scheduled for this Friday!",
        time: "2 days ago",
        message: "Join us for an interactive session."
    },
    {
        text: "Join us for a Q&A session this weekend!",
        time: "3 days ago",
        message: "Ask us anything about web development."
    },
    {
        text: "New video: Top 10 JavaScript Frameworks in 2023!",
        time: "4 days ago",
        message: "Find out which frameworks are trending."
    },
    {
        text: "Don't forget to like and subscribe!",
        time: "5 days ago",
        message: "Your support helps us grow!"
    },
    {
        text: "New collaboration video with Channel Name 10!",
        time: "6 days ago",
        message: "Check out our latest collab!"
    },
    {
        text: "Thank you for being a loyal subscriber!",
        time: "1 week ago",
        message: "We appreciate your support!"
    }
];

// Function to render messages
function renderMessages() {
    const messageList = document.getElementById('message-list');
    messages.forEach((message, index) => {
        const messageItem = document.createElement('div');
        messageItem.className = 'message-item';

        // Randomly select a sender from the senders array
        const sender = senders[index % senders.length]; // Cycle through senders

        const avatar = document.createElement('img');
        avatar.src = sender.avatar;
        avatar.alt = `${sender.name} Avatar`;
        avatar.className = 'message-avatar';

        const messageInfo = document.createElement('div');
        messageInfo.className = 'message-info';

        const messageSender = document.createElement('div');
        messageSender.className = 'message-sender';
        messageSender.textContent = sender.name; // Use the sender's name

        const messageText = document.createElement('div');
        messageText.className = 'message-text';
        messageText.textContent = message.text;

        const messageTime = document.createElement('div');
        messageTime.className = 'message-time';
        messageTime.textContent = message.time;

        const messageDetail = document.createElement('div');
        messageDetail.className = 'message-detail';
        messageDetail.textContent = message.message; // Display the additional message

        messageInfo.appendChild(messageSender);
        messageInfo.appendChild(messageText);
        messageInfo.appendChild(messageTime);
        messageInfo.appendChild(messageDetail); // Append the additional message
        messageItem.appendChild(avatar);
        messageItem.appendChild(messageInfo);
        messageList.appendChild(messageItem);
    });
}

// Call the function to render messages on page load
document.addEventListener('DOMContentLoaded', renderMessages);