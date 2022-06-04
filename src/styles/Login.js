import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color: ${({theme}) => theme.colors.dark};
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding-top: 12%;
`;

export const Title = styled.h1`
  color: ${({theme}) => theme.colors.white};
  font-size: 42px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 25%;
  
  label {
    color: ${({theme}) => theme.colors.white};
    display: flex;
    font-size: 18px;
    justify-content: space-between;
    margin-top: 16px;
    width: 100%;
  }

  input {
    color: ${({theme}) => theme.colors.white};
    background-color: ${({theme}) => theme.colors.grey};
    width: 70%;
    font-size: 18px;
    border: none;
    border-radius: 5px;
  }

  button {
    background-color: ${({theme}) => theme.colors.darkGreen};
    border: none;
    border-radius: 5px;
    color: ${({theme}) => theme.colors.grey};
    font-size: 18px;
    margin: auto;
    margin-top: 32px;
    width: 50%;

    &:hover {
      background-color: ${({theme}) => theme.colors.lightGreen};
    }
  }
`;