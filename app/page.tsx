"use client";

export default function Home() {
  return (
    <>
      <div className="flex p-10 lg:flex-row flex-col md:items-center bg-[url('./../public/images/pride-flag.jpg')] bg-center bg-cover">
        <div className="sm:m-10  mt-20 bg-white/75  p-5 ">
          <h1 className="text-3xl text-center font-bold">Cool Motto Here</h1>
          <p className="py-4 text-center lg:max-w-9/10 m-auto  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <hr className="border border-custom m-10 w-full" />

      <div className="flex lg:flex-row flex-col items-center">
        <img
          alt={"a photo of an orange cat looking happy"}
          src={"/images/hug.jpg"}
          className="lg:max-w-sm md:max-w-sm object-contain md:object-cover   m-5 h-75"
        />
        <div className="m-10">
          <h1 className="text-3xl text-center font-bold">
            We're Seattle Queer Support Network
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

      <div className="flex flex-col items-center">
        <div className="m-10">
          <h1 className="text-3xl text-center font-bold ">Engage With Us!</h1>
        </div>
        <div className="flex flex-row max-xl:flex-col gap-10">
          <div className="flex flex-col items-center">
            <img
              alt={"a photo of an orange cat looking happy"}
              src={"/images/group4.jpg"}
              className="lg:max-w-sm md:max-w-sm object-contain md:object-cover   m-5 h-75"
            />
            <a
              className="btn m-3 btn-custom"
              href="/get-programs/current-programs"
            >
              Join A Group
            </a>
          </div>
          <div className="flex flex-col items-center">
            <img
              alt={"a photo of an orange cat looking happy"}
              src={"/images/friends2.jpg"}
              className="lg:max-w-sm md:max-w-sm object-contain md:object-cover   m-5 h-75"
            />
            <a className="btn m-3 btn-custom" href="/donate">
              Donate
            </a>
          </div>
          <div className="flex flex-col items-center">
            <img
              alt={"a photo of an orange cat looking happy"}
              src={"/images/pride-parade.jpg"}
              className="lg:max-w-sm md:max-w-sm object-contain md:object-cover   m-5 h-75"
            />
            <a
              className="btn m-3 btn-custom center"
              href="/programs/event-calander"
            >
              Find An Event
            </a>
          </div>
        </div>
      </div>
      <hr className="border border-custom m-10 w-full" />

      <div className="flex lg:flex-row-reverse flex-col items-center">
        <img
          alt={"a photo of an orange cat looking happy"}
          src={"/images/couple.jpg"}
          className="lg:max-w-sm md:max-w-sm object-contain md:object-cover    m-5 h-75"
        />
        <div className="m-10">
          <h1 className="text-3xl text-center font-bold">Want to hear more?</h1>
          <p className="py-4 text-center lg:max-w-9/10 m-auto ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="text-center">
            <a
              className="btn m-3 btn-custom center"
              href="/programs/event-calander"
            >
              Read the Blog
            </a>
          </div>
        </div>
      </div>

      <hr className="border border-custom m-10 w-full" />

      <div className="flex flex-col align-items">
        <div className="m-10">
          <h1 className="text-3xl text-center font-bold">
            Subscribe to our newsletter!
          </h1>
          <p className="py-4 text-center lg:max-w-9/10 m-auto ">
            I'll put something here once we know how the method people will be
            subscribing. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
        <div className="flex flex-row  justify-center gap-3">
          <div className="flex flex-col">
            <label className="input validator">
              <input
                type="email"
                placeholder="your email here"
                required
                name="email"
                // onChange={handleChange}
                maxLength={30}
              />
            </label>

            <div className="validator-hint hidden">
              Enter valid email address
            </div>
          </div>
          <button
            className="btn btn-custom"
            id="submit"
            type="submit"

            //disabled={loading}
          >
            {" "}
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
