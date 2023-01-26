import styled from 'styled-components';

export const User = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  padding: 8px 16px;
  color: #024e02;
  font-weight: 600;
  font-size: 20px;
  text-transform: uppercase;
`;

export const UserText = styled.p`
  text-decoration: underline;
  padding: 8px 16px;
  margin: 0;
  font-weight: 600;
  font-size: 20px;
`;

export const UserButton = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  color: #024e02;
  font-weight: 600;
  font-size: 20px;
  text-transform: uppercase;
  background-color: #c2f8c9;
  &:focus,
  &:hover {
    color: white;
    background-color: #024e02;
  }
`;