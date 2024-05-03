import { Briefcase, User, PencilRuler, Lightbulb } from "lucide-react";

export const sideIcon = [
  {
    label: "User",
    icons: <User  size={64} />,
  },
  {
    label: "Work",
    icons: <Briefcase  size={64} />,
  },

  {
    label: "Skills & samples",
    icons: <PencilRuler  size={64} />,
  },
  {
    label: "experience",
    icons: <Lightbulb   size={64}/>,
  },
];

export const Profile = {
  name: "jassica Greene",
  profession: "freeLance writer",
  email: "myemail@gmail.com",
  sepecialization:
    " i specialize in writing long-form blog content,case study, e-books and white-papers for B2Bs,tech startup and marketing agencies.",
  website: "myblog.com",
};

export const work = [{
    when:"present",
    where:"jassica green marketing . frelanec writer",
    desc:"crete blog post, landing pages, ebooks and case studies for client"
},

{
    when:"2016",
    where:"kaiser permanente .Lead agile product owner",
    desc:"crete and socialize best practices for agile software development"

},
{
    when:"2013-15",
    where:"humana . agile product owner",
    desc:"over saw the implementation of  of six major web development projects "

}
];
