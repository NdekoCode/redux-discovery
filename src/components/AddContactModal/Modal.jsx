import { useFormValidation } from "../hooks/useFormValidation";

function Header({ title }) {
  const { handleToggle } = useFormValidation();
  return (
    <div className="modal-header flex items-start justify-between p-4 border-b border-gray-300 rounded-t-sm">
      <h5 className="modal-title" id="exampleModalLabel">
        {title}
      </h5>
      <button
        type="button"
        className="btn-close text-gray-50 bg-gray-700 hover:bg-red-500 transition-colors duration-150 rounded-sm"
        data-bs-dismiss="modal"
        aria-label="Close"
        onClick={() => handleToggle(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 fill-current"
          viewBox="0 0 512 512"
        >
          <title>Close</title>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={32}
            d="M368 368L144 144M368 144L144 368"
          />
        </svg>
      </button>
    </div>
  );
}
function Footer({ save }) {
  const { isValid, handleToggle } = useFormValidation();
  return (
    <div className="modal-footer gap-3 flex items-center justify-end p-4 border-t border-gray-300">
      <button
        type="button"
        className="btn active:ring-gray-300 bg-gray-700 text-gray-50"
        data-bs-dismiss="modal"
        onClick={() => handleToggle(false)}
      >
        Close
      </button>
      <button
        type="button"
        className="btn active:ring-blue-400 bg-blue-600 text-gray-50 disabled:cursor-not-allowed disabled:bg-blue-400"
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
    <div className="fixed bg-gray-600/80 inset-0 flex h-screen items-center justify-center w-full z-50">
      <div
        className="fade relative inset-auto z-10 block  min-w-[250px] w-full"
        id="addContact"
        tabIndex="-1"
        aria-labelledby="addContact"
        aria-hidden="true"
      >
        <div className="left-auto mx-auto sm:max-w-lg sm:my-3 sm:mx-auto relative w-auto m-1 pointer-events-none">
          <div className="modal-content relative flex flex-col pointer-events-auto bg-white bg-clip-padding border border-gray-300 outline-none rounded-sm">
            <Header title={title} />
            <div className="modal-body relative flex p-4">
              <div className="row">{children}</div>
            </div>
            <Footer save={save} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;
