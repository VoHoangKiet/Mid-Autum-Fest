import React, { useState } from "react";
import "./ModalLove.css"; // File chứa CSS cho modal

const Modal = ({ onClose }) => {
  const [buttonPosition, setButtonPosition] = useState({
    top: "56%",
    left: "60%",
  });

  const handleMouseEnter = () => {
    // Tạo vị trí ngẫu nhiên trong khoảng 0-80% cho top và left
    const randomTop = Math.floor(Math.random() * 80) + "%";
    const randomLeft = Math.floor(Math.random() * 80) + "%";
    setButtonPosition({ top: randomTop, left: randomLeft });
  };
  const [hearts, setHearts] = useState([]);

  const handleMouseEnterHeart = () => {
    const newHearts = Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // Tạo vị trí ngẫu nhiên cho trái tim
      delay: Math.random() * 2, // Tạo độ trễ ngẫu nhiên cho từng trái tim
    }));
    setHearts(newHearts);
  };

  const handleMouseLeave = () => {
    setHearts([]);
  };
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative w-full max-w-3xl mx-auto">
          {" "}
          {/* max-w-3xl: Tăng chiều rộng modal */}
          {/* Modal content */}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-cover bg-center h-96 p-6 bg-modal-bg-love">
            {" "}
            {/* h-96: Tăng chiều cao modal */}
            {/* Modal body */}
            <div className="flex flex-col items-center justify-center text-white">
              <h1 className="text-3xl font-bold text-center mb-6 py-14">
                Thích anh ròi chớ gì (●ˇ∀ˇ●)
              </h1>
              {/* Button container */}
              <div className="flex justify-between w-full px-32">
                <button
                  className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-lg transition duration-300"
                  style={{
                    top: buttonPosition.top,
                    left: buttonPosition.left,
                    position: "absolute",
                  }}
                  onMouseEnter={handleMouseEnter}
                >
                  Hong hề
                </button>
                <button
                  onClick={() => {
                    setTimeout(onClose, 1500);
                  }}
                  onMouseEnter={handleMouseEnterHeart}
                  onMouseLeave={handleMouseLeave}
                  className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition duration-300"
                >
                  Rất thic lunnn
                </button>
                {hearts.map((heart) => (
                  <span
                    key={heart.id}
                    className="heart"
                    style={{
                      left: `${heart.left}%`,
                      animationDelay: `${heart.delay}s`,
                    }}
                  >
                    ❤️
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
