/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { PiShareFatFill } from "react-icons/pi";
import { MdSaveAlt } from "react-icons/md";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../redux/action";

const Post = ({ post }) => {
  const [like, setLike] = useState(false);
  const [comment, setComment] = useState("");
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const handleSavePost = (id) => {
    const savePost = JSON.parse(localStorage.getItem("save-post")) || [];
    const filteredPosts = savePost.filter((postId) => postId != id);
    filteredPosts.push(id);
    localStorage.setItem("save-post", JSON.stringify(filteredPosts));
    toast.success("post saved");
  };

  const handleAddComment = (id) => {
    const selectedPost = posts.find((post) => (post.id = id));
    const filteredPosts = posts.filter((post) => post.id != id);
    console.log(selectedPost);
    selectedPost.comments.push(comment);
    const allpost = [...filteredPosts, selectedPost];
    dispatch(addComment(allpost));
  };
  return (
    <div className="flex flex-col  justify-center items-center w-full my-10">
      <img src={post.imageUrl} alt="Post" />
      <div>
        <div className="flex justify-between mt-5 items-center text-2xl ">
          <div title="like" onClick={() => setLike(!like)}>
            {like ? <AiFillLike /> : <AiOutlineLike />}
          </div>
          <PiShareFatFill title="share" />
          <MdSaveAlt onClick={() => handleSavePost(post.id)} title="save" />
        </div>

        <button className="text-2xl underline my-2">Comments</button>
        {post?.comments?.map((comment) => {
          return <p key={comment}>{comment}</p>;
        })}
      </div>
      <div>
        <input
          type="text"
          placeholder="write a comment"
          onChange={(e) => setComment(e.target.value)}
          className="border-b border-black mt-4  p-2  text-black "
        />
        <button
          onClick={() => handleAddComment(post.id)}
          className="ml-2 bg-blue-600 p-2 rounded text-white"
        >
          add
        </button>
      </div>
    </div>
  );
};

export default Post;
