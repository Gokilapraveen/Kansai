import { useEffect, useState } from "react";
import axios from "axios";

function DataUpdate() {
  const [products, setProducts] = useState();
  const [id, setId] = useState();
  const [category, setCatagory] = useState();
  const [image, setImage] = useState();
  const [description, setDescription] = useState();
  const [title, setTitle] = useState();
  const [subtitle, setSubtitle] = useState();
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();

  useEffect(() => {
    saveData();
  }, []);
  const saveData = async () => {
    const response = await axios.get("http://localhost:3003/products");
    console.log(response.data, "prorror");
    setProducts(response.data);
  };
  console.log(products, "pro");
  const AddProducts = () => {
    axios
      .post("http://localhost:3003/products", {
        id,
        category,
        image,
        title,
        subtitle,
        description,
        price,
        quantity,
      })
      .then(() => {
        setId("");
        setCatagory("");
        setDescription("");
        setImage("");
        setTitle("");
        setSubtitle("");
        setPrice("");
        setQuantity("");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div class="updateForm">
      {products.map((data) => console.log(products))}
      <input
        type="text"
        placeholder="Insert Id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Insert cat"
        value={category}
        onChange={(e) => setCatagory(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Insert image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Insert title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Insert subtitle"
        value={subtitle}
        onChange={(e) => setSubtitle(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Insert description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Insert price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Insert quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      ></input>
      <button onClick={AddProducts}>Insert</button>
    </div>
  );
}
export default DataUpdate;
