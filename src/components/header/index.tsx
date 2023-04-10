import React from 'react';
import avatar from '../../assets/avatar.svg';
import notification from '../../assets/notification.svg';
import search from '../../assets/search.svg';
import logo from '../../assets/logo.svg';

import { AccountWrapper, Container } from './styles';

function Header() {
    return (
        <Container>
            <img src={logo} alt="logo" />
            <AccountWrapper>
                <img src={search} alt="search" />
                    <img src={notification} alt="notifications" />
                    <img src={avatar} alt="avatar" />
            </AccountWrapper>
        </Container>);
}

export default Header;