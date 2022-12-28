import React, { useCallback, useState } from "react";
import Components from ".";

function Row(props) {
  const { edit, remove } = props;
  const [isEditing, setEditing] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const [contact, setContact] = useState({ ...props.contact });
  const handleOnChange = useCallback((e) => {
    setContact((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  });
  const editCtc = () => setEditing(true);
  const save = () => {
    setEditing(false);
  };
  const removeCtc = () => {
    const input = window.confirm(
      "are you sure you want to delete this contact ?"
    );
  };
  const show = () => {};
  const hide = () => {};
  return (
    <div
      href="#"
      className="justify-between p-3 border-b border-gray-300"
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
      <ul className="list-disc list-inside">
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
        <ul className="list-controls list-inline">
          {!isEditing && (
            <li className="list-inline-item controls" onClick={editCtc}>
              <i className="fas fa-pen"></i> edit
            </li>
          )}
          {isEditing && (
            <li className="list-inline-item controls" onClick={save}>
              <i className="fas fa-save"></i> save
            </li>
          )}
          <li className="list-inline-item controls" onClick={removeCtc}>
            <i className="fas fa-trash"></i> delete
          </li>
        </ul>
      ) : (
        <div style={{ height: "24px" }}></div>
      )}
    </div>
  );
}
export default Row;
