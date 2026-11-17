import VolunteerForm from "../../ui/VolunteerForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signup to volunteer with Seattle Queer Support Network",
  description: "",
};

export default function Page() {
  return (
    <>
      <div className={"flex lg:flex-row-reverse flex-col items-center  "}>
        <img
          alt="alt text goes here"
          title="alt text goes here"
          src={"/images/group3.jpg"}
          className="lg:max-w-sm md:max-w-sm object-contain md:object-cover mb-5 "
        />
        <div>
          <h1 className="text-5xl text-center font-bold">Volunteer</h1>

          <p className="py-4 text-center lg:max-w-9/10 m-auto ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          {
            // Commenting out Idealist until it's ready
            /* <p className="text-center m-3">
            <a
              className="btn btn-custom p-8"
              href="https://www.idealist.org/en/volunteer"
            >
              View Current Roles on Idealist
            </a>
          </p> */
          }
        </div>
      </div>
      <hr className="border border-custom m-10 w-full" />

      <div className={" hero-content  flex-col  justify-self-center"}>
        <h1 className="text-5xl text-center font-bold">Volunteer Form</h1>

        <p className="py-4 text-center lg:max-w-9/10 m-auto ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <VolunteerForm />
      </div>
    </>
  );
}
