import styled from "styled-components";

export const Container = styled.li`
  display: flex;

  margin-top: 1.5rem;

  img {
    width: 7.5rem;
    height: 7.5rem;

    flex-shrink: 0;

    object-fit: cover;

    border: 0.063rem solid var(--divider);
  }

  section {
    margin-top: 1rem;
    margin-left: 1.5rem;

    flex: 1;
    
    h3 {
      color: var(--text-title);
      font-size: 1rem;
    }

    & > span {
      color: var(--grey);
      font-size: 0.9rem;
    }

    p {
      color: var(--text-body);
      font-size: 1rem;
    }
  }
`;