import { Link, useParams } from "react-router-dom";
import Button from "../common/buttton/Button";
import Card from "../components/card/Card";
import { useStateContext } from "../context/StateContext";
import { useEffect, useState } from "react";

const DetailPage = () => {
  const { bayDinQures ,setDetailId ,detailId} = useStateContext();

  const { id } = useParams();
  // console.log(typeof(id))
  
  useEffect(() =>{
    const quesNo = bayDinQures.questions?.filter(
      (ques) => ques.questionNo === Number(id)
    );
    setDetailId(quesNo)
  },[id,bayDinQures ,setDetailId])
  
  // console.log(quesNo);
  // console.log(quesNo[0].questionName)
  return (
    <section className=" flex flex-col my-2  justify-center items-center">
      <Link to={"/"}>
        <Button className="  p-2 rounded-md  bg-c_brown text-white  cursor-pointer">
          ေနာက်သို.
        </Button>
      </Link>
      <h2 className=" my-3">{detailId && detailId.length > 0 && detailId[0].questionName}</h2>
      <Card className="  grid grid-cols-9 gap-1   p-5 ">
        {bayDinQures?.numberList?.map((num, index) => (
         <div key={index} >
          <Link to={`/answer/${num}`}>
          <p
            className=" text-white bg-c_brown hover:bg-c_blue cursor-pointer w-8 h-8 rounded-sm text-lg  text-center"
            
          >
            {num}
          </p>
          </Link>
         </div>
        ))}
      </Card>
    </section>
  );
};

export default DetailPage;
