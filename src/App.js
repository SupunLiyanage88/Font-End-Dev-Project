import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import image1 from "./Images/image1.png";
import image2 from "./Images/image2.png";
import image3 from "./Images/image3.png";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-accent-white border border-primary mt-5 p-5 w-full md:w-[57rem] rounded-lg">
      <h1
        className="text-lg md:text-xl text-primary font-semibold text-left flex items-center justify-between cursor-pointer"
        onClick={toggleFAQ}
      >
        {question}
        <span className="ml-2 text-primary">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 12H4"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          )}
        </span>
      </h1>
      {isOpen && <p className="text-left text-base md:text-lg mt-3">{answer}</p>}
    </div>
  );
};

function App() {
  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
      answer:
        "Faucibus scelerisque nunc varius. Etiam auctor gravida diam, sed faucibus nunc elementum.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Euismod sapien tincidunt?",
      answer:
        "Euismod sapien tincidunt pharetra, venenatis justo ac, porta est. Praesent eget arcu in lorem posuere volutpat.",
    },
  ];

  return (
    <Router>
      <Header />

      <main>
        {/* Hero Section */}
        <section
          className="hero bg-cover bg-center h-screen flex flex-col md:flex-row items-start justify-start text-white px-4"
          style={{
            backgroundImage: `url(${image1})`,
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

        {/* Services Section */}
        <section id="services" className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center space-y-8">
              {/* First Service */}
              <div className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-6 gap-3">
                <div className="flex-shrink-0">
                  <img src={image2} alt="Logo" className="h-[20rem]" />
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-xl text-primary font-semibold mb-4 w-full md:w-[35rem]">
                    Web & Mobile App Development
                  </h3>
                  <p className="text-gray-600 mb-4">
                    We use frameworks to tailor content and engagement methods
                    for your business.
                  </p>
                  <button className="text-white bg-secondary mt-4 py-2 px-3 rounded-sm hover:underline">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Second Service */}
              <div className="flex flex-col-reverse md:flex-row items-center justify-center space-x-0 md:space-x-6 gap-3">
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-xl text-primary font-semibold mb-4">
                    Digital Strategy Consulting
                  </h3>
                  <p className="text-gray-600 mb-4 w-full md:w-[35rem]">
                    Your digital strategy should complement the overall
                    marketing strategy of the company. In online marketing, each
                    component will never work in isolation, and every business
                    needs a different mix. We provide a clear concept and
                    strategic overview to find the most efficient model for your
                    business.
                  </p>
                  <button className="text-white bg-secondary mt-4 py-2 px-3 rounded-sm hover:underline">
                    Learn More
                  </button>
                </div>
                <div className="flex-shrink-0">
                  <img src={image3} alt="Logo" className="h-[20rem]" />
                </div>
              </div>

              {/* FAQ Section */}
              <section id="faq" className="py-16 flex flex-col items-center">
                <div className="text-center">
                  <h2 className="text-2xl md:text-3xl text-primary font-bold mb-6">
                    Frequently asked questions
                  </h2>
                  <div className="flex flex-col items-center space-y-6">
                    {faqs.map((faq, index) => (
                      <FAQItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                      />
                    ))}
                  </div>
                </div>
              </section>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
