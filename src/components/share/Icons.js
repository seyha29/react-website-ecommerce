import styled, { css } from "styled-components";

import {
  FaBars,
  FaTimes,
  FaStore,
  FaShoppingCart,
  FaPlus,
  FaMinus,
  FaTrash,
} from "react-icons/fa";

import { BsFillGridFill, BsList } from "react-icons/bs";

//? base styles
const bigIcon = css`
  font-size: 2.5rem;
`;

const mediumIcon = css`
  font-size: 2rem;
`;

//? styled icons with black color
const BsFillGridFillStyled = styled(BsFillGridFill)`
  color: black;  /* Changed color to black */
  ${mediumIcon}
`;

const BsListStyled = styled(BsList)`
  color: black;  /* Changed color to black */
  ${mediumIcon}
`;

const FaPlusStyled = styled(FaPlus)`
  ${mediumIcon}
  color: black;  /* Changed color to black */
`;

const FaTrashStyled = styled(FaTrash)`
  ${mediumIcon}
  color: black;  /* Changed color to black */
`;

const FaMinusStyled = styled(FaMinus)`
  ${mediumIcon}
  color: black;  /* Changed color to black */
`;

const FaTimesStyled = styled(FaTimes)`
  ${bigIcon}
  color: black;  /* Changed color to black */
`;

const FaBarsStyled = styled(FaBars)`
  ${bigIcon}
  color: black;  /* Changed color to black */
`;

const FaStoreStyled = styled(FaStore)`
  ${bigIcon}
  color: black;  /* Changed color to black */
`;

const FaShoppingCartStyled = styled(FaShoppingCart)`
  ${mediumIcon}
  color: black;  /* Changed color to black */
`;

const Icons = {
  FaBarsStyled,
  FaTimesStyled,
  FaStoreStyled,
  FaShoppingCartStyled,
  FaPlusStyled,
  FaMinusStyled,
  BsFillGridFillStyled,
  FaTrashStyled,
  BsListStyled,
};

export default Icons;
