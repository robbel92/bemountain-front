import styled from "styled-components";

const FilterStyled = styled.select`
  padding: 0.625rem 0.625rem;
  width: 350px;
  backdrop-filter: blur(50px);
  background: transparent;
  color: #ffffff;
  box-shadow: none;
  text-align: center;
  font-weight: 600;
  letter-spacing: 2px;
  border-radius: 5px;
  border-right: 20px solid transparent;
  font-size: 18px;
  box-shadow: 0px 0px 5px 0px #ffffff5c;
  animation: bounce-top 0.8s both;

  ::placeholder {
    font-style: light;
    font-weight: 100;
    font-size: 14px;

    color: #ffffff;
  }

  option {
    background-color: #ffffff;
    color: black;
  }

  @-webkit-keyframes bounce-top {
    0% {
      -webkit-transform: translateY(-45px);
      transform: translateY(-45px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      opacity: 1;
    }
    24% {
      opacity: 1;
    }
    40% {
      -webkit-transform: translateY(-24px);
      transform: translateY(-24px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    65% {
      -webkit-transform: translateY(-12px);
      transform: translateY(-12px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    82% {
      -webkit-transform: translateY(-6px);
      transform: translateY(-6px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    93% {
      -webkit-transform: translateY(-4px);
      transform: translateY(-4px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    25%,
    55%,
    75%,
    87% {
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    100% {
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
      opacity: 1;
    }
  }
  @keyframes bounce-top {
    0% {
      -webkit-transform: translateY(-45px);
      transform: translateY(-45px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      opacity: 1;
    }
    24% {
      opacity: 1;
    }
    40% {
      -webkit-transform: translateY(-24px);
      transform: translateY(-24px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    65% {
      -webkit-transform: translateY(-12px);
      transform: translateY(-12px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    82% {
      -webkit-transform: translateY(-6px);
      transform: translateY(-6px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    93% {
      -webkit-transform: translateY(-4px);
      transform: translateY(-4px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    25%,
    55%,
    75%,
    87% {
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    100% {
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
      opacity: 1;
    }
  }
`;
export default FilterStyled;
