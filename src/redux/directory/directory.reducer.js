const INITIAL_STATE = {
  sections: [
    {
      title: "romance",
      imageUrl: "https://i.ibb.co/QQs9Qsg/romance.jpg",
      id: 1,
      linkUrl: "shop/romance",
    },
    {
      title: "Historical",
      imageUrl: "https://i.ibb.co/YDKNz8y/histotical.jpg",
      id: 2,
      linkUrl: "shop/historical",
    },
    {
      title: "Horror",
      imageUrl: "https://i.ibb.co/7QR6484/maxresdefault.jpg",
      id: 3,
      linkUrl: "shop/horror",
    },
    {
      title: "Science-Fiction",
      imageUrl: "https://i.ibb.co/bPMFZb4/avtar.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/science-fiction",
    },
    {
      title: "Biography",
      imageUrl: "https://i.ibb.co/nDRwLxH/einstein.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/biography",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
