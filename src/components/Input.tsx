import { styled } from '@mui/material/styles';
import { InputType } from '~/types';

const InputWrapper = styled('div')`
  input {
    background: #282c34;
    color: #fff;
    font-size: 14px;
    border: 1px solid #fff;
    padding: 3px 0px 3px 8px;
    width: 86px;
  }
`;

function Input({ name, value, onChange }: InputType) {
  return (
    <InputWrapper>
      <input
        autoComplete="off"
        name={name}
        value={value || ''}
        type="number"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onChange(e.target.value);
        }}
      />
    </InputWrapper>
  );
}

export default Input;
