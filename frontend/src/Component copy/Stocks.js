import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
//import { stockData } from "./data";

function Stocks() {
  const [products, setProducts] = useState();

  useEffect(() => {
    saveData();
  }, []);

  const saveData = async () => {
    const response = await axios.get("http://localhost:3003/products");
    console.log(response.data, "response.data");
    setProducts(response.data);
  };
  console.log(products + "stocaak");
  const StockDetail = () => {
    return (
      <>
        <HomePageHeader />
        <div className="stock-container">
          {products.map((data, key) => {
            return (
              <div key={key}>
                <Stock key={key} company={data.company} id={data.id} />
              </div>
            );
          })}
        </div>
      </>
    );
  };

  const HomePageHeader = () => {
    return (
      <header className="header">
        <h2>Your Stock Tracker</h2>
      </header>
    );
  };

  const Stock = ({ company, id }) => {
    if (!company) return <div />;
    return (
      <table>
        <tbody>
          <tr>
            <td>
              <h5>{company}</h5>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };
  return <StockDetail />;
}
export default Stocks;
