import BaseForm, { CONTACT_ACCESS_KEY } from "./BaseForm";

export default function ContactForm() {
  return (
    <BaseForm access_key={CONTACT_ACCESS_KEY}>
      <input type="hidden" name="formType" value="Contact Form" />
      <div>
        <div>
          <legend className="fieldset-legend  flex flex-col items-center m-1">
            Contact Form
          </legend>
          <textarea
            className="textarea h-50 w-full lg:min-w-100 md:min-w-100"
            placeholder="..."
            name="experiance"
            required
            maxLength={300}
          ></textarea>
        </div>
      </div>
    </BaseForm>
  );
}
