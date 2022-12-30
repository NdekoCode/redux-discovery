import React, { memo, useCallback, useState } from "react";
import { connect } from "react-redux";
import Components from ".";
import { editContact } from "../../libs/store/contacts/actions";
import ButtonEdit from "./ButtonEdit";
import RemoveButton from "./RemoveButton";
import SaveButton from "./SaveButton";

const Row = memo(({ edit, remove, contact }) => {
  const [isEditing, setEditing] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const [contactItem, setContact] = useState({ ...contact });
  const handleOnChange = useCallback(
    (e) => {
      const [name, value] = [e.target.name, e.target.value];
      setContact((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    [contactItem]
  );
  const editCtc = useCallback(() => setEditing(true), [isEditing]);
  const save = useCallback(() => {
    edit(contactItem);
    setEditing(false);
  }, [isEditing, contactItem]);
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
            contactItem.name
          ) : (
            <Components.Input
              name="name"
              value={contactItem.name}
              onChange={handleOnChange}
            />
          )}
        </p>
        <small className="text-gray-600">{contactItem.category}</small>
      </div>
      <ul className="list-disc list-inside gap-2">
        {!isEditing ? (
          <li className="text-gray-600 pl-3">{contactItem.email}</li>
        ) : (
          <Components.Input
            name="email"
            value={contactItem.email}
            type="email"
            width="60%"
            onChange={handleOnChange}
          />
        )}

        {!isEditing ? (
          <li className="text-gray-600 pl-3">{contactItem.phone}</li>
        ) : (
          <Components.Input
            name="phone"
            value={contactItem.phone}
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
const mapDispatchToProps = (dispatch) => ({
  edit: (contact) => dispatch(editContact(contact)),
});
const RowStore = connect(null, mapDispatchToProps)(Row);
export default RowStore;
