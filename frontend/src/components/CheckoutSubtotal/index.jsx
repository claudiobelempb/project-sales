import CurrencyFormat from "react-currency-format";

import "./styles.scss";

const CheckoutSubtotal = () => {
  return (
    <CurrencyFormat
      renderText={(value) => (
        <div className="checktotal__item">
          <div className="checktotal__item-content">
            <p className="checktotal__item-title">
              Subtotal(2 items):{" "}
              <strong className="checktotal__item-price">$40.90</strong>
            </p>

            <small className="checktotal__item-gift">
              <input
                className="checktotal__item-checkbox"
                type="checkbox"
                name=""
                id=""
              />
              This order contains a gift
            </small>
            <button className="checktotal__item-button">
              Procced to Checkout
            </button>
          </div>
        </div>
      )}
      decimalScale={2}
      value={0}
      displayType={"text"}
      thousandSeparator={true}
      prefix={"$"}
    />
  );
};

export { CheckoutSubtotal };
