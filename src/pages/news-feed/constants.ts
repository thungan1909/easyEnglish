interface Post {
  id: string | number;
  userName: string;
  content: string;
  time: string;
}

export const mockPosts: Post[] = [
  {
    id: 1,
    userName: "Quoc An",
    content: "Congratulations Quoc An for successfully submitted podcast!",
    time: "About 4000hr of listening",
  },
  {
    id: 2,
    userName: "ngbt1302",
    content: "Congratulations ngbt1302 for finishing your new course!",
    time: "After 167hr of listening",
  },
  // ... more posts
];

export const mockRecommendations = [
  { id: 1, title: "Are you drinking enough water?" },
  { id: 2, title: "EE: The new experience" },
  { id: 3, title: "Paying the rent" },
  { id: 4, title: "Sick day" },
  { id: 5, title: "Best breakfast time" },
  // ... more items
];
