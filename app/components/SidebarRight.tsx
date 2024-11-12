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
            className="cursor-pointer text-[#293e80] text-base hover:text-[#FF7B00]"
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
