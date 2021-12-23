import React from 'react';
import styled from 'styled-components';
import { COLOR } from '../../theme/constants';
import Image from 'next/image';
import Hr from '../atoms/hr';

interface IMural {
    isMobile?: boolean;
}

const Mural = (props: IMural) => {
    const { isMobile = false } = props;

    return (
        <M isMobile={isMobile}>
            <MuralDeskContainer>
                <Image width={200} height={235} src="/images/mural.svg" />
            </MuralDeskContainer>
            <MuralWire height={3} backgroundColor={COLOR.WHITE} />
            <MuralCatContainerWhite>
                <Image width={200} height={60} src="/images/cat-dark.svg" />
            </MuralCatContainerWhite>
        </M>
    )
}

const M = styled.div<{ isMobile: boolean }>`
    width: 100%;
    height: 320px;
    background: ${COLOR.BLACK};
    position: relative;
`;

const MuralDeskContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 235px;
    user-select: none;
`;

const MuralWire = styled(Hr)`
    position: absolute;
    bottom: 20px;
    left: 195px;
    width: calc(100% - 425px);
    z-index: 1;
`;

const MuralCatContainerWhite = styled.div`
    position: absolute;
    bottom: -30px;
    right: 20px;
    user-select: none;
    z-index: 3;
    transform: rotate(30deg);
`;

export default Mural;