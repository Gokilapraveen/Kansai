import { useState } from 'react';
import Menu from './Menu';
import Button from './Button';
import './FilterDataCard.css'
import { useGetAllProductsQuery } from "../../Commons/Features/productsApi";

import items from '../imagesList';




//data &&   data?.map((product) => 


function FilterDataCard() {
  const { data, error, isLoading } = useGetAllProductsQuery();
   const allCategories = ['All', ...new Set(items?.map(a => a.category))];
 
  const [menuItem, setMenuItem] = useState(items);
    const [buttons, setButtons] = useState(allCategories);
console.log(allCategories)
    const filter = (button) =>{
      if(button === 'All'){
        setMenuItem(items);
        return;
      }
      const filteredData = items.filter(item => item.category ===  button);
      setMenuItem(filteredData)
    }  
    return (
      <div className="Filtercard">      
         <div className="title">
           <h1>
             Category <span> Filter</span>
           </h1>
         </div> 
       
         <Menu menuItem={menuItem}/>
        </div>
    );
  }
  
export default FilterDataCard;