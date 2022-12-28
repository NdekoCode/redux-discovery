import React, { memo, useCallback, useState } from "react";
import Components from ".";
import ButtonEdit from "./ButtonEdit";
import RemoveButton from "./RemoveButton";
import SaveButton from "./SaveButton";

const Row = memo((props) => {
  const { edit, remove } = props;
  const [isEditing, setEditing] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const [contact, setContact] = useState({ ...props.contact });
  const handleOnChange = useCallback((e) => {
    const [name, value] = [e.target.name, e.target.value];
    setContact((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  });
  const editCtc = useCallback(() => setEditing(true), [isEditing]);
  const save = useCallback(() => setEditing(false), [isEditing]);
  const removeCtc = useCallback(() => {
    const input = window.confirm(
      "are you sure you want to delete this contact ?"
    );
  });
  const show = useCallback(() => setVisible(true), [isVisible]);
  const hide = useCallback(() => setVisible(false), [isVisible]);
  return (
    <div
      href="#"
      className={`p-3 border-b border-gray-200 hover:bg-gray-100 cursor-pointer transition-all duration-300 fade ${
        isVisible ? " min-h-[130px]" : " min-h-[120px]"
      }`}
      aria-current="true"
      onMouseEnter={show}
      onMouseLeave={hide}
    >
      <div className="mb-1 flex w-full justify-between">
        <p className="mb-1 name text-gray-600 text-xl">
          {!isEditing ? (
            contact.name
          ) : (
            <Components.Input
              name="name"
              value={contact.name}
              onChange={handleOnChange}
            />
          )}
        </p>
        <small className="text-gray-600">{contact.category}</small>
      </div>
      <ul className="list-disc list-inside flex ">
        {!isEditing ? (
          <li className="text-gray-600 pl-3">{contact.email}</li>
        ) : (
          <Components.Input
            name="email"
            value={contact.email}
            type="email"
            width="60%"
            onChange={handleOnChange}
          />
        )}

        {!isEditing ? (
          <li className="text-gray-600 pl-3">{contact.phone}</li>
        ) : (
          <Components.Input
            name="phone"
            value={contact.phone}
            type="text"
            width="60%"
            onChange={handleOnChange}
          />
        )}
      </ul>
      {isVisible ? (
        <ul className="list-controls list-inline flex justify-end fadeIn">
          {!isEditing && (
            <li>
              <ButtonEdit onClick={editCtc} />
            </li>
          )}
          {isEditing && (
            <li>
              <SaveButton onClick={save} />
            </li>
          )}
          <li>
            <RemoveButton onClick={removeCtc} />
          </li>
        </ul>
      ) : (
        <div style={{ height: "24px" }}></div>
      )}
    </div>
  );
});
export default Row;
