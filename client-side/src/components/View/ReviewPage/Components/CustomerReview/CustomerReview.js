import ReactStars from "react-rating-stars-component";
import PropTypes from "prop-types";
import {
  ReviewListId,
  ReviewList,
  ReviewListContainer,
  ReviewListText
} from "./CustomerReview.styles";

export const CustomerReview = ({ reviewContent }) => {
  if (reviewContent == undefined) return;

  return (
    <ReviewListContainer>
      {reviewContent.reviews.map(({ productId, rating, text }, index) => (
        <ReviewList key={index}>
          <ReactStars value={rating ? rating : 5} edit={false} />
          <ReviewListText>{text}</ReviewListText>
          <ReviewListId>{productId}</ReviewListId>
        </ReviewList>
      ))}
    </ReviewListContainer>
  );
};

CustomerReview.propTypes = {
  reviewContent: PropTypes.object
};
