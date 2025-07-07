// data/users.ts

export interface User {
  id: string
  name: string
  avatar: string
  cover: string
  bio: string
}

export interface Post {
  caption: string
  image: string
}

export const users: User[] = [
  {
    id: "1",
    name: "Den Cleavon Babas",
    avatar:'https://www.newsnationnow.com/wp-content/uploads/sites/108/2022/07/Cat.jpg?w=2560&h=1440&crop=1',
    cover: 'https://picsum.photos/200/300',
    bio: 'this is a test bio',
  },
  
]

export const posts: Post[] = [
    {
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis in risus ac suscipit. Phasellus nec pretium dui. Sed cursus ipsum vestibulum vestibulum sagittis.',
      image: 'https://images.pexels.com/photos/31241763/pexels-photo-31241763.jpeg?_gl=1*bgxrn4*_ga*MTkwMzUyNjU0OC4xNzUxNjE1MTM3*_ga_8JE65Q40S6*czE3NTE2MTUxMzckbzEkZzEkdDE3NTE2MTUxNDAkajU3JGwwJGgw',
    },

    {
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis in risus ac suscipit. Phasellus nec pretium dui. Sed cursus ipsum vestibulum vestibulum sagittis.',
      image: 'https://images.pexels.com/photos/31241763/pexels-photo-31241763.jpeg?_gl=1*bgxrn4*_ga*MTkwMzUyNjU0OC4xNzUxNjE1MTM3*_ga_8JE65Q40S6*czE3NTE2MTUxMzckbzEkZzEkdDE3NTE2MTUxNDAkajU3JGwwJGgw',
    },

    {
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis in risus ac suscipit. Phasellus nec pretium dui. Sed cursus ipsum vestibulum vestibulum sagittis.',
      image: 'https://images.pexels.com/photos/31241763/pexels-photo-31241763.jpeg?_gl=1*bgxrn4*_ga*MTkwMzUyNjU0OC4xNzUxNjE1MTM3*_ga_8JE65Q40S6*czE3NTE2MTUxMzckbzEkZzEkdDE3NTE2MTUxNDAkajU3JGwwJGgw',
    }
]