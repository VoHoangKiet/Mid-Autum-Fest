import React from "react";
import "./Modal.css"; // File chứa CSS cho modal

const Modal = ({ onClose }) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-auto overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-full max-w-lg my-6 mx-auto">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-modal-bg bg-cover bg-center outline-none focus:outline-none h-96">
            {/*header*/}
            <div className="flex items-start justify-between px-5 border-b border-solid border-blueGray-200 rounded-t">
              <h1>
                <b>Lời Chúc Của Anh</b>
              </h1>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={onClose}
              >
                <span className="bg-transparent text-white h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto text-white">
              <p className="my-4 text-3xl leading-relaxed">
                Chúc em đêm trung thu thiệc dui dẻ và ngọt ngào giống như anh nhé❤️
              </p>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b"></div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Modal;
