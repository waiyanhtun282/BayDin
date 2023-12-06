import { ReactNode } from "react";

const Nav = ({children}:{
  children:ReactNode
}) => {
  return (
   <div>
     <nav className="bg-[#e1dede]   container  py-5">
      <h1>မင်းသိင်္ခ / လက်ထောက်ဗေဒင်</h1>
    </nav>
    
      {children}
   </div>
  );
};

export default Nav;
