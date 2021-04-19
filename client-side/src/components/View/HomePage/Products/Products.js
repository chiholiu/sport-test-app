import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { getData, getId } from "../../../../actions/index";
import axios from "axios";
import PropTypes from "prop-types";
import {
  ProductPage,
  ProductTiles,
  ProductArticleNumber,
  ProductDescription,
  ProductImage,
  ProductName,
  ProductPrice,
  Border,
  Column
} from "./Products.styles";

const Products = ({ allProducts, findText }) => {
  if (allProducts == undefined || findText == undefined) return;
  const dispatch = useDispatch();

  useEffect(() => {
    const header = {
      "Access-Control-Allow-Origin": "*",
      "content-type": "application/json"
    };
    try {
      const fetchData = async () => {
        const res = await axios(`http://localhost:3001/product`, header);
        dispatch(getData(res.data));
      };
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  return (
    <ProductPage>
      {allProducts
        .filter(u => u.id.includes(findText))
        .map(({ description, id, imgUrl, name, price }) => (
          <Link
            key={id}
            to={`/product/${id}`}
            onClick={() => dispatch(getId(id))}
          >
            <ProductTiles>
              <Column>
                <ProductImage src={imgUrl} alt={name} />
                <ProductName>{name}</ProductName>
              </Column>
              <Border />
              <Column>
                <ProductArticleNumber>Article Number {id}</ProductArticleNumber>
                <ProductDescription>{description}</ProductDescription>
                <ProductPrice>€ 10{price} ,-</ProductPrice>
              </Column>
            </ProductTiles>
          </Link>
        ))}
    </ProductPage>
  );
};

function mapStateToProps(state) {
  return {
    allProducts: state.productData.products || [],
    findText: state.productData.searchText || []
  };
}

Products.propTypes = {
  allProducts: PropTypes.object,
  findText: PropTypes.any
};

export default connect(mapStateToProps)(Products);
