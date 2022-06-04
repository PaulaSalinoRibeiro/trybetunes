import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  height: 100%;
  width: 70%;

  div {
    align-items: center;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    margin: 12px;
    text-align: center;
    width: 200px;

    transition filter 0.2s;
    cursor: pointer;

    &:hover {
      background-color: ${({theme}) => theme.colors.darkGreen};
      filter: brightness(80%);
      transform: scale(1.1);
    }
    
    a {
      color: ${({theme}) => theme.colors.white};
      font-weight: 700;
      font-size: 18px;
      text-decoration: none;
      width: 100%;
    }

    img {
      border-radius: 8px;
    }

  }
`;