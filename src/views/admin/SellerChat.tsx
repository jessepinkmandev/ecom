import { useEffect, useRef, useState } from "react";
import { FaList } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  get_message_seller_admin,
  get_sellers,
  messageClear,
  send_message_seller_admin,
  updateSellerMessage,
} from "../../store/Reducers/chatReducer";
import { Link, useParams } from "react-router-dom";
import { socket } from "../../utilities/utilities";
import toast from "react-hot-toast";

const SellerChat = () => {
  const scrollRef = useRef();

  const [show, setShow] = useState(false);
  const { sellerId } = useParams();
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const {
    sellers,
    activeSeller,
    seller_admin_message,
    currentSeller,
    successMessage,
  } = useSelector((state) => state.chat);
  // console.log(seller_admin_message);

  useEffect(() => {
    dispatch(get_sellers());
  }, []);

  const send = (e) => {
    e.preventDefault();
    dispatch(
      send_message_seller_admin({
        senderId: "",
        receiverId: sellerId,
        message: text,
        senderName: "Admin Support",
      })
    );
    setText("");
  };

  useEffect(() => {
    if (sellerId) {
      dispatch(get_message_seller_admin(sellerId));
    }
  }, [sellerId]);

  useEffect(() => {
    socket.on("receive_seller_message", (msg) => {
      setMessage(msg);
    });
  }, []);

  useEffect(() => {
    if (successMessage) {
      socket.emit(
        "send_admin_to_seller_message",
        seller_admin_message[seller_admin_message.length - 1]
      );
      dispatch(messageClear());
    }
  }, [successMessage]);

  useEffect(() => {
    if (message) {
      if (message.senderId === sellerId && message.receiverId === "") {
        dispatch(updateSellerMessage(message));
      } else {
        toast.success(message.senderName + " " + "Send a message");
        dispatch(messageClear());
      }
    }
  }, [message]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behaviour: "smooth" });
  }, [seller_admin_message]);

  return (
    <div className="px-2 lg:px-7 py-5">
      <div className="w-full bg-slate-500 px=4 py-4 rounded-md h-[calc(1100vh-140px)]  ">
        <div className="flex w-full h-full relative">
          <div
            className={`w-[200px] h-full z-10 absolute md:left-0 md:relative transition-all ${
              show ? "-left-4" : "-left-[336px]"
            } `}
          >
            <div className="w-full h-[calc(100vh-177px)] ml-4 bg-slate-400 rounded-lg md:bg-transparent overflow-y-auto">
              <div className="flex text-xl justify-between items-center p-4 md:p-0 md:px-3 md:pb-3 text-white">
                <h2>Sellers</h2>
                <span
                  onClick={() => setShow(!show)}
                  className="block cursor-pointer md:hidden"
                >
                  <IoMdClose />
                </span>
              </div>
              {sellers.map((s) => (
                <Link
                  to={`/admin/dashboard/chat-seller/${s._id}`}
                  key={Math.random()}
                  className={`h-[60px] flex justify-start items-center gap-2 px-2 py-2 rounded-sm cursor-pointer ${
                    sellerId === s._id ? "bg-slate-400" : ""
                  }  text-white`}
                >
                  <div className="relative ">
                    <img
                      className="w-12 h-12 border-white border-2 rounded-full max-w-12 p-1"
                      src={s.image}
                      alt=""
                    />
                    {activeSeller.some((c) => c.sellerId === s._id) && (
                      <div className="w-3 h-3 bg-green-500 rounded-full absolute right-0 bottom-0"></div>
                    )}
                  </div>
                  <h2>{s.name}</h2>
                </Link>
              ))}
            </div>
          </div>

          <div className="w-full md:w-[calc(100%-200px)] md:pl-4 ml-4 ">
            <div className="flex justify-between items-center">
              {sellerId && (
                <div className="flex justify-start items-center gap-3">
                  <div className="relative">
                    <img
                      className="w-12 h-12 border-green-500 border-2 rounded-full max-w-12 p-1"
                      src={currentSeller.image}
                      alt=""
                    />
                    <div className="w-3 h-3 bg-green-500 rounded-full absolute right-0 bottom-0"></div>
                  </div>
                  <span className="text-white">{currentSeller.name}</span>
                </div>
              )}
              <div
                onClick={() => setShow(!show)}
                className="w-8 mr-4 flex md:hidden h-8 rounded-sm bg-blue-500 shadow-lg hover:shadow-blue-500/50 cursor-pointer items-center text-white justify-center"
              >
                <span>
                  <FaList />
                </span>
              </div>
            </div>
            <div className="py-4 ">
              <div className="bg-slate-400 h-[calc(100vh-290px)] rounded-md p-3 overflow-y-auto">
                {sellerId ? (
                  seller_admin_message.map((m) => {
                    if (m.senderId === sellerId) {
                      return (
                        <div
                          ref={scrollRef}
                          className="w-full flex justify-start items-center"
                        >
                          <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-h-full lg:max-w-[85%]">
                            <div className="">
                              <img
                                src="https://picsum.photos/200/300/?blur"
                                className="w-9 h-9 border-white border-2 rounded-full max-w-[38px] p-1"
                              />
                            </div>
                            <div className="flex justify-center items-start flex-col w-full bg-blue-500 shadow-lg shadow-blue-500/50 text-white py-1 px-2 rounded-sm">
                              <span>{m.message}</span>
                            </div>
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div
                          ref={scrollRef}
                          className="w-full flex justify-end items-center"
                        >
                          <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-h-full lg:max-w-[85%]">
                            <div className="flex justify-center items-start flex-col w-full bg-red-500 shadow-lg shadow-blue-500/50 text-white py-1 px-2 rounded-sm">
                              <span>{m.message}</span>
                            </div>
                            <div>
                              <img
                                src="https://picsum.photos/200/300/?blur"
                                className="w-9 h-9 border-white border-2 rounded-full max-w-[38px] p-1"
                              />
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })
                ) : (
                  <div className="w-full h-full flex justify-center items-center flex-col gap-2 text-white">
                    <span>Select Seller</span>
                  </div>
                )}
              </div>
            </div>

            <form onSubmit={send} className="flex gap-3 ">
              <input
                onChange={(e) => setText(e.target.value)}
                value={text}
                readOnly={sellerId ? false : true}
                type="text"
                className="flex justify-between px-2 w-full border border-slate-700 items-center py-1 focus:border-blue-400 rounded-md outline-none bg-transparent text-white "
                placeholder="Input Message Here"
              />
              <button
                disabled={sellerId ? false : true}
                className="shadow-lg bg-blue-500 hover:shadow-cyan-500/50 text-semibold w-20 h-9 rounded-md text-white flex justify-center items-center "
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerChat;
