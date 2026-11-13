import { CONTACT_ACCESS_KEY, BaseForm } from "./FormUtils";

export default function ContactForm() {
  return (
    <BaseForm access_key={CONTACT_ACCESS_KEY} formName={"Contact Form"}>
      <div>
        <div>
          <legend className="fieldset-legend  flex flex-col items-center m-1">
            Message:
          </legend>
          <textarea
            className="textarea h-50 w-full lg:min-w-100 md:min-w-100"
            placeholder="..."
            name="message"
            required
            maxLength={300}
          ></textarea>
        </div>
      </div>
    </BaseForm>
  );
}
