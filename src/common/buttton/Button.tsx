import { ReactNode } from "react";

const Button = ({children ,className}:{
  className:string;
  children:ReactNode
}) => {
  return (
    <button className={className}>
        {children}
    </button>
  )
}

export default Button
