import styled from 'styled-components';
import { darken } from 'polished';

export const SideNavLinkItemWrapper = styled.div`
  display: table;
  height: 60px;
  min-width: 100%;
  font-size: 22px;
  color: ${props => darken(0.1, props.theme.lightFontColor)};
  cursor: pointer;
  background-color: ${props => props.active ? darken(0.05, props.theme.primaryColor) : 'initial'};
  box-shadow: ${props => props.active ? 'inset 0px 0px 8px 0px rgba(0,0,0,0.75)' : 'none'};
  transition: color .2s ease-in-out;
  &:hover {
    color: ${props => props.theme.lightFontColor};
    background-color: ${props => darken(0.05, props.theme.primaryColor)};
    box-shadow: inset 0px 0px 8px 0px rgba(0,0,0,0.75);
  }
}
`;

export const SideNavLinkItemAnchor = styled.a`
vertical-align: middle;
display: table-cell;
min-width: 100 %;
text-decoration: none;
text-align: center;
`;

export const TextSpan = styled.span`
  display: relative;
`;

export const IconWrapper = styled.span`
  position: relative;
  top: -3px;
  left: -15px;
`;
