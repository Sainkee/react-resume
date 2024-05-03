import React from "react";

export default function SkillSection() {
    const skills = [
        { name: "HTML", proficiency: "Expert" },
        { name: "CSS", proficiency: "Advanced" },
        { name: "JavaScript", proficiency: "Advanced" },
        // Add more skills as needed
      ];

      const tech = [
        {title:"zapier",
        desc:"organize your life with agile method"},
        {title:"spoke",
            desc:"is 40 hours in aweek is too much?. here what history and science says. "
        },
        {title:"ndash",
            desc:"why generalist writers lead to lost profit in B2B tech"
        }
      ]
  return (
    <div className="w-[80%] flex mx-auto border-b-8 border-black ">
      <div className="w-1/2 py-8 text-start ">
      <table className="table-auto w-full border-collapse  ">
      <tbody className="w-full">
          {skills.map((skill, index) => (
            <tr key={index} className=" flex justify-between w-full">
              {/* Skill Name */}
              <td className="  p-2">{skill.name}</td>
              {/* Skill Proficiency */}
              <td className="p-2">
                {skill.proficiency}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div className="border-black border-4 mx-8 "></div>
      <div  className="py-8 w-1/2 ">
      {tech.map((item, index) => (
        <div key={index} className=" flex  gap-20 py-2 ">
          <span className="whitespace-nowrap font-medium">{item.title}</span>

          <span className="text-start ">
            
            <p className="text-gray-600 capitalize">{item.desc}</p>
          </span>
        </div>
      ))}
      </div>
    </div>
  );
}
