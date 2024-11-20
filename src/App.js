import { BrowserRouter as Router } from "react-router-dom"; // Use BrowserRouter instead of Router
import Header from "./components/Header";
import backgroundImage from "./Images/background.png"; 
import image01 from "./Images/image 2.png"; 
import image02 from "./Images/image 1.png"; 

function App() {
  return (
    <Router>
      <Header />

      <main>
      <div>
        <section
          className="hero bg-cover bg-center h-screen flex flex-col md:flex-row items-start justify-start text-white px-4"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <div className="text-center w-full md:w-[35rem] bg-gradient-to-r from-teal-500 to-blue-500 p-10 rounded-lg ml-0 md:ml-20 mt-auto md:mt-[20rem]">
            <h1 className="text-2xl md:text-4xl font-bold text-left mb-4 md:text-left items-start">
              We Crush Your <br />
              Competitors, Goals, And <br />
              Sales Records - Without <br />
              The B.S.
            </h1>
            <div className="text-left">
              <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-sm mt-4 ml-0">
                Get Free Consultation
              </button>
            </div>
          </div>
        </section>
      </div>

      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div>
            <div className="flex flex-col items-center space-y-8">
              {/* First Service */}
              <div className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-6 gap-3">
                <div className="flex-shrink-0">
                  <img src={image01} alt="Logo" className="h-[20rem]" />
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-xl font-semibold mb-4 w-full md:w-[35rem]">
                    Web & Mobile App Development
                  </h3>
                  <p className="text-gray-600 mb-4">
                    We use frameworks to tailor content and engagement methods for your business.
                  </p>
                  <button className="text-white bg-secondary mt-4 py-2 px-3 rounded-sm hover:underline">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Second Service */}
              <div className="flex flex-col-reverse md:flex-row items-center justify-center space-x-0 md:space-x-6 gap-3">
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-xl font-semibold mb-4">
                    Digital Strategy Consulting
                  </h3>
                  <p className="text-gray-600 mb-4 w-full md:w-[35rem]">
                    Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation, and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
                  </p>
                  <button className="text-white bg-secondary mt-4 py-2 px-3 rounded-sm hover:underline">
                    Learn More
                  </button>
                </div>
                <div className="flex-shrink-0">
                  <img src={image02} alt="Logo" className="h-[20rem]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      </main>

      {/* Footer Section */}
      <footer className="bg-purple-700 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold">Our Technologies</h4>
              <ul>
                <li>ReactJS</li>
                <li>Gatsby</li>
                <li>NextJS</li>
                <li>NodeJS</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Our Services</h4>
              <ul>
                <li>Social Media Marketing</li>
                <li>Web & Mobile App Development</li>
                <li>Data & Analytics</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Contact Us</h4>
              <p>info@atdigital.com</p>
            </div>
          </div>
          <p className="text-center mt-4">&copy; 2024 AT Digital</p>
        </div>
      </footer>
    </Router>
  );
}

export default App;
