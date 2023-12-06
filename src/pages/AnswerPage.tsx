import { Link, useParams } from "react-router-dom";
import Button from "../common/buttton/Button";
import { useStateContext } from "../context/StateContext";

const AnswerPage = () => {
  const { id } = useParams<{id:string}>();
  console.log(id);
  const questionId= parseInt(id,10);

  const { bayDinQures, detailId  } = useStateContext();
  // console.log(detailId);
  const questionDetail = detailId && detailId.length > 0 ? detailId[0] : null;

  console.log(questionDetail);
  const answer = bayDinQures?.answers?.find(
    (ans:{
      answerNo:string;
      questionNo:string;
      
    }) => {
      return( (ans.answerNo === questionId) && (ans.questionNo === questionDetail?.questionNo))
    }
  );
  //  console.log(answer);
// const result = questionDetail && answer
  return (
    <div className=" text-[red] flex flex-col-reverse   justify-center  items-center">
      <Link to={"/"}>
        <Button className="  p-2 rounded-md  bg-c_brown text-white  cursor-pointer">
          ေနာက်သို.
        </Button>
      </Link>
    <h3 className=" my-2">  {answer ? answer.answerResult : "Question not found"}</h3>
    </div>
  );
};

export default AnswerPage;
