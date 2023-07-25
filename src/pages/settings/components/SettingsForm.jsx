import { useSettings } from "../settingsHooks/useSettings";
import { useUpdateSetting } from "../settingsHooks/useUpdateSetting";

const SettingsForm = () => {
  const {
    isLoading,
    settingsValues: {
      minBookingLength,
      maxBookingLength,
      maxGuestPerBooking,
      breakfastPrice,
    } = {},
  } = useSettings();
  const { updateSetting, isUpdating } = useUpdateSetting();
  const handleUpdate = (e, field) => {
    const { value } = e.target;
    if (!value) return;
    updateSetting({ [field]: value });
  };
  return (
    <form className="flex flex-col items-center gap-5 ">
      <div className="flex gap-5 ">
        <label htmlFor="minBookingLength" className="w-1/2">
          minBookingLength
        </label>
        <input
          type="number"
          id="minBookingLength"
          defaultValue={minBookingLength}
          className="w-1/2 text-black"
          onBlur={(e) => handleUpdate(e, "minBookingLength")}
        />
      </div>
      <div className="flex gap-5  ">
        {" "}
        <label htmlFor="maxBookingLength " className="w-1/2">
          maxBookingLength
        </label>
        <input
          type="number"
          id="maxBookingLength"
          className="w-1/2 text-black"
          defaultValue={maxBookingLength}
          onBlur={(e) => handleUpdate(e, "maxBookingLength")}
        />
      </div>
      <div className="flex gap-5  ">
        {" "}
        <label htmlFor="maxGuestPerBooking" className="w-1/2">
          maxGuestPerBooking
        </label>
        <input
          type="number"
          id="maxGuestsPerBooking"
          className="w-1/2 text-black"
          defaultValue={maxGuestPerBooking}
          onBlur={(e) => handleUpdate(e, "maxGuestPerBooking")}
        />
      </div>
      <div className="flex gap-5  ">
        {" "}
        <label htmlFor="breakfastPrice" className="w-1/2">
          breakFastPrice
        </label>
        <input
          type="number"
          id="breakfastPrice"
          className="w-1/2 text-black"
          defaultValue={breakfastPrice}
          onBlur={(e) => handleUpdate(e, "breakfastPrice")}
        />
      </div>
    </form>
  );
};

export default SettingsForm;
