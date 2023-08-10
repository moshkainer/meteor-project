import { styled } from '@mui/material/styles';
import { AutocompleteType } from '~/types';

const FilterListUl = styled('div')`
  position: absolute;
  top: 24px;
  right: -16px;
  padding: 4px 8px;
  border: 1px solid #fff;
  max-height: 320px;
  overflow: auto;
  width: 80px;
  z-index: 2;
`;

const ListBG = styled('div')`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: transparent;
  z-index: 1;
`;

const FilterListLi = styled('div')`
  color: #fff;
  font-size: 14px;
  margin: 4px 0;
  cursor: pointer;
  &:hover {
    color: #ddd;
  }
`;

function Autocomplete({ filterOptions = [], onChange }: AutocompleteType) {
  return (
    <>
      <FilterListUl>
        {filterOptions.map((l: string, i: number) => (
          <FilterListLi
            key={`${l}${i + 1}`}
            onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
              onChange((e.target as unknown as any).innerHTML)
            }
          >
            {l}
          </FilterListLi>
        ))}
      </FilterListUl>
      <ListBG onClick={() => onChange('')} />
    </>
  );
}

export default Autocomplete;
