/*
    Media queries
 */
const deviceSizes = {
    mobile: '360px',
    tablet: '768px',
    laptop: '1200px',
    desktop: '1440px',
    large: '1921px'
}

export const media = {
    mobile: `(min-width: ${deviceSizes.mobile})`,
    tablet: `(min-width: ${deviceSizes.tablet})`,
    laptop: `(min-width: ${deviceSizes.laptop})`,
    desktop: `(min-width: ${deviceSizes.desktop})`,
    large: `(min-width: ${deviceSizes.large})`
}

/*
    Colors
 */
export const colors = {
    black: '#000000',
    white: '#ffffff',
}
