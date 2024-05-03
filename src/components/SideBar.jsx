import { sideIcon } from "../constants";
import ProfileSection from "./ProfileSection";
import WorkSection from "./WorkSection";
import SkillSection from "./SkillSection";
import FooterIcon from "./FooterIcon";

export default function SideBar() {
  return (
    <div className=" flex   ">
      <div className=" flex-col  flex justify-between ">
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
            <p className="capitalize text-xl mt-5 font-semibold">{x.label}</p>
          </div>
        ))}
      </div>
      <div>
        <ProfileSection />
        <WorkSection />
        <SkillSection />
        <FooterIcon/>
      </div>
    </div>
  );
}
