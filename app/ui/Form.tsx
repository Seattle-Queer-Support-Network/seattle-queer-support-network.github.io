"use client";
import { redirect } from "next/navigation";
import { useState } from "react";

type FormInfo = {
  name: string;
  email: string;
  message: string;
  phone: string;
};

// add the form key here from web3froms
// don't worry it's public
const WEB_3_FORM_KEY = "";

export default function Form() {
  const [answer, setAnswer] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleChange(e: { target: HTMLInputElement }) {
    // we force a deep copy here since we want re-render to trigger when sub attribute updated
    let copy: { [key: string]: string } = JSON.parse(JSON.stringify(answer));
    copy[e.target.name as string] = e.target.value;
    setAnswer(copy as FormInfo);
  }

  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    formData.append("access_key", WEB_3_FORM_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    data.success
      ? redirect(`contact/submit?res=1`)
      : redirect("contact/submit?res=0");
  };
  return (
    <div>
      <form
        className="flex flex-col lg:flex-row items-center gap-5 justify-center"
        onSubmit={onSubmit}
      >
        <div>
          <div>
            <legend className="fieldset-legend  flex flex-col items-center m-1">
              Name:
            </legend>
            <input
              type="text"
              className="input"
              placeholder="Type here"
              name="name"
              onChange={handleChange}
              required
              maxLength={30}
            />
          </div>

          <div>
            <legend className="fieldset-legend flex flex-col items-center m-1">
              Email:
            </legend>
            <label className="input validator">
              <input
                type="email"
                placeholder="mail@site.com"
                required
                name="email"
                onChange={handleChange}
                maxLength={30}
              />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
          </div>

          <div>
            <legend className="fieldset-legend flex flex-col items-center m-1">
              Phone:
            </legend>
            <label className="input validator">
              <input
                type="phone"
                placeholder="(xxx)xxxxxx"
                required
                name="phone"
                onChange={handleChange}
                maxLength={10}
              />
            </label>
            <div className="validator-hint hidden">
              Enter Vaild Phone Number
            </div>
          </div>
        </div>

        <div>
          <div>
            <legend className="fieldset-legend  flex flex-col items-center m-1">
              Message:
            </legend>
            <textarea
              className="textarea h-50 w-full lg:min-w-100 md:min-w-100"
              placeholder="Hello Clarissa!"
              name="message"
              required
              onChange={handleChange as any}
              maxLength={300}
            ></textarea>
          </div>

          <button
            className="btn btn-custom"
            id="submit"
            type="submit"
            disabled={loading}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
