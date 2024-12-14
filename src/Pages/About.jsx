import React from "react";
import Back1 from "../assets/images/Back1.avif";
import Banner1 from "../assets/images/Banner.png";
import icon1 from "../assets/images/gears.png";
import icon2 from "../assets/images/mechanic.png";
import icon3 from "../assets/images/sustainable-energy.png";
import p1 from "../assets/images/p1.jpg";
import p2 from "../assets/images/p2.jpg";
import Slider from "react-slick";
import p3 from "../assets/images/p3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import p4 from "../assets/images/p4.jpg";
import c1 from "../assets/images/c1.jpg";
import c2 from "../assets/images/c2.jpg";
import c3 from "../assets/images/c3.jpg";
import c4 from "../assets/images/c4.jpg";

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    autoplay: true,

    responsive: [
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <div className="AboutWrapper">
      <div
        className="HeroSection  h-[300px] bg-cover bg-center bg-no-repeat    relative flex  items-center"
        style={{ backgroundImage: `url(${Back1})` }}
      >
        <div
          className="absolute ring-opacity-95 bg- [#071c1f] h-full w-full z-[8]  "
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(7, 28, 31), rgb(7, 28, 31), rgb(7, 28, 31), rgba(7, 28, 31, 0.77), rgba(7, 28, 31, 0.92))",
          }}
        ></div>

        <div className="section w-full">
          <div className="max-w-[1200px]  px-9  relative z-30 h-fit flex justify-between items-center mx-auto flex-col md:flex-row  ">
            <div className="">
              <p className="text-[#80b500] font-medium">WELCOME TO OUR STORE</p>
              <h1 className="font-bold text-3xl md:text-[56px] text-white text-center md:text-start leading-[4rem]">
                About Us
              </h1>
            </div>
            <div className="flex gap-5 h-fit text-white font-bold items-center">
              <li className="list-none">Home</li>
              <div className="w-[2px] h-[14px] opacity-60 bg-white"></div>
              <li className="list-none text-[#80b500]">About</li>
            </div>
          </div>
        </div>
      </div>

      <section className="knowmore mt-24">
        <div className=" max-w-[992px] lg:max-w-[1200px] mx-auto gap-10 flex justify-between text-[#071c1f] md:flex-row flex-col">
          <div className="md:w-[50%] p-6 relative pt-0 -mt-10 ">
            <div className="relative ">
              <img src={Banner1} alt="" className=" w-full" />
              {/* <div
                className="absolute shadow-md
               bg-white z-20 h-[10rem] w-[11rem] right-0  bottom-0 p-3"
              >
                <div className="bg-[#80b500] w-full h-full flex justify-center items-center leading-none flex-col p-3">
                  <div>
                    <span className="text-[54px] font-bold text-white">25</span>{" "}
                    <span className="text-[28px] leading-none text-white font-bold">
                      +
                    </span>
                  </div>
                  <p className="font-bold text-center text-[14px] text-white">
                    Years Experience
                  </p>
                </div>
                <div className="bg-[#80b500] w-[20px] h-[10px] ms-4"></div>
              </div> */}
            </div>
          </div>
          <div className="md:w-[50%] px-4">
            <p className="text-[#80b500] font-semibold text-[12px] md:text-[16px] ">
              KNOW MORE ABOUT US
            </p>
            <h2 className="text-3xl md:text-[40px] lg:text-[65px] font-bold md:leading-[3.4rem]  lg:leading-[5rem] my-5 md:mt-4">
              Delivering the Best, Globally
            </h2>
            <div className="text-base leading-[2rem]">
              Varad Group, with over 30 years of expertise, is a trusted name in
              agricultural input manufacturing, headquartered in Jalna District,
              Maharashtra, we operate across diverse sectors, including
              pesticides, bio-pesticides, fertilizers, plant growth regulators
              (PGR), high-quality seeds, soybean, pulses, and food products.
            </div>
            <p className="mt-6 text-base leading-[2rem]">
              Our Global Presence Varad Food Products India Pvt. Ltd., We take
              pride in providing comprehensive import and export solutions for a
              wide range of agro-products. Partnering with farmers,
              agro-suppliers, distributors, and manufacturers across India, we
              ensure the seamless delivery of top-quality goods to customers
              worldwide. Our team’s extensive expertise in sourcing,
              procurement, legal compliance, and supply chain management enables
              us to deliver value-driven solutions that meet international
              standards.
            </p>
          </div>
        </div>
      </section>

      <section className="FEATURES bg-[#f4ffef] -[#f7f5eb] py-[90px] mt-10">
        <div className="max-w-[1200px] mx-auto p-5">
          <h4 className="text-4xl lg:text-[50px] font-bold text-[#071c1f] my-6 text-center mb-16">
            Why Choose Us <span className="text-[#80b500]">!</span>
          </h4>
          <h4 className="text-4xl lg:text-[30px] font-bold text-[#071c1f] my-6 text-center mb-16">
            With a focus on delivering exceptional agro-products and food
            commodities, Varad Food Products India Pvt. Ltd. ensures
          </h4>
          <div className="flex  md:justify-between lg:flex-row flex-col gap-6 items-center">
            <div className="max-w-[370px] p-[30px] bg-white shadow-md">
              <div className="flex items-center gap-5">
                <img src={icon1} alt="" className="max-w-[60px]" />
                <p className="font-bold text-[22px]"> Competitive Pricing</p>
              </div>
              <p className="mt-8">
                We offer high-quality products at competitive rates, ensuring
                great value for your investment. “Affordable quality without
                compromise.”
              </p>
            </div>

            <div className="max-w-[370px] p-[30px] bg-white shadow-md">
              <div className="flex items-center gap-5">
                <img src={icon2} alt="" className="max-w-[60px]" />
                <p className="font-bold text-[22px]"> Trusted Partnerships</p>
              </div>
              <p className="mt-8">
                Our long-standing relationships with farmers, suppliers, and
                logistics providers ensure reliability and consistency in every
                order.
              </p>
            </div>

            <div className="max-w-[370px] p-[30px] bg-white shadow-md">
              <div className="flex items-center gap-5">
                <img src={icon3} alt="" className="max-w-[60px]" />
                <p className="font-bold text-[22px]">Uncompromising Quality</p>
              </div>
              <p className="mt-8">
                We ensure that every product meets the highest international
                standards. From sourcing to packaging, quality is our top
                priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="FEATURES  py-[90px] mt-10">
        <div className="max-w-[1200px] mx-auto p-5">
          <h2 className="text-[40px] mb-10 md:text-[56px] text-center font-bold text-[#071c1f]">
            Leadership
          </h2>
          <h2 className="text-[20px] mb-10 md:text-md text-center font-bold text-[#071c1f]">
             The visionary leadership of Ms. Vaishnavi Mandhani and
            Mr. Ankush Mandhani has been instrumental in driving the companys
            growth and success. Their innovative strategies and customer-centric
            approach have established strong client relationships and paved the
            way for a successful future.
          </h2>

          <div className="flex mt-10 gap-7 lg:flex-row flex-col items-center justify-center ">
            {/* <div
              className="w-[300px] bg-white shadow-md  p-[45px_20px_25px] hover:bg-[#071c1f] transition-all duration-200 group "
              style={{ boxShadow: "0 16px 32px 0 rgba(7, 28, 31, 0.1)" }}
            >
              <div className="  overflow-hidden ">
                <img
                  src={p1}
                  alt=""
                  className="w-[180px] h-[180px] rounded-full mx-auto object-center "
                />
              </div>

              <h3 className="text-center mt-6 text-[#80b500] font-bold">
                Founder
              </h3>
              <p className="text-center group-hover:text-white font-bold mt-5 mb-10">
                Dhanashree Mandhani
              </p>
            </div>

            <div
              className="w-[300px] bg-white shadow-md  p-[45px_20px_25px] hover:bg-[#071c1f] transition-all duration-200 group "
              style={{ boxShadow: "0 16px 32px 0 rgba(7, 28, 31, 0.1)" }}
            >
              <div className="  overflow-hidden ">
                <img
                  src={p2}
                  alt=""
                  className="w-[180px] h-[180px] rounded-full mx-auto object-cover "
                />
              </div>

              <h3 className="text-center mt-6 text-[#80b500] font-bold">CEO</h3>
              <p className="text-center group-hover:text-white font-bold mt-5 mb-10">
                Pradyumn Mandhani
              </p>
            </div> */}

            <div
              className="w-[300px] bg-white shadow-md  p-[45px_20px_25px] hover:bg-[#071c1f] transition-all duration-200 group "
              style={{ boxShadow: "0 16px 32px 0 rgba(7, 28, 31, 0.1)" }}
            >
              <div className="  overflow-hidden ">
                <img
                  src={p3}
                  alt=""
                  className="w-[180px] h-[180px] rounded-full mx-auto object-cover opacity-0 "
                />
              </div>

              <h3 className="text-center mt-6 text-[#80b500] font-bold opacity-0">
                Manager
              </h3>
              <p className="text-center group-hover:text-white font-bold mt-5 mb-10">
              Ms. Vaishnavi Mandhani
              </p>
            </div>

            <div
              className="w-[300px] bg-white shadow-md  p-[45px_20px_25px] hover:bg-[#071c1f] transition-all duration-200 group "
              style={{ boxShadow: "0 16px 32px 0 rgba(7, 28, 31, 0.1)" }}
            >
              <div className="  overflow-hidden ">
                <img
                  src={p4}
                  alt=""
                  className="w-[180px] h-[180px] rounded-full mx-auto object-cover opacity-0 "
                />
              </div>

              <h3 className="text-center mt-6 text-[#80b500] font-bold opacity-0">
               CEO  
              </h3>
              <p className="text-center group-hover:text-white font-bold mt-5 mb-10">
              Mr. Ankush Mandhani
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="TESTIMONIAL bg-[#f2f6f7] py-[90px] mt-10">
        <div className="max-w-[1200px] mx-auto p-5">
          <p className="text-[#80b500] font-bold text-center ">TESTIMONIAL</p>
          <h2 className="text-[30px] md:text-[56px] text-center font-bold text-[#071c1f]">
            Customer Feedback
          </h2>{" "}
          <div className="slider-container w-[100%]">
            <Slider {...settings} className="flex">
              <div className="">
                <div
                  className="mt-10 p-[20px] sm:p-[40px] sm:flex-row flex-col max-w-[558px] flex gap-5 bg-white mx-auto "
                  style={{ boxShadow: "0 0 4px rgba(0, 0, 0, 0.1)" }}
                >
                  <img
                    src={c1}
                    alt=""
                    className="max-w-[200px] h-[200px] mx-auto object-cover"
                  />
                  <div className="">
                    {" "}
                    <p>
                      Great experience! Their team was professional, and they
                      handled all logistics efficiently. We’ll definitely
                      continue our partnership.
                    </p>
                    <h3 className="mt-4 text-xl font-bold">Maria L</h3>
                    <p className="text text-[#80b500] text-base font-bold mt-1">
                      Wholesaler, Europe
                    </p>
                  </div>
                </div>{" "}
              </div>
              <div className="">
                <div
                  className="mt-10 p-[20px] sm:p-[40px] sm:flex-row flex-col max-w-[558px] flex gap-5 bg-white mx-auto "
                  style={{ boxShadow: "0 0 4px rgba(0, 0, 0, 0.1)" }}
                >
                  <img
                    src={c2}
                    alt=""
                    className="max-w-[200px] h-[200px] mx-auto object-cover"
                  />
                  <div className="">
                    {" "}
                    <p>
                      Reliable and trustworthy! The quality of the products
                      exceeded our expectations, and the delivery was right on
                      time.
                    </p>
                    <h3 className="mt-4 text-xl font-bold">John D.</h3>
                    <p className="text text-[#80b500] text-base font-bold mt-1">
                      Importer, USA
                    </p>
                  </div>
                </div>{" "}
              </div>
              <div className="">
                <div
                  className="mt-10 p-[20px] sm:p-[40px] sm:flex-row flex-col max-w-[558px] flex gap-5 bg-white mx-auto "
                  style={{ boxShadow: "0 0 4px rgba(0, 0, 0, 0.1)" }}
                >
                  <img
                    src={c3}
                    alt=""
                    className="max-w-[200px] h-[200px] mx-auto object-cover"
                  />
                  <div className="">
                    {" "}
                    <p>
                      Excellent service and packaging. The private labeling
                      options made it easy for us to promote our brand in
                      international markets
                    </p>
                    <h3 className="mt-4 text-xl font-bold">David R.</h3>
                    <p className="text text-[#80b500] text-base font-bold mt-1">
                      Distributor, India
                    </p>
                  </div>
                </div>{" "}
              </div>
              <div className="">
                <div
                  className="mt-10 p-[20px] sm:p-[40px] sm:flex-row flex-col max-w-[558px] flex gap-5 bg-white mx-auto "
                  style={{ boxShadow: "0 0 4px rgba(0, 0, 0, 0.1)" }}
                >
                  <img
                    src={c4}
                    alt=""
                    className="max-w-[200px] h-[200px] mx-auto object-cover"
                  />
                  <div className="">
                    {" "}
                    <p>
                      We’ve been working with them for over a year, and their
                      consistent product quality and on-time deliveries have
                      made us loyal partners
                    </p>
                    <h3 className="mt-4 text-xl font-bold">Ahmed K</h3>
                    <p className="text text-[#80b500] text-base font-bold mt-1">
                      Retailer, Middle East
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>{" "}
      </section> */}

      {/* <section className="bg-[#f7f5eb] py-[115px] mt-20">
        <div className="max-w-[1200px] mx-auto p-5 relative">
          <img src="" className="absolute" alt="" />
          <div className="w-full flex flex-col justify-center items-center">
            <p className="text-[#80b500] text-[30px] font-bold italic">Todays Hot Deals</p>
            <h2 className="text-[50px] font-bold text-[#071c1f]">
              Original Stock Honey <br />
              Combo Package
            </h2>

            <div className="flex text-[#071c1f]">
              <div className="">
                <div className="">
                  <span>63</span>
                </div>
                <p>Days</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default About;
