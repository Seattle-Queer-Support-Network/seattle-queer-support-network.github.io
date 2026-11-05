"use client";

export default function Page() {
  return (
    <>
      <div className={"flex lg:flex-row flex-col items-center  "}>
        <img
          alt={"a photo of an orange cat looking happy"}
          src={"/images/couple2.jpg"}
          className="lg:max-w-sm md:max-w-sm object-contain md:object-cover m-3  "
        />

        <div>
          <h1 className="text-3xl text-center font-bold">Donate</h1>

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
      <div className="flex mb-80">
        <h1>give butter form will go here once Clare is given accesss</h1>
      </div>
    </>
  );
}
