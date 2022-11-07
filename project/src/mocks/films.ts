type Film = {
  id: number;
  name: string;
  posterImage: string;
  previewImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  previewVideoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
  genre: string;
  released: number;
  isFavorite: boolean;
};

const films: Film[] = [
  {
    id: 1,
    name:'The Grand Budapest Hotel',
    posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
    previewImage: 'img/the-grand-budapest-hotel.jpg',
    backgroundImage: 'img/the-grand-budapest-hotel-bg.jpg',
    backgroundColor: '#E1B0B2',
    videoLink: 'https://artem-malutin.ru/video/the-grand-budapest-hotel.mp4',
    previewVideoLink: 'https://artem-malutin.ru/video/the-grand-budapest-hotel.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    rating: 8.9,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: [
      'Bill Murray',
      'Edward Norton',
      'Jude Law'
    ],
    runTime: 99,
    genre: 'Drama',
    released: 2014,
    isFavorite: false
  },
  {
    id: 2,
    name:'Aviator',
    posterImage: 'img/aviator-poster.jpg',
    previewImage: 'img/aviator.jpg',
    backgroundImage: 'img/aviator-bg.jpg',
    backgroundColor: '#C5995B',
    videoLink: 'https://artem-malutin.ru/video/aviator.mp4',
    previewVideoLink: 'https://artem-malutin.ru/video/aviator.mp4',
    description: 'A biopic depicting the early years of legendary director and aviator Howard Hughes\' career from the late 1920s to the mid 1940s.',
    rating: 7.5,
    scoresCount: 362,
    director: 'Martin Scorsese',
    starring: [
      'Leonardo DiCaprio',
      'Cate Blanchett',
      'Kate Beckinsale'
    ],
    runTime: 170,
    genre: 'Drama',
    released: 2004,
    isFavorite: false
  },
  {
    id: 3,
    name:'Bohemian Rhapsody',
    posterImage: 'img/bohemian-rhapsody-poster.jpg',
    previewImage: 'img/bohemian-rhapsody.jpg',
    backgroundImage: 'img/bohemian-rhapsody-bg.jpg',
    backgroundColor: '#C29CC8',
    videoLink: 'https://artem-malutin.ru/video/bohemian-rhapsody.mp4',
    previewVideoLink: 'https://artem-malutin.ru/video/bohemian-rhapsody.mp4',
    description: 'The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid (1985).',
    rating: 7.9,
    scoresCount: 536,
    director: 'Bryan Singer',
    starring: [
      'Rami Malek',
      'Lucy Boynton',
      'Gwilym Lee'
    ],
    runTime: 134,
    genre: 'Music',
    released: 2018,
    isFavorite: false
  },
  {
    id: 4,
    name:'Pulp Fiction',
    posterImage: 'img/pulp-fiction-poster.jpg',
    previewImage: 'img/pulp-fiction.jpg',
    backgroundImage: 'img/pulp-fiction-bg.jpg',
    backgroundColor: '#BA877F',
    videoLink: 'https://artem-malutin.ru/video/pulp-fiction.mp4',
    previewVideoLink: 'https://artem-malutin.ru/video/pulp-fiction.mp4',
    description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    rating: 8.9,
    scoresCount: 200,
    director: 'Quentin Tarantino',
    starring: [
      'John Travolta',
      'Uma Thurman',
      'Samuel L. Jackson'
    ],
    runTime: 154,
    genre: 'Crime',
    released: 1994,
    isFavorite: false
  },
  {
    id: 5,
    name:'Revenant',
    posterImage: 'img/revenant-poster.jpg',
    previewImage: 'img/revenant.jpg',
    backgroundImage: 'img/revenant-bg.jpg',
    backgroundColor: '#AFCBDD',
    videoLink: 'https://artem-malutin.ru/video/revenant.mp4',
    previewVideoLink: 'https://artem-malutin.ru/video/revenant.mp4',
    description: 'A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.',
    rating: 8.0,
    scoresCount: 799,
    director: 'Alejandro G. Iñárritu',
    starring: [
      'Leonardo DiCaprio',
      'Tom Hardy',
      'Will Poulter'
    ],
    runTime: 156,
    genre: 'Adventure',
    released: 2015,
    isFavorite: false
  },
  {
    id: 6,
    name:'Snatch',
    posterImage: 'img/snatch-poster.jpg',
    previewImage: 'img/snatch.jpg',
    backgroundImage: 'img/snatch-bg.jpg',
    backgroundColor: '#EBEBEB',
    videoLink: 'https://artem-malutin.ru/video/snatch.mp4',
    previewVideoLink: 'https://artem-malutin.ru/video/snatch.mp4',
    description: 'Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.',
    rating: 8.2,
    scoresCount: 853,
    director: 'Guy Ritchie',
    starring: [
      'Jason Statham',
      'Brad Pitt',
      'Stephen Graham'
    ],
    runTime: 102,
    genre: 'Comedy',
    released: 2000,
    isFavorite: false
  },
  {
    id: 7,
    name:'War of the Worlds',
    posterImage: 'img/war-of-the-worlds-poster.jpg',
    previewImage: 'img/war-of-the-worlds.jpg',
    backgroundImage: 'img/war-of-the-worlds-bg.jpg',
    backgroundColor: '#D1CFBD',
    videoLink: 'https://artem-malutin.ru/video/war-of-the-worlds.mp4',
    previewVideoLink: 'https://artem-malutin.ru/video/war-of-the-worlds.mp4',
    description: 'An alien invasion threatens the future of humanity. The catastrophic nightmare is depicted through the eyes of one American family fighting for survival.',
    rating: 6.5,
    scoresCount: 449,
    director: 'Steven Spielberg',
    starring: [
      'Tom Cruise',
      'Dakota Fanning',
      'Tim Robbins'
    ],
    runTime: 116,
    genre: 'Sci-Fi',
    released: 2005,
    isFavorite: false
  },
  {
    id: 8,
    name:'Shutter Island',
    posterImage: 'img/shutter-island-poster.jpg',
    previewImage: 'img/shutter-island.jpg',
    backgroundImage: 'img/shutter-island-bg.jpg',
    backgroundColor: '#7AB6C8',
    videoLink: 'https://artem-malutin.ru/video/shutter-island.mp4',
    previewVideoLink: 'https://artem-malutin.ru/video/shutter-island.mp4',
    description: 'In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.',
    rating: 8.2,
    scoresCount: 130,
    director: 'Martin Scorsese',
    starring: [
      'Leonardo DiCaprio',
      'Emily Mortimer',
      'Mark Ruffalo'
    ],
    runTime: 138,
    genre: 'Thriller',
    released: 2010,
    isFavorite: false
  }
];

export { films };

