import PropTypes from "prop-types";
import {
  ReviewDescription,
  ReviewArticleNumber,
  ReviewImage,
  ReviewName,
  ReviewPrice
} from "./ReviewBlock.styles";

export const ReviewBlock = ({ reviewContent }) => {
  if (reviewContent == undefined) return;

  return (
    <div>
      <ReviewDescription>{reviewContent.description}</ReviewDescription>
      <ReviewArticleNumber>{reviewContent.id}</ReviewArticleNumber>
      <ReviewImage src={reviewContent.imgUrl} alt={reviewContent.name} />
      <ReviewName>{reviewContent.name}</ReviewName>
      <ReviewPrice>{reviewContent.price}</ReviewPrice>
      <div>
        {reviewContent.reviews.map(({ productId, rating, text }, index) => (
          <ul key={index}>
            <div>{productId}</div>
            <div>{rating ? rating : 1}</div>
            <div>{text ? text : "Nice Shoes"}</div>
          </ul>
        ))}
      </div>
    </div>
  );
};

ReviewBlock.propTypes = {
  reviewContent: PropTypes.object,
  clickPage: PropTypes.func
};
