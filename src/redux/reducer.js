const initialState = {
  user: localStorage.getItem("user"),
  posts: [
    {
      id: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1682687982141-0143020ed57a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
      comments: ["nice", "beautifull photo"],
    },

    {
      id: 2,
      imageUrl:
        "https://images.unsplash.com/photo-1682687982141-0143020ed57a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
      comments: ["nice", "beautifull photo"],
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      localStorage.setItem("user", action.payload.name);
      return {
        ...state,
        user: action.payload,
      };
    case "ADD_POST":
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };

    case "ADD_COMMENT":
      console.log(action.payload);
      return {
        ...state,
        posts: [...state.posts],
      };

    default:
      return state;
  }
};

export default rootReducer;
