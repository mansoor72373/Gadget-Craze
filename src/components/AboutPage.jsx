import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen  bg-gradient-to-r from-blue-50 via-gray-100 to-blue-50 py-10">
   
      <div className="container mt-16 mx-auto px-4 lg:px-8">
      
        <div className="text-center mb-12">
          <h1
            className="text-4xl sm:text-5xl font-extrabold text-blue-900 tracking-wider"
            style={{ fontFamily: `'Playfair Display', serif` }}
          >
            About{" "}
            <span
              style={{ fontFamily: `'Poppins', sans-serif` }}
              className="text-blue-600 font-medium"
            >
              GadgetCraze
            </span>
          </h1>

          <p className="mt-4 text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto">
            Your one-stop shop for the latest gadgets, electronics, and
            accessories!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
          <div className="bg-slate-300 shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4">
              Our Story
            </h2>
            <p className="text-black text-lg leading-relaxed mb-6">
              At GadgetCraze, we believe in bringing the best and the latest in
              technology right to your doorstep. What started as a small venture
              has grown into a comprehensive online store offering a wide range
              of products from top brands. Whether you're looking for the newest
              smartphone, a powerful laptop, or the latest wearable tech,
              GadgetCraze has it all.
            </p>
          </div>

          {/* Our Mission Section */}
          <div className="bg-slate-300 shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4">
              Our Mission
            </h2>
            <ul className="list-disc list-inside text-black text-lg leading-relaxed">
              <li>Deliver top-quality gadgets at unbeatable prices.</li>
              <li>Offer a seamless and secure online shopping experience.</li>
              <li>Provide excellent customer service and fast shipping.</li>
              <li>
                Stay ahead of the curve by constantly updating our catalog with
                the latest products.
              </li>
            </ul>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-8 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
         
            <div className="bg-slate-200 shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Innovation
              </h3>
              <p className="text-gray-900">
                We continuously innovate to bring you the latest and most
                advanced technology products.
              </p>
            </div>

            <div className="bg-slate-200 shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Customer Focus
              </h3>
              <p className="text-gray-900">
                Our customers are our top priority, and we go above and beyond
                to ensure they are satisfied.
              </p>
            </div>

         
            <div className="bg-slate-200 shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Integrity
              </h3>
              <p className="text-gray-900">
                We value honesty and transparency in all our dealings, ensuring
                our customers can shop with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
