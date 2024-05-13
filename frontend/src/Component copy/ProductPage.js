import CardComponent from './Card/CardComponent'
import { listData } from "./imagesList";

const ProductsPage = () => {
    return (
        <>
              <CardComponent images={listData}/>
        </>
    );
}

export default ProductsPage;