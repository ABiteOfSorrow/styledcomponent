import styled from "styled-components";
import { StyledInput } from "./Input";


const StyledContainer = styled.div`
    margin: 0 auto;
    width: 400px;

    ${StyledInput} {
        box-sizing: border-box;
        display: block;
        margin: 10px 0 16px;
        width: 100%;
    }
`

export default StyledContainer;