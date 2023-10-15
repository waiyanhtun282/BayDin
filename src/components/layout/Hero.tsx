import React from "react";
import BayDin from "../../assets/mintheinkha_logo.png";

const Hero = () => {
  return (
    <header className=" container">
      <div className=" my-5  flex justify-center  items-center">
        <figure className="  flex flex-col items-center">
          <img src={BayDin} className=" w-20  rounded-[50%]   " />
          <figcaption className=" my-2 text-3xl">လက်ထောက်ဗေဒင်</figcaption>
        </figure>
      </div> 
    </header>
  );
};

export default Hero;
