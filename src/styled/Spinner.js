import styled, { keyframes } from "styled-components";
import spinnerImg from './spinner.png';

    function BaseSpinner({ className }) {
        return <img className={className} src={spinnerImg} alt="spinner" />;
    }

const rotate = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

const ButtonSpinner  = styled(BaseSpinner)`
    animation: ${rotate} 0.5s linear infinite;
    width: 16px;
`;

export default ButtonSpinner;