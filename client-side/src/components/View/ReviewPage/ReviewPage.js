import React, { useState } from "react";
import { ReviewBlock } from "./Components/ReviewBlock/ReviewBlock";
import { Input, Button } from "./ReviewPage.styles";
import { ReviewPageContainer } from "./ReviewPage.styles";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { ReviewPage, Form, ReviewForm } from "./ReviewPage.styles";
import axios from "axios";
import history from "../../../history";
import PropTypes from "prop-types";
import ReactStars from "react-rating-stars-component";

const Review = ({ reviews, getProductId }) => {
  if (reviews == undefined || getProductId == undefined) return;

  if (reviews.length < 1) {
    return <Redirect to="/" />;
  }

  const [openForm, setOpenForm] = useState(false);
  const [starRating, setStarRating] = useState(0);
  const [inputValue, setInputValue] = useState("");

  let submit = starRating == 0 && inputValue.length < 1;

  const ratingChanged = newRating => setStarRating(newRating);
  const previousPage = () => history.goBack();
  const showForm = () => setOpenForm(true);
  let input;

  const postReview = async review => {
    const headers = {
      "content-type": "application/json"
    };

    await axios
      .post(
        `http://localhost:3002/reviews/${getProductId}`,
        {
          review
        },
        { headers }
      )
      .then(response => {
        console.log(response.data);
      })

      .catch(error => {
        console.log(error);
      });
  };

  const submitForm = (e, reviewComment) => {
    e.preventDefault();
    postReview({
      productId: getProductId,
      locale: "nl",
      rating: starRating,
      text: String(reviewComment)
    });
  };

  return (
    <ReviewPage>
      <ReviewPageContainer>
        <Button className="align-left" clickPage={() => previousPage()}>
          Go Back
        </Button>
        <ReviewBlock reviewContent={reviews} />
        <ReviewForm>
          {openForm && (
            <Form
              onSubmit={e => {
                if (!input.value.trim() || input.value.length === 0) return;
                submitForm(e, input.value);
              }}
            >
              <Input
                placeHolderMsg="Place Review"
                inputRef={node => (input = node)}
                onChange={e => setInputValue(e.target.value)}
              />
              <ReactStars size={20} edit={true} onChange={ratingChanged} />
              <Button disabled={submit}>Send</Button>
            </Form>
          )}
          <Button onClick={() => showForm()}>Add Review</Button>
        </ReviewForm>
      </ReviewPageContainer>
    </ReviewPage>
  );
};

const mapStateToProps = state => {
  return {
    reviews:
      state.productData.products.find(
        item => item.id === state.productData.productId
      ) || [],
    getProductId: state.productData.productId || []
  };
};

Review.propTypes = {
  reviews: PropTypes.object,
  getProductId: PropTypes.string
};

export default connect(mapStateToProps)(Review);
