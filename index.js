import { tweetsData } from "./data.js";

function feedCreator() {
  let feedHTML = "";
  tweetsData.forEach((tweet) => {
    feedHTML += `
    <div class="tweet">
      <div class="tweet-header">
        <img src="${tweet.profilePic}" alt="avatar" />
        <h2>${tweet.handle}</h2>  <!-- Fixed missing '<' -->
      </div>
      <p>${tweet.tweetText}</p>
      <div class="tweet-footer">
        <span>${tweet.likes} Likes</span>
        <span>${tweet.retweets} Retweets</span>
        <span>${tweet.replies.length} Replies</span>  <!-- Fixed missing '<' -->
      </div>
    </div>
    `;
  });
  return feedHTML;
}

function renderFeed() {
  const theFeed = document.getElementById("feed");  // Correctly obtain the element
  theFeed.innerHTML = feedCreator();  // Set innerHTML to the generated feed
  console.log(feedCreator());
}

// Wait for the DOM to load before running renderFeed
document.addEventListener("DOMContentLoaded", renderFeed);
