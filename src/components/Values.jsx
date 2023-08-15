import ValuesItem from "./ValuesItem";

const ValuesData = [
  {
    title: "Learning & Fun",
    desc: `Prissy expectant involuntarily limpet until cobra less dear so overabundant contagio`,
  },
  {
    title: "Healthy Meals",
    desc: `Prissy expectant involuntarily limpet until cobra less dear so overabundant contagio`,
  },
  {
    title: "Children Safety",
    desc: `Prissy expectant involuntarily limpet until cobra less dear so overabundant contagio`,
  },
  {
    title: "Cute Environment",
    desc: `Prissy expectant involuntarily limpet until cobra less dear so overabundant contagio`,
  },
];

const Values = ({item}) => {
  return (
    <div className=" my-24">
      <h1 className="text-5xl font-bold text-center mb-24">Our core values</h1>
      <div className="flex gap-10 ">
        {ValuesData.map((item) => (
          <ValuesItem item={item}></ValuesItem>
        ))}
      </div>
    </div>
  );
};

export default Values;
