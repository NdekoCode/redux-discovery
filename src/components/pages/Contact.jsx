import React, { createRef, useEffect } from "react";
import Components from "..";
import { dataContacts } from "../../app/data";
import Row from "../Row";

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
  const filters = ["🏢 business", "👬 friends", "👪 family"];
  useEffect(() => {
    ref.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [ref]);
  return (
    <div>
      <div className="container max-w-7xl mx-auto">
        {/* ajouter nouveau contact (modal) */}
        <div className="content flex justify-center items-center ">
          <div className="contacts-list list-group border border-gray-300 rounded-b-md">
            <a
              href="#"
              className="block rounded-t-md list-group-item border-b border-gray-300  p-3 bg-blue-600 text-white active"
              aria-current="true"
            >
              <div className="flex w-full flex-col md:flex-row justify-between items-center">
                <div className="flex items-center" style={{ width: "170px" }}>
                  <h5 className="mr-2">Contacts List</h5>
                  <button
                    className="p-2 bg-gray-50 text-gray-700 rounded-md"
                    data-bs-toggle="modal"
                    data-bs-target="#addContact"
                  >
                    +
                  </button>
                </div>

                <div
                  className="d-flex justify-content-around"
                  style={{ width: "250px" }}
                >
                  {filters.map((filter) => (
                    <Components.Badge key={filter} filter={filter} />
                  ))}
                </div>
              </div>
            </a>
            <div className="list-scroll overflow-y-auto" ref={ref}>
              {dataContacts.map((contact) => (
                <Row key={contact.id} contact={contact} />
              ))}
              {/* afficher contacts */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
