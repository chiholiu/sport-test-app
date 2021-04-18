import PropTypes from "prop-types";
import { CustomerReviews } from "./CustomerReviews";

export const ReviewBlock = ({ reviewContent }) => {
  if (reviewContent == undefined) return;

  return (
    <div>
      <div>{reviewContent.currency}</div>
      <div>{reviewContent.description}</div>
      <div>{reviewContent.id}</div>
      <img src={reviewContent.imgUrl} />
      <div>{reviewContent.name}</div>
      <div>{reviewContent.price}</div>
      <CustomerReviews reviewId={reviewContent.id} />
    </div>
  );
};

ReviewBlock.propTypes = {
  reviewContent: PropTypes.object,
  clickPage: PropTypes.func
};
