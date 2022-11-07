type Review = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: {
    id: number;
    name: string;
  };
};

const reviews: Review[] = [
  {
    comment: 'Hasta la vista, baby!',
    date: 'Mon Dec 25 1991 00:00:00 GMT+0300 (Москва, стандартное время)',
    id: 1,
    rating: 9.9,
    user: {
      id: 1,
      name: 'Arnold Schwarzenegger'
    }
  },
  {
    comment: 'Houston, we have a problem.',
    date: 'Mon Jun 30 1998 00:00:00 GMT+0300 (Москва, стандартное время)',
    id: 2,
    rating: 8.1,
    user: {
      id: 2,
      name: 'Bruce Willis'
    }
  },
  {
    comment: 'Bond. James Bond.',
    date: 'Mon Nov 16 2006 00:00:00 GMT+0300 (Москва, стандартное время)',
    id: 3,
    rating: 6.1,
    user: {
      id: 3,
      name: 'Daniel Craig'
    }
  },
  {
    comment: 'I love the smell of napalm in the morning.',
    date: 'Mon Jul 17 2003 00:00:00 GMT+0300 (Москва, стандартное время)',
    id: 4,
    rating: 8.9,
    user: {
      id: 4,
      name: 'Robert Duvall'
    }
  },
  {
    comment: 'I\'ll be back.',
    date: 'Mon Dec 26 1991 00:00:00 GMT+0300 (Москва, стандартное время)',
    id: 5,
    rating: 5.7,
    user: {
      id: 1,
      name: 'Arnold Schwarzenegger'
    }
  },
  {
    comment: 'May the Force be with you.',
    date: 'Mon May 25 1977 00:00:00 GMT+0300 (Москва, стандартное время)',
    id: 6,
    rating: 6.0,
    user: {
      id: 5,
      name: 'Mark Hamill'
    }
  }
];

export { reviews };
