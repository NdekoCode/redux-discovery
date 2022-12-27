import { useFormValidation } from "app/hooks/useFormValidation";

function Header({ title }) {
  return (
    <div className="modal-header">
      <h5 className="modal-title" id="exampleModalLabel">
        {title}
      </h5>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
      ></button>
    </div>
  );
}
function Footer({ save }) {
  const { isValid } = useFormValidation();
  return (
    <div className="modal-footer">
      <button
        type="button"
        className="btn btn-secondary"
        data-bs-dismiss="modal"
      >
        Close
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={save}
        data-bs-dismiss="modal"
        disabled={!isValid}
      >
        Save
      </button>
    </div>
  );
}

function Modal({ title, children, save }) {
  return (
    <div
      className="modal fade"
      id="addContact"
      tabIndex="-1"
      aria-labelledby="addContact"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <Header title={title} />
          <div className="modal-body">
            <div className="row">{children}</div>
          </div>
          <Footer save={save} />
        </div>
      </div>
    </div>
  );
}
export default Modal;
