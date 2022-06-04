import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  align-items: center;

  h1 {
    color: ${({theme}) => theme.colors.white}
  }

`;