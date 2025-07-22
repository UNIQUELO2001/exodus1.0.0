export interface Chat {
  id: string
  name: string
  avatar: string
  lastMessage: string
  time: string
  messages: { from: 'me' | 'other'; text: string }[]
}

export const chatList: Chat[] = [
  {
    id: '1',
    name: 'Alice',
    avatar: 'https://plus.unsplash.com/premium_photo-1718737640748-32411ed4b9a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdGl2ZSUyMGJsYWNrfGVufDB8fDB8fHww',
    lastMessage: 'Hey there!',
    time: '2h ago',
    messages: [
      { from: 'other', text: 'Hello!' },
      { from: 'me', text: 'Hi Alice!' },
    ],
  },
  {
    id: '2',
    name: 'Bob',
    avatar: 'https://plus.unsplash.com/premium_photo-1724695600333-7e4400b51029?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0aXZlJTIwYmxhY2t8ZW58MHx8MHx8fDA%3D',
    lastMessage: 'Let’s meet tomorrow.',
    time: '5h ago',
    messages: [
      { from: 'me', text: 'Are we meeting today?' },
      { from: 'other', text: 'Let’s meet tomorrow.' },
    ],
  },
]
