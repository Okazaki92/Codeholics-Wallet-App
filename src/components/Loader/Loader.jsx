import { ColorRing } from "react-loader-spinner";
import css from "./Loader.module.css";
import icon from "../../assets/icons/icons.svg";

export const Loader = () => {
  return (
    <div className={css["loader"]}>
      <svg className={css["loader-icon"]} width="18" height="18">
        <use href={icon + `#icon__wallet`} />
      </svg>
      <ColorRing
        visible={true}
        height="160"
        width="160"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#24CCA7", "#4a56e2", "#24CCA7", "#4a56e2", "#24CCA7"]}
      />
    </div>
  );
};
