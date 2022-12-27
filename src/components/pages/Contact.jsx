import React from "react";

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
      {filters.map((filter) => (
        <Components.Badge key={filter} filter={filter} />
      ))}
    </div>
  );
};

export default Contact;
