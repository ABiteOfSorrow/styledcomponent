import styled, { css } from "styled-components";
import nail from "./nail.png";

const SIZES = {
    large: 24,
    medium: 20,
    small: 16,
}

const fontSize = css`
    font-size: ${({ size }) => SIZES[size] ?? SIZES['medium']}px;
`;

const borderRadius = css`
    border-radius: ${({round}) => round? `9999px` : `3px`};
`


const Icon = styled.img`
    width: 16px;
    height: 16px;
`;


const StyledButton = styled.button`
    background-color: #6750a4;
    border: none;
    ${borderRadius}
    ${fontSize}
    color: #ffffff;
    
    padding: 16px;

    ${Icon} {
        margin-right: 4px;
    }

    &:hover,
    &:active {
        background-color: #463770;
    }
`;

function Button({ children, ...buttonProps }) {
    return (
        <StyledButton {...buttonProps}>
            <Icon src={nail} alt="nail" />
            {children}
        </StyledButton>
    )
}


export default Button;