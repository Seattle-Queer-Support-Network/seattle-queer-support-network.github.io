"use client";
import websiteData from "../ui/websiteData";

export default function Page() {
  const staffData = websiteData.staffData;
  return (
    <>
      <div>
        <h1 className="text-5xl text-center font-bold">Our Story</h1>

        <p className="py-4 text-center lg:max-w-9/10 m-auto ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <p className="py-4 text-center lg:max-w-9/10 m-auto ">
          Lorem! ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <hr className="border border-custom m-10 w-full" />

      <div className={"hero-content flex-col lg:flex-row-reverse"}>
        <img
          alt={"a photo of an orange cat looking happy"}
          src={"/images/friends.jpg"}
          className="lg:max-w-sm md:max-w-sm object-contain md:object-cover  "
        />
        <div>
          <h1 className="text-5xl text-center font-bold">What We Do</h1>

          <p className="py-4 text-center lg:max-w-9/10 m-auto ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      <hr className="border border-custom m-10 w-full" />

      <div className={"hero-content flex-col lg:flex-row"}>
        <img
          alt={"a photo of an orange cat looking happy"}
          src={"/images/pride-parade2.jpg"}
          className="lg:max-w-sm md:max-w-sm object-contain md:object-cover  "
        />
        <div>
          <h1 className="text-5xl text-center font-bold">
            {" "}
            Mission And Values
          </h1>

          <p className="py-4 text-center lg:max-w-9/10 m-auto ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <hr className="border border-custom m-10 w-full" />

      <div className="flex flex-col">
        <h1 className="text-5xl text-center font-bold m-3">Our Team</h1>

        <div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-4 ">
          {staffData.map((staff) => {
            return (
              <div className="teal">
                <div className="bg-white rounded-lg p-5 flex flex-col items-center ">
                  <img
                    alt={"a photo of an orange cat looking happy"}
                    src={staff.image}
                    className=" mb-3 object-scale-down max-w-3xs p-3 "
                  />

                  <h1>{staff.name}</h1>
                  <h3>{staff.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
