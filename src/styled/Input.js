import styled, { css, keyframes } from "styled-components";
import searchImg from "./search.png";
import spinnerImg from './spinner.png';

// variable
const SIZES = {
    large: 24,
    medium: 20,
    small: 16,
}


// css reuse
const fontSize = css`
    font-size: ${({ size }) => SIZES[size] ?? SIZES['medium']}px;
`;

const borderRadius = css`
    border-radius: ${({round}) => round? `9999px` : `3px`};
`


// animation
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

const Container = styled.div`
  width: fit-content;
  position: relative;

  ${Spinner} {
    position: absolute;
    top: calc(50% - 8px);
    right: 20px;
    animation: ${Rotate} 1.5s linear infinite;
  }
`;



// styles
export const StyledInput = styled.input`
    border: 2px solid ${({error}) => error ? '#f44336' : '#eeeeee'};
    ${borderRadius}
    ${fontSize}
    outline: none;
    padding: 16px;

    &:focus {
        border-color: ${({error}) => error ? '#f44336' : '#7760b4'};
    }
`;

// css heritage
export const SearchInput2 = styled(StyledInput)`
    background-image: url(${searchImg});
    background-position: 12px 50%;
    background-repeat: no-repeat;
    background-size: 16px;
    padding-left: 40px;
`;

export function SpinnerInput({ loading, ...inputProps }) {
    return (
      <Container>
        <StyledInput {...inputProps} />
        {loading && <Spinner />}
      </Container>
    );
  }