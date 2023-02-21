import styled, {css, keyframes} from "styled-components";
import kakaoButton from "./kakao.svg";
import spinnerImg from './spinner.png';
import ButtonSpinner from "./Spinner";


const round = css`
    border-radius: ${({round}) => round ? `9999px` : `8px`};
`

const Rotate = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

const Spinner = styled.div`
width: 16px;
height: 16px;
background-image: url('${spinnerImg}');
background-size: contain;
background-repeat: no-repeat;
background-position: center;
`;

const Icon = styled.img`
    height: 24px;
    width: 24px;
    margin-right: 8px;
`;

const LoginButton = styled.SimpleLoginButton`
    width: 100%;
    ${round};
    background-color: #6500c3;
    border: none;
    cursor: pointer;
    font-size: 18px;
    padding: 16px;
    color: #ffffff;

    &:hover {
        background-color: #7760b4;
    }

`;

export function SimpleLoginButton({loading, children, ...buttonProps}) {
    return (
        <LoginButton {...buttonProps}>{loading? <ButtonSpinner /> :  {children} }</LoginButton>
    )
}


 const StyledKakaoLoginButton = styled.button`
    width: 100%;
    ${round};
    background-color: #fee500;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
    font-size: 18px;
    padding: 16px;
    color: rgba(0, 0, 0, 0.8);
    margin-top: 8px;
    
    &:hover {
        background-color: #fee500;
    }
`;

export function KakaoLoginButton({loading, children, ...buttonProps}) {
    return (
        <StyledKakaoLoginButton {...buttonProps}>
            {loading? <ButtonSpinner /> : <Icon src={kakaoButton} alt="kakao" />} {children} 
        </StyledKakaoLoginButton>
    )
}

