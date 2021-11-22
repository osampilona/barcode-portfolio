import React, { useState, useEffect } from "react";
import "../styles/Gallery.css";
import { useTheme } from "../hooks/useTheme";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TopNavBar from "./TopNavBar";
import axios from "axios";
import { REACT_APP_URL } from "../config";
import ScaleLoader from "react-spinners/ScaleLoader";

const Gallery = () => {
  const { mode } = useTheme();
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = REACT_APP_URL;

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(url);
      const allPhotos = data.data.photoset.photo;
      if (allPhotos.length > 0) {
        setPhotos([...allPhotos]);
        setLoading(false);
      }
    };
    getData();
  }, []);

  console.log("PHOTOS:: ", photos);
  console.log(loading);

  return (
    <div className={`container-gallery ${mode}`}>
      <TopNavBar />
      <Navbar />
      {photos.length === 0 && mode === "light" ? (
        <ScaleLoader color={"#222"} loading={loading} size={30} />
      ) : (
        <ScaleLoader color={"#fff"} loading={loading} size={30} />
      )}
      <section className="image-gallery">
        {photos.map((photo) => {
          let source = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
          return <img key={photo.id} src={source} alt={photo.farm}></img>;
        })}
      </section>
      <Footer />
    </div>
  );
};

export default Gallery;
