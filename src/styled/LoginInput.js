import styled from "styled-components"




const LoginInput = styled.input`
    border: none;
    outline: none;
    display: block;
    padding: 8px 0;
    margin: 0 0 16px;
    border-bottom: ${({error}) => error ? `2px solid #f44336` : `2px solid #eeeeee`};
    font-size: 16px;
    width: 100%;
    ${({error}) => !error && 
    `&:focus {
        border-bottom: 2px solid #7760b4;
    }`
}
    &::placeholder {
        color: #c4c5cd;
    }
`


export default LoginInput;