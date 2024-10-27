import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useState } from "react";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <div className="min-w-screen min-h-screen bg-[#FFAD60] flex justify-center items-center ">
      <div className="w-[350px] text-[#fff] p-2">
        <div className="bg-[#A66E38] p-4 rounded-md">
          <h2 className="text-2xl mb-3 font-bold">Welcome to J Mart </h2>
          <p className="text-sm mb-3 font-medium">Please Register Here</p>
          <div className=" hover:cursor-pointer flex items-center mb-3 gap-3 justify-left">
            Already have an account?.....
            <Link className="font-bold" to="/login">
              Sign In
            </Link>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex text-xl flex-col w-full gap-1 mb-3">
              <label htmlFor="name">Name</label>
              <input
                onChange={handleInput}
                value={input.name}
                className="PX-3 PY-2 outline-none border border-slate-500 bg-transparent rounded-md"
                type="text"
                name="name"
                placeholder="Enter Name Here..."
                id="name"
                required
              />
            </div>
            <div className="flex text-xl flex-col w-full gap-1 mb-3">
              <label htmlFor="email">Email</label>
              <input
                onChange={handleInput}
                value={input.email}
                className="PX-3 PY-2 outline-none border border-slate-500 bg-transparent rounded-md"
                type="email"
                name="email"
                placeholder="Enter Email Here..."
                id="email"
                required
              />
            </div>
            <div className="flex text-xl flex-col w-full gap-1 mb-3">
              <label htmlFor="password">Password</label>
              <input
                onChange={handleInput}
                value={input.password}
                className="PX-3 PY-2 outline-none border border-slate-500 bg-transparent rounded-md"
                type="text"
                name="password"
                placeholder="Enter Password Here..."
                id="password"
                required
              />
            </div>

            <div className="flex text-sm items-center w-full gap-3 mb-3">
              <input
                className=" w-4 h-4 text-blue-600 overflow-hidden bg-gray-200 rounded border-gray-300 focus:ring-blue-500 "
                type="checkbox"
                name="checkbox"
                id="checkbox"
              />
              <label htmlFor="checkbox">I Agree To Privacy Policy</label>
            </div>

            <button className=" bg-slate-800 w-full hover:shadow-blue-300 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3 ">
              Sign Up
            </button>
          </form>
          <div className=" text-center ">Or</div>

          <div className="mt-4 flex gap-3">
            <div className="flex justify-center items-center w-[50%] bg-orange-500 hover:cursor-pointer rounded-md py-3 ">
              <span>
                <FaGoogle size={20} />
              </span>
            </div>
            <div className="flex justify-center items-center w-[50%] bg-blue-500 hover:cursor-pointer rounded-md py-3 ">
              <span>
                <FaFacebook size={20} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
