import React from 'react'; import avatar from '../../assets/avatar.svg';
import burger from '../../assets/burger.svg';
import monitor from '../../assets/monitor.svg';
import menuSearch from '../../assets/menuSearch.svg';
import { MenuButton, Container } from './styles';
import { Burger } from 'components/iconsButtons/navigation/burger';
import { ThreeD } from 'components/iconsButtons/navigation/threeD';
import { Monitor } from 'components/iconsButtons/navigation/monitor';
import { MenuSearch } from 'components/iconsButtons/navigation/menuSearch';

function MenuBar() {
    return (
        <Container>
            <MenuButton>
                <Burger />
            </MenuButton>
            <MenuButton>
                <Monitor />
            </MenuButton>
            <MenuButton>
                <MenuSearch />
            </MenuButton>
            <MenuButton>
                <ThreeD />
            </MenuButton>
        </Container>);
}

export default MenuBar;