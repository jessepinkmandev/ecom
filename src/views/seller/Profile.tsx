import { FaEdit, FaImage } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { FadeLoader, PropagateLoader } from "react-spinners";
import {
  messageClear,
  profile_image_upload,
  profile_info_add,
} from "../../store/Reducers/authReducer";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Profile = () => {
  const [profileDetails, setProfileDetails] = useState({
    division: "",
    district: "",
    shopName: "",
    subdistrict: "",
  });

  const { userInfo, loader, successMessage } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const style = { input: `flex flex-col w-full gap-1 mb-2` };
  const status = "active";

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      messageClear();
    }
  }, [successMessage]);

  const add_image_seller = (e) => {
    if (e.target.files.length > 0) {
      const formData = new FormData();
      formData.append("image", e.target.files[0]);
      dispatch(profile_image_upload(formData));
    }
  };
  // import this later

  const inputHandle = (e) => {
    setProfileDetails({
      ...profileDetails,
      [e.target.name]: e.target.value,
    });
  };

  const add = (e) => {
    e.preventDefault();
    dispatch(profile_info_add(profileDetails));
  };
  return (
    <div className="px-2 lg:px-7 py-5 text-white">
      <div className="w-full flex flex-wrap ">
        <div className="w-full md:w-6/12">
          <div className="w-full p-4 bg-slate-500 rounded-md ">
            <div className="flex justify-center items-center py-3">
              {userInfo?.image ? (
                <label
                  className="h-40 w-52 relative p-3 cursor-pointer overflow-hidden "
                  htmlFor="img"
                >
                  <img src={userInfo.image} alt="" />
                  {loader && (
                    <div className="bg-slate-600 absolute left-0 top-0 w-full h-full opacity-70 flex justify-center items-center z-20">
                      <span>
                        <FadeLoader />
                      </span>
                    </div>
                  )}
                </label>
              ) : (
                <label
                  htmlFor="img"
                  className="flex justify-center items-center flex-col h-40 w-52 border border-dashed hover:border-red-500 border-white relative "
                >
                  <span>
                    <FaImage />
                  </span>
                  <span>Select Image</span>
                  {loader && (
                    <div className="bg-slate-600 absolute left-0 top-0 w-full h-full opacity-70 flex justify-center items-center z-20">
                      <span>
                        <FadeLoader />
                      </span>
                    </div>
                  )}
                </label>
              )}
              <input
                onChange={add_image_seller}
                type="file"
                className="hidden"
                id="img"
              />
            </div>

            <div className="px-0 md:px-5 py-2">
              <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-slate-700 rounded-md relative ">
                <span className="p-1.5 bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50 absolute right-2 top-2  cursor-pointer ">
                  <FaEdit />
                </span>
                <div className="flex gap-2 ">
                  <span className="">{`Name: ${userInfo.name}`}</span>
                </div>
                <div className="flex gap-2 ">
                  <span className="">{`Email: ${userInfo.email} `}</span>
                </div>
                <div className="flex gap-2 ">
                  <span className="">{`Role: ${userInfo.role}`} </span>
                </div>
                <div className="flex gap-2 ">
                  <span className="">{`Status: ${userInfo.name}`} </span>
                </div>
                <div className="flex gap-2 ">
                  <span className="">Payment Account: </span>
                  <p>
                    {status === "active" ? (
                      <span className="bg-red-500 text-white text-xs cursor-pointer font-normal ml-2 px-2 py-0.5 rounded">
                        {userInfo.payment}
                      </span>
                    ) : (
                      <span className="bg-blue-500 text-white text-xs cursor-pointer font-nor mal ml-2 px-2 py-0.5 rounded">
                        Click Active
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div className="px-0 md:px-5 py-2">
              {!userInfo?.shopInfo ? (
                <form onSubmit={add}>
                  <div className={style.input}>
                    <label htmlFor="shopName">Shop Name</label>
                    <input
                      value={profileDetails.shopName}
                      onChange={inputHandle}
                      className="bg-slate-500 px-4 py-2 focus:border-indigo-200 outline-none border border-slate-700 rounded-md "
                      type="text"
                      name="shopName"
                      id="shopName"
                      placeholder="Shop name..."
                    />
                  </div>

                  <div className={style.input}>
                    <label htmlFor="division">Division Name</label>
                    <input
                      value={profileDetails.division}
                      onChange={inputHandle}
                      className="bg-slate-500 px-4 py-2 focus:border-indigo-200 outline-none border border-slate-700 rounded-md "
                      type="text"
                      name="division"
                      id="division"
                      placeholder="Division name..."
                    />
                  </div>

                  <div className={style.input}>
                    <label htmlFor="district">District Name</label>
                    <input
                      value={profileDetails.district}
                      onChange={inputHandle}
                      className="bg-slate-500 px-4 py-2 focus:border-indigo-200 outline-none border border-slate-700 rounded-md "
                      type="text"
                      name="district"
                      id="district"
                      placeholder="District name..."
                    />
                  </div>

                  <div className={style.input}>
                    <label htmlFor="subdistrict">Subdistrict Name</label>
                    <input
                      value={profileDetails.subdistrict}
                      onChange={inputHandle}
                      className="bg-slate-500 px-4 py-2 focus:border-indigo-200 outline-none border border-slate-700 rounded-md "
                      type="text"
                      name="subdistrict"
                      id="subdistrict"
                      placeholder="Subdistrict name..."
                    />
                  </div>
                  <button
                    disabled={loader ? true : false}
                    className=" bg-red-500 w-[300px] hover:shadow-lg hover:shadow-red-300/50 text-white rounded-md mt-4 px-7 py-2 mb-3 "
                  >
                    {loader ? (
                      <PropagateLoader className="h-4" color="#fff" />
                    ) : (
                      "Add Changes "
                    )}
                  </button>
                </form>
              ) : (
                <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-slate-700 rounded-md relative ">
                  <span className="p-1.5 bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50 absolute right-2 top-2  cursor-pointer ">
                    <FaEdit />
                  </span>
                  <div className="flex gap-2 ">
                    <span className="">
                      Shop Name: <span>{userInfo.shopInfo?.shopName}</span>
                    </span>
                  </div>
                  <div className="flex gap-2 ">
                    <span className="">
                      Division: <span>{userInfo.shopInfo?.division}</span>
                    </span>
                  </div>
                  <div className="flex gap-2 ">
                    <span className="">
                      District: <span>{userInfo.shopInfo?.district}</span>
                    </span>
                  </div>
                  <div className="flex gap-2 ">
                    <span className="">
                      Sub District:{" "}
                      <span>{userInfo.shopInfo?.subdistrict}</span>
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full md:w-6/12">
          <div className="w-full pl-0 md:mx-3 mt-6 pb-3 md:mt-0 bg-slate-600 rounded-md text-white">
            <div className="rounded-md p-4">
              <h1 className="py-4 text-lg font-semibold">Change Password</h1>
              <form>
                <div className={style.input}>
                  <label htmlFor="email">Email </label>
                  <input
                    className="bg-slate-500 px-4 py-2 focus:border-indigo-200 outline-none border border-slate-700 rounded-md "
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email..."
                  />
                </div>

                <div className={style.input}>
                  <label htmlFor="oldpassword"> Old Password</label>
                  <input
                    className="bg-slate-500 px-4 py-2 focus:border-indigo-200 outline-none border border-slate-700 rounded-md "
                    type="password"
                    name="oldpassword"
                    id="oldpassword"
                    placeholder="Old Password ..."
                  />
                </div>

                <div className={style.input}>
                  <label htmlFor="newpassword">New Password </label>
                  <input
                    className="bg-slate-500 px-4 py-2 focus:border-indigo-200 outline-none border border-slate-700 rounded-md "
                    type="password"
                    name="newpassword"
                    id="newpassword"
                    placeholder="New Password..."
                  />
                </div>
                <button className="bg-red-500  hover:shadow-red-500/40 hover:shadow-md text-white rounded-md py-2 px-4 my-2">
                  Set Password{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
