import React, { useState } from "react";
import "./App.css";
import ModalMessage from "./lantern/modal/message/Modal"; // Component modal
import ModalLove from "./lantern/modal/love/ModalLove"; // Component modal
function App() {
  const [activeModal, setActiveModal] = useState(null); // Lưu trữ modal đang mở
  const openModal = (modalId) => {
    setActiveModal(modalId); // Mở modal với id tương ứng
  };

  const closeModal = () => {
    setActiveModal(null); // Đóng modal
  };
  return (
    <>
      <div id="moon_behind" className="circle">
        <h2>Thanh</h2>
        <h2>Hà</h2>
      </div>
      <div id="moon_yellow" className="circle">
        <h2>Thanh</h2>
        <h2>Hà</h2>
        <div className="heyu"></div>
      </div>
      <div id="moon_body" className="circle">
        <div id="rabbit">
          <div className="body">
            <div className="body1" />
            <div className="body2" />
            <div className="hand1" />
            <div className="foot1" />
            <div className="foot2" />
            <div className="tail" />
          </div>
          <div className="head">
            <div className="mouth" />
            <div className="ear1" />
            <div className="ear2" />
          </div>
        </div>
        <div id="rabbit_little">
          <p />
        </div>
      </div>
      <div
        className="lantern"
        style={{ "--l": "15%", "--t": "7%", "--scale": 0.9 }}
        onClick={() => openModal(1)}
      />
      <div
        className="lantern"
        style={{ "--r": "15%", "--t": "5%", "--scale": 1 }}
        onClick={() => openModal(2)}
      />
      <div
        className="lantern"
        style={{ "--l": "8%", "--t": "30%", "--scale": 0.3 }}
      />
      <div
        className="lantern"
        style={{ "--r": "6%", "--t": "20%", "--scale": 0.6 }}
      />
      <div
        className="lantern"
        style={{ "--r": "12%", "--t": "38%", "--scale": 0.2 }}
      />
      <div
        className="cloud"
        style={{
          "--t": "77%",
          "--scale": 0.8,
          "--rotateY": "0",
          "--color": "#ce7808",
          "--time": "8s",
        }}
      >
        <div className="cloud1"></div>
        <div className="cloud2"></div>
        <div className="cloud3"></div>
        <div className="cloud4"></div>
        <div className="cloud5"></div>
        <div className="cloud6"></div>
      </div>
      <div
        className="cloud"
        style={{
          "--t": "77%",
          "--scale": 0.9,
          "--rotateY": "0",
          "--color": "#05aaab",
          "--time": "4s",
        }}
      >
        <div className="cloud1"></div>
        <div className="cloud2"></div>
        <div className="cloud3"></div>
        <div className="cloud4"></div>
        <div className="cloud5"></div>
        <div className="cloud6"></div>
      </div>
      <div
        className="cloud"
        style={{
          "--t": "52%",
          "--scale": 0.5,
          "--rotateY": "0",
          "--color": "#fff",
          "--time": "0s",
        }}
      >
        <div className="cloud1"></div>
        <div className="cloud2"></div>
        <div className="cloud3"></div>
        <div className="cloud4"></div>
        <div className="cloud5"></div>
        <div className="cloud6"></div>
      </div>
      <div
        className="cloud cloud_reverse"
        style={{
          "--t": "68%",
          "--scale": 0.8,
          "--rotateY": "180deg",
          "--color": "#fff",
          "--time": "8s",
        }}
      >
        <div className="cloud1"></div>
        <div className="cloud2"></div>
        <div className="cloud3"></div>
        <div className="cloud4"></div>
        <div className="cloud5"></div>
        <div className="cloud6"></div>
      </div>
      <div
        className="cloud cloud_reverse"
        style={{
          "--t": "64%",
          "--scale": 0.4,
          "--rotateY": "180deg",
          "--color": "#fa0e7c",
          "--time": "3s",
        }}
      >
        <div className="cloud1"></div>
        <div className="cloud2"></div>
        <div className="cloud3"></div>
        <div className="cloud4"></div>
        <div className="cloud5"></div>
        <div className="cloud6"></div>
      </div>
      <div
        className="cloud cloud_reverse"
        style={{
          "--t": "85%",
          "--scale": 0.3,
          "--rotateY": "180deg",
          "--color": "#6ee136",
          "--time": "0s",
        }}
      >
        <div className="cloud1"></div>
        <div className="cloud2"></div>
        <div className="cloud3"></div>
        <div className="cloud4"></div>
        <div className="cloud5"></div>
        <div className="cloud6"></div>
      </div>
      {activeModal === 1 && <ModalMessage onClose={closeModal}/>}
      {activeModal === 2 && <ModalLove onClose={closeModal}/>}
      {/* {activeModal === 3 && <Modal onClose={closeModal} title="Modal 3" />}
      {activeModal === 4 && <Modal onClose={closeModal} title="Modal 4" />} */}
    </>
  );
}

export default App;
