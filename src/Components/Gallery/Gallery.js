import React, { useState, useEffect } from "react";
import Image from "../Image/Image";
import Button from "../Button/Button";
import "./Gallery.css";

function Gallery(props) {
  const { images } = props;
  const [view, setView] = useState("row");
  const changeView = () => {
    setView(view === "row" ? "column" : "row");
  };

  return (
    <div>
      <div className="button-warper-right">
        <Button
          testId="row-view-btn"
          disabled={view === "row"}
          onClick={changeView}
        >
          Row View
        </Button>
        <Button
          testId="column-view-btn"
          onClick={changeView}
          disabled={view === "column"}
        >
          Colunm View
        </Button>
      </div>
      <div className={`gallery-container ${view}`}>
        {images &&
          images.map((image) => {
            return (
              <Image
                className="gallery-item"
                imageData={image}
                width="200px"
                height="200px"
                key={image.url}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Gallery;
