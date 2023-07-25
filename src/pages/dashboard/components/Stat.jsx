const Stat = ({ title, icon, value }) => {
  return (
    <div className="grid grid-cols-[6.4rem,1fr] grid-rows-[auto,auto] gap-x-[1.6rem] bg-[#240046] px-3 py-4 rounded-lg">
      <div
        className={`row-span-full rounded-full flex items-center justify-center font-bold`}
      >
        {icon}
      </div>
      <h5 className="font-bold text-[1rem] text-gray-300 items-end">{title}</h5>
      <p className="text-[1.3rem] font-bold">{value}</p>
    </div>
  );
};

export default Stat;
