import { FEEDBACK_ACCESS_KEY, BaseForm } from "./FormUtils";

export default function FeedbackForm() {
  return (
    <BaseForm access_key={FEEDBACK_ACCESS_KEY} formName={"Feedback Form"}>
      <div>
        <legend className="fieldset-legend  flex flex-col items-center m-1">
          Message *
        </legend>
        <textarea
          className="textarea h-50 w-full lg:min-w-100 md:min-w-100"
          placeholder="..."
          name="message"
          required
          maxLength={300}
        ></textarea>
      </div>
    </BaseForm>
  );
}
