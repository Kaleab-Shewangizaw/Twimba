import { tweetsData } from './data.js';




function feedCreator() {
  let feedHTML = '';
  tweetsData.forEach(tweet => {
    feedHTML += `
    <div class="tweet">
      <div class="tweet-header">
        <img src="${tweet.profilePic}" alt="Profile Picture" class="profile-pic">
        <div class="handle">${tweet.handle}</div>
      </div>
      <div class="tweet-body">
        <p>${tweet.tweetText}</p>
          </div>
        </div>`;
      });
  return feedHTML;
    }
    


function renderFeed() {
  document.getElementById('feed').innerHTML = feedCreator();
}

renderFeed();