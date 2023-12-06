import { ReactNode } from "react"

const Card = ({children,className}:{
  children:ReactNode;
  className?:string;
}) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default Card
