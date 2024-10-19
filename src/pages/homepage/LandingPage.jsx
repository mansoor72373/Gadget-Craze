import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="h-[600px] sm:h-[500px] md:h-[550px] lg:h-[700px]">
      {/* Hero Section */}
      <section className="relative h-[450px] sm:h-[350px] md:h-[400px] lg:h-[550px] text-white py-20">
        <div className="absolute mt-20 inset-0">
          <img
            src="https://wallpaperboat.com/wp-content/uploads/2020/11/10/60057/shopping-33.jpg"
            alt="Hero"
            className="h-full w-full object-cover opacity-100"
          />
        </div>
        <div className="container mx-auto flex flex-col items-center mt-20 text-center relative z-10 px-4 sm:px-8">
        <h1
  className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 tracking-wider leading-tight"
  style={{ fontFamily: `'Playfair Display', serif`, letterSpacing: '0.05em' }}
>
  Welcome to <span style={{ fontFamily: `'Poppins', sans-serif`, fontWeight: '600' }}>GadgetCraze</span>
</h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 max-w-lg">
            Your one-stop shop for the latest gadgets at amazing prices! Explore
            now and find what you love.
          </p>
          <Link
            to="/mainShop/Shop"
            className="bg-blue-900 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-full font-semibold shadow-lg transition-transform transform hover:scale-105"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
