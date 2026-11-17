import websiteData from "../ui/websiteData";

export default function Page() {
  const adminData = websiteData.adminData;
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

      <div className={"flex flex-col lg:flex-row-reverse  items-center "}>
        <img
          alt="alt text goes here"
          title="alt text goes here"
          src={"/images/friends.jpg"}
          className="lg:max-w-sm md:max-w-sm object-contain md:object-cover mb-3  "
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

      <div className={"flex flex-col lg:flex-row items-center"}>
        <img
          alt="alt text goes here"
          title="alt text goes here"
          src={"/images/pride-parade2.jpg"}
          className="lg:max-w-sm md:max-w-sm object-contain md:object-cover mb-3 "
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

      <div className="">
        <h1 className="text-5xl text-center font-bold m-3">Admins</h1>

        <div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-4 flex flex-col items-center">
          {adminData.map((admin, index) => {
            return (
              <div
                // add index incase anyone has the same name
                key={admin.name + index}
                className="bg-white rounded-lg p-5 flex flex-col items-center "
              >
                <img
                  alt="alt text goes here"
                  title="alt text goes here"
                  src={admin.image}
                  className=" mb-3 object-scale-down max-w-3xs p-3 "
                />
                <h1 className="mb-3">{admin.name}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
