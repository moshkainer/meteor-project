import { styled } from '@mui/material/styles';
import { TextType } from '~/types';

export const FilterMessageWrapper = styled('div')`
  display: flex;
  padding: 12px 0;
  button {
    border: 1px solid #fff;
    padding: 3px;
    width: 80px;
    height: 24px;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    background: navy;
    cursor: pointer;
  }
`;

export const FilterText = styled('div')`
  font-size: 16px;
  color: #fff;
  margin-right: 8px;
`;

function Message({ text }: TextType) {
  return (
    <FilterMessageWrapper>
      <FilterText>{text}</FilterText>
    </FilterMessageWrapper>
  );
}
export default Message;
