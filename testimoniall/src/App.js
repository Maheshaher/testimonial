import logo from "./logo.svg";
import "./App.css";
import Testimonial from "./components/Testimonial";
import reviews from "./data";

function App() {
  return (
    <div className="bg-gray-300  flex flex-col  justify-center items-center w-[100vw] h-[100vh]">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Our Testimonial</h1>
        <div className="bg-violet-400 h-1 "></div>
      </div>
      <div>
        <Testimonial reviews={reviews}></Testimonial>
      </div>
    </div>
  );
}

export default App;
