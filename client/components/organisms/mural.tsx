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
            <MuralImageContainer>
                <Image width={200} height={235} src="/images/mural.svg" />
            </MuralImageContainer>
            <MuralWire height={3} backgroundColor={COLOR.WHITE} />
        </M>
    )
}

const M = styled.div<{ isMobile: boolean }>`
    width: 100%;
    height: 320px;
    background: ${COLOR.BLACK};
    position: relative;
`;

const MuralImageContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 235px;
`;

const MuralWire = styled(Hr)`
    position: absolute;
    bottom: 20px;
    left: 195px;
`;

export default Mural;