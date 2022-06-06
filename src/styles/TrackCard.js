import styled from 'styled-components';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: auto;
  margin-top: 18px;
  width: 50%;

  &:hover {
    border: 1px solid ${({theme}) => theme.colors.darkGreen};
    border-radius: 8px;
  }

  label {
    margin-right: 12px;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  
  h3 {
    color: ${({theme}) => theme.colors.white };
    text-align: center;
  }
`;

export const Icons = styled.div`
  margin-right: 8px;
`;

export const IconFillHeart = styled(AiFillHeart)`
  font-size: 24px;
  color: ${({theme}) => theme.colors.darkGreen};
`;

export const IconOutlineHeart = styled(AiOutlineHeart)`
  font-size: 24px;
  color: ${({theme}) => theme.colors.darkGreen};
`;