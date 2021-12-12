import styled from '@emotion/styled/macro';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 10px;
  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

export const Header = styled.header`
  background-color: var(--bs-primary);
  top: 0;
  left: 0;
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-bottom: 20px;
  box-shadow: var(--bs-shadow);
`;

export const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
`;
