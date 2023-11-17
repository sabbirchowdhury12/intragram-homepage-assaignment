import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../redux/action";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const navigate = useNavigate();
  console.log(posts);
  const [imageUrl, setImageUrl] = useState("");
  const handleAddPost = () => {
    const post = {
      id: posts.length + 1,
      imageUrl,
      comments: [],
    };
    dispatch(addPost(post));
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-3xl font-bold uppercase mb-4"> Add Post</p>

      <input
        type="text"
        className="border border-black  p-2 mb-4 w-3/5"
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="enter image url"
      />
      <button className="bg-blue-600 text-white p-2" onClick={handleAddPost}>
        {" "}
        Add Post
      </button>
    </div>
  );
};

export default AddPost;
