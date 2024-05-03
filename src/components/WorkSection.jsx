import { work } from "../constants/";

export default function WorkSection() {
  return (
    <div className="flex flex-col gap-10 w-[80%]  mx-auto py-6 border-b-8 border-black pb-6 ">
      {work.map((item, index) => (
        <div key={index} className=" flex  gap-20 ">
          <span className="whitespace-nowrap font-medium">{item.when}</span>

          <span className="text-start ">
            <h3 className="text-xl font-medium">{item.where}</h3>
            <p className="text-gray-600 capitalize">{item.desc}</p>
          </span>
        </div>
      ))}
    </div>
  );
}
