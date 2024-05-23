import { useEffect, useState } from "react"; import "./FilterDataCard.css";
import Menu from "./Menu";
import './dropdown.js'

function FilterDataCard() {
  const [loading, setLoading] = useState(false);
  const [productList, setProductList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [fileredProductList, setFilteredProductList] = useState([]);
  const addCategory = (category) => {
    if (!selectedCategories.includes(category)) {
      setSelectedCategories((prev) => [...prev, category]);
    }
  };
  const removeCategory = (category) => {
    if (selectedCategories.includes(category)) {
      console.log(selectedCategories);
      const removedList = selectedCategories.filter((item) => item !== category);
      setSelectedCategories(removedList);
    }
  };
  const resetCategory = () => {
    setSelectedCategories([]);
  };
  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilteredProductList(productList);
    } else {
      setFilteredProductList(productList.filter((item) => selectedCategories.includes(item.category)));
    }
  }, [selectedCategories, productList]);
  const allCategories = ["Laundry Image", "Floor Cleaning", "Glass Cleaning", "Air Freshner", "Dish Wash",];
  const getProducts = async () => {
    setLoading(true);
    await fetch("http://localhost:3003/products").then((res) => res.json()).then((data) => {
      setProductList(data);
      setFilteredProductList(data);
      setCategories(allCategories); // get the categories list  
     })   .catch((err) => alert(err))   .finally(() => {    setLoading(false);   }); };
      useEffect(() => {
        getProducts();
      }, []);
      return (
        <div className="w-screen h-screen px-5 bg-gray-100 flex justify-center items-center ">
          <h2 className="mx-3 ml-5 font-medium catagoryProduct ">Categories</h2>
          <div className="w-full h-[90%] rounded-md bg-white">
            <div className="relative w-full h-[15%] flex items-center overflow-x-auto productList productCatagoryDesktop">
              {categories.map((category) => (<button onClick={() => {
                if (selectedCategories.includes(category)) {
                  removeCategory(category);
                }
                else {
                  addCategory(category);
                }
              }}
                className={`selectcat ${selectedCategories.includes(category) ? "btn btn-success" : " btn btn-primary btn-lg"} `}      >
                {category}      </button>))}
              <button onClick={() => resetCategory()

              } className={`${selectedCategories.length > 0 ? "opacity-100" : "opacity-0 pointer-events-none"} btn btn-primary`}     >   
                 Clear selection     </button>    </div>

                 <div class="productCatagoryMobile"><div class="dropdown">
  <button onclick="myFunction()" class="dropbtn">Dropdown</button>
  <div id="myDropdown" class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div></div>
            {
              <Menu menuItem={fileredProductList} loading={loading} />}   </div>  </div>
            );
    }
    export default FilterDataCard;