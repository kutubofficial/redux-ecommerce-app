import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const RatingDisplay = ({ rating, reviews }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} className="text-yellow-500" />
      ))}

      {hasHalfStar && <FaStarHalfAlt className="text-yellow-500" />}

      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={`empty-${i}`} className="text-yellow-500" />
      ))}

      <span className="ml-2 text-sm font-semibold text-gray-600">
        {rating} (
        {reviews >= 1000 ? `${(reviews / 1000).toFixed(1)}k` : reviews} reviews)
      </span>
    </div>
  );
};

export default RatingDisplay;
