import styled from 'styled-components';

export const Container = styled.div`
position: absolute;
left: 0;
background-color: white;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 16px 4px 632px;
gap: 10px;
width: 64px;
border-right: 1px solid #DDDDDF;
max-height: 1080px;
`;

export const MenuButton = styled.div`
padding: 18px;
border-radius: 16px;
min-width: 26px;
cursor: pointer;
&:first-child{
    margin-bottom: 20px;
}
&:not(:first-child) {
svg {
    margin-left: 3px;
}}
&:hover {
    background: #E9E9EB;
    svg {
        rect {
            fill: #7AA7FF;
        }
        path {
            stroke: #7AA7FF;
            fill: #7AA7FF;
        }        
    }
}
`;