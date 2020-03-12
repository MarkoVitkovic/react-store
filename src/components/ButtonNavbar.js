import styled from 'styled-components';

export const Button = styled.button`
  text-transform: capitalize;
  font-size: 1.3rem;
  background: transparent;
  border: hidden;
  color: var(--mainDark);
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &: hover {
    color: var(--mainWhite);
  }
  &: focus{
    outline: none;
  }
`;
