import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import { useProductsContext } from "../contexts/products_context";

import {
  Breadcrumb,
  Error,
  Loading,
  Stars,
  AddToCart,
  Button,
  Typography,
} from "../components";

import Screen from "../styles/Screen";

const SingleProductPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    single_product: product,
    single_product_loading: loading,
    single_product_error: error,
    fetchSingleProduct,
  } = useProductsContext();

  const { title, price, image, category, description, rating } = product;

  // Add fetchSingleProduct to dependencies array
  useEffect(() => {
    fetchSingleProduct(id);
  }, [id, fetchSingleProduct]); // Add fetchSingleProduct as a dependency

  // Add navigate to dependencies array
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/"); // Using navigate inside useEffect
      }, 3000);
    }
  }, [error, navigate]); // Add navigate as a dependency

  if (loading) {
    return (
      <div className="page-w-b">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-w-b">
        <Error />
      </div>
    );
  }

  return (
    <main>
      <Breadcrumb title={title} products />
      <Wrapper className="page">
        <article>
          <div className="product__img">
            <img src={image} alt={title} />
          </div>
          <div className="product__info">
            <Button variant="secondary">
              <Link to="/products">back to products</Link>
            </Button>
            <Typography.H2>{title}</Typography.H2>
            <Stars stars={rating} />
            <Typography.P className="info__price">
              Price : <span>${price}</span>
            </Typography.P>
            <Typography.P className="info__category">
              Category : <span>{category}</span>
            </Typography.P>
            <Typography.P>{description}</Typography.P>
            <AddToCart product={product} />
          </div>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  article {
    padding: 1.5rem 1rem;
    background: #f4f4f4; /* Light gray background */
    display: grid;
    justify-items: center;
    gap: 2rem;
    ${Screen.lg`
      grid-template-columns: 1fr 1fr 1fr;
    `}

    .product__img {
      img {
        max-width: 20rem;
        object-fit: contain;
      }
    }

    .product__info {
      display: grid;
      gap: 1rem;
      ${Screen.lg`
        grid-column: 2/4;
      `}

      button {
        width: max-content;
      }

      .info__price {
        color: #333; /* Dark gray for the price */
        span {
          color: #000; /* Black color for price number */
        }
      }

      .info__category {
        color: #444; /* Slightly lighter gray for category */
        span {
          color: #666; /* Light gray for category name */
        }
      }
    }
  }
`;

export default SingleProductPage;
