import { useDispatch } from "react-redux";
import { clearCart } from "../features/bucket/bucketSlice";
import { closeModal } from "../features/modal/modalSlice";
import { useTranslation } from "react-i18next";


const Modal = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  return (
  <aside className="modal-container">
    <div className="modal">
      <h4>
        {t("remove_all")}
        <div className="btn-container">
          <button type="button" className="btn-confirm-btn" onClick={() => {
            dispatch(clearCart())
            dispatch(closeModal())
          }}>
            {t("confirm")}
          </button>
          <button type="button" className="btn-clear-btn" onClick={() => {
            dispatch(closeModal())
          }}>
            {t("cancel")}
          </button>
        </div>
      </h4>
    </div>
  </aside>
  )
};
export default Modal;
