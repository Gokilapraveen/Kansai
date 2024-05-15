import { useState } from 'react';
import Menu from './Menu';
import Button from './Button';
import './FilterDataCard.css'
import listData from '../../Commons/imagesList';

function FilterDataCard() {
 
   const allCategories =['All', 'Laundry Image', 'Floor Cleaning', 'Glass Cleaning', 'Air Freshner', 'Dish Wash']  
  const [menuItem, setMenuItem] = useState(listData);
    const [buttons, setButtons] = useState(allCategories);
    const filter = (button) =>{
      if(button === 'All'){
        setMenuItem(listData);
        return;
      }
      const filteredData = listData.filter(item => item.category ===  button);
      setMenuItem(filteredData)
    }  
    return (
      <div className="Filtercard">      
         <div className="title">
           <h1>
             Category <span> Filter</span>
           </h1>
         </div> 
         <Button button={buttons}   filter={filter}/>
         <Menu menuItem={menuItem}/>
        </div>
    );
  }
  
export default FilterDataCard;