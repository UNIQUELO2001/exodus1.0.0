export interface Reel {
  id: string;
  username: string;
  caption: string;
  video: string; // or use image
  avatar: string;
}

export const reels: Reel[] = [
  {
    id: '1',
    username: 'user1',
    caption: 'Check this out! 😍',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    avatar: 'https://placekitten.com/100/100',
  },
  {
    id: '2',
    username: 'user2',
    caption: 'Epic moment 🔥',
    video: 'https://www.w3schools.com/html/movie.mp4',
    avatar: 'https://placekitten.com/101/100',
  },
];
