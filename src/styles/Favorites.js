import styled from 'styled-components';

export const Container = styled.div`
  
  h1 {
    color: ${({theme}) => theme.colors.white};
    text-align: center;
  }
`;

export const Cards = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto;
  width: 100%;

  div {
    align-items: center;
    display: flex;
    margin-bottom: 12px;
    width: 50%;

  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  width: 40%;

  h3 {
    color: ${({theme}) => theme.colors.white }
  }
`;