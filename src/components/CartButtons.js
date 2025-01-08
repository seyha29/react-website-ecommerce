import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { Icons } from ".";

import { useProductsContext } from "../contexts/products_context";
import { useCartContext } from "../contexts/cart_context";

const CartButtons = () => {
  const { closeSidebar } = useProductsContext();
  const { total_items } = useCartContext();

  return (
    <Wrapper>
      <NavLink
        to='/cart'
        onClick={closeSidebar}
        className={({ isActive }) =>
          isActive ? "cart__container active" : "cart__container"
        }
      >
        Cart
        <div className='cart-icon'>
          <Icons.FaShoppingCartStyled />
          <span>{total_items}</span>
        </div>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  a {
    font-size: var(--fs-500);
    color: var(--gray-color-1); /* Change cart text color */
    transition: color var(--transition);
  }

  .cart__container {
    display: flex;
    margin-right: 3rem;
    border-bottom: 0.3rem solid transparent;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .active {
    border-color: var(--gray-color-1); /* Active link border color */
    color: var(--green-color-1); /* Change active link text color */
  }
  
  .cart-icon {
    position: relative;
    margin-left: 0.4rem;

    span {
      position: absolute;
      top: -12px;
      right: -18px;
      padding: 0.1rem;
      min-width: 2rem;
      background-color: var(--black-color-2); /* Change cart icon background color */
      border-radius: 50%;
      color: var(--blue-color-1); /* Change cart item count text color */
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default CartButtons;
