import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price, rating }) => {
  return (
    <div className="flex flex-col flex-1 w-full max-sm:w-full cursor-pointer">
      <img src={imgURL} alt={name} width={280} height={280} />
      <div className="flex mt-5 justify-start items-center gap-2.5">
        <img src={star} alt="star" width={25} height={25} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          ({rating})
        </p>
      </div>
      <h3 className="mt-2 font-palanquin text-xl font-semibold">{name}</h3>
      <p className="mt-2 font-montserrat font-semibold text-coral-red text-2xl leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
