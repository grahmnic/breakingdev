import React from 'react';
import styled from 'styled-components';
import { COLOR } from '../../theme/constants';

interface IMural {
    isMobile?: boolean;
}

const Mural = (props: IMural) => {
    const { isMobile = false } = props;

    return (
        <M isMobile={isMobile}>

        </M>
    )
}

const M = styled.div<{ isMobile: boolean }>`
    width: 100%;
    height: 320px;
    background: ${COLOR.BLACK};
`;

export default Mural;