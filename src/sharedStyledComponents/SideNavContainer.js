import styled from 'styled-components';

export default styled.div`
  background-color: ${props => props.theme.primaryColor};
  min-width: 300px;
  color: ${props => props.theme.lightFontColor};
`;
