import sliderImg1 from "../assets/images/slider/1.jpg";
import sliderImg2 from "../assets/images/slider/2.jpg";
import sliderImg3 from "../assets/images/slider/3.jpg";
import sliderImg4 from "../assets/images/slider/4.jpg";
import PopUpText from "./PopUpText";

const Slider = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={sliderImg1} className="w-full" />
        <div className="absolute top-52 -z-0 left-20">
          <PopUpText title="A quick brown fox" desc="Our classrooms are living examples of these ideals; they are felt,
          heard and seen in action everyday." more="Learn More.."></PopUpText>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={sliderImg2} className="w-full" />
        <div className="absolute top-52 -z-0 left-20">
          <PopUpText title="A quick brown fox" desc="Our classrooms are living examples of these ideals; they are felt,
          heard and seen in action everyday." more="Learn More.."></PopUpText>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={sliderImg3} className="w-full" />
        <div className="absolute top-52 -z-0 left-20">
          <PopUpText title="A quick brown fox" desc="Our classrooms are living examples of these ideals; they are felt,
          heard and seen in action everyday." more="Learn More.."></PopUpText>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={sliderImg4} className="w-full" />
        <div className="absolute top-52 -z-0 left-20">
          <PopUpText title="A quick brown fox" desc="Our classrooms are living examples of these ideals; they are felt,
          heard and seen in action everyday." more="Learn More.."></PopUpText>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
