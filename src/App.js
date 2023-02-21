import Button from "./styled/Button";
import { StyledInput, SearchInput2, SpinnerInput } from "./styled/Input";
import StyledContainer from "./styled/Container";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import searchImg from "./styled/search.png";
import LoginContainer from "./styled/LoginContainer";
import codeitImg from "./styled/codeit.png";
import Link from "./styled/Link";
import LoginInput from "./styled/LoginInput";
import {LoginButton, KakaoLoginButton, SimpleLoginButton} from "./styled/LoginButton";
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
};

body {
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
    font-family: sans-serif;
  }
`;

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
`;

const Label = styled.label`
    color: #e1c6f7;
`;


function App() {
    
    const [theme, setTheme] = useState(THEMES['light']);

    const handleColorChange = (e) => {
        const nextThemeName = e.target.value;
        setTheme(THEMES[nextThemeName]);
};


  return (
    <>        

<ThemeProvider theme={theme}>
    <GlobalStyle />
        <select onChange={handleColorChange} >
            <option value="light">라이트모드</option>
            <option value="dark">다크모드</option>
        </select>

        <LoginContainer>
            <MarkImg src={codeitImg} alt="codeit"/>
            <Discription>회원이 아니신가요?<Link>회원가입 하기</Link></Discription>
            <Label for="email">이메일</Label>
            <LoginInput error type="email" id="email" placeholder="styled@codeit.kr" />
            <Label for="password">비밀번호</Label>
            <LoginInput type="password" id="password" placeholder="비밀번호" />
            <SimpleLoginButton loading>로그인 하기</SimpleLoginButton>
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
    </ThemeProvider>
    </>
  );
}

export default App;
