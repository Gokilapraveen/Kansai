import BannerComponent from "./Banner/Banner";
import  Carousel  from './Carousel/Carousel';
import FilterDataCardComponent from "./FilterCard/FilterDataCard";
import { useEffect, useState } from "react";
import Axios from "axios";  
import ProductCart from "./Cart/Product";
function Home(){
const [listData ,setListData]= useState([]);
useEffect(() => {
  saveData();
});

const saveData = async () => {
  const response = await Axios.get("http://localhost:3003/products");
  setListData(response.data);
};


  return (
    <>  
    <ProductCart/>
    <Carousel images={listData} />
      <BannerComponent />
      <FilterDataCardComponent />
    </>
  );
}

export default Home;
