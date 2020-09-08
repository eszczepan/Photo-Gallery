import React from "react";
import { motion } from "framer-motion";
import "./style/Gallery.css";

const Gallery = ({ data, setModalImg }) => {
  return (
    <ul>
      {data &&
        data.map(({ id, download_url, author }) => (
          <motion.li key={id} onClick={() => setModalImg(download_url)}>
            <motion.img
              src={download_url}
              alt={author}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            />
          </motion.li>
        ))}
    </ul>
  );
};

export default Gallery;
