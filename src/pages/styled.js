import styled from 'styled-components';

export const Container = styled.div`
  background: rgb(26,27,28);
  height: 100vh;

  h1, p {
    color: rgb(225, 229, 235);
    display: flex;
    font-weight: 800;
    font-size: 32px;
    justify-content: center;
  };
`;

export const Form = styled.div`
  align-items: center;
  background: rgb(26,27,28);
  color: rgb(225, 229, 235);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10%;

  input {
    background: rgb(225, 229, 235);
    border-radius: 15px;
    display: flex;
    height:32px;
    margin-bottom: 18px;
    width: 300px;
  };

  input:focus {
    background: rgb(62, 66, 75);
    color: rgb(225, 229, 235);
    font-weight: 800; 
  };

  button {
    background: rgb(47, 193, 140);
    border-radius: 15px;
    color: rgb(62, 66, 75);
    font-weight: 800;
    height: 40px;
    width: 90px;
  };

  button:hover {
    background: rgb(3, 107, 82);
  };

  h3 {
    color: rgb(225, 229, 235);
    font-size: 32px;
    font-weight: 800;
  };
`;

export const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row-reverse nowrap;
  justify-content: space-between;
  padding: 0 40px;

  h1 {
    border: 1px solid rgb(225, 229, 235);
    border-radius: 15px;
    color: rgb(225, 229, 235);
    font-size: 32px;
    font-weight: 400;
    padding: 10px;
  };

  nav {
    display: flex;
    justify-content: space-between;
    width: 80%;
  };

  a {
    background: rgb(225,229,235);
    border: 1px solid rgb(225, 229, 235);
    border-radius: 15px;
    color: rgb(62, 66, 75);
    font-size: 32px;
    font-weight: 800;
    padding: 10px 100px;
    text-decoration: none;
  };

  a:hover {
    background: rgb(62, 66, 75);
    border: 1px solid rgb(62, 66, 75);
    color: rgb(225, 229, 235);
  };
`;

export const ColectionAlbum = styled.div`
  background: rgb(26,27,28);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100vw;

  section {
    align-items: center;
    background: rgb(225, 229, 235);
    border: 1px solid rgb(62, 66, 75);
    border-radius: 18px;
    display: flex;
    margin: 18px;
  };

  section:hover {
    background: rgb(62, 66, 75);
    border: 1px solid rgb(225, 229, 235);
    box-shadow: 1px 1px 12px 5px rgb(225, 229, 235);
  };

  section a {
    display: flex;
    justify-content: space-around;
    padding: 10px;
    text-decoration: none;
  };

  section a img {
    border-radius: 25px;
    width: 15%;

  };

  section h3 {
    align-content: center;
    color: rgb(3, 107, 82);
    font-size: 18px;
    text-align: center;
  };
`;

export const Main = styled.div`
  background: rgb(26,27,28);
  color: rgb(225, 229, 235);
  margin-top: 32px;

  div {
    align-items: center;
    display: flex;
    flex-direction: column;
  };

  div h3 {
    font-size: 32px;
  };

  div h4 {
    font-size: 18px;
  };

  div img {
    border-radius: 50%;
    margin-bottom: 18px;
  };

  div section {
    align-items: center;
    display: flex;
  };
`;

export const Tracks = styled.div`
  align-items: center;
  background: rgb(26,27,28);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 24px;

  span {
    align-items: center;
    color: rgb(225, 229, 235);
    display: flex;
    font-size: 24px;
    margin-bottom: 15px;
    margin-right: 24px;
  };

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 12px;
    width: 350px;
  };

  label {
    align-items: center;
    color: rgb(225, 229, 235);
    display: flex;
    margin-left: 18px;
  }

  input {
    appearance: none;
  };

  /* :checked+label {
    content: url('../assets/star.png');
  }; */

  section {
    margin: 8px;
  };

`;

export const UserInfo = styled.div`
  align-items: center;
  background: rgba(225, 229, 235, 0.9);
  border: 3px solid rgb(62, 66, 75);
  box-shadow: 1px 1px 2px 5px rgba(225, 229, 235, 0.9);
  border-radius: 35px;
  color: rgb(62, 66, 75);
  display: flex;
  flex-flow: row wrap;
  margin: auto;
  margin-top: 12px;
  width: 50%;

  h2 {
    display: flex;
    justify-content: center;
    margin-top: 32px;
    width: 100%;
  };

  p {
    color: rgb(62, 66, 75);
    display: flex;
    font-size: 24px;
    padding: 12px;
    margin: 7px;
    width: 100%;
  };

  img {
    border: 3px solid rgb(62, 66, 75);
    border-radius: 50%;
    margin: auto;
    height: 100px;
    width: 100px;
  }

  button {
    background: rgb(47, 193, 140);
    border-radius: 15px;
    font-weight: 800;
    padding : 18px;
    margin: auto;
    margin-bottom: 32px;
  };

  button:hover {
    background: rgb(3, 107, 82);
  };

  button a {
    text-decoration: none;
    color: rgb(62, 66, 75);
  };
`