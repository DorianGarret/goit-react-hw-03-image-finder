import styled from '@emotion/styled/macro';
import { MdSearch } from 'react-icons/md';

export const Form = styled.form`
  display: flex;
  width: 100%;
  min-width: 275px;
  background-color: var(--bs-white);
  border-radius: 3px;
  overflow: hidden;
  margin: 0 auto;
  @media screen and (min-width: 1200px) {
    max-width: 300px;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;

  &:hover {
    opacity: 1;
  }
`;

export const ButtonLabel = styled(MdSearch)`
  font-size: 20px;
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
