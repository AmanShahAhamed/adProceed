import { AD_FILTERS, PAGE_SIZE } from "../constant/constant";
import AdDropdown from "./ad-dropdown";

const AdFilters = () => {
  return (
    <div className="my-2 flex flex-row-reverse gap-2">
      <AdDropdown values={AD_FILTERS} />
      <AdDropdown values={PAGE_SIZE} defaultValue="Page Size" />
    </div>
  );
};

export default AdFilters;
