import React, { useState, useEffect } from "react";
import "./App.css";
import Gallery from "./Components/Gallery/Gallery";
import Button from "./Components/Button/Button";
import useApiImages from "./Hooks/FetchImages";

const getRandomImages = (images = [], numberOfImages = 5) => {
  const shuffled = images.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numberOfImages);
};

function App() {
  const [images] = useApiImages();
  const [displayImages, setDisplayImages] = useState();
  const onRefreshButtonClick = () => {
    const chosenImages = getRandomImages(images, 5);
    setDisplayImages(chosenImages);
  };

  useEffect(() => {
    setDisplayImages(images.slice(0, 5));
  }, [images]);

  return (
    <div className="App">
      <Gallery images={displayImages} />
      <div className="button-warper">
        <Button testId="refresh-btn" onClick={onRefreshButtonClick}>
          Refresh
        </Button>
      </div>
    </div>
  );
}

export default App;
