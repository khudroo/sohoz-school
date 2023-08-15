import valImg1 from "../assets/images/values/img1.jpg";

const ValuesItem = ({item}) => {
  return (
    <div className="card w-1/4 bg-lime-700 text-neutral-content relative">
      <div>
        <img
          src={valImg1}
          alt=""
          className="absolute rounded-full w-28 -top-14 left-1/2 -translate-x-1/2"
        />
      </div>
      <div className="card-body items-center text-center">
        <h2 className="card-title mt-10">{item.title}</h2>
        <p>
          {item.desc}
        </p>
      </div>
    </div>
  );
};

export default ValuesItem;
