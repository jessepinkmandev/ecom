import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PropagateLoader } from "react-spinners";
import { admin_login, messageClear } from "../../store/Reducers/authReducer";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    dispatch(admin_login(input));
    console.log(input);
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
          <div>
            <img
              className="h-32 w-full object-cover my-2 px-4  "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCi-5QjvGFlVdqQEO256zBt_G-u_TUpr2KHA&s"
              alt="a picture of our logo"
            />
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
                type="password"
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
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
