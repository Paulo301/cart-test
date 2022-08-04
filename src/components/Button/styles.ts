import styled from "styled-components";

interface ContainerProps {
  textColor?: string
}

export const Container = styled.button<ContainerProps>`
  padding: 0.75rem 1.25rem;
  border: 0;

  background: var(--blue);
  border-radius: 0.5rem;

  color: ${(props) => props.textColor || 'var(--white)'};
  font-weight: 600;
  font-size: 1rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;