import React from "react";
import Back1 from "../Images/AboutAndContactus/Back1.avif";
import Banner1 from "../Images/AboutAndContactus/Banner.png";
import icon1 from "../Images/AboutAndContactus/gears.png";
import icon2 from "../Images/AboutAndContactus/mechanic.png";
import icon3 from "../Images/AboutAndContactus/sustainable-energy.png";
import vaishnavi from "../Images/ProfileImages/vaishnavi.jpeg"
import ankush from "../Images/ProfileImages/ankush.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
              <h1 className="font-bold text-3xl md:text-[56px] text-white text-center md:text-start leading-[4rem]">
                About Us
              </h1>
            </div>
          </div>
        </div>
      </div>

      <section className="knowmore mt-24">
        <div className=" max-w-[992px] lg:max-w-[1200px] mx-auto gap-10 flex justify-between text-[#071c1f] md:flex-row flex-col">
          <div className="md:w-[50%] p-6 relative pt-0 -mt-10 ">
            <div className="relative ">
              <img src={Banner1} alt="" className=" w-full" />
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

            <div
              className="w-[300px] bg-white shadow-md  p-[45px_20px_25px] hover:bg-[#071c1f] transition-all duration-200 group "
              style={{ boxShadow: "0 16px 32px 0 rgba(7, 28, 31, 0.1)" }}
            >
              <div className="  overflow-hidden rounded-full w-[180px] h-[180px] mx-auto  ">
                <img
                  src={vaishnavi}
                  alt=""
                  className="w-[180px] h-[180px] rounded-full mx-auto object-cover overflow-hidden scale-150  "
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
                  src={ankush}
                  alt=""
                  className="w-[180px] h-[180px] rounded-full mx-auto object-cover "
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
    </div>
  );
};

export default About;
