import { useEffect, useState } from "react";
import Axios from "axios";
import Popup from "../Card/popup/popup";
import "./DataUpdate.css";
function DataUpdate() {
  const [products, setProducts] = useState([]);
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
  });

  const saveData = async () => {
    const response = await Axios.get("http://localhost:3003/products");
    setProducts(response.data);
  };
  const updateProduct = (id) => {
    console.log("update", id);
  };
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const AddProducts = () => {
    Axios.post("http://localhost:3003/products", {
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

    setTimeout(() => {
      saveData();
    }, 500);
  };

  const deleteProduct = (id) => {
    Axios.delete(`http://localhost:3003/products/${id}`);

    setTimeout(() => {
      saveData();
    }, 500);
  };

  const [updateState, setUpdateState] = useState(-1);
  function handleEdit(id) {
    setUpdateState(id);
  }
  function handleUpdate(e) {
    setUpdateState(-1);
  }
  function ReptileListItems(quantity) {
    return quantity.map((reptile) => <li>{reptile.price}</li>);
  }

  return (
    <>
      <div class="updateForm container">
        <h2>New Record</h2>
        <div class="rows">
          <input
            type="text"
            placeholder="Insert Id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>{" "}
        <div class="rows">
          <input
            type="text"
            placeholder="Insert cat"
            value={category}
            onChange={(e) => setCatagory(e.target.value)}
          />{" "}
        </div>{" "}
        <div class="rows">
          <input
            type="text"
            placeholder="Insert image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />{" "}
        </div>{" "}
        <div class="rows">
          <input
            type="text"
            placeholder="Insert title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>{" "}
        <div class="rows">
          <input
            type="text"
            placeholder="Insert subtitle"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
          />
        </div>{" "}
        <div class="rows">
          <input
            type="text"
            placeholder="Insert description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button onClick={AddProducts} class="btn btn-primary insertProduct">
          Insert
        </button>
      </div>

      <div class="StockUpdate container">
        <header className="header">
          <h2>Your Stock Tracker</h2>
        </header>
        <div className="stock-container">
          <div class="stockdetail">
            <form onSubmit={handleUpdate}>
              <table class="stockTable">
                <tbody>
                  <tr>
                    <th>ID</th> <th>catagory</th> <th>Image</th> <th>Title</th>{" "}
                    <th> Subtitle </th> <th>DESC</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th></th>
                  </tr>
                  {products &&
                    products?.map((data) => {
                      <div></div>;
                      return (
                        <>
                          {" "}
                          {updateState === data.id ? (
                            <Edit
                              data={data}
                              products={products}
                              setProducts={setProducts}
                            />
                          ) : (
                            <tr>
                              <td>
                                <h5>{data.id}</h5>
                              </td>
                              <td>
                                <h5>{data.category}</h5>
                              </td>
                              <td>
                                <h5>{data.image}</h5>
                              </td>
                              <td>
                                <h5>{data.title}</h5>
                              </td>
                              <td>
                                <h5>{data.subtitle}</h5>
                              </td>
                              <td>
                                <h5>{data.description}</h5>
                              </td>
                              <td>
                                <h5>{data.price}</h5>
                              </td>
                              <td>
                                <h5>{data.quantity}</h5>
                              </td>
                              <td class="formAction">
                                <button
                                  class="btn btn-primary"
                                  onClick={() => {
                                    deleteProduct(data.id);
                                  }}
                                >
                                  Delete
                                </button>
                                <button
                                  class="btn btn-primary"
                                  onClick={() => handleEdit(data.id)}
                                >
                                  Edit
                                </button>
                              </td>
                            </tr>
                          )}
                        </>
                      );
                    })}
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
function Edit({ data, products, setProducts }) {
  function handleInput(e) {
    const newProduct = products.map((a) =>
      a.id == data.id ? { ...a, [e.target.value]: e.target.value } : a
    );
    setProducts(newProduct);
  }

  return (
    <tr>
      <td>{data.id}</td>
      <td>
        <input
          type="text"
          name="title"
          onChange={handleInput}
          value={data.category}
        />
      </td>
      <td>
        <input
          type="text"
          name="title"
          onChange={handleInput}
          value={data.image}
        />
      </td>
      <td>
        <input
          type="text"
          name="title"
          onChange={handleInput}
          value={data.title}
        />
      </td>
      <td>
        <input
          type="text"
          name="title"
          onChange={handleInput}
          value={data.subtitle}
        />
      </td>
      <td>
        <input
          type="text"
          name="title"
          onChange={handleInput}
          value={data.description}
        />
      </td>
      <td>
        <input
          type="text"
          name="title"
          onChange={handleInput}
          value={data.price}
        />
      </td>
      <td>
        <input
          type="text"
          name="title"
          onChange={handleInput}
          value={data.quantity}
        />
      </td>
      <td>
        {" "}
        <button class="btn btn-primary insertProduct">Insert</button>
      </td>
    </tr>
  );
}
export default DataUpdate;
