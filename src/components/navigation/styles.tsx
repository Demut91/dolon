import styled from 'styled-components';
import { styled as MUIstyled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

export const Container = styled.div`
width: 240px;
min-height: 100px;
padding: 16px 5px;  
`;

export const Heading = styled.div`
position: relative;
background: #E9E9EB;
border-radius: 4px;
height: 32px;
margin-bottom: 10px;
span {
  font-weight: 700;
  font-size: 16px;
  position: absolute;
  bottom: 6px;
  left: 28px
}
svg {
  position: absolute;
  bottom: 4px;
  left: 5px
}
`;

export const MainAccordion = MUIstyled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

export const MainAccordionSummary = MUIstyled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.8rem', fontWeight: 700 }} />}
    {...props}
  />
))(() => ({
  padding: '0 4px',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    fontWeight: 700,
    fontSize: '16px',
    marginBottom: '17px',
  }
}));

export const MainAccordionDetails = MUIstyled(MuiAccordionDetails)(() => ({
  padding: 0,
  marginLeft: '4px',
}));

export const SmallAccordion = MUIstyled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  }
}));

export const SmallAccordionSummary = MUIstyled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.7rem', fontWeight: 400 }} />}
    {...props}
  />
))(() => ({
  padding: 0,
  margin: '0 4px',
  flexDirection: 'row-reverse',
  minHeight: '42px',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: 400,
    fontSize: '14px',
    margin: '0 8px',
  },
}));

export const SmallAccordionDetails = MUIstyled(MuiAccordionDetails)(() => ({
  padding: '0 0 0 16px',
}));