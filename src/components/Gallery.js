import React, { useState, useEffect } from "react";
import "../styles/Gallery.css";
import { useTheme } from "../hooks/useTheme";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TopNavBar from "./TopNavBar";
import axios from "axios";
import { REACT_APP_URL } from "../config";

const Gallery = () => {
  const { mode } = useTheme();
  const [photos, setPhotos] = useState([]);

  const url = REACT_APP_URL;

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(url);
      const allPhotos = data.data.photoset.photo;
      if (allPhotos.length > 0) {
        setPhotos([...allPhotos]);
      }
    };
    getData();
  }, []);

  console.log("PHOTOS:: ", photos);

  // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg

  return (
    <div className={`container-gallery ${mode}`}>
      <TopNavBar />
      <Navbar />
      {photos.length === 0 ? <h1>Loading</h1> : null}
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
