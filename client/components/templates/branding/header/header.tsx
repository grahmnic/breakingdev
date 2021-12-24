import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { COLOR, TYPOGRAPHY } from '../../../../theme/constants';
import FlexContainer from '../../../atoms/flexContainer';
import List from '../../../atoms/list';
import Title from '../../../atoms/title';
import StyledLink from '../../../molecules/styledlink';

interface IHeader {
    isTransparent?: boolean;
}

const Header = (props: IHeader) => {
    const { isTransparent = false } = props;

    const router = useRouter();

    return (
        <H
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            isTransparent={isTransparent}
        >
            <StyledLink href="/">
                <HeaderTitle>BREAKING/DEV</HeaderTitle>
            </StyledLink>
            <Nav>
                <List
                    orientation="horizontal"
                    spaceBetween={20}
                >
                    <NavLink active={router.pathname == "/"} href="/">Home</NavLink>
                    <NavLink active={router.pathname == "/archive"} href="/">Archive</NavLink>
                    <NavLink active={router.pathname == "/faq"} href="/">FAQ</NavLink>
                    <NavLink active={router.pathname == "/archive"} href="/">Random</NavLink>
                </List>
            </Nav>
        </H>
    )
}

const H = styled(FlexContainer)<{ isTransparent: boolean }>`
    height: 75px;
    width: 100%;
    padding: 0 48px;
    position: ${p => p.isTransparent ? 'absolute' : 'relative'};
    z-index: 100;

    ${p => p.isTransparent ? `
        top: 0;
        left: 0;
        background: transparent;
    ` : `
        background: ${COLOR.BLACK};
    `}
`;

const HeaderTitle = styled(Title)`
    font-size: 22px;
    color: ${COLOR.WHITE};
`;

const Nav = styled.nav``;

const NavLink = styled(StyledLink)<{ active: boolean }>`
    color: ${COLOR.WHITE};
    ${TYPOGRAPHY.BOLD};
    font-size: 14px;
    display: block;
    padding: 10px 0;

    ${p => p.active ? `
        border-bottom: 4px solid ${COLOR.DARKGREY};
    ` : ''}
`;

export default Header;