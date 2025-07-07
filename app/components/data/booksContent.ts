interface RecommendedBook {
  cover: string;
  title: string;
  description: string;
}


export const recommended: RecommendedBook[] = [
    {
        cover: "https://blog-cdn.reedsy.com/directories/gallery/248/large_65b0ae90317f7596d6f95bfdd6131398.jpg",
        title: "Beyond the Ocean Door",
        description: "a telepathy fantasy adventure novel by Amisha Sathi, published in December 2024, that tells the story of Kallista, a young telepath with no memory of her early life, struggling for personal autonomy within a telepathic world controlled by the powerful telepathic warrior Valeria Reed"
    },

    {
        cover: 'https://i.ebayimg.com/images/g/JRAAAOSwGihfalVv/s-l1200.jpg',
        title: "Charlotte's Web",
        description: 'A story of friendship, courage, and self-sacrifice',
  },

    {
        cover: 'https://m.media-amazon.com/images/I/81-QB7nDh4L.jpg',
        title: 'Thinking, Fast and Slow',
        description: 'A groundbreaking tour of the mind by Daniel Kahneman.',
  },

    {
        cover: 'https://raketcontent.com/1/Book_Cover_Design_Editable_Graphic_RPH_20240612_070904_0000_20bcd5a5ab.png',
        title: 'Enchanted to Meet You',
        description: 'A witchy rom-com from New York Times bestseller Meg Cabot about a plus size witch who must team up with a handsome stranger to help protect her village from an otherworldly force.',
    }
]

export interface NewBooks {
  cover: string;
  title: string;
}

export const newBooks: NewBooks[] = [
    {
        cover: "https://blog-cdn.reedsy.com/directories/gallery/248/large_65b0ae90317f7596d6f95bfdd6131398.jpg",
        title: "Beyond the Ocean Door"
    },

    {
        cover: 'https://m.media-amazon.com/images/I/81-QB7nDh4L.jpg',
        title: 'Thinking, Fast and Slow',
    },

    {
        cover: "https://i.ebayimg.com/images/g/JRAAAOSwGihfalVv/s-l1200.jpg",
        title: "Charlotte's Web"
    },

    {
        cover: 'https://raketcontent.com/1/Book_Cover_Design_Editable_Graphic_RPH_20240612_070904_0000_20bcd5a5ab.png',
        title: 'Enchanted to Meet You',
    }
]

export interface FictionBooks {
  cover: string;
  title: string;
}

export const fictionBooks: FictionBooks[] = [
    {
        cover: 'https://raketcontent.com/1/Book_Cover_Design_Editable_Graphic_RPH_20240612_070904_0000_20bcd5a5ab.png',
        title: 'Enchanted to Meet You',
    },

    {
        cover: "https://blog-cdn.reedsy.com/directories/gallery/248/large_65b0ae90317f7596d6f95bfdd6131398.jpg",
        title: "Beyond the Ocean Door"
    },


    {
        cover: "https://i.ebayimg.com/images/g/JRAAAOSwGihfalVv/s-l1200.jpg",
        title: "Charlotte's Web"
    },


]