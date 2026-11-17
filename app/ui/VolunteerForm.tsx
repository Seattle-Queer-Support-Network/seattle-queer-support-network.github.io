"use client";

import { useState } from "react";
import { VOLUNTEER_ACCESS_KEY, BaseForm } from "./FormUtils";

export default function VolunteerForm() {
  const [other, setOther] = useState(false);

  return (
    <BaseForm access_key={VOLUNTEER_ACCESS_KEY} formName={"Volunteer Form"}>
      <div className="flex flex-col center-items mt-5 mb-5">
        <legend className="fieldset-legend  flex flex-col items-center m-1">
          Area of Interest *
        </legend>
        <select
          name="areaOfInterest"
          className="border-2 border-solid p-3"
          onChange={(e) => {
            if (e.target.value == "other") {
              setOther(true);
            } else {
              setOther(false);
            }
          }}
        >
          <option value="">Select</option>
          <option value="outreach">Outreach</option>
          <option value="website-updates">Website Updates</option>
          <option value="event-support">Event Support</option>
          <option value="social-media-drafting">Social Media Drafting</option>
          <option value="community-relationship">Community Relationship</option>
          <option value="calender-update">Calender Updates</option>
          <option value="other">Other (describe below)</option>
        </select>
      </div>

      {other ? (
        <div>
          <legend className="fieldset-legend  flex flex-col items-center m-1">
            What is your area of interest? *
          </legend>
          <textarea
            className="textarea h-50 w-full lg:min-w-100 md:min-w-100"
            placeholder="..."
            name="otherAreaOfInterestDescription"
            required
            maxLength={300}
          ></textarea>
        </div>
      ) : null}

      <div>
        <legend className="fieldset-legend  flex flex-col items-center m-1">
          Why do you want to work with us? *
        </legend>
        <textarea
          className="textarea h-50 w-full lg:min-w-100 md:min-w-100"
          placeholder="..."
          name="why"
          required
          maxLength={300}
        ></textarea>
      </div>
    </BaseForm>
  );
}
