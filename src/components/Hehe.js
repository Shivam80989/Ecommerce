import "./Hehe.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Productt from "./Productt"
import { productData, responsive } from "./data";

export default function Hehe() {
  const product = productData.map((item) => (
    <Productt
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div className="md:mx-[100px] mx-[10px]">
      <h3 className="font-semibold font-sans md:text-5xl text-3xl text-gray-500">Product</h3>
      <Carousel  responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}