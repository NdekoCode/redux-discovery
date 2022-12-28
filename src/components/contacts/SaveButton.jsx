import React from "react";

const SaveButton = ({ onClick }) => {
  return (
    <button
      className="list-inline-item controls text-gray-500 hover:text-gray-700 transition-colors duration-150"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={24}
        className="fill-current"
        height={24}
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M4 3h13l3.707 3.707a1 1 0 0 1 .293.707V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm8 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM5 5v4h10V5H5z" />
      </svg>
      save
    </button>
  );
};

export default SaveButton;
