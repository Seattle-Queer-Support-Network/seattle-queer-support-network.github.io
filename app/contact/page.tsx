"use client";

import Form from "../ui/Form";

export default function Page() {
  return (
    <div className={"hero-content flex-col"}>
      <div>
        <h1 className={"text-6xl text-center"}>Contact Us</h1>
        <p className="py-4 text-center lg:max-w-7/10 m-auto ">
          We’d love to hear from you. Just choose the most convenient method and
          we’ll get back to you as soon as we can.
        </p>
      </div>
      <Form />
    </div>
  );
}
