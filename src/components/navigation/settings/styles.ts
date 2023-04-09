import styled from 'styled-components';

type PropType = {
    marked?: boolean;
};

export const Wrapper = styled.div<PropType>`
margin-top: 2px;
width: 50px;
display: flex;
justify-content: space-between;
padding: 2px;
position: relative;    
    &::after {
        content: '';
        display: ${props => props.marked ? 'block' : 'none'}; ;
        position: absolute;
        top: 7.5px;
        right: -15px;
        width: 4px;
        height: 4px;
        background-color: #FB8C00;
        border-radius: 1px;
    }
    svg, img {
        margin-bottom: 0.5px;
        &:first-child {
            transform: scale(0.9);
            margin-right: 3px;            
            &:hover {
            transform: scale(1);
            &:active {
            transform: scale(0.9);
            }
        }
    } 
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
        }
    &:active {
        transform: scale(0.9);
        }
    } 
`;

export const ButtonWrapper = styled.button`
width: 0;
border: none; 
padding: 0 
`;