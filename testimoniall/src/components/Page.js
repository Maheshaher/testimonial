import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Page(props) {
  let review = props.review;
  return (
    <div className="">
      <div className="absolute -top-16 left-8  z-10">
        <img
          className=" aspect-square w-[140px] h-[140px] rounded-full -z-30 "
          src={review.image}
        ></img>
        <div className="w-[140px] h-[140px] bg-violet-500  absolute -top-1 left-2 rounded-full  -z-20 "></div>
      </div>
      <div className="text-center ">
        <h2 className="font-bold text-2xl ">{review.name}</h2>
        <p className="text-sm text-violet-300">{review.job}</p>
      </div>
      <div className="text-violet-400 mx-auto mt-5 flex flex-row justify-center items-center mb-3">
        <FaQuoteLeft></FaQuoteLeft>
      </div>
      <div className="opacity-75 text-center p-1">{review.text}</div>
      <div className="text-violet-400 mx-auto mt-5 flex flex-row justify-center items-center  mb-6">
        <FaQuoteRight></FaQuoteRight>
      </div>
    </div>
  );
}

export default Page;
