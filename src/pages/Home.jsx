import { useSelector } from "react-redux";
import Post from "../components/Post";
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const HomePage = () => {
  const posts = useSelector((state) => state.posts);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  console.log(posts);
  return (
    <div>
      <nav className="flex justify-between items-center bg-blue-600 text-white p-6">
        <h1 className="text-3xl font-bold">Instagram Clone</h1>
        <div className="text-xl ">
          <Link to={"/"}>Home</Link>

          <Link className="mx-4" to={"/add-post"}>
            Add Post
          </Link>
          <Link to={"/save-post"}>Save Post</Link>
        </div>
        <div className="flex items-center gap-2 text-xl">
          <CgProfile />
          {user && <p className="uppercase mr-2">{user.name}</p>}
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>
      {posts
        .sort((a, b) => a.id - b.id)
        .map((post, ind) => (
          <Post key={ind} post={post} />
        ))}
    </div>
  );
};

export default HomePage;
