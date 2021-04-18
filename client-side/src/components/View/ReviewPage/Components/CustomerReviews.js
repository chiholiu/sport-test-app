import { useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export const CustomerReviews = ({ reviewId }) => {
  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await axios(`http://localhost:3002/reviews/${reviewId}`);
        console.log(res);
      };
      fetchData();
    } catch (err) {
      console.log(err);
    }
  });
  return <div></div>;
};

CustomerReviews.propTypes = {
  reviewId: PropTypes.number
};
