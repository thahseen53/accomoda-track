import SettingsForm from "./components/SettingsForm";

const Settings = () => {
  return (
    <div className="bg-[#240046] p-6 mx-auto rounded-lg">
      <h1 className="text-[1.2rem] font-bold mb-6">Application settings</h1>
      <SettingsForm />
    </div>
  );
};

export default Settings;
