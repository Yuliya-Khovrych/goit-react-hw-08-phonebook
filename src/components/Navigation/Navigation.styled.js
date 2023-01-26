import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  padding: 8px 16px;
  display: flex;
  gap: 30px;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  color: #024e02;
  &.active {
    color: white;
    background-color: #024e02; 
  &:focus,
  &:hover {
    color: white;
    background-color: #024e02;
  }
`;
