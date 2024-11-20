import { BrowserRouter as Router } from "react-router-dom"; // Use BrowserRouter instead of Router
import Header from "./components/Header";
import backgroundImage from "./Images/background.png"; // Import background image

function App() {
  return (
    <Router>
      <Header />

      <main>
      <section
        className="hero bg-cover bg-center h-screen flex items-start justify-start text-white px-4"
        style={{
          backgroundImage: `url(${backgroundImage})`, // Use imported backgroundImage
        }}
      >
      <div className="text-center w-full md:w-[35rem] bg-gradient-to-r from-teal-500 to-blue-500 p-10 rounded-lg ml-0 mt-[20rem]">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center md:text-left items-start">
          We Crush Your <br />
          Competitors, Goals, And <br />
          Sales Records - Without <br />
          The B.S.
        </h1>
        <div className="text-left">
          <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-full mt-4 ml-0">
            Get Free Consultation
          </button>
        </div>
      </div>

      </section>



        {/* Services Section */}
        <section id="services" className="py-16">
          <div className="container mx-auto px-4">
            <div>
              <div className="bg-white p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Web & Mobile App Development
                </h3>
                <p>
                  We use frameworks to tailor content and engagement methods for
                  your business.
                </p>
                <button className="text-orange-500 mt-4 hover:underline">
                  Learn More
                </button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4">
                  Digital Strategy Consulting
                </h3>
                <p>
                  Your strategy should complement your overall marketing efforts
                  for growth.
                </p>
                <button className="text-orange-500 mt-4 hover:underline">
                  Learn More
                </button>
              </div>
              {/* Add more service blocks as needed */}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="border p-4 rounded-lg shadow">
                <h3 className="font-semibold mb-2 cursor-pointer">
                  What is your main focus?
                </h3>
                <p className="text-gray-600">
                  Our main focus is helping businesses thrive digitally.
                </p>
              </div>
              {/* Add more FAQ items */}
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
