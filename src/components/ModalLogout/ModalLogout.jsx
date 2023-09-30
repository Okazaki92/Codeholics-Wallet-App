import css from "./ModalLogout.module.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setIsModalLogoutOpen } from "../../redux/global/globalSlice";
import { logOut } from "../../redux/auth/operations";

const ModalLogout = () => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(setIsModalLogoutOpen(false));
  };

  const handleLogout = async () => {
    try {
      dispatch(setIsModalLogoutOpen(false));
      await dispatch(logOut());
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };

  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={css["modal-backdrop"]} onClick={handleBackgroundClick}>
      <div className={css["modal-container"]}>
        <p className={css["modal-text"]}>Are you sure you want to logout?</p>
        <div className={css["modal-buttons"]}>
          <button
            type="button"
            className={css["logout-btn"]}
            onClick={handleLogout}
          >
            Yes
          </button>
          <button
            type="button"
            className={css["cancel-btn"]}
            onClick={handleCloseModal}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalLogout;
