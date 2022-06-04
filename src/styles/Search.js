import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({theme}) => theme.colors.dark};
  height: 100%;
  width: 100%;

  div {
    display: flex;
    justify-content: center;
    padding: 32px;

    input {
    color: ${({theme}) => theme.colors.white};
    background-color: ${({theme}) => theme.colors.grey};
    font-size: 18px;
    border: none;
    border-radius: 5px;
    margin-right: 8px;
    }

    button {
    background-color: ${({theme}) => theme.colors.darkGreen};
    border: none;
    border-radius: 5px;
    color: ${({theme}) => theme.colors.grey};
    font-size: 18px;
    padding: 0 18px;

    &:hover {
      background-color: ${({theme}) => theme.colors.lightGreen};
    }
  }
`;