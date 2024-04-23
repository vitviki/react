import Button from "../components/Button";
import { statistics, shoes } from "../constants";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      className="w-full flex xl:flex-row flex-col justify-center h-dvh gap-10 max-container p-2"
      id="home"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start min-h-screen gap-10 max-container p-2">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collections
        </p>
        <h1 className="mt-7 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            NEW ARRIVAL
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">NIKE</span> SHOES
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-6 sm:max-w-sm">
          Discover stylist Nike arrivals. Quality, confort and innovation for
          your active life
        </p>
        <Button label={"Show now"} iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-10 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex flex-1 justify-center items-center xl:min-h-2 max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] mx-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImg={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
