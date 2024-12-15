import { Link } from "react-router-dom";
import CartSvg from "../assets/CartSvg";

const ProductCard = () => {
  return (
    <div className="relative">
      <img src="http://via.placeholder.com/150" alt="" className="w-full h-full object-cover" />
      <div className="opacity-0 hover:opacity-100 absolute inset-0 bg-white bg-opacity-60 flex flex-col justify-between p-2 py-3 text-center cursor-pointer transition duration-300 ease-in-out">
        <p className="text-2xl font-semibold">Pain</p>
        <p className="text-main-red font-semibold">2.20€</p>
        <div className="flex justify-between items-center">
          <Link to="/pain/:slug" className="">Voir</Link>
          <CartSvg class="w-6" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
