import "app/utils";

const Components = {
  Input: function ({
    id,
    type = "text",
    name,
    value,
    onChange,
    width = "100%",
  }) {
    return (
      <input
        className="form-control form-control-sm mb-1"
        style={{ width: width, background: "#f8f9fa" }}
        type={type}
        defaultValue={value}
        name={name}
        onChange={onChange}
      />
    );
  },
  Badge: function ({ filter }) {
    return (
      <span
        className="badge rounded-pill filter-pill"
        onClick={() => null}
        aria-current={filter}
      >
        {filter}
      </span>
    );
  },
  ContactInput: function ({ name, value, type = "text", onChange }) {
    return (
      <div className="row mb-3">
        <label htmlFor={name} className="col-sm-2 col-form-label">
          {name} :
        </label>
        <div className="col-sm-8">
          <input
            type={type}
            name={name}
            className="form-control"
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
      <div className="d-flex mb-3">
        <label htmlFor="category" className="col-sm-2 col-form-label">
          category :
        </label>
        <div className="d-flex flex-column">
          <select
            id="category"
            className="col-sm-4 form-select"
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
