export const setUser = (user) => ({
  type: "SET_USER",
  payload: user,
});
export const addPost = (post) => ({
  type: "ADD_POST",
  payload: post,
});
export const addComment = (posts) => ({
  type: "ADD_COMMENT",
  payload: posts,
});
