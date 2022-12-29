import { useCallback, useEffect, useState } from "react";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Components from "../contacts";
import { useFormValidation } from "../hooks/useFormValidation";
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
  const { validate } = useFormValidation();
  const save = useCallback(() => {}, []);
  const handleOnChange = useCallback((e) => {
    const [name, value] = [e.target.name, e.target.value];
    setContact((prevState) => ({
      ...prevState,
      [name]: name === "phone" ? e.value : value,
    }));
  }, []);
  useEffect(() => {
    validate(contact);
  }, [contact, validate]);
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
      <div className="flex mb-3 w-full">
        <label htmlFor="phone" className="w-full md:basis-1/4 mb-1 text-base">
          Phone :
        </label>
        <ReactPhoneInput
          className="w-full"
          country={"cd"}
          value={contact?.phone || ""}
          onChange={(e) =>
            handleOnChange({ value: e, target: { name: "phone" } })
          }
        />
      </div>
    </Modal>
  );
}

export default AddContactModal;
