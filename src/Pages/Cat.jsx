import React from "react";
import category from "../Data/CatData.js";
import { Link, useLocation } from "react-router-dom";

const Cat = () => {
  let location = useLocation();
  let endPoint = location.pathname.split("/").pop();

  return (
    <div className="bg- [#1865f4] h-auto  text-white pb-0 mb-10 w-full mt-[6rem] overflow-hidden relative flex justify-center items-start ">
      {/* Green Design div   */}
      {endPoint != "products" && (
        <div className="absolute w-[220vw] bg-[#f4ffef] h-[120vh] -left-72 top-[6%] sm:top-[30%] rotate-12 z-10"></div>
      )}

      <section
        className={` pt-[1rem] md:pt-[30rem] lg:pt-[0rem] relative z-10`}
      >
        <div className="max-w-[860px] mx-5 lg:mx-auto mt-[4rem]">
          <div className="flex gap-6 text-black" data-aos="fade">
            {endPoint != "products" && (
              <>
                <div className="w-[50%]">
                  <h1 className="text-[40px] sm:text-[72px] font-bold leading-[2.4rem] sm:leading-[4.8rem]">
                    Featured{" "}
                    <span className="text-[crimson] sm:ml-6 ">
                      &#0009; Products
                    </span>
                  </h1>
                </div>
                <div className="w-[50%] pt-[120px]">
                  <p className="place-self-end font-semibold hidden md:block">
                    Varad offers an extensive selection of products categorized
                    into Flavour Enhancers, Staple Foods, Convenience Foods,
                    Accessory Foods, Indulgence Foods, and Non-Alcoholic
                    Beverages.
                  </p>
                </div>
              </>
            )}

            {endPoint == "products" && (
              <h1 className="pro-title font-bold text-5xl my-20 text-center w-fit mx-auto">
                Pro
                <span className=" text-[crimson] underline drop-shadow-lg">
                  ducts
                </span>
              </h1>
            )}
          </div>

          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-36	mt-32"
            data-aos="fade-up"
          >
            {category.map((item, index) => (
              <>
                <Link key={index} to={`${item.linkTitle !="privatelabeling" ? `/products/${item.linkTitle}` : "#"}` }>
                  <div key={index}
                    style={{ backgroundColor: `${item.color}` }}
                    className={`bg-[${item.color}] relative min-w-[260px] h-[214px] flex justify- center mx-6 items-end p-[10px] rounded-[15px]`}
                  >
                    <img
                      src={item.img}
                      alt=""
                      loading="lazy"
                      className={`absolute -top-[40%]  max-w-[229px] 
                         ${index == 1 || index == 5 ? "max-w-[300px]" : ""}
                         ${index == 4 ? "-top-[60%] max-w-[420px] -left-20" : "-top-[40%]"}
                         ${index == 3 || index  == 6? "-top-[55%] max-w-[200px]" : "-top-[40%]"}
                      `}
                    />

                    <p
                      className={` text-[62p x] font-bold  text-[2.8rem] leading-[3.4rem]`}
                    >
                      {item.title == "READY TO EAT" ? (
                        <p className="">
                          {" "}
                          READY <br /> TO EAT{" "}
                        </p>
                      ) : (
                        `${item.title}`
                      )}
                    </p>
                  </div>
                </Link>
              </>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cat;
