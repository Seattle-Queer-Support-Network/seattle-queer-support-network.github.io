import { useState } from "react";

export const CONTACT_ACCESS_KEY = "eb34b609-f96b-4cd5-98cf-1d8891747abb";
export const EVENT_ACCESS_KEY = "";
export const GROUP_LEAD_ACCESS_KEY = "";
export const VOLUNTEER_ACCESS_KEY = "";

export default function BaseForm({
  access_key,
  children,
  formName,
}: {
  children: React.ReactNode;
  formName: string;
  access_key: string;
}) {
  const [result, setResult] = useState("");
  console.log(access_key);
  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", access_key);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      {result ? null : (
        <>
          <input type="hidden" name="formType" value={formName} />

          <div>
            <legend className="fieldset-legend  flex flex-col items-center m-1">
              Name:
            </legend>
            <input
              type="text"
              className="input w-full"
              placeholder="Type here"
              name="name"
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
                maxLength={30}
              />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
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
                maxLength={10}
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
        </>
      )}
      <span>{result}</span>
    </form>
  );
}
