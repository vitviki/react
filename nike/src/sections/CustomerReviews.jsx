import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
  return (
    <div className="max-container">
      <h3 className="text-center text-4xl font-palanquin font-bold">
        What our <span className="text-coral-red">Customers</span> say?
      </h3>
      <p className="info-text m-auto text-center justify-evenly max-w-lg mt-5">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center flex-col gap-14 xl:flex-row xl:gap-0">
        {reviews.map((review) => (
          <ReviewCard key={review.feedback} {...review} />
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
