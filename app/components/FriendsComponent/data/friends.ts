export interface Friend {
  id: string
  name: string
  bio: string
  avatar: string
  location: string
  post: string
  caption: string
  isFriends: boolean
}

export const friendList: Friend[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    bio: 'Loves hiking and coffee.',
    avatar: 'https://i.pravatar.cc/150?img=1',
    location: 'New York, USA',
    post: "https://images.unsplash.com/photo-1674683546151-b5a847f1803c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0aXZlJTIwYmxhY2t8ZW58MHx8MHx8fDA%3D",
    caption: "Bird's Eye view",
    isFriends: true
  },
  {
    id: '2',
    name: 'Bob Smith',
    bio: 'React Native developer.',
    avatar: 'https://i.pravatar.cc/150?img=2',
    location: 'Tokyo, Japan',
    post: "https://images.unsplash.com/photo-1616315168316-61d6e5f16ead?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YW50aXF1ZXxlbnwwfHwwfHx8MA%3D%3D",
    caption: "Old but gold",
    isFriends: false
  },
]
