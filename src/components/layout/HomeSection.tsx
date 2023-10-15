import { Link } from "react-router-dom";
import { useStateContext } from "../../context/StateContext";

const HomeSection = () => {
  const {  filterques,bayDinQures } = useStateContext();
  // console.log(bayDinQures);

  return (
    <article className=" w-[100%] ">
      <table className=" border w-[100%]">
        <thead>
          <tr>
            <th className="  border-b-2 bg-[#cfcece] p-3 border-b-c_gray"></th>
            <th className="  border-b-2 bg-[#cfcece] p-3 border-b-c_gray"></th>
            <th className="  border-b-2 bg-[#cfcece] p-3 border-b-c_gray"></th>
            <th className="  border-b-2 bg-[#cfcece] p-3 border-b-c_gray"></th>
            <th className="  border-b-2 bg-[#cfcece] p-3 border-b-c_gray"></th>
            {/* <th className="  border-b-2 bg-[#cfcece] p-3 border-b-c_gray"></th> */}
          </tr>
        </thead>
        <tbody>
          {filterques?.map((ques) => (
            <tr
              className="  py-5 border-b-2   border-[#f4e9e9] hover:bg-[#f4f3f1] "
              key={ques.questionNo}
            >
              <td className="p-2">
                <h3>{ques.questionNo}</h3>
              </td>
              <td className=" cursor-pointer p-5 col-span-4">
                <Link to={`/detail/${ques.questionNo}`}>
                  <h3>{ques.questionName}</h3>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
};

export default HomeSection;
