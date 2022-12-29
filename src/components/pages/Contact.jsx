import React, {
  createRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { dataContacts } from "../../libs/data/data";
import "../../utils/utils";
import Components from "../contacts";
import AddContactModal from "../contacts/AddContactModal";
import Row from "../contacts/Row";
import { useFormValidation } from "../hooks/useFormValidation";

const styles = {
  h1: {
    margin: 0,
    textDecoration: "underline",
    fontWeight: "400",
  },
  buttons: {
    width: "20%",
    fontSize: 20,
    display: "inline-flex",
    justifyContent: "space-around",
  },
  disabled: {
    cursor: "not-allowed",
    opacity: 0.3,
  },
};
const Contact = () => {
  const ref = createRef();
  const [list, setList] = useState(dataContacts);
  const addContact = useCallback((contact) => {
    setList((prevState) => [contact, ...prevState]);
  });
  const { isVisible, handleToggle } = useFormValidation();
  const filters = ["🏢 business", "👬 friends", "👪 family"];
  const [selectedFilter, setFilter] = useState(null);
  const selectFilter = useCallback((filter) => {
    if (filter.unshiftFrom(3) === selectedFilter) {
      return setFilter(null);
    }
    const sub = filter.unshiftFrom(3);
    setFilter(sub);
  });
  const contactsList = useMemo(() => {
    return !selectedFilter ? list : list.filterList(selectedFilter);
  }, [selectedFilter, list]);
  useEffect(() => {
    ref.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [ref]);
  return (
    <div className="container md:w-full mx-auto mt-5 min-h-[500px]">
      {/* ajouter nouveau contact (modal) */}
      {isVisible && <AddContactModal addContact={addContact} />}
      <div className="content flex justify-center items-center ">
        <div className="contacts-list  w-full list-group border border-gray-300 rounded-b-md rounded-t-md border-t-0">
          <a
            href="#"
            className="block rounded-t-md list-group-item border-b border-gray-300  p-3 bg-blue-600 text-white active"
            aria-current="true"
          >
            <div className="flex w-full flex-col md:flex-row justify-between items-center">
              <div className="flex items-center" style={{ width: "170px" }}>
                <h5 className="mr-2">Contacts List</h5>
                <button
                  onClick={handleToggle}
                  className="p-2 bg-gray-50 text-gray-700 rounded-md"
                  data-bs-toggle="modal"
                  data-bs-target="#addContact"
                >
                  +
                </button>
              </div>

              <div
                className="flex justify-around gap-1 mt-3"
                style={{ width: "250px" }}
              >
                {filters.map((filter) => (
                  <Components.Badge
                    setFilter={selectFilter}
                    selectedFilter={selectedFilter}
                    key={filter}
                    filter={filter}
                  />
                ))}
              </div>
            </div>
          </a>
          <div className="list-scroll overflow-y-auto max-h-80" ref={ref}>
            {/* afficher contacts */}
            {contactsList.map((contact) => (
              <Row key={contact.id} contact={contact} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
