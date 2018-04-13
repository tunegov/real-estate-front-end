import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const SideNavLinkItemWrapper = styled.div`
  display: table;
  height: 45px;
  min-width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.87);
  cursor: pointer;
  background-color: ${props => props.active ? 'rgba(0, 0, 0, 0.12) !important' : 'initial'};
  &:hover {
    background-color: ${darken(0.05, '#fff')};
  }
}
`;

export const SideNavLinkItemAnchor = styled.a`
  display: relative;
  padding-left: 50px;
  vertical-align: middle;
  display: table-cell;
  min-width: 100%;
  text-decoration: none;
`;

export const SideNavLinkItemDiv = styled.div`
  display: relative;
  padding-left: 50px;
  vertical-align: middle;
  display: table-cell;
  min-width: 100%;
  text-decoration: none;
`;

export const IconWrapper = styled.span`
  margin-right: 35px;
  position: absolute;
  left: 15px;
`;
