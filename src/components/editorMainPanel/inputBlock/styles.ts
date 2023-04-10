import styled from 'styled-components';
import { styled as MuiStyled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

type props = { color: string; };

export const Heading = styled.span`
font-size: 12px;
font-weight: 400;
line-height: 16px;
text-align: left;
margin-top: 3px;
`;

export const ColorPicker = styled.div<props>`
width: 22px;
height: 22px;
border: 1px solid #DDDDDF;
border-radius: 4px;
background-color: ${props => props.color}; ;
`;

export const CustomTextField = MuiStyled(TextField)({
  borderBottomColor: '#E9E9EB',
  '& .MuiInputBase-input': {
    position: 'relative',
    width: '69px',
    fontSize: 12,
    paddingBottom: 0,
  },
  '& label.Mui-focused': {
    borderBottomColor: '#E9E9EB',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'black',
    borderWidth: '1px',
  }
});

export const Button = styled.button`
width: 90px;
height: 26px;
background: #FFFFFF;
border: 1px solid rgba(23, 23, 23, 0.2);
border-radius: 8px;
cursor: pointer;
&:hover {
  box-shadow: 4px 3px 14px -4px rgba(34, 60, 80, 0.55);
}
  &:active {
  box-shadow: none;
}
`;
