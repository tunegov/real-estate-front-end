import styled from 'styled-components';

export const SideNavHeaderWrapper = styled.div`
  display: table;
  min-width: 100%;
  height: 100px;
  background-color: rgba(35,35,35,.58);
  border: none;
  border-bottom: 1px solid #979797;
  text-align: center;
`;

export const SideNavHeaderTitle = styled.div`
  vertical-align: middle;
  display: table-cell;
  min-width: 100%;
  font-family: ${props => props.theme.serifFont};
  font-size: 28px;
  text-align: center;
`;

export const SideNavHeaderSubtitle = styled.div`
  min-width: 100%;
  font-family: ${props => props.theme.serifFont};
  font-size: 12px;
  text-align: center;
  color: ${props => props.theme.accentColor}
`;

export const AccentSpan = styled.span`
  color: ${props => props.theme.accentColor}
`;
