"use client";

export default function Page() {
  return (
    <div>
      <div className={"hero-content flex-col lg:flex-row"}>
        <div>
          <h1 className="text-5xl text-center font-bold">Our Story</h1>

          <p className="py-4 text-center lg:max-w-9/10 m-auto ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p className="py-4 text-center lg:max-w-9/10 m-auto ">
            Lorem! ipsum dolor sit amet, consectetur adipiscing elit, sed do
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

      <div className={"hero-content flex-col lg:flex-row-reverse"}>
        <img
          alt={"a photo of an orange cat looking happy"}
          src={"/images/friends.jpg"}
          className="lg:max-w-sm md:max-w-sm object-contain md:object-cover rounded-lg shadow-2xl"
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
          className="lg:max-w-sm md:max-w-sm object-contain md:object-cover rounded-lg shadow-2xl"
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

        <div className="grid grid-cols-4 gap-4">
          <div className="text-center p-2">
            <img
              alt={"a photo of an orange cat looking happy"}
              src={"/images/example-staff-photo.jpg"}
              className="rounded-lg mb-3"
            />
            <h1>FirstName LastName</h1>
            <h3>Volunteer Coordinator</h3>
          </div>
          <div className="text-center p-2">
            <img
              alt={"a photo of an orange cat looking happy"}
              src={"/images/example-staff-photo.jpg"}
              className="rounded-lg mb-3"
            />
            <h1>FirstName LastName</h1>
            <h3>Volunteer Coordinator</h3>
          </div>
          <div className="text-center p-2">
            <img
              alt={"a photo of an orange cat looking happy"}
              src={"/images/example-staff-photo.jpg"}
              className="rounded-lg mb-3"
            />
            <h1>FirstName LastName</h1>
            <h3>Volunteer Coordinator</h3>
          </div>
          <div className="text-center p-2">
            <img
              alt={"a photo of an orange cat looking happy"}
              src={"/images/example-staff-photo.jpg"}
              className="rounded-lg mb-3"
            />
            <h1>FirstName LastName</h1>
            <h3>Volunteer Coordinator</h3>
          </div>
          <div className="text-center p-2">
            <img
              alt={"a photo of an orange cat looking happy"}
              src={"/images/example-staff-photo.jpg"}
              className="rounded-lg mb-3"
            />
            <h1>FirstName LastName</h1>
            <h3>Volunteer Coordinator</h3>
          </div>
          <div className="text-center p-2">
            <img
              alt={"a photo of an orange cat looking happy"}
              src={"/images/example-staff-photo.jpg"}
              className="rounded-lg mb-3"
            />
            <h1>FirstName LastName</h1>
            <h3>Volunteer Coordinator</h3>
          </div>
          <div className="text-center p-2">
            <img
              alt={"a photo of an orange cat looking happy"}
              src={"/images/example-staff-photo.jpg"}
              className="rounded-lg mb-3"
            />
            <h1>FirstName LastName</h1>
            <h3>Volunteer Coordinator</h3>
          </div>
        </div>
      </div>

      <hr className="border border-custom m-10 w-full" />
    </div>
  );
}
