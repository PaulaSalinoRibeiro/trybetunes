import styled from 'styled-components';

export const NavBar = styled.header`
  background-color: ${({theme}) => theme.colors.dark};
  color: ${({theme}) => theme.colors.white};
  border-bottom: 1px solid ${({theme}) => theme.colors.darkGreen};
  display: flex;
  justify-content: space-between;
  padding: 32px 18px;

  nav {
    display: flex;
    justify-content: space-around;
    width: 60%;

    a {
      color: ${({theme}) => theme.colors.white};
      font-size: 24px;
      text-decoration: none;
    }
  }
`;