import styled from 'styled-components';

export const Field = styled.label`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
`;

export const Input = styled.input`
  width: 200px;
  padding: 4px;
  font: inherit;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
