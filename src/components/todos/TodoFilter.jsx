import React from "react";
import { connect } from "react-redux";
import { setFilterAction } from "../../store/filter/filterActions";
import { filterSelector } from "../../store/filter/filterSelectors";

const TodoFilter = ({ filter, onChange }) => {
  console.log(filter);
  return (
    <div>
      <button
        disabled={filter === null}
        onClick={() => onChange(null)}
        className="px-2 py-2.5 bg-blue-600 rounded-md m-1 text-white disabled:bg-blue-400"
      >
        Aucun filtre
      </button>
      <button
        disabled={filter === true}
        onClick={() => onChange(true)}
        className="px-2 py-2.5 bg-green-600 text-white rounded-md m-1 disabled:bg-green-400"
      >
        Completer
      </button>

      <button
        disabled={filter === false}
        onClick={() => onChange(false)}
        className="px-2 py-2.5 bg-red-600 text-white rounded-md m-1 disabled:bg-red-400"
      >
        A faire{" "}
      </button>
    </div>
  );
};
export const TodoFilterStore = connect(
  (state) => ({ filter: filterSelector(state) }),
  (dispatch) => ({
    onChange: (filter) => dispatch(setFilterAction(filter)),
  })
)(TodoFilter);
export default TodoFilter;
