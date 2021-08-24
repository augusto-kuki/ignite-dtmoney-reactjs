import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -10rem;

  div {
    background-color: var(--shape);
    padding: 1.5rem 2rem;

    border-radius: 0.25rem;

    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block; // strong por padrao nao possui margin-top (display block permite transformalo em uma especie de div)
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.total {
      background-color: var(--green);
      color: #fff;
    }
  }
`;
