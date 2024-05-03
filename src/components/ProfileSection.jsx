import React from "react";
import { Profile } from "../constants";
export default function ProfileSection() {
  return (
    <div className="flex  border-b-[8px] w-[80%] mx-auto text-start  border-black">
      <div className=" w-1/2 py-4    ">
        <h1 className="text-4xl md:text-7xl p-2 font-bold uppercase  ">{Profile.name}</h1>
        <h4 className="text-2xl ">{Profile.profession}</h4>
      </div>
      <div className="  px-1 mx-6 bg-black"></div>
      <div className=" w-1/2 py-4 text-start">

          <p>{Profile.sepecialization}</p>
          <p className="font-semibold my-3">Email : {Profile.email}</p>
          <p  className="font-semibold">Website :{Profile.website}</p>
      </div>
    </div>
  );
}
