import styled from 'styled-components';

export default styled.div`
  padding-top: ${props => props.isApp ? '40px' : '60px'};
  min-width: 100%;
`;
