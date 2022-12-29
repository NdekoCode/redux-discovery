import "./libs/utils";

const Components = {
  Input: function ({
    id,
    type = "text",
    name,
    value,
    onChange,
    className = "fade",
    width = "100%",
  }) {
    return (
      <input
        className={`p-3 py-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-offset-2 focus:ring-blue-200 transition-all duration-300 mb-1  ${className}`}
        style={{ width: width, background: "#f8f9fa" }}
        type={type}
        defaultValue={value}
        name={name}
        onChange={onChange}
      />
    );
  },
  Badge: function ({ filter, setFilter, selectedFilter }) {
    return (
      <button
        disabled={filter.unshiftFrom(3) === selectedFilter}
        className="px-2 py-1 text-sm disabled:bg-blue-400 rounded-lg disabled:curs"
        onClick={() => setFilter(filter)}
        aria-current={filter}
      >
        {filter}
      </button>
    );
  },
  ContactInput: function ({ name, value, type = "text", onChange }) {
    return (
      <div className="flex mb-3 w-full">
        <label htmlFor={name} className="w-full md:basis-1/4 mb-1 text-base">
          {name} :
        </label>
        <div className="w-full ">
          <input
            type={type}
            name={name}
            className="w-full p-3 py-2 rounded-md border border-gray-300 focus:ring focus:ring-offset-2 focus:ring-blue-200 transition-all duration-300 mb-1"
            id={name}
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    );
  },
  Select: function ({ children, name, value, onChange }) {
    return (
      <div className="flex mb-3 w-full">
        <label
          htmlFor="category"
          className="w-full md:basis-1/3 mb-1 text-base"
        >
          category :
        </label>
        <div className="flex flex-col">
          <select
            id="category"
            className="p-3 py-2 rounded-md border border-gray-300 focus:ring focus:ring-offset-2 focus:ring-blue-200 transition-all duration-300 mb-1"
            name={name}
            aria-label={name}
            onChange={onChange}
            value={value}
          >
            {children}
          </select>
        </div>
      </div>
    );
  },
};
export default Components;
