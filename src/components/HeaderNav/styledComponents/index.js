import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  box-sizing: border-box;
  position: fixed;
  display: flex;
  top: 0;
  height: 57px;
  padding: 15px 50px;
  width: 100%;
  justify-content: flex-end;
  font-size: 14px;
  font-weight: 800;
  font-family: Helvetica Neue;
  letter-spacing: 1px;
  background-color: ${props => props.theme.secondaryColor};
  z-index: 999;
  box-shadow: 0px 2px 14px -1px rgba(0, 0, 0, 0.12);
`;

export const HeaderLink = styled.a`
  color: #c8c9ca;
  text-decoration: none;
  transition: color 0.1s ease-in-out;
  cursor: pointer;
  padding: 5px 5px;
  &:hover {
    color: #fff;
  }
  &:not(:first-of-type) {
    margin-left: 20px;
  }
`;

export const HeaderLinkWrapper = styled.div`
  display: flex;
`;

export const Logo = styled.div`
  margin-right: auto;
  padding-top: 5px;
`;
