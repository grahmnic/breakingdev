export const COLOR = {
    WHITE: '#FFFFFF',
    BLACK: '#111111'
}


export const FONT = {
    FAMILY: "'Linotype Univers W01', 'Arial Narrow', Arial, Helvetica, sans-serif",
    FAMILYROBO: 'Roboto, sans-serif',
    LINEHEIGHT: '1.4',
    MOZFONTSMOOTHING: 'grayscale',
    SIZE: {
       DEFAULT: '16px'
    },
    STYLE: {
       BLACK: 'black',
       BOLD: 'bold',
       DEFAULT: 'normal',
       ITALIC: 'italic'
    },
    TEXTRENDERING: 'optimizeLegibility',
    WEBKITFONTSMOOTHING: 'antialiased',
    WEIGHT: {
       BLACK: 900,
       BOLD: 700,
       DEFAULT: 400,
       LIGHT: 400
    }
 };

export const TYPOGRAPHY = {
    LIGHT: `
    font-family: ${FONT.FAMILYROBO};
    font-weight: ${FONT.WEIGHT.DEFAULT};
    font-style: ${FONT.STYLE.DEFAULT};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  `,
   BOLD: `
    font-family: ${FONT.FAMILYROBO};
    font-weight: ${FONT.WEIGHT.BOLD};
    font-style: ${FONT.STYLE.DEFAULT};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  `,
   BLACK: `
   font-family: ${FONT.FAMILYROBO};
    font-weight: ${FONT.WEIGHT.BLACK};
    font-style: ${FONT.STYLE.DEFAULT};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  `
}

export const BREAKPOINTS = {
    EXTRA_SMALL: 480,
    SMALL: 768,
    MEDIUM: 992,
    LARGE: 1200,
}
