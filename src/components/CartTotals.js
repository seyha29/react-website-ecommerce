import React from "react";
import styled from "styled-components";

import Screen from "../styles/Screen";

import { Typography } from "../components";

import { useCartContext } from "../contexts/cart_context";
import { Link } from "react-router-dom";

const CartTotals = () => {
  const { total_items, total_price, checkout } = useCartContext();
  return (
    <Wrapper>
      <div>
        <Typography.H3 className="total__items">
          Total Items : <span>{total_items}</span>
        </Typography.H3>
        <br />
        <Typography.H4 className="total__price">
          Total Price : <span>${total_price.toFixed(2)}</span>
        </Typography.H4>
      </div>
      <hr />
      <Link
        to="/checkout"
        type="button"
        className="total__btn"
        onClick={checkout}
      >
        Checkout
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  border: 0.2rem solid #000000; /* Black border */
  border-radius: var(--radius);
  padding: 1rem 1.5rem;

  ${Screen.lg`
    align-self: flex-start;
  `}

  .total__items {
    span {
      color: #333333; /* Dark gray text */
      display: inline-block;
      text-align: center;
      width: 12rem;
      font-size: var(--fs-600);
    }
  }

  .total__price {
    span {
      color: #000000; /* Black text for price */
      display: inline-block;
      text-align: center;
      font-size: var(--fs-600);
      width: 12rem;
    }
  }

  hr {
    border-bottom: 0.2rem solid #000000; /* Black horizontal line */
    margin: 1.5rem 0;
  }

  .total__btn {
    background: #000000; /* Black background */
    width: 100%;
    padding: 0.5rem;
    color: #ffffff; /* White text */
    font-size: 1.4rem;
    display: inline-block;
    text-align: center;
    letter-spacing: 0.2rem;
    border: 0.2rem solid #000000; /* Black border */
    transition: var(--transition);
    &:hover {
      background: transparent;
      color: #000000; /* Black text on hover */
    }
  }
`;

export default CartTotals;
