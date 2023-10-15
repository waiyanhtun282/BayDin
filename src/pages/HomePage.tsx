import { useRef } from "react";
import Input from "../common/input/Input";
import HomeSection from "../components/layout/HomeSection";
import { useStateContext } from "../context/StateContext";

const HomePage = () => {
  const { search ,setSearch} =useStateContext();
  
  const handleChange = (e) =>{
    setSearch(e.target.value);
  }
  return (
    <main className=" mt-5 container">
      <section className=" border p-5  rounded-md border-[#bfbfbf] shadow-sm">
        <h2 className=" text-[17px]  font-semibold mb-3">
          သိလိုသော မေးခွန်းအား ရှာဖွေပါ...
        </h2>
        <Input   value={search} onChange={handleChange} className=" w-[100%] p-2  border  border-outline-none border-[#eae9e9]   focus:border-[#5c70e3] rounded-md shadow-sm"/>
      </section>
      <HomeSection  />

    </main>
  );
};

export default HomePage;
