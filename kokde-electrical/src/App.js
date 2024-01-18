// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//export default App;

// App.jsx

import './App.css';
import React from 'react';
import logo from './logo.svg';
import Navbar from './Navbar';
import HomeSection from './HomeSection';
import AboutUsSection from './AboutUsSection';
import ServicesSection from './ServicesSection';
import InquirySection from './InquirySection';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <AboutUsSection/>
      <ServicesSection />
      <InquirySection />
      <Footer />
    </div>
  );
};

export default App;
