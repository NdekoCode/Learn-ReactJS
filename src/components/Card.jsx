import { useCallback } from "react";
import { useState } from "react";
import { ErrorBoundary } from "./ErrorBoundary";
import { Modal } from "./Modal";

const log = () => {
  console.log("click");
};
export function Card() {
  const style = {
    // transform: "translateY(1px)",
  };
  let [modal, setModal] = useState(false);
  const showModal = useCallback(() => {
    setModal(!modal);
    console.log(modal);
  }, [modal]);
  const hideModal = () => {
    showModal();
  };
  return (
    <div className="card" style={style} onClick={log}>
      <div className="card-body">
        <h3 className="card-title">Card title</h3>
        <p className="card-text">
          Some quick example text to build on card title and make up the bulk of
          the card's content
        </p>
        {/* <!-- Button trigger modal --> */}
        <button
          onClick={showModal}
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button>

        {/* <!-- Modal --> */}
      </div>
      <ErrorBoundary fallback="La recuperation du Modal a échouer">
        {modal && <Modal onClose={hideModal} />}
      </ErrorBoundary>
    </div>
  );
}
