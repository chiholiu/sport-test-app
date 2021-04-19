import PropTypes from "prop-types";
import { CustomerReview } from "../CustomerReview/CustomerReview";

import {
  ReviewContainer,
  ReviewDescription,
  ReviewArticleNumber,
  ReviewImage,
  ReviewName,
  ReviewPrice,
  FirstBlock,
  Column,
  InnerColumn,
  Border,
  ProductName
} from "./ReviewBlock.styles";

export const ReviewBlock = ({ reviewContent }) => {
  console.log(reviewContent);
  if (reviewContent == undefined) return;

  return (
    <ReviewContainer>
      <FirstBlock>
        <Column>
          <ReviewImage src={reviewContent.imgUrl} alt={reviewContent.name} />
        </Column>
        <Column>
          <InnerColumn>
            <ReviewName>{reviewContent.name}</ReviewName>
            <ReviewPrice>€ 10{reviewContent.price}, -</ReviewPrice>
            <ReviewDescription>{reviewContent.description}</ReviewDescription>
            <ReviewArticleNumber>{reviewContent.id}</ReviewArticleNumber>
          </InnerColumn>
        </Column>
      </FirstBlock>

      <Border>
        <ProductName>{reviewContent.name}</ProductName>
      </Border>
      <CustomerReview reviewContent={reviewContent} />
    </ReviewContainer>
  );
};

ReviewBlock.propTypes = {
  reviewContent: PropTypes.object,
  clickPage: PropTypes.func
};
