import CardComponent from "./Card/CardComponent";
import { listData } from "./imagesList";
import ProductCart from "./Cart/Product";
const ProductsPage = () => {
  return (
    <>
      <CardComponent images={listData} />
      <ProductCart/>
    </>
  );
};

export default ProductsPage;
