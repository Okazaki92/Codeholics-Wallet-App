import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { Currency } from "../../components/Currency/Currency";
import Media from "react-media";
import { Navigate } from "react-router-dom";

const CurrencyPage = () => {
  const { error } = useSelector((state) => state.transactions);

  const styleCurrency = {
    display: "flex",
    justifyContent: "center",
  };

  useEffect(() => {
    if (error) {
      toast(error);
    }
  }, [error]);

  return (
    <>
      <ToastContainer />
      <div style={styleCurrency}>
        <Media queries={{ mobile: { maxWidth: 767 } }}>
          {(matches) =>
            matches.mobile ? <Currency /> : <Navigate to="/home" />
          }
        </Media>
      </div>
    </>
  );
};
export default CurrencyPage;
