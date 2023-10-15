import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import bayDin from "../../baydin.json";



 const StateContext  = createContext();
 
 export const StateContextProvider =({children}) =>{
  const [search,setSearch] =useState<string | ''>('');
  const [bayDinQures,setBayDinQures] = useState<undefined | []>([]);
  const [detailId,setDetailId] =useState(null);
    useEffect(() =>{
    setBayDinQures(bayDin);
    },[])
    console.log(bayDinQures)
  // const bayDinQures = bayDin.questions;
    
  const filterques =bayDinQures.questions?.filter((ques) => (
    ques.questionName.includes(search)
  ))
  
  
  const data={search,setSearch,bayDinQures,setBayDinQures,setDetailId,detailId ,filterques}
  return(
    <StateContext.Provider value={data}>
          {children}
    </StateContext.Provider>
  )
 };

 export const useStateContext = () =>useContext(StateContext);
