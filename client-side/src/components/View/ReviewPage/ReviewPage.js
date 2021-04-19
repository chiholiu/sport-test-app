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
    reviews: {
      currency: "",
      price: 0,
      id: "FI444",
      name: "product",
      description: "description",
      imgUrl:
        "https://assets.adidas.com/images/w_320,h_320,f_auto,q_auto:sensitive,fl_lossy/6634cf36274b4ea5ac46ac4e00b2021e_9366/Superstar_Shoes_Black_FY0071_01_standard.jpg",
      reviews: [
        {
          productId: "FI444",
          locale: "en-US",
          rating: 5,
          text: "this product is the bestaaaa"
        },
        {
          productId: "FI444",
          locale: "en-US",
          rating: 2,
          text: "Amazing!"
        },
        {
          productId: "FI444",
          locale: "en-US",
          rating: 2,
          text: "Love it!"
        },
        {
          productId: "FI444",
          locale: "en-US",
          rating: 4,
          text: "The best product for the athlete"
        },
        {
          productId: "FI444",
          locale: "en-US",
          rating: 2,
          text: "Fantastic!"
        },
        {
          productId: "FI444",
          locale: "en-US",
          rating: 1,
          text: "high quality!"
        },
        {
          productId: "FI444",
          locale: "en-US",
          rating: 2,
          text: "Best tech summit talk!"
        },
        {
          productId: "FI444",
          locale: "en-US"
        },
        {
          productId: "FI444",
          locale: "en-US"
        },
        {
          productId: "FI444",
          locale: "en-US"
        },
        {
          productId: "FI444",
          locale: "en-US"
        },
        {
          productId: "FI444",
          locale: "en-US"
        },
        {
          productId: "FI444",
          locale: "en-US"
        },
        {
          productId: "FI444",
          locale: "en-US"
        },
        {
          productId: "FI444",
          locale: "en-US"
        },
        {
          productId: "FI444",
          locale: "en-US"
        },
        {
          productId: "FI444",
          locale: "en-US"
        },
        {
          productId: "FI444",
          locale: "en-US"
        },
        {
          productId: "FI444",
          locale: "en-US"
        },
        {
          productId: "FI444",
          locale: "en-US"
        },
        {
          productId: "FI444",
          locale: "en-US"
        },
        {
          productId: "FI444",
          locale: "en-US"
        },
        {
          productId: "FI444",
          locale: "en-US"
        },
        {
          productId: "FI444",
          locale: "en-US"
        },
        {
          productId: "FI444",
          locale: "en-US"
        },
        {
          productId: "FI444",
          locale: "en-US"
        },
        {
          productId: "FI444",
          locale: "en-US"
        },
        {
          productId: "FI444",
          locale: "en-US"
        }
      ]
    },

    // reviews:
    //   state.productData.products.find(
    //     item => item.id === state.productData.productId
    //   ) || [],
    getProductId: state.productData.productId || []
  };
};

Review.propTypes = {
  reviews: PropTypes.object,
  getProductId: PropTypes.string
};

export default connect(mapStateToProps)(Review);
