import BaseForm, { EVENT_ACCESS_KEY } from "./BaseForm";

export default function EventForm() {
  return (
    <BaseForm access_key={EVENT_ACCESS_KEY} formName={"Submit Event Form"}>
      <div>
        <div>
          <legend className="fieldset-legend  flex flex-col items-center m-1">
            Event Time
          </legend>
          <p className="p-2">Start Time</p>
          <input
            className="p-2"
            type="time"
            id="appointment"
            name="appointment"
            required
          />
          <p className="p-2">End Time</p>
          <input
            className="p-2"
            type="time"
            id="appointment"
            name="appointment"
            required
          />
        </div>
      </div>
      <div>
        <legend className="fieldset-legend  flex flex-col items-center m-1">
          Event Location:
        </legend>
        <input
          type="text"
          className="input w-full"
          placeholder="Type here"
          name="location"
          required
          maxLength={30}
        />
      </div>

      <div>
        <div>
          <legend className="fieldset-legend  flex flex-col items-center m-1">
            Event Description
          </legend>
          <textarea
            className="textarea h-50 w-full lg:min-w-100 md:min-w-100"
            placeholder="..."
            name="description"
            required
            maxLength={300}
          ></textarea>
        </div>
      </div>
    </BaseForm>
  );
}
