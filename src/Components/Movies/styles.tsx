import styled from 'styled-components';
import { shade } from 'polished';


export const Container = styled.div`
  display: table;
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

    button {
      background: #3ee489;
      border-radius: 8%;
      border: 0;
      padding: 8px 25px;
      color: #312e38;
      transition: background-color 0.2s;
      &:hover {
        background: ${shade(0.2, '#3ee489')}
      }
    }
  }

`;
