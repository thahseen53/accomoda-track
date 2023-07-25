import { useSearchParams } from "react-router-dom";

const Filtering = ({ field, options }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeFilter =
    searchParams.get("discount") || searchParams.get("last") || "all";
  const handleClick = (field, value) => {
    searchParams.set(field, value);
    setSearchParams(searchParams);
  };

  return (
    <>
      <div className="flex  gap-1 items-center">
        {options.map((option) => (
          <button
            key={option.value}
            className={`px-2 py-1  hover:bg-[#FF6D00] hover:text-white rounded-lg shadow-lg ${
              activeFilter === option.value
                ? "bg-[#FF6D00] text-white"
                : "bg-[#FF9E00] text-white"
            }`}
            onClick={() => handleClick(field, option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </>
  );
};

export default Filtering;
