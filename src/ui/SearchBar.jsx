import Input from "./Input";

function SearchBar({ type, placeholder, className, onChange, value }) {
  return (
    <div className="flex items-center py-2 font-Outfit font-light ">
      <img src="/assets/icon-search.svg" className="relative w-[24px] " />
      <Input
        type={type}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default SearchBar;
