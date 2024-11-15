const country = [
  "East Anglia",
  "East Midlands",
  "London",
  "North East",
  "Other Countries",
  "South West",
  "USA",
  "Yorkshire & Humberside",
];

const SidebarRight = () => {
  return (
    <div className="m-2">
      <ul>
        {country.map((c) => (
          <li
            className="cursor-pointer border-[1px] border-black p-2 my-2 text-[#293e80]  hover:text-[#4682b4]  text-sm rounded-md hover:font-semibold hover:bg-gray-100"
            key={c}
          >
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarRight;
