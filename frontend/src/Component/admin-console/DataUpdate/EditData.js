import axios from "axios";
import React,{ useEffect } from "react";
import { useParams } from "react-router";

function EditData () {
const {id} =useParams();
useEffect(() => {
    console.log(id)
axios.get('http://localhost:3003/products/'+id)
.then(res => console.log(res))
.catch(err => err)
},[])

    return ( <>Update  Records
    <div className="UpdateEditRecord">

        <form >
            <div className="UpdateForm">
            <input type="text" name="category" />
      <input type="text" name="image" />
      <input type="text" name="title"/>
      <input type="text" name="subtitle"/>
      <input type="text" name="description" />
      <input type="text" name="price" />
      <input type="text" name="quantity"/>
       <button  className="btn btn-primary insertProduct" type="submit">Insert</button>
            </div>
        </form>
    </div>
     </> );
}
 
export default EditData;