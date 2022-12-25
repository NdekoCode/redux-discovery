import React, { useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../../store/todos/todosActions";

const AddTodoForm = () => {
  const dispatch = useDispatch();
  const input = useRef("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = useCallback(async (evt) => {
    evt.preventDefault();
    const value = input.current.value;
    input.current.value = "";
    if (value.length > 2) {
      setLoading(true);
      await dispatch(addTodoAction(value));
      setLoading(false);

      input.current.focus();
    }
  });
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center max-w-[780px] rounded-l-lg active:shadow-lg focus:shadow-lg min-w-max shadow border-t rounded-r-full pr-3"
    >
      <input
        type="text"
        placeholder={loading ? "Chargement..." : "Entrer une tache"}
        className="px-2 w-full py-2 outline-none"
        ref={input}
      />
      <button
        type="submit"
        disabled={loading}
        className="text-gray-500 disabled:opacity-75 disabled:text-gray-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ionicon h-8 w-8"
          viewBox="0 0 512 512"
        >
          <title>Add Circle</title>
          <path
            d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
            fill="none"
            stroke="currentColor"
            strokeMiterlimit={10}
            strokeWidth={32}
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={32}
            d="M256 176v160M336 256H176"
          />
        </svg>
      </button>
    </form>
  );
};

export default AddTodoForm;
