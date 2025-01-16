import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

export const tweetsData = [{
  handle: "Kaleab Shewangizaw",
  profilePic: "./images/pp1.jpg",
  id: uuidv4(),
  likes: 100,
  retweets: 200,
  tweetText: "Here I am tweeting about something that I don't know about. #coding #javascript #reactjs",
  replies: [
    {
      handle: "Elon Musk",
      profilePic: "./images/pp2.jpg",
      id: uuidv4(),
      likes: 10,
      retweets: 20,
      tweetText: "I am replying to your tweet. #coding #javascript #reactjs",
    },
    {
      handle: "Github",
      profilePic: "./images/pp3.jpg",
      id: uuidv4(),
      likes: 10,
      retweets: 20,
      tweetText: "I am also replying to your tweet. #coding #javascript #reactjs",
    }
]},
{
  handle: "Elon Musk",
  profilePic: "./images/pp2.jpg",
  id: uuidv4(),
  likes: 100,
  retweets: 200,
  tweetText: "Here I am tweeting about something that I don't know about. #coding #javascript #reactjs",
  replies: [
    {
      handle: "Kaleab Shewangizaw",
      profilePic: "./images/pp1.jpg",
      id: uuidv4(),
      likes: 10,
      retweets: 20,
      tweetText: "I am replying to your tweet. #coding #javascript #reactjs",
    },
    {
      handle: "Github",
      profilePic: "./images/pp3.jpg",
      id: uuidv4(),
      likes: 10,
      retweets: 20,
      tweetText: "I am also replying to your tweet. #coding #javascript #reactjs",
    }
]},
{
  handle: "Github",
  profilePic: "./images/pp3.jpg",
  id: uuidv4(),
  likes: 100,
  retweets: 200,
  tweetText: "Here I am tweeting about something that I don't know about. #coding #javascript #reactjs",
  replies: [
    {
      handle: "Kaleab Shewangizaw",
      profilePic: "./images/pp1.jpg",
      id: uuidv4(),
      likes: 10,
      retweets: 20,
      tweetText: "I am replying to your tweet. #coding #javascript #reactjs",
    },
    {
      handle: "John Doe",
      profilePic: "./images/pp2.jpg",
      id: uuidv4(),
      likes: 10,
      retweets: 20,
      tweetText: "I am also replying to your tweet. #coding #javascript #reactjs",
    }
]},
{
  handle: "Someone",
  profilePic: "./images/pp1.jpg",
  id: uuidv4(),
  likes: 100,
  retweets: 200,
  tweetText: "Here I am tweeting about something that I don't know about. #coding #javascript #reactjs",
  replies: []
}];


