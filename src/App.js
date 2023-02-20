import Button from "./styled/Button";
import { StyledInput, SearchInput2, SpinnerInput } from "./styled/Input";
import StyledContainer from "./styled/Container";
import styled, { createGlobalStyle } from "styled-components";
import searchImg from "./styled/search.png";
import LoginContainer from "./styled/LoginContainer";
import codeitImg from "./styled/codeit.png";
import Link from "./styled/Link";
import LoginInput from "./styled/LoginInput";
import {LoginButton, KakaoLoginButton} from "./styled/LoginButton";
import { useState } from "react";

const THEMES = {
    light: {
      backgroundColor: '#ffffff',
      color: '#000000',
    },
    dark: {
      backgroundColor: '#121212',
      color: '#ffffff',
    },
  };


const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
}

body {
    background-color: #ffffff;
      color: #ffffff;
    font-family: sans-serif;
  }

`

// css heritage
const SearchInput1 = styled(StyledInput)`
    background-image: url(${searchImg});
    background-position: 12px 50%;
    background-repeat: no-repeat;
    background-size: 16px;
    padding-left: 40px;
`;

const MarkImg = styled.img`
    display: block;
    width: 200px;
    margin: 16px auto;
`;

const Discription = styled.div`
    color: #848187;
    text-align: center;
`

const Label = styled.label`
    color: #e1c6f7;
`


function App() {
    
    const [theme, setTheme] = useState({
        primaryColor: '#1da1f2',
    });

    const handleColorChange = (e) => {
        setTheme((prevTheme) => ({
            ...prevTheme,
            primaryColor: e.target.value,
        })
    )
}


  return (
    <>        
<GlobalStyle />
        <LoginContainer>
            <MarkImg src={codeitImg} alt="codeit"/>
            <Discription>회원이 아니신가요?<Link>회원가입 하기</Link></Discription>
            <Label for="email">이메일</Label>
            <LoginInput error type="email" id="email" placeholder="styled@codeit.kr" />
            <Label for="password">비밀번호</Label>
            <LoginInput type="password" id="password" placeholder="비밀번호" />
            <LoginButton>로그인 하기</LoginButton>
            <KakaoLoginButton>카카오 로그인</KakaoLoginButton>
        </LoginContainer>

    <StyledContainer>
        <h1>로그인</h1>
        <label for="email">이메일</label>
        <StyledInput type="email" id="email" placeholder="styled@codeit.kr" />
        <label for="password">비밀번호</label>
        <StyledInput type="password" id="password" placeholder="비밀번호" />
        <Button>Hello styled!</Button>
    </StyledContainer>

    <StyledContainer>
      <h1>기본 버튼</h1>
      <Button size="small">small</Button>
      <Button size="medium">medium</Button>
      <Button size="null">null</Button>
      <Button size="large">large</Button>
      
      <h1>둥근 버튼</h1>
      <Button size="small" round>
        round small
      </Button>
      <Button size="medium" round>
        round medium
      </Button>
      <Button size="large" round>
        round large
      </Button>
    </StyledContainer>

    <StyledContainer>
      <h1>Size</h1>
      <StyledInput size="small" placeholder="small" />
      <StyledInput size="medium" placeholder="medium" />
      <StyledInput size="null" placeholder="null" />
      <StyledInput size="large" placeholder="large" />
      
      <h1>Round</h1>
      <StyledInput size="small" round placeholder="round small" />
      <StyledInput size="medium" round placeholder="round medium" />
      <StyledInput size="large" round placeholder="round large" />

      <h1>Error</h1>
      <StyledInput error placeholder="Error" />

      <h1>Search</h1>
      <SearchInput1 />
      <SearchInput2 />

      <SpinnerInput loading/>
    </StyledContainer>

    </>
  );
}

export default App;
