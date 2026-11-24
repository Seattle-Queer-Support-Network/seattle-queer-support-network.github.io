"use client";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";
import { MdError } from "react-icons/md";

export const CONTACT_ACCESS_KEY = "3a4bdd6c-2be7-4580-b1ee-561d88e39121";
export const EVENT_ACCESS_KEY = "3e18a8e4-fab5-47b7-b948-a5b0d016617f";
export const GROUP_LEAD_ACCESS_KEY = "bd7d7d67-c445-487c-9c89-2620ac950102";
export const VOLUNTEER_ACCESS_KEY = "6157c09a-933d-423b-9691-cdb629920ed3";
export const GROUP_SUGGESTION_ACCESS_KEY = "7744d445-d178-4a68-b002-661a831f4526";
export const FEEDBACK_ACCESS_KEY = "fc02d2d1-75b3-46aa-ba7d-d74acc281bea";

const SUCCESSFUL_RESPONSE_MESSAGE =
  "Message successfuly sent! We'll get back to you in 3-5 business days.";

const ERROR_RESPONSE_MESSAGE =
  "Message failed to send. Please try again later.";

const SENDING_MESSAGE = "Sending...";

enum formStatus {
  unsent, //0
  sending, //1
  error, //2
  success, //3
}

const formResponses: {
  [key: (typeof formStatus)[number]]: {
    icon: React.ReactNode;
    message: string;
  };
} = {
  3: {
    icon: <FaCheckCircle size={70} className="fill-green-500 mb-5" />,
    message: SUCCESSFUL_RESPONSE_MESSAGE,
  },
  2: {
    icon: <MdError size={70} className="fill-red-500 mb-5" />,
    message: ERROR_RESPONSE_MESSAGE,
  },
  1: {
    icon: <RiMailSendLine size={70} className=" mb-5" />,
    message: SENDING_MESSAGE,
  },
};

export function BaseForm({
  access_key,
  children,
  formName,
}: {
  children: React.ReactNode;
  formName: string;
  access_key: string;
}) {
  const [formResult, setFormResult] = useState(formStatus.unsent);
  const onSubmit = async (event: any) => {
    event.preventDefault();
    setFormResult(formStatus.unsent);
    const formData = new FormData(event.target);
    formData.append("access_key", access_key);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setFormResult(formStatus.success);
      event.target.reset();
    } else {
      setFormResult(formStatus.error);
    }
  };

  return (
    <>
      {formResult == formStatus.unsent ? (
        <form onSubmit={onSubmit}>
          <input type="hidden" name="formType" value={formName} />
          <div>
            <legend className="fieldset-legend  required flex flex-col items-center m-1">
              Name *
            </legend>
            <input
              type="text"
              className="input w-full"
              name="name"
              required
              maxLength={30}
            />
          </div>
          <div>
            <legend className="fieldset-legend flex flex-col items-center m-1">
              Email *
            </legend>
            <label className="input validator w-full">
              <input
                type="email"
                placeholder="mail@site.com"
                required
                name="email"
                maxLength={30}
              />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
          </div>
          <div>
            <legend className="fieldset-legend flex flex-col items-center m-1 ">
              Phone
            </legend>
            <label className="input validator w-full">
              <input
                type="phone"
                placeholder="(000) 000-0000"
                name="phone"
                maxLength={14}
                // only supports US numbers
                pattern="\(?\d{3}\)?-? *\d{3}-? *-?\d{4}"
              />
            </label>
            <div className="validator-hint hidden">
              Enter Vaild Phone Number
            </div>
          </div>

          {children}
          <div className=" mt-5 flex flex-col items-center">
            <button className="btn btn-custom " id="submit" type="submit">
              Submit
            </button>
          </div>
        </form>
      ) : (
        <p className="flex flex-col text-center  items-center">
          {formResponses[formResult].icon}
          {formResponses[formResult].message}
        </p>
      )}
    </>
  );
}
