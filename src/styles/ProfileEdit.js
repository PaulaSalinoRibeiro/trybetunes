import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  form {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-top: 10%;
    width: 30%;

    label {
      color: ${({theme}) => theme.colors.white };
      font-size: 18px;
      display: flex;
      justify-content: space-between;
      margin-top: 16px;
      width: 100%;
    }

    input, textarea {
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

  }
`;