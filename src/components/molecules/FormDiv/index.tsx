import { styled } from "styled-components";

const FormDiv = styled.div`  
  background-color: #FFFFFF;
  display: flex;
  
  justify-content: center;
  flex-direction: column;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  width: 90%;
  margin: 5% 5% 5% 5%;

  button:active {
    transform: scale(0.80);
  }

  button:focus {
    outline: none;
  }
  `;

export default FormDiv;
