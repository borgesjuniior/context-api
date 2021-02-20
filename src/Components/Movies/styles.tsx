import styled from 'styled-components';

export const Container = styled.div`
  display: table;
  font-family: sans-serif;
  height: 20rem;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 50%;
  border-radius: 2%;

  background: white;

  li {
    list-style: none;
    padding: 2%;
    vertical-align:bottom;
  }

  form {
    display: flex;
    justify-content: center;
    margin-top: 1%;
  }

`;
