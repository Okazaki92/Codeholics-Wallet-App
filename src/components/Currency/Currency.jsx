import axios from "axios";
import { useState, useEffect } from "react";
import css from "./Currency.module.css";

export const Currency = () => {
  const [currencies, setCurrencies] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchCurrency = async () => {
    try {
      const response = await axios.get(
        "https://v6.exchangerate-api.com/v6/fd8e18a25622be6a63faefa5/latest/USD"
      );

      const data = response.data;
      return data;
    } catch (error) {
      return console.log(error.message);
    }
  };

  useEffect(() => {
    fetchCurrency()
      .then((data) => {
        setIsLoading(true);
        const rates = data.conversion_rates;
        setCurrencies(rates);
      })
      .catch((error) => setError(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const pln = Number(currencies.PLN).toFixed(2);
  const eur = Number(currencies.EUR).toFixed(2);

  return (
    <div className={css.currencyWrap}>
      <div className={css.currencyTitleWrap}>
        <p className={css.currencyTitle}>Currency</p>
        <p className={css.currencyTitle}>Purchase</p>
        <p className={css.currencyTitle}>Sale</p>
      </div>

      {error ? <div className={css.error}>Error:{error.message}</div> : null}
      {isLoading ? <div className={css.isLoading}>Loading...</div> : null}

      <div className={css.currencyItemWrap}>
        <div className={css.currencyItem}>
          <ul className={css.currencyList}>
            <li className={css.currencyListItem} key={"PLN"}>
              PLN
            </li>

            <li className={css.currencyListItem} key={"EUR"}>
              EUR
            </li>
          </ul>
        </div>

        <div className={css.currencyItem}>
          <ul className={css.currencyList}>
            <li className={css.currencyListItem} key={"PLN2"}>
              {pln}
            </li>

            <li className={css.currencyListItem} key={"EUR2"}>
              {eur}
            </li>
          </ul>
        </div>

        <div className={css.currencyItem}>
          <ul className={css.currencyList}>
            <li className={css.currencyListItem} key={"PLN3"}>
              {pln}
            </li>

            <li className={css.currencyListItem} key={"EUR3"}>
              {eur}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
