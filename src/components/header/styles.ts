import styled from 'styled-components';

export const Container = styled.div`
margin: 0 auto;
max-width: 1440px;
height: 48px;
padding: 12px 32px 12px 12px;  
display: flex;
justify-content: space-between;
`;

export const AccountWrapper = styled.div`
display: flex;
justify-content: space-between;
img {
    margin-right: 30px;
    cursor: pointer;
    &:first-child{
        margin-right: 30px;
        padding-right: 30px;
        position: relative;
        border-right: 1px solid #DDDDDF;
    }
    &:hover {        
        opacity: 0.6;        
    }
    &:active {        
        transform: scale(0.9);        
    }
}
`;