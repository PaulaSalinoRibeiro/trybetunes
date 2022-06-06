import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  div {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 50%;

    img {
      width: 100px;
      height: 100%;
      border-radius: 50%;
      margin-top: 42px;
    }

    h2, h3, p {
      color: ${({theme}) => theme.colors.white };
    }

    button {
      background-color: ${({theme}) => theme.colors.darkGreen};
      border: none;
      border-radius: 5px;
      font-size: 18px;
      padding: 0 18px;
      margin-top: 32px;

      a {
        text-decoration: none;
        color: ${({theme}) => theme.colors.grey};
      }

      &:hover {
        background-color: ${({theme}) => theme.colors.lightGreen};
      }
    }
  }
`;