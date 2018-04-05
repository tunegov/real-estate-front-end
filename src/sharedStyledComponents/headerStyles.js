import styled from 'styled-components';
import theme from '../themeStyles';

const normalHeaderSpecificStyles = `
  width: 100%;
  justify-content: flex-end;
  font-size: 14px;
  background-color: ${theme.primaryColor};
`;

const appHeaderSpecificStyles = `
  width: calc(100% - 300px);
  background-color: ${theme.accentColor};
  color: ${theme.lightFontColor}
  justify-content: center;
`;

export const HeaderWrapper = styled.header`
  box-sizing: border-box;
  position: fixed;
  display: flex;
  top: 0;
  height: 60px;
  padding: 15px 50px;
  font-weight: 800;
  font-family: Helvetica Neue;
  letter-spacing: 1px;
  z-index: 999;
  box-shadow: 0px 2px 14px -1px rgba(0, 0, 0, 0.12);
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
  font-size: 24px;
  font-family: ${props => props.theme.sansSerifFont};
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
