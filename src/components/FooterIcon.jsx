
import { sideIcon } from "../constants";
export default function FooterIcon() {
  return (
    <div className="flex justify-around py-10 w-[80%] mx-auto">

{sideIcon.map((x, index) => (
          <div
            key={index}
            className="flex   items-center flex-col space-x-2 p-2  hover:bg-gray-200 rounded-md"
          >
            {/* Render the icon */}
            <span  className=" border-[4px] border-black  bg-blue-400 p-4 rounded-full">
              {x.icons}
            </span>
            {/* Render the label */}
          
          </div>
        ))}

    </div>
  )
}
