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
        "https://api.nbp.pl/api/exchangerates/tables/c/"
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
        const rates = data.map((item) => item.rates);
        setCurrencies(rates[0]);
      })
      .catch((error) => setError(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const firstCodeCurrency = "EUR";
  const secondCodeCurrency = "USD";

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
            {currencies
              .filter(({ code }) => code === firstCodeCurrency)
              .map(({ code }) => (
                <li className={css.currencyListItem} key={code}>
                  {code}
                </li>
              ))}
            {currencies
              .filter(({ code }) => code === secondCodeCurrency)
              .map(({ code }) => (
                <li className={css.currencyListItem} key={code}>
                  {code}
                </li>
              ))}
          </ul>
        </div>

        <div className={css.currencyItem}>
          <ul className={css.currencyList}>
            {currencies
              .filter(({ code }) => code === firstCodeCurrency)
              .map(({ code, bid }) => (
                <li className={css.currencyListItem} key={code}>
                  {bid.toFixed(2)}
                </li>
              ))}
            {currencies
              .filter(({ code }) => code === secondCodeCurrency)
              .map(({ code, bid }) => (
                <li className={css.currencyListItem} key={code}>
                  {bid.toFixed(2)}
                </li>
              ))}
          </ul>
        </div>

        <div className={css.currencyItem}>
          <ul className={css.currencyList}>
            {currencies
              .filter(({ code }) => code === firstCodeCurrency)
              .map(({ code, ask }) => (
                <li className={css.currencyListItem} key={code}>
                  {ask.toFixed(2)}
                </li>
              ))}
            {currencies
              .filter(({ code }) => code === secondCodeCurrency)
              .map(({ code, ask }) => (
                <li className={css.currencyListItem} key={code}>
                  {ask.toFixed(2)}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};


