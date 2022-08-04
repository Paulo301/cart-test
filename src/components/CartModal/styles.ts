import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  header {
    display: flex;

    align-items: center;
    justify-content: center;

    padding: 1rem 0 1rem 0;

    h2 {
      font-size: 1.75rem;

      color: var(--text-title);
    }
  }

  footer {
    padding: 1.5rem;

    button {
      width: 100%;
      font-size: 1.5rem;
    }
  }
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Items = styled.ul`
  display: flex;
  flex-direction: column;

  overflow-y: scroll;
  max-height: 30rem;

  list-style: none;

  padding: 0 1.5rem 1.5rem;

  @media(max-width: 720px) {
    max-height: 25rem;
  }
  @media(max-width: 425px) {
    max-height: 20rem;
  }
`;

export const Total = styled.div`
  display: flex;

  justify-content: space-between;

  padding: 1.75rem 1.5rem;

  strong {
    font-size: 1.5rem;

    color: var(--text-body);
  }
`;