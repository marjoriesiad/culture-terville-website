import { Link } from "react-router-dom";
import CartSvg from "../assets/CartSvg";

const ProductCard = (props) => {
  const formattedPrice = parseFloat(props.price).toFixed(2)

  return (
    <div className="relative h-32">
      <img src={props.src} alt="" className="w-full h-full object-fill" />
      <div className="opacity-0 hover:opacity-100 absolute inset-0 bg-white bg-opacity-70 p-2 flex flex-col justify-between text-center cursor-pointer transition duration-300 ease-in-out">
        <h3 className="text-xl font-semibold w-32 mx-auto">{props.name}</h3>
        <p className="text-main-red font-semibold">{formattedPrice}€</p>
        <div className="flex justify-between items-center px-2">
          <div className="flex items-center justify-center">
            <Link to="/pain/:slug" className="font-medium">{`Voir >`}</Link>

          </div>
          
          <CartSvg class="w-6" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
