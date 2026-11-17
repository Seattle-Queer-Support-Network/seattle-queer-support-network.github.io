import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "View the Seattle Queer Support Network Event Calander",
  description: "",
};

export default function Page() {
  return (
    <>
      <h1 className="text-5xl text-center font-bold">Event Calender</h1>

      <hr className="border border-custom m-10 w-full" />
      <p>
        This is a a place holder for the event calender. Will add one once we
        have a system to add input.
      </p>
      <img
        alt="alt text goes here"
        title="alt text goes here"
        src={"/images/calander-temp.jpg"}
        className="   "
      />
    </>
  );
}
