import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const SideNavLinkItemWrapper = styled.div`
  display: table;
  height: 40px;
  min-width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
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
  vertical-align: middle;
  display: table-cell;
  min-width: 100%;
  text-decoration: none;
`;

export const IconWrapper = styled.span`
  margin-right: 10px;
`;
