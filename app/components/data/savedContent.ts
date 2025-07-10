export interface SavedItem {
  id: string;
  title: string;
  timestamp: string;
  image: string;
}

export const savedItems: SavedItem[] = [
  {
    id: '1',
    title: 'Title',
    timestamp: '8',
    image: 'https://m.media-amazon.com/images/I/81eB+7+CkUL.jpg',
  },
  {
    id: '2',
    title: 'Title',
    timestamp: '8',
    image: 'https://m.media-amazon.com/images/I/81vpsIs58WL.jpg',
  },
  {
    id: '3',
    title: 'Title',
    timestamp: '8',
    image: 'https://m.media-amazon.com/images/I/81af+MCATTL.jpg',
  },
  {
    id: '4',
    title: 'Title',
    timestamp: '8',
    image: 'https://m.media-amazon.com/images/I/81eB+7+CkUL.jpg',
  },
  {
    id: '5',
    title: 'Title',
    timestamp: '8',
    image: 'https://m.media-amazon.com/images/I/81vpsIs58WL.jpg',
  },
  {
    id: '6',
    title: 'Title',
    timestamp: '8',
    image: 'https://m.media-amazon.com/images/I/81af+MCATTL.jpg',
  },
];

export interface CollectionItem {
  id: string;
  title: string;
  image: string;
  privacy: string
}

export const collectionItems: CollectionItem[] = [
  {
    id: '1',
    title: 'Dummy Title',
    image: 'https://plus.unsplash.com/premium_vector-1720519321450-a6d0af3ad81d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfHBJRjdsNV9oZ3hnfHxlbnwwfHx8fHw%3D',
    privacy: 'private'
  },
  {
    id: '2',
    title: 'Dummy Title',
    image: 'https://plus.unsplash.com/premium_vector-1722616893789-753a386213d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8cElGN2w1X2hneGd8fGVufDB8fHx8fA%3D%3D',
    privacy: 'public'
  },
  {
    id: '3',
    title: 'Dummy Title',
    image: 'https://plus.unsplash.com/premium_vector-1704297953445-401fa52ee4aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8cElGN2w1X2hneGd8fGVufDB8fHx8fA%3D%3D',
    privacy: 'private'
  },
  {
    id: '4',
    title: 'Dummy Title',
    image: 'https://images.unsplash.com/vector-1751371522435-541de0019335?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fHBJRjdsNV9oZ3hnfHxlbnwwfHx8fHw%3D',
    privacy: 'private'
  },
  {
    id: '5',
    title: 'Dummy Title',
    image: 'https://plus.unsplash.com/premium_vector-1720519321450-a6d0af3ad81d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfHBJRjdsNV9oZ3hnfHxlbnwwfHx8fHw%3D',
    privacy: 'public'
  },
]