import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addToCart } from "../../Commons/Features/cartSlice";
import "./Cart.css";
import { useEffect, useState } from "react";
import Axios from "axios";
function ProductCart() {
  const [data, setData] = useState([]);
  useEffect(() => {
    saveData();
  });

  const saveData = async () => {
    const response = await Axios.get("http://localhost:3003/products");
    setData(response.data);
  };

  const { status } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleAddToCart = (product, price, quant) => {
    const jsonData = {
      currentProductDetails: [
        { id: product.id, price: price, quantity: quant },
      ],
    };
    localStorage.setItem("currentProductDetails", JSON.stringify(jsonData));
    dispatch(addToCart(product, price, quant));
    history.push("/cart");
  };

  return (
    <div className="home-container">
      {status === "success" ? (
        <>
          {data &&
            data?.map((product, key) => (
              <>
                {" "}
                <div className="products row">
                  {product.quantity.map((a, index) => (
                    <div className="product col-md-4 mb-3" key={index}>
                      <h3>{product.title}</h3>
                      <img src={product.image} alt={product.title} />
                      <div className="details">
                        <span>{product.dilution}</span>
                        <span className="price">
                          {a.price}/{a.quant}
                        </span>
                      </div>
                      <button
                        onClick={() =>
                          handleAddToCart(product, a.price, a.quant)
                        }
                      >
                        Add To Cart
                      </button>
                    </div>
                  ))}
                </div>
              </>
            ))}
        </>
      ) : status === "pending" ? (
        <p>Loading...</p>
      ) : (
        <p>Unexpected error occured...</p>
      )}
    </div>
  );
}

export default ProductCart;
