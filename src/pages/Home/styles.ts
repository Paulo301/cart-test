import styled from "styled-components";

export const Container = styled.main`
  display: flex;

  align-items: center;
  justify-content: center;

  flex: 1;

  background: var(--background);

  section {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    background: var(--green);
    margin: auto;
    width: 18.75rem;
    height: 18.75rem;

    border-radius: 0.75rem;
    border: 1px solid var(--grey);

    div {
      display: flex;

      align-items: center;

      label {
        margin-left: 0.5rem;
      }
    }

    button {
      margin-top: 1rem;
    }
  }
`;