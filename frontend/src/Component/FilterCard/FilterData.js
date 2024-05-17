import { useEffect, useState } from "react";
import Menu from "./Menu";
import Button from "./Button";
import "./FilterDataCard.css";
import { useGetAllProductsQuery } from "../../Commons/Features/productsApi";

function FilteredData() {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const allCategories = [
    "All",
    ...new Set(data && data?.map((a) => a.category)),
  ];
  //const allCategories =['All', 'laundry image', 'bedCover', 'floorcleaning', 'glasscleaninperson', 'airfreshner']
  const [buttons, setButtons] = useState(allCategories);
  const [menuItem, setMenuItem] = useState(data);
  const [cat, setCat] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3003/products")
      .then((response) => response.json)
      .then((data) => setCat(data));
  }, []);

  const filter = (button) => {
    if (button === "All") {
      setMenuItem(data);
      return;
    }
    const filteredData = data.filter((item) => item.category === button);
    setMenuItem(filteredData);
  };

  return (
    <div className="Filtercard">
      <div className="title">
        <h1>
          {" "}
          Category <span> Filter card</span>{" "}
        </h1>
      </div>{" "}
      {allCategories}
      <Button button={buttons} filter={filter} />
      <Menu menuItem={menuItem} />
    </div>
  );
}
export default FilteredData;
