import styled from 'styled-components';

export const Form = styled.form.attrs({ autocomplete: 'off' })`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  padding: 8px;
`;

export const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 400px;
  font-size: 18px;
  border-radius: 4px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Input = styled.input`
  padding: 4px;
  font: inherit;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  &:focus,
  &:hover {
    border: 2px solid #024e02;
    outline: none;
  }
`;

export const Button = styled.button`
  margin-right: 10px;
  margin-left: 10px;
  padding: 4px 8px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  &:focus,
  &:hover {
    color: white;
    background-color: #024e02;
  }
`;

export const ErrorText = styled.p`
  color: red;
  text-align: center;
  font-size: 16px;
  text-shadow: 2px 2px 8px #024e02;
`;
