// ServicesSection.jsx
// import React from 'react';

// const ServicesSection = () => {
//   return (
//     <section id="services" className="py-16 text-center bg-gray-100">
//       <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">Our Services</h2>
//       {/* Add service details here */}
//     </section>
//   );
// };

// export default ServicesSection;
// ServicesSection.jsx
// ServicesSection.jsx
//import React from 'react';
// ServicesSection.jsx
// ServicesSection.jsx
// ServicesSection.jsx
// ServicesSection.jsx
// ServicesSection.jsx
import React from 'react';

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 text-center">

      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Know more about services</h1>

        <p className="text-md md:text-lg lg:text-xl text-gray-800 mb-8">
          Our priority is to understand your business. With electrical specialists, we can tailor solutions to suit your specific environment.
        </p>

        {/* Service Categories */}
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Electrical Service */}
          <div className="md:w-1/2">
            <h2 className="text-xl font-bold mb-4">Electrical Services</h2>
            <ul >
              <li>Industrial and commercial installation</li>
              <li>Residential and multi-family installation</li>
              <li>Energy management systems</li>
              <li>Remodel and renovation</li>
              <li>Primary and secondary power distribution</li>
              <li>Telecommunications and data cabling</li>
            </ul>
            <h3 className="text-xl font-bold mb-4 mt-8">Competitive</h3>
            <p className="text-gray-800">
              <span className="font-bold"></span> We believe ethical conduct means providing our customers with excellent value for their investment in our services. You have a right to receive the quality and type of installation for which you’ve contracted.
            </p>
            <p className="text-gray-800">
              <span className="font-bold"></span> We fully honor the specifications set forth in contract documents.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2">
            {/* First Image */}
            <img src="path/to/first-image.jpg" alt="Electricity" className="w-full h-auto mb-8" />

            {/* Second Image (Overlapping by 30%) */}
            <img
              src="path/to/second-image.jpg"
              alt="Electricity"
              className="w-full h-auto absolute bottom-0 transform translate-y-1/3"
              style={{ zIndex: -1 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
