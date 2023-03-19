import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { IMAGES_DATA } from "../../data/mockData";

const ImageCarousel = ({
  images,
  imageToDisplay = 4,
  imageWidth = "150px",
  className,
}) => {
  const data = images || IMAGES_DATA;
  const [startIndex, setStartIndex] = useState(0);
  const leftArrowRef = useRef(null);
  const rightArrowRef = useRef(null);

  const handlePrevClick = () => {
    const newStartIndex = Math.max(startIndex - 1, 0);
    setStartIndex(newStartIndex);
  };

  const handleNextClick = () => {
    const newStartIndex = Math.min(
      startIndex + 1,
      data.length - imageToDisplay
    );
    setStartIndex(newStartIndex);
  };

  useEffect(() => {
    if (leftArrowRef.current) {
      leftArrowRef.current.style.display = startIndex === 0 ? "none" : "block";
    }
    if (rightArrowRef.current) {
      rightArrowRef.current.style.display =
        startIndex === data.length - imageToDisplay ? "none" : "block";
    }
  }, [startIndex, data.length, imageToDisplay]);

  return (
    <div
      className={`hidden md:flex relative justify-around items-center gap-3 my-5 h-40 ${className}`}
    >
      <div
        onClick={handlePrevClick}
        className="text-xl absolute left-0 hover:bg-white/30 active:bg-white/50 rounded-full px-3 py-1 z-50"
        ref={leftArrowRef}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      {data
        .slice(startIndex, startIndex + imageToDisplay)
        .map(({ imageTitle, imagePath }, indexId) => (
          <div key={indexId} className="flex">
            <img
              className="rounded-md"
              title={imageTitle}
              width={imageWidth}
              src={imagePath}
              alt={imageTitle}
            />
          </div>
        ))}
      <div
        onClick={handleNextClick}
        className="text-xl absolute right-0 hover:bg-white/30 active:bg-white/50 rounded-full px-3 py-1"
        ref={rightArrowRef}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </div>
  );
};

export default ImageCarousel;
