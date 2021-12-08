import "./styles.scss";

const CheckoutProduct = ({
  product_id,
  product_title,
  product_price,
  product_rating,
  product_image,
}) => {
  const array_rating = Array(product_rating)
    .fill()
    .map((_, i) => <p>⭐</p>);

  return (
    <div className="checkout__product">
      <img
        src="https://m.media-amazon.com/images/I/61pOZ7mAn2S._AC_SY200_.jpg"
        alt=""
        srcset=""
        className="checkout__product-img"
      />
      <div className="checkout__product-infor">
        <h3 className="checkout__product-subtitle">
          Xiaomi Redmi Note 10S 128gb 6gb RAM
        </h3>
        <div className="checkout__product-price">
          <span>$</span>
          <strong>1.696</strong>
        </div>
        <div className="checkout__product-rating">{array_rating}</div>
        <button className="checkout__product-button">Remove from Basket</button>
      </div>
    </div>
  );
};

export { CheckoutProduct };
