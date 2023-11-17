import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/action";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    const user = { name };
    dispatch(setUser(user));
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold uppercase mb-4">Sign In</h1>
      <form onSubmit={handleSignIn}>
        <input
          type="text"
          placeholder="enter your name"
          className="border border-black  p-2 mr-4"
          value={name}
          onChange={handleChange}
        />
        <button className="bg-blue-600 text-white p-2" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
