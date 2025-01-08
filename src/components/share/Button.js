import styled, { css } from "styled-components";

const Button = styled.button`
  border-radius: var(--radius);
  transition: var(--transition);
  letter-spacing: 1px;
  font-size: var(--fs-400);
  font-weight: bold;
  background: transparent; /* Make sure background is transparent by default */

  a {
    display: inline-block;
  }

  ${(props) => {
    switch (props.variant) {
      case "primary":
        return css`
          border: 0.2rem solid #000000; /* Black border */
          color: #000000; /* Black text */
          a {
            padding: 0.75rem 1.5rem;
            color: #000000; /* Black text inside link */
          }
          &:hover {
            background: #000000; /* Black background on hover */
            a {
              color: #ffffff; /* White text when hovered */
            }
          }
        `;

      case "secondary":
        return css`
          border: 0.2rem solid #333333; /* Dark gray border */
          color: #333333; /* Dark gray text */
          a {
            padding: 0.75rem 1.5rem;
            color: #333333; /* Dark gray text inside link */
          }
          &:hover {
            background: #333333; /* Dark gray background on hover */
            color: #ffffff; /* White text on hover */
            a {
              color: #ffffff; /* White text inside link when hovered */
            }
          }
        `;

      default:
        break;
    }
  }}
`;

export default Button;
