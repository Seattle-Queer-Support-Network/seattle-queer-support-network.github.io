"use client";
import { redirect } from "next/navigation";
import { useState } from "react";

type FormInfo = {
  name: string;
  email: string;
  message: string;
  phone: string;
  areaOfInterest: "";
  why: "";
};

// add the form key here from web3froms
// don't worry it's public
const WEB_3_FORM_KEY = "";

export default function VolunteerForm() {
  const [answer, setAnswer] = useState({
    name: "",
    email: "",
    phone: "",
    areaOfInterest: "",
    why: "",
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
    <form onSubmit={onSubmit}>
      <div>
        <legend className="fieldset-legend  flex flex-col items-center m-1">
          Name:
        </legend>
        <input
          type="text"
          className="input w-full"
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
        <label className="input validator w-full">
          <input
            type="email"
            placeholder="mail@site.com"
            required
            name="email"
            onChange={handleChange}
            maxLength={30}
          />
        </label>
        <div className="validator-hint hidden">Enter valid email address</div>
      </div>

      <div>
        <legend className="fieldset-legend flex flex-col items-center m-1 ">
          Phone:
        </legend>
        <label className="input validator w-full">
          <input
            type="phone"
            placeholder="(xxx)xxxxxx"
            required
            name="phone"
            onChange={handleChange}
            maxLength={10}
          />
        </label>
        <div className="validator-hint hidden">Enter Vaild Phone Number</div>
      </div>

      <div>
        <div className="flex flex-col center-items mt-5 mb-5">
          <legend className="fieldset-legend  flex flex-col items-center m-1">
            Area of Interest
          </legend>
          <select name="areaOfInterest" className="border-2 border-solid p-3">
            <option value="">Select</option>
            <option value="outreach">Outreach</option>
            <option value="website-updates">Website Updates</option>
            <option value="event-support">Event Support</option>
            <option value="social-media-drafting">Social Media Drafting</option>
            <option value="community-relationship">
              Community Relationship
            </option>
            <option value="calender-update">Calender Updates</option>
          </select>
        </div>
      </div>
      <div>
        <div>
          <legend className="fieldset-legend  flex flex-col items-center m-1">
            Why do you want to work with us?
          </legend>
          <textarea
            className="textarea h-50 w-full lg:min-w-100 md:min-w-100"
            placeholder="..."
            name="why"
            required
            onChange={handleChange as any}
            maxLength={300}
          ></textarea>
        </div>
      </div>

      <div className=" mt-5 flex flex-col items-center">
        <button
          className="btn btn-custom "
          id="submit"
          type="submit"
          disabled={loading}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
