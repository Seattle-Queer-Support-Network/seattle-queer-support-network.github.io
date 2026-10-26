"use client";

import { DayPicker } from "@daypicker/react";

export default function Page() {
  return (
    <>
      <div className={"hero-content flex-col lg:flex-row "}>
        <div>
          <h1 className="text-5xl text-center font-bold">Event Calander</h1>

          <hr className="border border-custom m-10 w-full" />
          <p>This is where the calander feature will go... once we have one</p>
          <img
            alt={"a photo of an orange cat looking happy"}
            src={"/images/calander-temp.jpg"}
            className=" rounded-lg  "
          />
        </div>
      </div>
    </>
  );
}
