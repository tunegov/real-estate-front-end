import styled from 'styled-components';
import { darken, lighten } from 'polished';
import theme from '../themeStyles';

const normalHeaderSpecificStyles = `
  height: 60px;
  width: 100%;
  justify-content: flex-end;
  font-size: 14px;
  background-color: ${theme.primaryColor};
  box-shadow: 0px 2px 14px -1px rgba(0, 0, 0, 0.12);
`;

const appHeaderSpecificStyles = `
  height: 40px;
  width: calc(100% - 280px);
  background-color: ${theme.primaryColor};
  color: ${theme.darkFontColor};
  justify-content: center;
  background-color: #fff;

  box-shadow: 0px 2px 8px -1px rgba(0, 0, 0, 0.06);
`;

export const HeaderWrapper = styled.header`
  box-sizing: border-box;
  position: fixed;
  display: flex;
  top: 0;
  padding: 15px 50px;
  font-weight: 800;
  font-family: Helvetica Neue;
  letter-spacing: 1px;
  z-index: 999;
  ${props => props.isApp ? appHeaderSpecificStyles : normalHeaderSpecificStyles}
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

export const AppHeaderTitle = styled.div`
  margin-top: -5px;
  font-size: 18px;
  font-family: ${props => props.theme.sansSerifFont};
  color: ${props => props.theme.primaryColor};
`;

export const AppHeaderMenuIconWrapper = styled.div`
  position: relative;
  align-self: center;
  margin-right: auto;
  cursor: pointer;
`;

export const AppHeaderBellIconWrapper = styled.div`
  align-self: center;
  margin-left: auto;
  cursor: pointer;
`;
