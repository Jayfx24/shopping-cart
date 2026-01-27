import styled from "styled-components";

const Button = styled.button`
  padding: 0.5em 1em;
  background: transparent;
  border: 1px solid ;
  border-radius: 16px;
  outline: 1px solid transparent;
  text-transform: uppercase;
  transition: all 300ms ease 100ms;
  color: var(--accent-clr);

  &: hover {
    background: var(--accent-clr);
    color: white;
  transform: translateY(-4px)
  }

  &.active-cat {
    background: var(--accent-clr);
    color: white;
  }
`;

export default Button;
