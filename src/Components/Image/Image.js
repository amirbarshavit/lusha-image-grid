import React from "react";
import "./Image.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
function Image(props) {
  const { width, height, imageData } = props;
  const { url, description, likes } = imageData;

  return (
    <div className="image">
      <img src={url} width={width} height={height} alt="" />
      <div className="image-additional-data">
        <div className="likes">
          <FontAwesomeIcon icon={faHeart} />
          {` ${likes}`}
        </div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
}

export default Image;
