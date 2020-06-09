const initState = {
  posts: [
    {
      id: "1",
      title: "lorem lasfjalsfjalsdf",
      body: "fdsaffffffffffffffff askdfhkajsdfhkasd khasdkjfh",
    },
    {
      id: "2",
      title: "lorem lasfjalsfjalsdf -2",
      body: "fdsaffffffffffffffff askdfhkajsdfhkasd khasdkjfh -2",
    },
    {
      id: "3",
      title: "lorem lasfjalsfjalsdf -3",
      body: "fdsaffffffffffffffff askdfhkajsdfhkasd khasdkjfh -3",
    },
  ],
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
