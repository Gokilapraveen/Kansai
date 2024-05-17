import { useEffect, useState } from "react";
import Axios from "axios";
import Popup from "../Card/popup/popup";

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

  return (
    <>
      <div class="updateForm">
        <input
          type="text"
          placeholder="Insert Id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Insert cat"
          value={category}
          onChange={(e) => setCatagory(e.target.value)}
        />
        <input
          type="text"
          placeholder="Insert image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="text"
          placeholder="Insert title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Insert subtitle"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Insert description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={AddProducts}>Insert</button>
      </div>

      <div class="StockUpdate">
        <header className="header">
          <h2>Your Stock Tracker</h2>
        </header>
        <div className="stock-container">
          <div class="stockdetail">
            <table class="stockTable">
              <tbody>
                <tr>
                  <th>ID</th> <th>catagory</th> <th>Image</th> <th>Title</th>{" "}
                  <th> Subtitle </th> <th>DESC</th>
                </tr>
                {products &&
                  products?.map((data) => {
                    return (
                      <>
                        {" "}
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
                            <button
                              onClick={() => {
                                deleteProduct(data.id);
                              }}
                            >
                              delete{" "}
                            </button>
                            <button onClick={togglePopup}>Update</button>
                            {isOpen && (
                              <Popup
                                content={
                                  <>
                                    {" "}
                                    <input type="text" value={data.title} />
                                    <button
                                      onClick={() => {
                                        updateProduct(data.id);
                                      }}
                                    >
                                      Add{" "}
                                    </button>{" "}
                                  </>
                                }
                                handleClose={togglePopup}
                              />
                            )}
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default DataUpdate;
