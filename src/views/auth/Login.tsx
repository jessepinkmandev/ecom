import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { messageClear, seller_login } from "../../store/Reducers/authReducer";
import toast from "react-hot-toast";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loader, errorMessage, successMessage } = useSelector(
    (state) => state.auth
  );

  const [input, setInput] = useState({
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
    dispatch(seller_login(input));
  };

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      navigate("/");
    }
  }, [successMessage, errorMessage]);
  return (
    <div className="min-w-screen min-h-screen bg-[#FFAD60] flex justify-center items-center ">
      <div className="w-[350px] text-[#fff] p-2">
        <div className="bg-[#A66E38] p-4 rounded-md">
          <h2 className="text-2xl mb-3 font-bold">Welcome to J Mart </h2>
          <p className="text-sm mb-3 font-medium">Please Sign In Here</p>
          <div className=" hover:cursor-pointer flex items-center mb-3 gap-3 justify-left">
            Don't have an account?.....
            <Link className="font-bold" to="/register">
              Register
            </Link>
          </div>

          <form onSubmit={handleSubmit}>
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

            <button
              disabled={loader ? true : false}
              className=" bg-slate-800 w-full hover:shadow-blue-300 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3 "
            >
              {loader ? (
                <PropagateLoader className="h-4" color="#fff" />
              ) : (
                "Sign In"
              )}
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

export default Login;
