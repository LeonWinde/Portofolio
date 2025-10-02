import { useCallback, useEffect, useState } from "react";
import "./header.css";
const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const imageUrls = ["/img1.jpg", "/img2.jpg", "/img3.jpg"];

  const handleAnimation = useCallback(async () => {
    if (isAnimating) return; // Prevent multiple clicks during animation

    setIsAnimating(true);

    // Wait for animation to complete (2s as defined in CSS)
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
      setIsAnimating(false);
    }, 2000); // Match the animation duration in CSS (2s)
  }, [isAnimating, imageUrls.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleAnimation();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImageIndex, handleAnimation]);

  return (
    <>
      <div className="headerComponent">
        <img
          src={imageUrls[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="header-image"
        />
        <img
          src={imageUrls[(currentImageIndex + 1) % imageUrls.length]}
          alt={`Image ${((currentImageIndex + 1) % imageUrls.length) + 1}`}
          className={`header-image ${isAnimating ? "animate" : ""}`}
        />
        <div className="absolute inset-[20vh] text-center text-white text-shadow-md text-shadow-black">
          <h1 className="text-6xl font-bold mb-4">Leon Winde</h1>
          <p className="text-2xl">Webdeveloper with a passion for creating stunning websites</p>
        </div>
      </div>
    </>
  );
};
export default Header;
