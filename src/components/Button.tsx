import { styled } from '@mui/material/styles';
import MuiButton from '@mui/material/Button';
import { ButtonType } from '~/types';

const StyledButton = styled('div')`
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

function Button({
  buttonText,
  buttonActionValue,
  buttonAction = (val: string) => val,
}: ButtonType) {
  return (
    <StyledButton>
      <MuiButton
        type="button"
        onClick={() => buttonAction(String(buttonActionValue))}
      >
        {buttonText}
      </MuiButton>
    </StyledButton>
  );
}
export default Button;
