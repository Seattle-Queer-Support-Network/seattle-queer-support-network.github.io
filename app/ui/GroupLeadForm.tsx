import { GROUP_LEAD_ACCESS_KEY, BaseForm } from "./FormUtils";

export default function GroupLeadForm() {
  return (
    <BaseForm access_key={GROUP_LEAD_ACCESS_KEY} formName={"Group Lead Form"}>
      <div>
        <legend className="fieldset-legend  flex flex-col items-center m-1">
          What type of group do you wish to start? *
        </legend>
        <textarea
          className="textarea h-50 w-full lg:min-w-100 md:min-w-100"
          placeholder="..."
          name="what"
          required
          maxLength={300}
        ></textarea>
      </div>

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

      <div>
        <legend className="fieldset-legend  flex flex-col items-center m-1">
          What is your experience running groups? *
        </legend>
        <textarea
          className="textarea h-50 w-full lg:min-w-100 md:min-w-100"
          placeholder="..."
          name="experience"
          required
          maxLength={300}
        ></textarea>
      </div>
    </BaseForm>
  );
}
