import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    // Change background image every 20 seconds
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === 1 ? 2 : 1));
    }, 5000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  const backgroundImage = `url('https://github.com/akankshakokade/Kokde-Electrical/blob/main/kokde-electrical/src/Images/bg1.jpg?raw=true')`;

  return (
    <section
      className="h-screen bg-cover bg-center relative transition-all duration-1000"
      style={{ backgroundImage }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto flex items-center justify-center h-full text-white text-center relative">
        <div>
          {currentImage === 1 ? (
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Keep electricity safe with us</h1>
            </div>
          ) : (
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Electrical service Provider</h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-8">
                We offer professional, cost-effective solutions.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

