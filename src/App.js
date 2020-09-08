import React, { useState, useEffect } from "react";
import "./style/App.css";
import Header from "./Header";
import Modal from "./Modal";
import Gallery from "./Gallery";

const App = () => {
  const [limit, setLimit] = useState(3);
  const [data, setData] = useState([]);
  const [modalImg, setModalImg] = useState(null);

  useEffect(() => {
    const url = `https://picsum.photos/v2/list?&limit=${limit}`;
    const getPhotosData = async () => {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data.reverse()))
        .catch((error) => {
          console.error("Error:", error);
        });
    };
    getPhotosData();
  }, [limit]);

  return (
    <div className="App">
      <Header />
      <button onClick={() => setLimit(limit + 3)}>+</button>
      <Gallery data={data} setModalImg={setModalImg} />
      {modalImg && <Modal modalImg={modalImg} setModalImg={setModalImg} />}
    </div>
  );
};

export default App;
