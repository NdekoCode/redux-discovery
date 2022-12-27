import Components from "app/components/";
import { useState } from "react";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Modal from "./Modal";

const initialState = {
  first: null,
  last: null,
  email: null,
  phone: null,
  category: "business",
};
function AddContactModal() {
  const filters = ["business", "friends", "family"];
  const [contact, setContact] = useState({ ...initialState });
  const save = () => {};
  const handleOnChange = (e) => {
    setContact((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.name === "phone" ? e.value : e.target.value,
    }));
  };
  return (
    <Modal save={save} title="Add New Contact :">
      <Components.Select
        name="category"
        value={contact.first || ""}
        onChange={handleOnChange}
      >
        {filters.map((filter) => {
          return <option key={filter}>{filter}</option>;
        })}
      </Components.Select>
      <Components.ContactInput
        name="first"
        value={contact.first || ""}
        onChange={handleOnChange}
      />
      <Components.ContactInput
        name="last"
        value={contact.last || ""}
        onChange={handleOnChange}
      />
      <Components.ContactInput
        name="email"
        type="email"
        value={contact.email || ""}
        onChange={handleOnChange}
      />
      <ReactPhoneInput
        country={"fr"}
        value={contact?.phone || ""}
        onChange={(e) =>
          handleOnChange({ value: e, target: { name: "phone" } })
        }
      />
    </Modal>
  );
}

export default AddContactModal;
