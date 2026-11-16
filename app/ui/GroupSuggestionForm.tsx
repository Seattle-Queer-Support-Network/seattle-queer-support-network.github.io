import { BaseForm, GROUP_SUGGESTION_ACCESS_KEY } from "./FormUtils";

export default function GroupSuggestionForm() {
  return (
    <BaseForm
      access_key={GROUP_SUGGESTION_ACCESS_KEY}
      formName={"Group Suggestion Form"}
    >
      <div>
        <legend className="fieldset-legend  flex flex-col items-center m-1">
          What kind of group are you looking for? *
        </legend>
        <textarea
          className="textarea h-50 w-full lg:min-w-100 md:min-w-100"
          placeholder="..."
          name="groupSuggestion"
          required
          maxLength={300}
        ></textarea>
      </div>
    </BaseForm>
  );
}
