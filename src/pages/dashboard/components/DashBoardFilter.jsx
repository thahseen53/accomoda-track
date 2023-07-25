import Filtering from "../../../components/Layouts/Filtering";

const DashBoardFilter = () => {
  return (
    <div>
      <Filtering
        field={"last"}
        options={[
          { label: "Last 7 Days", value: "7" },
          { label: "Last 30 Days", value: "30" },
          { label: "Last 90 Days", value: "90" },
        ]}
      />
    </div>
  );
};

export default DashBoardFilter;
