import React from "react";

const TableHeader = ({ label }) => {
  return (
    <div className="text-[0.8rem] lg:text-[1.2rem] font-bold border-r-2 border-red-200 ml-1">
      {label}
    </div>
  );
};

export default TableHeader;
