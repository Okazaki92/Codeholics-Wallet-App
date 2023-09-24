import { ColorRing } from "react-loader-spinner";
import css from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={css["loader"]}>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#24CCA7", "#4a56e2", "#24CCA7", "#4a56e2", "#24CCA7"]}
      />
    </div>
  );
};
