import styled from "styled-components";

const Button = styled.button`
  padding: 0.5em 1em;
  background: transparent;
  border: 1px solid ;
  border-radius: 16px;
  outline: 1px solid transparent;
  text-transform: uppercase;
  transition: all 300ms ease 100ms;
  background-color: var(--primary-clr) ;
  background-color: hsla(0, 0%, 50%, 0.15);
  border-color: hsla(0, 0%, 50%, 0.15);
  color: var(--text-clr);
  font-family: "Rubik", sans-serif;


  &: hover {
    background: var(--primary-clr);
    color: white;
  transform: translateY(-4px)
  }

  &.active-cat {
    background: var(--primary-clr);
    color: white;
  }
`;

export default Button;
