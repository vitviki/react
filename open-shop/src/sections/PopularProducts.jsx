import { Link } from "react-router-dom";
import { POPULAR_PRODUCTS } from "../constants/index";

const PopularProducts = () => {
  return (
    <div className="bg-white w-[20rem] h-[22rem] shadow-lg p-4 border border-gray-200 overflow-auto">
      <strong className="text-gray-700 font-montserrat">
        Popular Products
      </strong>
      <div className=" mt-4 flex flex-col gap-3">
        {POPULAR_PRODUCTS.map((product) => (
          <Link className="flex" key={product.id}>
            <div className="w-10 h-10 min-w-10 bg-gray-200">
              <img
                src={product.product_thumbnail}
                alt={product.product_name}
                className="w-full h-full object-over rounded-sm overflow-hidden"
              />
            </div>
            <div className="ml-4  font-palanquin flex-1 hover:underline">
              <p className="text-base text-gray-900">{product.product_name}</p>
              <span
                className={`text-sm font-medium ${
                  product.product_stock === 0
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {product.product_stock !== 0
                  ? product.product_stock
                  : "Out of stock"}
              </span>
            </div>
            <div className=" font-montserrat text-sm font-semibold">
              {product.product_price}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
