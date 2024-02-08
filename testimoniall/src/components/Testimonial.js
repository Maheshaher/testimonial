import { useState } from "react";
import Page from "./Page";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function Testimonial(props) {
  let review = props.reviews;
  const [index, setIndex] = useState(0);

  function leftHandler() {
    if (index - 1 < 0) {
      setIndex(review.length - 1);
    } else {
      setIndex(index - 1);
    }
  }
  function rightHandler() {
    if (index + 1 >= review.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  function surpriseHandler() {
    let random = Math.floor(Math.random() * review.length);
    setIndex(random);
  }

  return (
    <div className="h-[48vh] w-[40vw] bg-white relative rounded-sm shadow-2xl">
      <div>
        <Page review={review[index]}></Page>
      </div>
      <div className="text-center mt-2">
        <button className="text-2xl text-violet-500 ">
          <MdKeyboardArrowLeft onClick={leftHandler}></MdKeyboardArrowLeft>
        </button>
        <button className="text-2xl text-violet-500">
          <MdKeyboardArrowRight onClick={rightHandler}></MdKeyboardArrowRight>
        </button>
      </div>

      <div className="text-center mt-2">
        <button
          className="bg-violet-600 rounded-sm p-1 hover:border-white hover:border-2 hover:text-red-100"
          onClick={surpriseHandler}
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
}

export default Testimonial;
