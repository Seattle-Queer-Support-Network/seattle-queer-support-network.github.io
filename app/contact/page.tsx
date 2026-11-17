import ContactForm from "../ui/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seattle Queer Support Network Contact Page",
  description: "",
};

export default function Page() {
  return (
    <div className={"hero-content  flex-col  justify-self-center"}>
      <div>
        <h1 className={"text-6xl text-center"}>Contact Us</h1>
        <p className="py-4 text-center lg:max-w-7/10 m-auto ">
          We’d love to hear from you. Just choose the most convenient method and
          we’ll get back to you as soon as we can.
        </p>
      </div>
      <ContactForm />
    </div>
  );
}
