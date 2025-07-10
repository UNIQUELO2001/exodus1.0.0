interface RecommendedAudiobook {
    cover: string;
    title: string;
    description: string;
}

export const recommended: RecommendedAudiobook[] = [
    {
        cover: "https://blog.libro.fm/wp-content/uploads/true-biz-3-1-768x768.jpg",
        title: "True Biz by Sara Novic",
        description: "NEW YORK TIMES BESTSELLER • REESE’S BOOK CLUB PICK • A “tender, beautiful and radiantly outraged” (The New York Times Book Review) novel that follows a year of seismic romantic, political, and familial shifts for a teacher and her students at a boarding school for the deaf, from the acclaimed author of Girl at War"
    },

    {
        cover: "https://blog.libro.fm/wp-content/uploads/9781250868862_1120-768x768.jpg",
        title: "Strangers to Ourselves by Rachel Aviv",
        description: "The acclaimed, award-winning New Yorker writer Rachel Aviv offers a groundbreaking exploration of mental illness and the mind, and illuminates the startling connections between diagnosis and identity."
    },

    {
        cover: "https://blog.libro.fm/wp-content/uploads/9781250875938_1120-768x768.jpg",
        title: "Bliss Montage by Ling Ma",
        description: "A new creation by the author of Severance, Bliss Montage crashes through our carefully built mirages."
    }
]

export interface NewAudiobook {
  cover: string;
  title: string;
}

export const newAudiobook: NewAudiobook[] = [
    {
        cover: "https://blog.libro.fm/wp-content/uploads/9781250868862_1120-768x768.jpg",
        title: "Strangers to Ourselves by Rachel Aviv",
    },

    {
        cover: "https://blog.libro.fm/wp-content/uploads/9781250875938_1120-768x768.jpg",
        title: "Bliss Montage by Ling Ma",
    },

    {
        cover: "https://blog.libro.fm/wp-content/uploads/9781250835567_1120-768x768.jpg",
        title: "Olga Dies Dreaming by Xochitl Gonzalez",
    },

    {
        cover: "https://blog.libro.fm/wp-content/uploads/9780593557211_1120-768x768.jpg",
        title: "We Do What We Do in the Dark by Michelle Hart",
    },

    {
        cover: "https://blog.libro.fm/wp-content/uploads/9781250868893_1120-768x768.jpg",
        title: "The Book of Goose by Yiyun Li",
    },

    {
        cover: "https://blog.libro.fm/wp-content/uploads/9780593587003_1120-768x768.jpg",
        title: "Either/Or by Elif Bateman",
    }
]

export interface JusticeAudiobook {
  cover: string;
  title: string;
}

export const justiceAudiobook: JusticeAudiobook[] = [
    {
        cover: "https://blog.libro.fm/wp-content/uploads/9781250868893_1120-768x768.jpg",
        title: "The Book of Goose by Yiyun Li",
    },

    {
        cover: "https://blog.libro.fm/wp-content/uploads/9780593587003_1120-768x768.jpg",
        title: "Either/Or by Elif Bateman",
    },

    {
        cover: "https://blog.libro.fm/wp-content/uploads/9781250868862_1120-768x768.jpg",
        title: "Strangers to Ourselves by Rachel Aviv",
    },

    {
        cover: "https://blog.libro.fm/wp-content/uploads/9781250875938_1120-768x768.jpg",
        title: "Bliss Montage by Ling Ma",
    },

    {
        cover: "https://blog.libro.fm/wp-content/uploads/9781250835567_1120-768x768.jpg",
        title: "Olga Dies Dreaming by Xochitl Gonzalez",
    }


]