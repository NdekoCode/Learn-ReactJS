import { createPortal } from "react-dom";

export function Modal() {
  return createPortal(
    <div
      className="modal fade show"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog modal-backdrop fade show">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Modal title
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
              vitae eos in libero reprehenderit qui nihil voluptate quo,
              cupiditate sed dolor ducimus, consequuntur optio dolore et. Neque,
              sunt! Quibusdam, quo.
            </p>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            quis delectus quaerat deserunt, blanditiis enim, sed tempora
            explicabo commodi debitis soluta illum unde minima ut. Modi deserunt
            nobis perspiciatis consectetur?
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
