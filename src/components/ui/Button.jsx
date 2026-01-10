import styled from 'styled-components'


const Button = styled.button`
    padding: 0.5em 1em;
    background: transparent;
    border: 1px solid black;
    border-radius: 16px;
    outline: 1px solid transparent;
    text-transform: Uppercase;
    transition: all 200ms ease-in-out;

    &: hover {
        background: black;
        color: white;
    }
`



export default Button