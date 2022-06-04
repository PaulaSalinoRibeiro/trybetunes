import styled from 'styled-components';

export const AlbumInfo = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2, p {
    color: ${({theme}) => theme.colors.white};
  }
`;