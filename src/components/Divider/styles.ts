import styled from "styled-components";

interface ContainerProps {
  vertical?: boolean;
}

export const Container = styled.hr<ContainerProps>`
  height: ${(props) => props.vertical ? '100%' : '0.063rem' };
  width: ${(props) => props.vertical ? '0.063rem' : '100%' };

  margin: 0;
  border-width: 0 0 thin;
  border-style: solid;
  border-color: var(--divider);
`;