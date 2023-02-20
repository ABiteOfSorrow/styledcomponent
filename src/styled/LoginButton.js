import styled, {css} from "styled-components";
import kakaoButton from "./kakao.svg";

const round = css`
    border-radius: ${({round}) => round ? `9999px` : `8px`};
`

const Icon = styled.img`
    height: 24px;
    width: 24px;
    margin-right: 8px;
`

export const LoginButton = styled.button`
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

`

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
`

export function KakaoLoginButton({children, ...buttonProps}) {
    return (
        <StyledKakaoLoginButton {...buttonProps}>
            <Icon src={kakaoButton} alt="kakao" />
                {children}
        </StyledKakaoLoginButton>
    )
}

