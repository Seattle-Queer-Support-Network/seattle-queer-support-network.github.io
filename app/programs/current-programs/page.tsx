"use client";

import Form from "@/app/ui/Form";
import websiteData from "../../ui/websiteData";

export default function Page() {
  const groupData = websiteData.groupData;
  console.log(groupData);
  return (
    <>
      <div>
        <h1 className="text-3xl text-center font-bold">Current Groups</h1>

        <p className="py-4 text-center lg:max-w-9/10 m-auto ">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum.
        </p>
      </div>

      <hr className="border border-custom m-10" />

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
        {groupData.map((group) => {
          return (
            <div
              className="hero-content flex-col rounded-lg
 teal"
            >
              <div
                className="flex flex-col text-center gap-3 bg-white p-5 rounded-lg
"
              >
                <img
                  alt={"a photo of an orange cat looking happy"}
                  src={group.icon}
                  className=" object-contain h-20  m-5 "
                />
                <h1 className="text-3xl ">{group.title}</h1>
                <p>{group.description}</p>
                <p className="font-medium ">
                  {group.time} in {group.location}
                </p>
                <p className=" font-medium">
                  {group.startDate} through {group.endDate}
                </p>
                <p>To join contact Steve at {group.contact}</p>
              </div>
            </div>
          );
        })}
      </div>
      <hr className="border border-custom m-10 " />
      <div className={"hero-content flex-col lg:flex-row"}>
        <div>
          <h1 className="text-3xl text-center font-bold">
            Don't See What You're Looking For?
          </h1>

          <p className="py-4 text-center lg:max-w-9/10 m-auto ">
            Here is where people can suggestion groups they want to see!
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <Form />
        </div>
      </div>
    </>
  );
}
