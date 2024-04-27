import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

const PopularProducts = () => {
  return (
    <section className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our Popular Products
        </h2>
        <p className="lg:max-w-xl font-montserrat text-slate-gray mt-5">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value.
        </p>
        <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
          {products.map((product) => {
            return <PopularProductCard key={product.name} {...product} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
