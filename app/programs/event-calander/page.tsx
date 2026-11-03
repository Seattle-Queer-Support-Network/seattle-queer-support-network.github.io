"use client";

export default function Page() {
  return (
    <>
      <div className="flex flex-col align-items pl-10 pr-10">
        <h1 className="text-5xl text-center font-bold">Event Calander</h1>

        <hr className="border border-custom m-10 w-full" />
        <p>
          This is a a place holder for the event calander. Will add one once we
          have a system to add input.
        </p>
        <img
          alt={"a photo of an orange cat looking happy"}
          src={"/images/calander-temp.jpg"}
          className="   "
        />
      </div>
    </>
  );
}
