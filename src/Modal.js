import React from "react";
import { motion } from "framer-motion";
import "./style/Modal.css";

const Modal = ({ setModalImg, modalImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("modal")) {
      setModalImg(null);
    } else return;
  };

  return (
    <motion.div
      className="modal"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={modalImg}
        alt="modal-image"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
      />
    </motion.div>
  );
};

export default Modal;
