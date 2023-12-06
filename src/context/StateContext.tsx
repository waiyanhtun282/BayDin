import  React, { ReactNode, createContext, useContext, useEffect, useState } from "react";
import bayDin from "../../baydin.json";

interface StateContextProps {
 search:string;
 setSearch:React.Dispatch<React.SetStateAction<string>>;
 bayDinQures:undefined | [];
 setBayDinQures: React.Dispatch<React.SetStateAction<undefined | []>>;
 detailId: null | number;
 setDetailId: React.Dispatch<React.SetStateAction<null | number>>;
 filterques: undefined | [];

}

 const StateContext = createContext<StateContextProps | undefined>(undefined);
 
 export const StateContextProvider:React.FC<{children:ReactNode}> =({children}) =>{
  const [search,setSearch] =useState<string | ''>('');
  const [bayDinQures,setBayDinQures] = useState<undefined | []>([]);
  const [detailId,setDetailId] =useState(null);
    useEffect(() =>{
    setBayDinQures(bayDin);
    },[])
    console.log(bayDinQures)
  // const bayDinQures = bayDin.questions;
    
  const filterques =bayDinQures?.questions?.filter((ques:{questionName:string}) => (
    ques.questionName.includes(search)
  ))
  
  
  const data:StateContextProps={search,setSearch,bayDinQures,setBayDinQures,setDetailId,detailId ,filterques}
  return(
    <StateContext.Provider value={data}>
          {children}
    </StateContext.Provider>
  )
 };

 export const useStateContext = () =>useContext(StateContext) as StateContextProps;
