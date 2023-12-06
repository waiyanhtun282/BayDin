import React from "react"

interface InputProps {
  value:string;
  onChange:(event:React.ChangeEvent<HTMLInputElement>)=>void;
 className?:string
}

const Input:React.FC<InputProps> = ({value,onChange,className}) => {
  return (
         <input  value={value} onChange={onChange}   className={className} />
      
  )
}

export default Input
