// Array of channel data with cover images
const channels = [
    {
        name: "veasna channel",
        subscribers: "10K subscribers",
        avatar: "https://yt3.googleusercontent.com/CeIJhO56wktYccyy_2kUAdm8_YqZcQpoA69hwzttpqEyqXeBSCQ79vvrsEFdfrTE7BwsplhdSQ=s160-c-k-c0x00ffffff-no-rj", // Avatar
        cover: "https://yt3.googleusercontent.com/qRNWdOZWC4hL_YxdOPspb4JXWOjL8IyiB1LZU8ojh4STiNZwy6k4CV0A2hjppaaObMhRG_q_zQ=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj", // Cover
        subscribeLink: "https://www.youtube.com/@vungveasna.channel?sub_confirmation=1"
    },
    {
        name: "Channel Name 2",
        subscribers: "500K subscribers",
        avatar: "https://yt3.googleusercontent.com/CeIJhO56wktYccyy_2kUAdm8_YqZcQpoA69hwzttpqEyqXeBSCQ79vvrsEFdfrTE7BwsplhdSQ=s160-c-k-c0x00ffffff-no-rj", // Avatar
        cover: "https://yt3.googleusercontent.com/qRNWdOZWC4hL_YxdOPspb4JXWOjL8IyiB1LZU8ojh4STiNZwy6k4CV0A2hjppaaObMhRG_q_zQ=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj", // Cover
        subscribeLink: "https://www.youtube.com/@vungveasna.channel?sub_confirmation=1"
    },
    {
        name: "Channel Name 3",
        subscribers: "250K subscribers",
        avatar: "https://yt3.googleusercontent.com/CeIJhO56wktYccyy_2kUAdm8_YqZcQpoA69hwzttpqEyqXeBSCQ79vvrsEFdfrTE7BwsplhdSQ=s160-c-k-c0x00ffffff-no-rj", // Avatar
        cover: "https://yt3.googleusercontent.com/qRNWdOZWC4hL_YxdOPspb4JXWOjL8IyiB1LZU8ojh4STiNZwy6k4CV0A2hjppaaObMhRG_q_zQ=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj", // Cover
        subscribeLink: "https://www.youtube.com/@vungveasna.channel?sub_confirmation=1"
    },
    {
        name: "Channel Name 4",
        subscribers: "1.5M subscribers",
        avatar: "https://yt3.googleusercontent.com/CeIJhO56wktYccyy_2kUAdm8_YqZcQpoA69hwzttpqEyqXeBSCQ79vvrsEFdfrTE7BwsplhdSQ=s160-c-k-c0x00ffffff-no-rj", // Avatar
        cover: "https://yt3.googleusercontent.com/qRNWdOZWC4hL_YxdOPspb4JXWOjL8IyiB1LZU8ojh4STiNZwy6k4CV0A2hjppaaObMhRG_q_zQ=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj", // Cover
        subscribeLink: "https://www.youtube.com/@vungveasna.channel?sub_confirmation=1"
    },
    {
        name: "Channel Name 5",
        subscribers: "300K subscribers",
        avatar: "https://yt3.googleusercontent.com/CeIJhO56wktYccyy_2kUAdm8_YqZcQpoA69hwzttpqEyqXeBSCQ79vvrsEFdfrTE7BwsplhdSQ=s160-c-k-c0x00ffffff-no-rj", // Avatar
        cover: "https://yt3.googleusercontent.com/qRNWdOZWC4hL_YxdOPspb4JXWOjL8IyiB1LZU8ojh4STiNZwy6k4CV0A2hjppaaObMhRG_q_zQ=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj", // Cover
        subscribeLink: "https://www.youtube.com/@vungveasna.channel?sub_confirmation=1"
    },
    {
        name: "Channel Name 6",
        subscribers: "800K subscribers",
        avatar: "https://yt3.googleusercontent.com/CeIJhO56wktYccyy_2kUAdm8_YqZcQpoA69hwzttpqEyqXeBSCQ79vvrsEFdfrTE7BwsplhdSQ=s160-c-k-c0x00ffffff-no-rj", // Avatar
        cover: "https://yt3.googleusercontent.com/qRNWdOZWC4hL_YxdOPspb4JXWOjL8IyiB1LZU8ojh4STiNZwy6k4CV0A2hjppaaObMhRG_q_zQ=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj", // Cover
        subscribeLink: "https://www.youtube.com/@vungveasna.channel?sub_confirmation=1"
    },
    {
        name: "Channel Name 7",
        subscribers: "1.2M subscribers",
        avatar: "https://yt3.googleusercontent.com/CeIJhO56wktYccyy_2kUAdm8_YqZcQpoA69hwzttpqEyqXeBSCQ79vvrsEFdfrTE7BwsplhdSQ=s160-c-k-c0x00ffffff-no-rj", // Avatar
        cover: "https://yt3.googleusercontent.com/qRNWdOZWC4hL_YxdOPspb4JXWOjL8IyiB1LZU8ojh4STiNZwy6k4CV0A2hjppaaObMhRG_q_zQ=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj", // Cover
        subscribeLink: "https://www.youtube.com/@vungveasna.channel?sub_confirmation=1"
    },
    {
        name: "Channel Name 8",
        subscribers: "600K subscribers",
        avatar: "https://yt3.googleusercontent.com/CeIJhO56wktYccyy_2kUAdm8_YqZcQpoA69hwzttpqEyqXeBSCQ79vvrsEFdfrTE7BwsplhdSQ=s160-c-k-c0x00ffffff-no-rj", // Avatar
        cover: "https://yt3.googleusercontent.com/qRNWdOZWC4hL_YxdOPspb4JXWOjL8IyiB1LZU8ojh4STiNZwy6k4CV0A2hjppaaObMhRG_q_zQ=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj", // Cover
        subscribeLink: "https://www.youtube.com/@vungveasna.channel?sub_confirmation=1"
    },
    {
        name: "Channel Name 9",
        subscribers: "400K subscribers",
        avatar: "https://yt3.googleusercontent.com/CeIJhO56wktYccyy_2kUAdm8_YqZcQpoA69hwzttpqEyqXeBSCQ79vvrsEFdfrTE7BwsplhdSQ=s160-c-k-c0x00ffffff-no-rj", // Avatar
        cover: "https://yt3.googleusercontent.com/qRNWdOZWC4hL_YxdOPspb4JXWOjL8IyiB1LZU8ojh4STiNZwy6k4CV0A2hjppaaObMhRG_q_zQ=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj", // Cover
        subscribeLink: "https://www.youtube.com/@vungveasna.channel?sub_confirmation=1"
    },
    {
        name: "Channel Name 10",
        subscribers: "900K subscribers",
        avatar: "https://yt3.googleusercontent.com/CeIJhO56wktYccyy_2kUAdm8_YqZcQpoA69hwzttpqEyqXeBSCQ79vvrsEFdfrTE7BwsplhdSQ=s160-c-k-c0x00ffffff-no-rj", // Avatar
        cover: "https://yt3.googleusercontent.com/qRNWdOZWC4hL_YxdOPspb4JXWOjL8IyiB1LZU8ojh4STiNZwy6k4CV0A2hjppaaObMhRG_q_zQ=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj", // Cover
        subscribeLink: "https://www.youtube.com/@vungveasna.channel?sub_confirmation=1"
    }
];

// Function to render channels with cover images
function renderChannels() {
    const channelList = document.getElementById('channel-list');
    channels.forEach(channel => {
        const channelItem = document.createElement('div');
        channelItem.className = 'channel-item';

        // Create cover image element
        const cover = document.createElement('img');
        cover.src = channel.cover; // Set cover image source
        cover.alt = `${channel.name} Cover`;
        cover.className = 'channel-cover'; // Add class for styling

        const avatar = document.createElement('img');
        avatar.src = channel.avatar;
        avatar.alt = `${channel.name} Avatar`;
        avatar.className = 'channel-avatar';

        const channelInfo = document.createElement('div');
        channelInfo.className = 'channel-info';

        const channelName = document.createElement('div');
        channelName.className = 'channel-name';
        channelName.textContent = channel.name;

        const channelSubscribers = document.createElement('div');
        channelSubscribers.className = 'channel-subscribers';
        channelSubscribers.textContent = channel.subscribers;

        const subscribeButton = document.createElement('a'); // Change to anchor tag
        subscribeButton.className = 'subscribe-button';
        subscribeButton.textContent = 'Subscribe';
        subscribeButton.href = channel.subscribeLink; // Set the href to the subscribe link
        subscribeButton.target = "_blank"; // Open in a new tab

        // Append elements to the channel item
        channelItem.appendChild(cover); // Append cover image
        channelItem.appendChild(avatar);
        channelInfo.appendChild(channelName);
        channelInfo.appendChild(channelSubscribers);
        channelItem.appendChild(channelInfo);
        channelItem.appendChild(subscribeButton);
        channelList.appendChild(channelItem);
    });
}

// Call the function to render channels on page load
document.addEventListener('DOMContentLoaded', renderChannels);