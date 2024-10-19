import React from 'react';
import Slider from "react-slick";
import data from '../../back-end/data';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../images/img1.png';
import img2 from '../../images/img2.png';
import { useNavigate } from 'react-router-dom'; 

const Samsung = () => {
  const samsungItems = data.filter(item => item.isSamsung);
  const navigate = useNavigate(); 

  // Slick slider settings
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <button
        className=" lg:text-5xl md:text-5xl  md:mr-[-60px] p-2 sm:text-[0px] lg:mr-[-60px] text-white absolute right-2 top-1/2 transform -translate-y-1/2 z-10 rounded-full"
        onClick={onClick}
        style={{ display: 'block' }}
      >
        {">"}
      </button>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <button
        className=" lg:text-5xl md:text-5xl md:ml-[-60px] lg:ml-[-60px] p-2 sm:text-[1px] text-white absolute left-2 top-1/2 transform -translate-y-1/2 z-10 rounded-full"
        onClick={onClick}
        style={{ display: 'block' }}
      >
        {"<"}
      </button>
    );
  }

  // Click handler for navigating to LocalShop
  const handleTitleClick = (id) => {
    navigate(`/navpages/LocalShop/${id}`);
  };

  return (
    <div className="bg-blue-900 min-h-[500px] text-white p-6">
      <div className="flex flex-col  md:flex-row items-center justify-between mb-6">
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold">Explore the latest from Samsung</h1>
        </div>
        <div className="flex mt-4 md:mt-0">
          <img src={img1} alt="Samsung Banner" className="w-32 md:w-40 lg:w-56 mt-0 md:mt-[-5px]" />
          <img src={img2} alt="Samsung Banner" className="w-32 md:w-40 lg:w-56 mt-0 md:mt-[-40px]" />
        </div>
      </div>

      <div className="relative bg-white  mx-auto md:ml-[100px] md:mr-[100px] lg:mt-7  w-full md:w-[85%] h-[320px]  md:mt-[-40px] rounded-md">
        <Slider {...settings}>
          {samsungItems.map(item => (
            <div key={item.id} className="p-2 transition-transform transform hover:scale-105 duration-300">
              <div className="bg-white  h-[290px] text-black shadow-lg rounded-lg p-4">
                <img src={item.image} alt={item.title} className="w-full h-28 object-cover rounded-md" />
                <div className="mt-4">
                  <h2
                    className="text-sm font-semibold cursor-pointer"
                    onClick={() => handleTitleClick(item.id)}
                  >
                    {item.title}
                  </h2>
                  <div className="mt-3 text-xl font-bold">${item.price.toFixed(2)}</div>
                  {item.rating > 0 ? (
                    <div className="flex items-center mt-2">
                      <span className="text-yellow-500">{"★".repeat(Math.round(item.rating))}</span>
                      <span className="ml-2 text-gray-600">({item.reviews})</span>
                    </div>
                  ) : (
                    <p className="text-gray-600">Not Yet Reviewed</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Samsung;
