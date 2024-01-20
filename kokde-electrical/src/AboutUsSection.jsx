// AboutUsSection.jsx
// import React from 'react';
// const AboutUsSection = () => {
//   return (
//     <section id="about" className="py-16 text-center bg-gray-200">
//       <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">About Us</h2>
//       {/* Add content about your company */}
//       <p className="text-lg md:text-xl lg:text-2xl mb-8">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget odio euismod, rhoncus leo vitae, dictum eros.
//       </p>
//     </section>
//   );
// };
// export default AboutUsSection;

// AboutUsSection.jsx

import React from 'react';
const AboutUsSection = () => {
  return (
    <section id="about" className="py-16 text-center bg-gray-200">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">About Us</h2>
      <p className="text-lg md:text-xl lg:text-2xl mb-8">
        Who we are and what we do
      </p>
      <p className="text-lg md:text-xl lg:text-2xl mb-8">
        Tejal Electrical is a Govt. Licensed Electrical Contractor. Started as a small business in 2007, Tejal Electrical has since designed and built many of the most complex commercial and industrial projects in Maharashtra. Our projects feature essential electrical, communications. Many local residences also benefit from our services—no project is too big or too small for our dedicated crew.
      </p>

      {/* Vision Card */}
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
        <div className="bg-white p-6 rounded-md shadow-md md:w-1/2">
          <h3 className="text-xl font-bold mb-4">Our Vision</h3>
          {/* You can replace the image source with your own */}
          <img src="path/to/vision-image.png" alt="Vision" className="mb-4 w-16 h-16 mx-auto" />
          <p>
            To be the leader in providing comprehensive solutions to help our customers take advantage of their opportunities. We strive to be the best by offering a standard of workmanship and knowledge, safe working procedures, practices and policies, and the installation of quality apparatus.
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-white p-6 rounded-md shadow-md md:w-1/2">
          <h3 className="text-xl font-bold mb-4">Our Mission</h3>
          {/* You can replace the image source with your own */}
          <img src="path/to/mission-image.png" alt="Mission" className="mb-4 w-16 h-16 mx-auto" />
          <p>
            Our never-ending goal is to create outstanding solutions for our clients and build long-lasting relationships by taking on a partnership role and providing quality work, knowledge of the industry, and the best possible customer service on an ongoing basis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;

