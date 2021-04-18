import React, { useState } from "react";
import { Button } from "./Components/Button";
import { Input } from "./Components/Input";
import { ReviewBlock } from "./Components/ReviewBlock";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
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
  const [starRating, setStarRating] = useState("");
  let input;

  const postReview = async review => {
    const headers = { "Content-Type": "text/plain" };

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

  const ratingChanged = newRating => setStarRating(newRating);
  const previousPage = () => history.goBack();
  const showForm = () => setOpenForm(true);

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
    <div>
      <div>
        <ReviewBlock reviewContent={reviews} />
        <button onClick={() => showForm()}>Add Review</button>
        {openForm && (
          <form
            onSubmit={e => {
              if (!input.value.trim() || input.value.length === 0) return;
              submitForm(e, input.value);
            }}
          >
            <Input
              placeHolderMsg="Place Review"
              inputRef={node => (input = node)}
            />
            <ReactStars size={20} edit={true} onChange={ratingChanged} />
            <button>Add Review</button>
          </form>
        )}
      </div>
      <Button text="Go Back" clickPage={() => previousPage()} />
    </div>
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
