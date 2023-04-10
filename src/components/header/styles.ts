import styled from 'styled-components';

export const Container = styled.div`
height: 48px;
padding: 12px 32px 12px 90px;  
border-bottom: 1px solid #DDDDDF;
display: flex;
justify-content: space-between;
position: relative;
img {
    transform: scale(0.6);
    &:hover {        
        opacity: 0.6;  
        cursor: pointer;     
    }
}
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
        transform: scale(0.5);        
    }
}
`;