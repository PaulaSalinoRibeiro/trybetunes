import styled from 'styled-components';
import {AiFillHeart} from 'react-icons/ai'

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
    justify-content: space-between;
    margin-bottom: 12px;
    width: 40%;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  h3 {
    color: ${({theme}) => theme.colors.white };
    text-align: center;
  }
`;

export const IconFillHeart = styled(AiFillHeart)`
  font-size: 24px;
  color: ${({theme}) => theme.colors.darkGreen};
`;